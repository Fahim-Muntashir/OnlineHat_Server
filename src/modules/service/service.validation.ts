// src/modules/service/service.validation.ts
import { z } from "zod";

export const createServiceSchema = z.object({
  body: z.object({
    title: z.string().min(3),
    description: z.string().min(10),
    images: z.array(z.string()).min(1),
    categoryId: z.string().uuid(),

    packages: z
      .array(
        z.object({
          title: z.string(),
          description: z.string().optional(),
          price: z.number().positive(),
          deliveryDays: z.number().positive(),
          revisions: z.number().optional(),
          type: z.enum(["BASIC", "STANDARD", "PREMIUM"]),
        }),
      )
      .min(1)
      .max(3),
  }),
});

export const serviceIdSchema = z.object({
  params: z.object({
    id: z.string().uuid(),
  }),
});
