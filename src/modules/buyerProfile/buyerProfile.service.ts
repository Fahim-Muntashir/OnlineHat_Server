// src/modules/buyerProfile/buyerProfile.service.ts
import { AppError } from "../../errors/AppError";
import { prisma } from "../../lib/prisma";

export const BuyerProfileService = {
  createBuyerProfile: async (userId: string) => {
    // check if already exists
    const existing = await prisma.buyerProfile.findUnique({
      where: { userId },
    });

    if (existing) {
      throw new AppError("Buyer profile already exists", 400);
    }

    const profile = await prisma.buyerProfile.create({
      data: {
        userId,
      },
    });

    return profile;
  },

  getMyProfile: async (userId: string) => {
    const profile = await prisma.buyerProfile.findUnique({
      where: { userId },
      include: {
        user: true,
        orders: true,
        reviews: true,
      },
    });

    if (!profile) {
      throw new AppError("Buyer profile not found", 404);
    }

    return profile;
  },

  getAllBuyerProfiles: async () => {
    return prisma.buyerProfile.findMany({
      include: {
        user: true,
      },
    });
  },

  getBuyerProfileById: async (id: string) => {
    const profile = await prisma.buyerProfile.findUnique({
      where: { id },
      include: {
        user: true,
      },
    });

    if (!profile) {
      throw new AppError("Buyer profile not found", 404);
    }

    return profile;
  },

  deleteBuyerProfile: async (id: string) => {
    return prisma.buyerProfile.delete({
      where: { id },
    });
  },
};
