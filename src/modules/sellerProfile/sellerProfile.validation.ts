// src/modules/sellerProfile/sellerProfile.validation.ts
import { z } from "zod";

// For creating/updating a seller profile
export const createSellerProfileSchema = z.object({
  body: z.object({
    bio: z.string().optional(),
    skills: z.array(z.string()).optional(),
    portfolio: z.array(z.string()).optional(),
    profileImage: z.string().optional(),
  }),
});
// Params validation for routes with :id
// sellerProfile.validation.ts
export const sellerProfileIdSchema = z.object({
  params: z.object({
    id: z.string().uuid("Invalid seller profile ID"),
  }),
});
// sellerProfile.validation.ts
export const updateSellerProfileSchema = z.object({
  params: z.object({
    id: z.string().uuid("Invalid profile ID"),
  }),
  body: z.object({
    bio: z.string().optional(),
    skills: z.array(z.string()).optional(),
    portfolio: z.array(z.string()).optional(),
    profileImage: z.string().optional(),
  }),
});
