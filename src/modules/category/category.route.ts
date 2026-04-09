// src/modules/category/category.route.ts
import express from "express";
import { CategoryController } from "./category.controller";
import { createCategorySchema } from "./category.validation";
import { authenticate } from "../../middlewares/auth.middleware";
import { authorizeRoles } from "../../middlewares/role.middleware";
import { validateRequest } from "../../middlewares/validateRequest";

import { FileUploadHelper } from "../../helpers/fileUploadHelper";

const router = express.Router();

router.post(
  "/",
  authenticate,
  authorizeRoles("ADMIN"),
  FileUploadHelper.upload.single("image"),
  (req, res, next) => {
    if (req.body.data) {
      req.body = JSON.parse(req.body.data);
    }
    next();
  },
  validateRequest(createCategorySchema),
  CategoryController.createCategory,
);
router.get("/", CategoryController.getAllCategories);

export const CategoryRoutes = router;
