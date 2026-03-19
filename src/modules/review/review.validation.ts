// src/modules/review/review.validation.ts
import { z } from "zod";

export const createReviewSchema = z.object({
  body: z.object({
    orderId: z.string().uuid(),
    rating: z.number().min(1).max(5),
    comment: z.string().optional(),
  }),
});

export const reviewIdSchema = z.object({
  params: z.object({
    id: z.string().uuid(),
  }),
});
