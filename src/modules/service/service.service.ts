// src/modules/service/service.service.ts

import { prisma } from "../../lib/prisma";
import { updateServiceRating } from "./service.utils";

export const ServiceService = {
  // ✅ CREATE SERVICE
  createService: async (userId: string, payload: any) => {
    const seller = await prisma.sellerProfile.findUnique({
      where: { userId },
    });

    if (!seller) throw new Error("Seller profile not found");

    const { packages, ...serviceData } = payload;

    return prisma.service.create({
      data: {
        ...serviceData,
        sellerId: seller.id,

        // ✅ initialize rating
        avgRating: 0,
        totalReviews: 0,

        packages: {
          create: packages,
        },
      },
      include: {
        packages: true,
      },
    });
  },

  // ✅ GET ALL SERVICES (with rating)
  getAllServices: async () => {
    return prisma.service.findMany({
      include: {
        packages: true,
        seller: true,
        category: true,
      },
      orderBy: {
        avgRating: "desc", // ⭐ TOP RATED FIRST
      },
    });
  },

  // ✅ GET SINGLE SERVICE
  getServiceById: async (id: string) => {
    return prisma.service.findUnique({
      where: { id },
      include: {
        packages: true,
        seller: true,
        category: true,
        reviews: true, // optional (if you want)
      },
    });
  },

  // ✅ UPDATE SERVICE
  updateService: async (id: string, data: any) => {
    const service = await prisma.service.update({
      where: { id },
      data,
    });

    // ⚠️ only if you changed something related (optional safety)
    await updateServiceRating(id);

    return service;
  },

  // ✅ DELETE SERVICE
  deleteService: async (id: string) => {
    return prisma.service.delete({
      where: { id },
    });
  },

  // ⭐ BONUS: GET TOP RATED SERVICES
  getTopRatedServices: async () => {
    return prisma.service.findMany({
      take: 10,
      orderBy: {
        avgRating: "desc",
      },
      include: {
        packages: true,
        seller: true,
      },
    });
  },
};
