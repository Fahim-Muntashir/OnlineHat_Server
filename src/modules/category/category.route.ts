// src/modules/category/category.route.ts
import express from "express";
import { CategoryController } from "./category.controller";
import { authorizeRoles } from "../../middlewares/role.middleware";
import { authenticate } from "../../middlewares/auth.middleware";

const router = express.Router();

// Admin-only route to create category
router.post(
  "/",
  authenticate,
  authorizeRoles("ADMIN"),
  CategoryController.createCategory,
);

// Public routes to get categories
router.get("/", CategoryController.getAllCategories);
router.get("/:id", CategoryController.getCategoryById);

export const CategoryRoutes = router;
