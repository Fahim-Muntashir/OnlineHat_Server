// src/modules/review/review.route.ts
import express from "express";
import { ReviewController } from "./review.controller";
import { authenticate } from "../../middlewares/auth.middleware";
import { authorizeRoles } from "../../middlewares/role.middleware";
import { validateRequest } from "../../middlewares/validateRequest";
import { createReviewSchema, reviewIdSchema } from "./review.validation";

const router = express.Router();

// Create review (BUYER only)
router.post(
  "/",
  authenticate,
  authorizeRoles("BUYER"),
  validateRequest(createReviewSchema),
  ReviewController.createReview,
);

// Get reviews by service
router.get("/service/:serviceId", ReviewController.getReviewsByService);

// Get testimonials
router.get("/testimonials", ReviewController.getTestimonials);

// Delete review (ADMIN only)
router.delete(
  "/:id",
  authenticate,
  authorizeRoles("ADMIN"),
  validateRequest(reviewIdSchema),
  ReviewController.deleteReview,
);

export const ReviewRoutes = router;
