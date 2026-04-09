import { Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { AuthRequest } from "../../middlewares/auth.middleware";
import { AppError } from "../../errors/AppError";

export const UploadController = {
  uploadImage: catchAsync(async (req: AuthRequest, res: Response) => {
    if (!req.file) {
      throw new AppError("No file uploaded", 400);
    }

    res.status(200).json({
      success: true,
      data: (req.file as any).path, // Cloudinary URL
    });
  }),

  uploadImages: catchAsync(async (req: AuthRequest, res: Response) => {
    if (!req.files || !Array.isArray(req.files) || req.files.length === 0) {
      throw new AppError("No files uploaded", 400);
    }

    const urls = (req.files as any[]).map((file) => file.path);

    res.status(200).json({
      success: true,
      data: urls,
    });
  }),
};
