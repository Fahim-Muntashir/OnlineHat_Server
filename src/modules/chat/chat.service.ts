import { prisma } from "../../lib/prisma";

export const ChatService = {
  getOrCreateConversation: async (buyerId: string, sellerId: string) => {
    // Find if a conversation already exists
    let conversation = await prisma.conversation.findFirst({
      where: {
        buyerId,
        sellerId,
      },
      include: {
        buyer: { include: { user: { select: { name: true, profileImage: true } } } },
        seller: { include: { user: { select: { name: true, profileImage: true } } } },
      },
    });

    // If not, create one
    if (!conversation) {
      conversation = await prisma.conversation.create({
        data: {
          buyerId,
          sellerId,
        },
        include: {
          buyer: { include: { user: { select: { name: true, profileImage: true } } } },
          seller: { include: { user: { select: { name: true, profileImage: true } } } },
        },
      });
    }

    return conversation;
  },

  sendMessage: async (payload: {
    content: string;
    conversationId: string;
    senderBuyerId?: string;
    senderSellerId?: string;
  }) => {
    const { content, conversationId, senderBuyerId, senderSellerId } = payload;

    const [message] = await prisma.$transaction([
      prisma.message.create({
        data: {
          content,
          conversationId,
          senderBuyerId,
          senderSellerId,
        },
        include: {
          conversation: true,
        },
      }),
      prisma.conversation.update({
        where: { id: conversationId },
        data: { updatedAt: new Date() },
      }),
    ]);

    return message;
  },

  getUserConversations: async (userId: string, role: string) => {
    let profileId: string | null = null;
    const upperRole = role.toUpperCase();

    if (upperRole === "BUYER") {
      const buyer = await prisma.buyerProfile.findUnique({ where: { userId } });
      if (buyer) profileId = buyer.id;
    } else if (upperRole === "SELLER") {
      const seller = await prisma.sellerProfile.findUnique({ where: { userId } });
      if (seller) profileId = seller.id;
    }

    if (!profileId) return [];

    return prisma.conversation.findMany({
      where: upperRole === "BUYER" ? { buyerId: profileId } : { sellerId: profileId },
      include: {
        buyer: { include: { user: { select: { name: true, profileImage: true } } } },
        seller: { include: { user: { select: { name: true, profileImage: true } } } },
        messages: {
          take: 1,
          orderBy: { createdAt: "desc" },
        },
      },
      orderBy: { updatedAt: "desc" },
    });
  },

  getMessages: async (conversationId: string, userId: string, role: string) => {
    // Determine the profile ID of the person opening the messages
    let profileId: string | null = null;
    if (role === "BUYER") {
      const buyer = await prisma.buyerProfile.findUnique({ where: { userId } });
      profileId = buyer?.id || null;
    } else if (role === "SELLER") {
      const seller = await prisma.sellerProfile.findUnique({ where: { userId } });
      profileId = seller?.id || null;
    }

    // Mark messages as read if the recipient is viewing them
    if (profileId) {
      await prisma.message.updateMany({
        where: {
          conversationId,
          isRead: false,
          NOT: role === "BUYER" ? { senderBuyerId: profileId } : { senderSellerId: profileId },
        },
        data: { isRead: true },
      });
    }

    return prisma.message.findMany({
      where: { conversationId },
      orderBy: { createdAt: "asc" },
    });
  },
};
