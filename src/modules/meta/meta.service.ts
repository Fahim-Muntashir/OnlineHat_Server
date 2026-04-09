import { prisma } from "../../lib/prisma";

export const MetaService = {
  getSystemStats: async () => {
    const [sellers, completedOrders, buyers] = await Promise.all([
      prisma.sellerProfile.count(),
      prisma.order.count({
        where: {
          status: { in: ["COMPLETED", "DELIVERED"] },
        },
      }),
      prisma.buyerProfile.count(),
    ]);

    return {
      activeFreelancers: sellers,
      projectsCompleted: completedOrders,
      happyClients: buyers,
      countriesCovered: 50, // Mock value
    };
  },
};
