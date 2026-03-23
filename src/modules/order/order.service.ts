// src/modules/order/order.service.ts

import { prisma } from "../../lib/prisma";

export const OrderService = {
  createOrder: async (userId: string, payload: any) => {
    const buyer = await prisma.buyerProfile.findUnique({
      where: { userId },
    });

    if (!buyer) throw new Error("Buyer profile not found");

    const { serviceId, packageId, requirements } = payload;

    // get service
    const service = await prisma.service.findUnique({
      where: { id: serviceId },
    });

    if (!service) throw new Error("Service not found");

    // get package
    const pkg = await prisma.servicePackage.findFirst({
      where: {
        id: packageId,
        serviceId,
      },
    });

    if (!pkg) throw new Error("Invalid package");

    return prisma.order.create({
      data: {
        serviceId,
        packageId,
        requirements,

        // ✅ REQUIRED (fix error)
        price: pkg.price,
        deliveryDays: pkg.deliveryDays,

        buyerId: buyer.id,
        sellerId: service.sellerId,
      },
      include: {
        service: true,
        package: true,
      },
    });
  },

  getMyOrders: async (userId: string, role: string) => {
    if (role === "BUYER") {
      const buyer = await prisma.buyerProfile.findUnique({
        where: { userId },
      });

      return prisma.order.findMany({
        where: { buyerId: buyer?.id },
        include: { service: true, package: true },
      });
    }

    if (role === "SELLER") {
      const seller = await prisma.sellerProfile.findUnique({
        where: { userId },
      });

      return prisma.order.findMany({
        where: { sellerId: seller?.id },
        include: { service: true, package: true },
      });
    }

    // ADMIN
    return prisma.order.findMany({
      include: { service: true, package: true },
    });
  },

  getOrderById: async (id: string) => {
    return prisma.order.findUnique({
      where: { id },
      include: {
        service: true,
        package: true,
        buyer: true,
        seller: true,
      },
    });
  },

  updateOrderStatus: async (
    orderId: string,
    userId: string,
    role: string,
    newStatus: string,
  ) => {
    const order = await prisma.order.findUnique({
      where: { id: orderId },
      include: { buyer: true, seller: true },
    });

    if (!order) throw new Error("Order not found");

    const current = order.status;

    // ─── Transition Rules ────────────────────────────────────────────
    const sellerTransitions: Record<string, string> = {
      PENDING: "IN_PROGRESS",
      IN_PROGRESS: "DELIVERED",
    };

    const buyerTransitions: Record<string, string> = {
      DELIVERED: "COMPLETED",
    };

    const cancellableBy = ["BUYER", "ADMIN"];

    if (newStatus === "CANCELLED") {
      if (!cancellableBy.includes(role)) {
        throw new Error("Only buyer or admin can cancel an order");
      }

      if (role === "BUYER" && order.buyer.userId !== userId) {
        throw new Error("You can only cancel your own order");
      }
    } else if (role === "SELLER") {
      const seller = await prisma.sellerProfile.findUnique({
        where: { userId },
      });

      if (order.sellerId !== seller?.id) {
        throw new Error("You can only update your own orders");
      }

      const allowed = sellerTransitions[current];
      if (allowed !== newStatus) {
        throw new Error(
          `Seller cannot transition order from ${current} to ${newStatus}`,
        );
      }
    } else if (role === "BUYER") {
      const buyer = await prisma.buyerProfile.findUnique({
        where: { userId },
      });

      if (order.buyerId !== buyer?.id) {
        throw new Error("You can only update your own orders");
      }

      const allowed = buyerTransitions[current];
      if (allowed !== newStatus) {
        throw new Error(
          `Buyer cannot transition order from ${current} to ${newStatus}`,
        );
      }
    }

    const updated = await prisma.order.update({
      where: { id: orderId },
      data: { status: newStatus as any },
    });

    // ─── Auto update seller earnings on COMPLETED ────────────────────
    if (newStatus === "COMPLETED") {
      await prisma.sellerProfile.update({
        where: { id: order.sellerId },
        data: { earnings: { increment: order.price } },
      });
    }

    return updated;
  },

  deleteOrder: async (id: string) => {
    return prisma.order.delete({
      where: { id },
    });
  },
};
