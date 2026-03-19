// src/modules/review/review.service.ts

import { prisma } from "../../lib/prisma";

export const ReviewService = {
  // ✅ CREATE REVIEW
  createReview: async (userId: string, payload: any) => {
    // find buyer profile
    const buyer = await prisma.buyerProfile.findUnique({
      where: { userId },
    });

    if (!buyer) throw new Error("Buyer profile not found");

    const { orderId, rating, comment } = payload;

    // get order
    const order = await prisma.order.findUnique({
      where: { id: orderId },
    });

    if (!order) throw new Error("Order not found");

    // 🔐 security checks
    if (order.buyerId !== buyer.id)
      throw new Error("You can only review your own order");

    if (order.status !== "COMPLETED")
      throw new Error("Order must be completed before review");

    // ✅ check existing review (BEST WAY)
    const existingReview = await prisma.review.findUnique({
      where: { orderId },
    });

    if (existingReview) throw new Error("Review already exists for this order");

    // ✅ create review
    const review = await prisma.review.create({
      data: {
        rating,
        comment,
        orderId,
        serviceId: order.serviceId,
        buyerId: buyer.id,
      },
    });

    return review;
  },

  // ✅ GET REVIEWS BY SERVICE
  getReviewsByService: async (serviceId: string) => {
    return prisma.review.findMany({
      where: { serviceId },
      include: {
        buyer: {
          include: {
            user: {
              select: {
                name: true,
                profileImage: true,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  },

  // ✅ DELETE REVIEW (ADMIN)
  deleteReview: async (id: string) => {
    const review = await prisma.review.findUnique({
      where: { id },
    });

    if (!review) throw new Error("Review not found");

    return prisma.review.delete({
      where: { id },
    });
  },
};
