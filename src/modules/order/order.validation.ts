// src/modules/order/order.validation.ts
import { z } from "zod";

export const createOrderSchema = z.object({
  body: z.object({
    serviceId: z.string().uuid(),
    packageId: z.string().uuid(),
    requirements: z.string().optional(),
  }),
});

export const orderIdSchema = z.object({
  params: z.object({
    id: z.string().uuid(),
  }),
});
export const updateOrderStatusSchema = z.object({
  body: z.object({
    status: z.enum(["IN_PROGRESS", "DELIVERED", "COMPLETED", "CANCELLED"]),
  }),
});
