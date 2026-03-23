// src/modules/payment/payment.validation.ts
import { z } from "zod";

export const orderIdSchema = z.object({
  params: z.object({
    orderId: z.string().uuid({ message: "Invalid order ID" }),
  }),
});
