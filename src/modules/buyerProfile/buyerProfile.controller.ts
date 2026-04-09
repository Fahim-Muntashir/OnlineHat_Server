// src/modules/buyerProfile/buyerProfile.controller.ts
import { Request, Response } from "express";
import { BuyerProfileService } from "./buyerProfile.service";
import { catchAsync } from "../../utils/catchAsync";
import { AuthRequest } from "../../middlewares/auth.middleware";

export const BuyerProfileController = {
  createBuyerProfile: catchAsync(async (req: AuthRequest, res: Response) => {
    const userId = req.user!.userId;

    const result = await BuyerProfileService.createBuyerProfile(userId);

    res.status(201).json({
      success: true,
      message: "Buyer profile created",
      data: result,
    });
  }),

  getMyProfile: catchAsync(async (req: AuthRequest, res: Response) => {
    const userId = req.user!.userId;

    const result = await BuyerProfileService.getMyProfile(userId);

    res.status(200).json({
      success: true,
      data: result,
    });
  }),

  getAllBuyerProfiles: catchAsync(async (_req: Request, res: Response) => {
    const result = await BuyerProfileService.getAllBuyerProfiles();

    res.status(200).json({
      success: true,
      data: result,
    });
  }),

  getBuyerProfileById: catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id as string;

    const result = await BuyerProfileService.getBuyerProfileById(id);

    res.status(200).json({
      success: true,
      data: result,
    });
  }),

  updateBuyerProfile: catchAsync(async (req: AuthRequest, res: Response) => {
    const id = req.params.id as string;
    const data = req.body;
    if (req.file) {
      data.profileImage = (req.file as any).path;
    }

    const result = await BuyerProfileService.updateBuyerProfile(id, data);

    res.status(200).json({
      success: true,
      message: "Buyer profile updated",
      data: result,
    });
  }),

  deleteBuyerProfile: catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id as string;

    await BuyerProfileService.deleteBuyerProfile(id);

    res.status(200).json({
      success: true,
      message: "Buyer profile deleted",
    });
  }),
};
