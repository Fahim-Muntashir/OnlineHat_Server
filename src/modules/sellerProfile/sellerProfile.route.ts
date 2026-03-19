// src/modules/sellerProfile/sellerProfile.route.ts
import express from "express";
import { SellerProfileController } from "./sellerProfile.controller";
import { authenticate } from "../../middlewares/auth.middleware";
import { authorizeRoles } from "../../middlewares/role.middleware";
import { validateRequest } from "../../middlewares/validateRequest";
import {
  createSellerProfileSchema,
  sellerProfileIdSchema,
} from "./sellerProfile.validation";

const router = express.Router();

// Create seller profile (only SELLER can create their own profile)
router.post(
  "/",
  authenticate,
  authorizeRoles("SELLER"),
  validateRequest(createSellerProfileSchema),
  SellerProfileController.createSellerProfile,
);

// Get my profile (SELLER only)
router.get(
  "/me",
  authenticate,
  authorizeRoles("SELLER"),
  SellerProfileController.getMyProfile,
);

// Admin: get all seller profiles
router.get(
  "/",
  authenticate,
  authorizeRoles("ADMIN"),
  SellerProfileController.getAllSellerProfiles,
);

// Get / Update / Delete profile by ID (admin only for deletion or any admin tasks)
router
  .route("/:id")
  .get(
    authenticate,
    authorizeRoles("ADMIN"),
    validateRequest(sellerProfileIdSchema),
    SellerProfileController.getSellerProfileById,
  )
  .put(
    authenticate,
    authorizeRoles("SELLER"),
    validateRequest(createSellerProfileSchema),
    SellerProfileController.updateSellerProfile,
  )
  .delete(
    authenticate,
    authorizeRoles("ADMIN"),
    validateRequest(sellerProfileIdSchema),
    SellerProfileController.deleteSellerProfile,
  );

export const SellerProfileRoutes = router;
