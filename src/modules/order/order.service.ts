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

  updateOrderStatus: async (id: string, status: any) => {
    return prisma.order.update({
      where: { id },
      data: { status },
    });
  },

  deleteOrder: async (id: string) => {
    return prisma.order.delete({
      where: { id },
    });
  },
};
