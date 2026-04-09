import express from "express";
import { authenticate } from "../../middlewares/auth.middleware";
import { FileUploadHelper } from "../../helpers/fileUploadHelper";
import { UploadController } from "./upload.controller";

const router = express.Router();

router.post(
  "/image",
  authenticate,
  FileUploadHelper.upload.single("image"),
  UploadController.uploadImage
);

router.post(
  "/images",
  authenticate,
  FileUploadHelper.upload.array("images", 10),
  UploadController.uploadImages
);

export const UploadRoutes = router;
