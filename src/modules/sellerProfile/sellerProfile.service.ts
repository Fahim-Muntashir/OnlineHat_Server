// src/modules/sellerProfile/sellerProfile.service.ts

import { prisma } from "../../lib/prisma";

export const SellerProfileService = {
  createSellerProfile: async (data: any) => {
    return prisma.sellerProfile.create({ data });
  },

  getSellerProfileByUserId: async (userId: string) => {
    return prisma.sellerProfile.findUnique({ where: { userId } });
  },

  getSellerProfileById: async (id: string) => {
    return prisma.sellerProfile.findUnique({ where: { id } });
  },

  getAllSellerProfiles: async () => {
    return prisma.sellerProfile.findMany();
  },

  updateSellerProfile: async (id: string, data: any) => {
    return prisma.$transaction(async (tx) => {
      const updatedProfile = await tx.sellerProfile.update({
        where: { id },
        data,
      });

      if (data.profileImage) {
        await tx.user.update({
          where: { id: updatedProfile.userId },
          data: { profileImage: data.profileImage },
        });
      }

      return updatedProfile;
    });
  },

  deleteSellerProfile: async (id: string) => {
    return prisma.sellerProfile.delete({ where: { id } });
  },
};
