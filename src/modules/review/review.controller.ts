// src/modules/review/review.controller.ts
import { Request, Response } from "express";
import { AuthRequest } from "../../middlewares/auth.middleware";
import { catchAsync } from "../../utils/catchAsync";
import { ReviewService } from "./review.service";

export const ReviewController = {
  createReview: catchAsync(async (req: AuthRequest, res: Response) => {
    const userId = req.user?.userId;

    if (!userId)
      return res.status(401).json({ success: false, message: "Unauthorized" });

    const review = await ReviewService.createReview(userId, req.body);

    res.status(201).json({
      success: true,
      message: "Review submitted successfully",
      data: review,
    });
  }),

  getReviewsByService: catchAsync(async (req: Request, res: Response) => {
    const serviceId = req.params.serviceId as string;

    const reviews = await ReviewService.getReviewsByService(serviceId);

    res.status(200).json({
      success: true,
      data: reviews,
    });
  }),

  deleteReview: catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id as string;

    await ReviewService.deleteReview(id);

    res.status(200).json({
      success: true,
      message: "Review deleted",
    });
  }),

  getTestimonials: catchAsync(async (req: Request, res: Response) => {
    const reviews = await ReviewService.getTestimonials();

    res.status(200).json({
      success: true,
      data: reviews,
    });
  }),
};
