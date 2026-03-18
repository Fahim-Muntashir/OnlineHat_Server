import { prisma } from "../../lib/prisma";

/
export const SellerProfileService = {
  createSellerProfile: async (data: {
    userId: string;
    bio?: string;
    skills?: string[];
    portfolio?: string[];
    profileImage?: string;
  }) => {
    return prisma.sellerProfile.create({ data });
  },

  getSellerProfileById: async (id: string) => {
    return prisma.sellerProfile.findUnique({
      where: { id },
    });
  },

  getAllSellerProfiles: async () => {
    return prisma.sellerProfile.findMany();
  },

  updateSellerProfile: async (
    id: string,
    data: Partial<{
      bio: string;
      skills: string[];
      portfolio: string[];
      profileImage: string;
    }>,
  ) => {
    return prisma.sellerProfile.update({
      where: { id },
      data,
    });
  },

  deleteSellerProfile: async (id: string) => {
    return prisma.sellerProfile.delete({
      where: { id },
    });
  },
};
