// src/modules/buyerProfile/buyerProfile.validation.ts
import { z } from "zod";

// For updating/creating buyer profile
export const createBuyerProfileSchema = z.object({
  bio: z.string().optional(),
  phone: z.string().optional(),
  address: z.string().optional(),
  profileImage: z.string().optional(),
});

// Params validation
export const buyerProfileIdSchema = z.object({
  params: z.object({
    id: z.string().uuid("Invalid profile ID"),
  }),
});
