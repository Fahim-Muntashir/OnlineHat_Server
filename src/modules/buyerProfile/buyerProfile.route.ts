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
import { FileUploadHelper } from "../../helpers/fileUploadHelper";

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

// ... existing routes ...

// Get / Update / Delete profile by ID
router
  .route("/:id")
  .get(validateRequest(buyerProfileIdSchema), BuyerProfileController.getBuyerProfileById)
  .put(
    authenticate,
    authorizeRoles("BUYER"),
    FileUploadHelper.upload.single("image"),
    (req, res, next) => {
      if (req.body.data) {
        req.body = JSON.parse(req.body.data);
      }
      next();
    },
    validateRequest(buyerProfileIdSchema),
    BuyerProfileController.updateBuyerProfile
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
