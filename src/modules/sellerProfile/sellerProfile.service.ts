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
    return prisma.sellerProfile.update({ where: { id }, data });
  },

  deleteSellerProfile: async (id: string) => {
    return prisma.sellerProfile.delete({ where: { id } });
  },
};
