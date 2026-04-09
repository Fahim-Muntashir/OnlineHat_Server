// src/modules/category/category.controller.ts
import { Request, Response } from "express";
import { CategoryService } from "./cateogory.service";
import { catchAsync } from "../../utils/catchAsync";
import { AuthRequest } from "../../middlewares/auth.middleware";
import { AppError } from "../../errors/AppError";

export const CategoryController = {
  createCategory: catchAsync(async (req: AuthRequest, res: Response) => {
    const data = req.body;
    if (req.file) {
      data.icon = (req.file as any).path;
    }
    const category = await CategoryService.createCategory(data);

    res.status(201).json({
      success: true,
      message: "Category created successfully",
      data: category,
    });
  }),

  getAllCategories: catchAsync(async (_req: Request, res: Response) => {
    const categories = await CategoryService.getAllCategories();

    res.status(200).json({
      success: true,
      data: categories,
    });
  }),

  getCategoryById: catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id as string;

    const category = await CategoryService.getCategoryById(id);

    if (!category) {
      throw new AppError("Category not found", 404);
    }

    res.status(200).json({
      success: true,
      data: category,
    });
  }),
};
