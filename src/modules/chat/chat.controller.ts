import { Response } from "express";
import { AuthRequest } from "../../middlewares/auth.middleware";
import { catchAsync } from "../../utils/catchAsync";
import { ChatService } from "./chat.service";
import { prisma } from "../../lib/prisma";
import { AppError } from "../../errors/AppError";

export const ChatController = {
  getOrCreateConversation: catchAsync(async (req: AuthRequest, res: Response) => {
    const userId = req.user?.userId;
    if (!userId) throw new AppError("Unauthorized", 401);

    const { sellerId } = req.body;
    
    // Get buyer profile for current user
    const buyer = await prisma.buyerProfile.findUnique({ where: { userId } });
    if (!buyer) throw new AppError("Buyer profile not found", 404);

    const result = await ChatService.getOrCreateConversation(buyer.id, sellerId);

    res.status(200).json({
      success: true,
      data: result,
    });
  }),

  sendMessage: catchAsync(async (req: AuthRequest, res: Response) => {
    const userId = req.user?.userId;
    const role = req.user?.role;
    if (!userId) throw new AppError("Unauthorized", 401);

    const { content, conversationId } = req.body;

    let senderBuyerId: string | undefined;
    let senderSellerId: string | undefined;

    if (role === "BUYER") {
      const buyer = await prisma.buyerProfile.findUnique({ where: { userId } });
      senderBuyerId = buyer?.id;
    } else if (role === "SELLER") {
      const seller = await prisma.sellerProfile.findUnique({ where: { userId } });
      senderSellerId = seller?.id;
    }

    const message = await ChatService.sendMessage({
      content,
      conversationId,
      senderBuyerId,
      senderSellerId,
    });

    res.status(201).json({
      success: true,
      data: message,
    });
  }),

  getUserConversations: catchAsync(async (req: AuthRequest, res: Response) => {
    const userId = req.user?.userId;
    const role = req.user?.role;
    if (!userId) throw new AppError("Unauthorized", 401);

    const conversations = await ChatService.getUserConversations(userId, role as string);

    res.status(200).json({
      success: true,
      data: conversations,
    });
  }),

  getConversationMessages: catchAsync(async (req: AuthRequest, res: Response) => {
    const conversationId = req.params.conversationId as string;
    const userId = req.user?.userId;
    const role = req.user?.role;

    const messages = await ChatService.getMessages(
      conversationId,
      userId as string,
      role as string,
    );

    res.status(200).json({
      success: true,
      data: messages,
    });
  }),
};
