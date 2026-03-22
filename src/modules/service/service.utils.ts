// src/modules/service/service.utils.ts

import { prisma } from "../../lib/prisma";

export const updateServiceRating = async (serviceId: string) => {
  const reviews = await prisma.review.findMany({
    where: { serviceId },
    select: { rating: true },
  });

  const totalReviews = reviews.length;

  if (totalReviews === 0) {
    await prisma.service.update({
      where: { id: serviceId },
      data: {
        avgRating: 0,
        totalReviews: 0,
      },
    });
    return;
  }

  const totalRating = reviews.reduce((sum, r) => sum + r.rating, 0);
  const avgRating = totalRating / totalReviews;

  await prisma.service.update({
    where: { id: serviceId },
    data: {
      avgRating,
      totalReviews,
    },
  });
};
