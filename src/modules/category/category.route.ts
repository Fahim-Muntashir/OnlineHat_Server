// src/modules/category/category.route.ts
import express from "express";
import { CategoryController } from "./category.controller";
import { createCategorySchema } from "./category.validation";
import { authenticate } from "../../middlewares/auth.middleware";
import { authorizeRoles } from "../../middlewares/role.middleware";
import { validateRequest } from "../../middlewares/validateRequest";

const router = express.Router();

router.post(
  "/",
  authenticate,
  authorizeRoles("ADMIN"),
  validateRequest(createCategorySchema),
  CategoryController.createCategory,
);

export const CategoryRoutes = router;
