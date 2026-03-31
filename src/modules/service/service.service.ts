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

  getAllServices: async (query: {
    page?: number;
    limit?: number;
    category?: string;
    minPrice?: number;
    maxPrice?: number;
    rating?: number;
    sort?: string;
    search?: string;
  }) => {
    const {
      page = 1,
      limit = 10,
      category,
      minPrice,
      maxPrice,
      rating,
      sort = "createdAt",
      search,
    } = query;

    const skip = (page - 1) * limit;

    // ─── Build where clause ──────────────────────────────────────────
    const where: any = {};

    if (category) where.categoryId = category;

    if (search) {
      where.OR = [
        { title: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
      ];
    }

    if (rating) where.avgRating = { gte: Number(rating) };

    if (minPrice || maxPrice) {
      where.packages = {
        some: {
          price: {
            ...(minPrice && { gte: Number(minPrice) }),
            ...(maxPrice && { lte: Number(maxPrice) }),
          },
        },
      };
    }

    // ─── Build orderBy ───────────────────────────────────────────────
    const orderBy: any =
      sort === "top"
        ? { avgRating: "desc" }
        : sort === "price_asc"
          ? { packages: { _count: "asc" } }
          : { createdAt: "desc" };

    // ─── Query ───────────────────────────────────────────────────────
    const [services, total] = await Promise.all([
      prisma.service.findMany({
        where,
        skip,
        take: limit,
        orderBy,
        include: {
          packages: true,

          seller: {
            include: { user: { select: { name: true, profileImage: true } } },
          },
          category: true,
        },
      }),
      prisma.service.count({ where }),
    ]);

    return {
      data: services,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  },

  // ✅ GET SINGLE SERVICE
  getServiceById: async (id: string) => {
    return prisma.service.findUnique({
      where: { id },
      include: {
        packages: true,
        category: true,
        reviews: {
          include: {
            buyer: {
              include: {
                user: true, // ✅ buyer name in reviews
              },
            },
          },
        },
        seller: {
          include: {
            user: true, // ✅ seller name, email, profileImage
          },
        },
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

  getMyServices: async (userId: string) => {
    const seller = await prisma.sellerProfile.findUnique({
      where: { userId },
    });

    if (!seller) throw new Error("Seller profile not found");

    return prisma.service.findMany({
      where: { sellerId: seller.id },
      include: {
        packages: true,
        category: true,
        reviews: true,
      },
      orderBy: { createdAt: "desc" },
    });
  },
};
