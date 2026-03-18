// src/modules/buyerProfile/buyerProfile.route.ts
import express from "express";
import { BuyerProfileController } from "./buyerProfile.controller";
import { authenticate } from "../../middlewares/auth.middleware";
import { authorizeRoles } from "../../middlewares/role.middleware";
import {
  createBuyerProfileSchema,
  buyerProfileIdSchema,
} from "./buyerProfile.validation";
import { validateRequest } from "../../middlewares/validateRequest";

const router = express.Router();

// Create buyer profile
router.post(
  "/",
  authenticate,
  authorizeRoles("BUYER"),
  validateRequest(createBuyerProfileSchema),
  BuyerProfileController.createBuyerProfile,
);

// Get my profile
router.get(
  "/me",
  authenticate,
  authorizeRoles("BUYER"),
  BuyerProfileController.getMyProfile,
);

// Admin: get all
router.get(
  "/",
  authenticate,
  authorizeRoles("ADMIN"),
  BuyerProfileController.getAllBuyerProfiles,
);

// Get by ID (validated)
router.get(
  "/:id",
  validateRequest(buyerProfileIdSchema),
  BuyerProfileController.getBuyerProfileById,
);

// Delete (admin only)
router.delete(
  "/:id",
  authenticate,
  authorizeRoles("ADMIN"),
  validateRequest(buyerProfileIdSchema),
  BuyerProfileController.deleteBuyerProfile,
);

export const BuyerProfileRoutes = router;
