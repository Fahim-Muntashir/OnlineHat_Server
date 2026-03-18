// src/modules/sellerProfile/sellerProfile.route.ts
import express from "express";
import { SellerProfileController } from "./sellerProfile.controller";
import { authenticate } from "../../middlewares/auth.middleware";
import { validateRequest } from "../../middlewares/validateRequest";
import {
  createSellerProfileSchema,
  sellerProfileIdSchema,
} from "./sellerProfile.validation";

const router = express.Router();

// Create seller profile (auth required)
router.post(
  "/",
  authenticate,
  validateRequest(createSellerProfileSchema),
  SellerProfileController.createSellerProfile,
);

// Get all profiles
router.get("/", SellerProfileController.getAllSellerProfiles);

// Get / Update / Delete profile by ID
router
  .route("/:id")
  .get(
    validateRequest(sellerProfileIdSchema), // only pass schema
    SellerProfileController.getSellerProfileById,
  )
  .put(
    authenticate,
    validateRequest(createSellerProfileSchema),
    SellerProfileController.updateSellerProfile,
  )
  .delete(authenticate, SellerProfileController.deleteSellerProfile);

export const SellerProfileRoutes = router;
