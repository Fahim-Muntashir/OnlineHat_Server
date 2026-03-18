// src/modules/category/category.validation.ts
import { z } from "zod";

export const createCategorySchema = z.object({
  name: z.string().min(1, "Category name is required"),
  icon: z.string().url().optional(),
});
