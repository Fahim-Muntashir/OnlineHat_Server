// src/modules/service/service.service.ts

import { prisma } from "../../lib/prisma";

export const ServiceService = {
  createService: async (userId: string, payload: any) => {
    // find seller profile
    const seller = await prisma.sellerProfile.findUnique({
      where: { userId },
    });

    if (!seller) throw new Error("Seller profile not found");

    const { packages, ...serviceData } = payload;

    return prisma.service.create({
      data: {
        ...serviceData,
        sellerId: seller.id,

        packages: {
          create: packages,
        },
      },
      include: {
        packages: true,
      },
    });
  },

  getAllServices: async () => {
    return prisma.service.findMany({
      include: {
        packages: true,
        seller: true,
        category: true,
      },
    });
  },

  getServiceById: async (id: string) => {
    return prisma.service.findUnique({
      where: { id },
      include: {
        packages: true,
        seller: true,
        category: true,
      },
    });
  },

  updateService: async (id: string, data: any) => {
    return prisma.service.update({
      where: { id },
      data,
    });
  },

  deleteService: async (id: string) => {
    return prisma.service.delete({
      where: { id },
    });
  },
};
