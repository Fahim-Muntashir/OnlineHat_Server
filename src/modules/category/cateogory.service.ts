// src/modules/category/category.service.ts

import { prisma } from "../../lib/prisma";

interface CreateCategoryPayload {
  name: string;
  icon?: string;
}

export const CategoryService = {
  createCategory: async (payload: CreateCategoryPayload) => {
    const { name, icon } = payload;

    // Check if category already exists
    const existing = await prisma.category.findUnique({
      where: { name },
    });

    if (existing) {
      throw new Error("Category with this name already exists");
    }

    // Create new category
    const category = await prisma.category.create({
      data: { name, icon },
    });

    return category;
  },

  getAllCategories: async () => {
    return prisma.category.findMany();
  },

  getCategoryById: async (id: string) => {
    return prisma.category.findUnique({ where: { id } });
  },
};
