// src/modules/category/category.validation.ts
import { z } from "zod";

export const createCategorySchema = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required"),
    icon: z.string().optional(),
  }),
});
