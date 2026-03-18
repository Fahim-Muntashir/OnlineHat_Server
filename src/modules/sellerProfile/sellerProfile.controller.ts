// src/modules/sellerProfile/sellerProfile.controller.ts
import { Request, Response } from "express";
import { AuthRequest } from "../../middlewares/auth.middleware";
import { SellerProfileService } from "./sellerProfile.service";
import { catchAsync } from "../../utils/catchAsync";

export const SellerProfileController = {
  createSellerProfile: catchAsync(async (req: AuthRequest, res: Response) => {
    const userId = req.user?.userId;
    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const { bio, skills, portfolio, profileImage } = req.body;
    const profile = await SellerProfileService.createSellerProfile({
      userId,
      bio,
      skills,
      portfolio,
      profileImage,
    });

    res.status(201).json({ success: true, data: profile });
  }),

  getSellerProfileById: catchAsync(async (req: Request, res: Response) => {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const profile = await SellerProfileService.getSellerProfileById(id);
    if (!profile)
      return res
        .status(404)
        .json({ success: false, message: "Profile not found" });

    res.status(200).json({ success: true, data: profile });
  }),

  getAllSellerProfiles: catchAsync(async (_req: Request, res: Response) => {
    const profiles = await SellerProfileService.getAllSellerProfiles();
    res.status(200).json({ success: true, data: profiles });
  }),

  updateSellerProfile: catchAsync(async (req: AuthRequest, res: Response) => {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const data = req.body;
    const updatedProfile = await SellerProfileService.updateSellerProfile(
      id,
      data,
    );
    res.status(200).json({ success: true, data: updatedProfile });
  }),

  deleteSellerProfile: catchAsync(async (req: AuthRequest, res: Response) => {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    await SellerProfileService.deleteSellerProfile(id);
    res.status(200).json({ success: true, message: "Seller profile deleted" });
  }),
};
