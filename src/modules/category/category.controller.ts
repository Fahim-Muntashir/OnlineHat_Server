// src/modules/category/category.controller.ts
import { Request, Response } from "express";
import { CategoryService } from "./cateogory.service";
import { AuthRequest } from "../../middlewares/auth.middleware";

export const CategoryController = {
  createCategory: async (req: AuthRequest, res: Response) => {
    try {
      const { name, icon } = req.body;

      if (!name) {
        return res
          .status(400)
          .json({ success: false, message: "Name is required" });
      }

      const category = await CategoryService.createCategory({ name, icon });

      return res.status(201).json({
        success: true,
        message: "Category created successfully",
        data: category,
      });
    } catch (error: any) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },

  getAllCategories: async (_req: Request, res: Response) => {
    try {
      const categories = await CategoryService.getAllCategories();
      return res.status(200).json({ success: true, data: categories });
    } catch (error: any) {
      return res.status(400).json({ success: false, message: error.message });
    }
  },

  getCategoryById: async (req: Request, res: Response) => {
    try {
      const id = req.params.id as string;
      const category = await CategoryService.getCategoryById(id);

      if (!category) {
        return res
          .status(404)
          .json({ success: false, message: "Category not found" });
      }

      return res.status(200).json({ success: true, data: category });
    } catch (error: any) {
      return res.status(400).json({ success: false, message: error.message });
    }
  },
};
