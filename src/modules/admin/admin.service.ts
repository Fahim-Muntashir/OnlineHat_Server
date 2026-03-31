// src/modules/admin/admin.service.ts
import { prisma } from "../../lib/prisma";

export const AdminService = {
  getStats: async () => {
    const [totalUsers, totalOrders, totalServices, payments] =
      await Promise.all([
        prisma.user.count(),
        prisma.order.count(),
        prisma.service.count(),
        prisma.payment.findMany({
          where: { status: "SUCCESS" },
          select: { amount: true },
        }),
      ]);

    const totalRevenue = payments.reduce(
      (sum: number, p: { amount: number }) => sum + p.amount,
      0,
    );
    return {
      totalUsers,
      totalOrders,
      totalServices,
      totalRevenue,
    };
  },

  getAllUsers: async () => {
    return prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        profileImage: true,
        createdAt: true,
      },
      orderBy: { createdAt: "desc" },
    });
  },

  changeUserRole: async (id: string, role: string) => {
    return prisma.user.update({
      where: { id },
      data: { role: role as any },
    });
  },

  deleteUser: async (id: string) => {
    return prisma.user.delete({
      where: { id },
    });
  },
};
