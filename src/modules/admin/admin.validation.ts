// src/modules/admin/admin.validation.ts
import { z } from "zod";

export const changeRoleSchema = z.object({
  body: z.object({
    role: z.enum(["BUYER", "SELLER", "ADMIN"]),
  }),
});

export const adminUserIdSchema = z.object({
  params: z.object({
    id: z.string().uuid("Invalid user ID"),
  }),
});
