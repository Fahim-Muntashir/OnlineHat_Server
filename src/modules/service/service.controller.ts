// src/modules/service/service.controller.ts
import { Request, Response } from "express";
import { AuthRequest } from "../../middlewares/auth.middleware";
import { catchAsync } from "../../utils/catchAsync";
import { ServiceService } from "./service.service";
import { AppError } from "../../errors/AppError";

export const ServiceController = {
  createService: catchAsync(async (req: AuthRequest, res: Response) => {
    const userId = req.user?.userId;

    if (!userId)
      return res.status(401).json({ success: false, message: "Unauthorized" });

    const service = await ServiceService.createService(userId, req.body);

    res.status(201).json({
      success: true,
      message: "Service created successfully",
      data: service,
    });
  }),

  getAllServices: catchAsync(async (req: Request, res: Response) => {
    const { page, limit, category, minPrice, maxPrice, rating, sort, search } =
      req.query;

    const result = await ServiceService.getAllServices({
      page: page ? Number(page) : 1,
      limit: limit ? Number(limit) : 10,
      category: category as string,
      minPrice: minPrice ? Number(minPrice) : undefined,
      maxPrice: maxPrice ? Number(maxPrice) : undefined,
      rating: rating ? Number(rating) : undefined,
      sort: sort as string,
      search: search as string,
    });

    res.status(200).json({ success: true, ...result });
  }),
  // ✅ NEW — only this seller's services
  getMyServices: catchAsync(async (req: AuthRequest, res: Response) => {
    const userId = req.user?.userId;
    if (!userId) throw new AppError("Unauthorized", 401);

    const services = await ServiceService.getMyServices(userId);

    res.status(200).json({
      success: true,
      data: services,
    });
  }),

  getServiceById: catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id as string;

    const service = await ServiceService.getServiceById(id);

    if (!service)
      return res
        .status(404)
        .json({ success: false, message: "Service not found" });

    res.status(200).json({
      success: true,
      data: service,
    });
  }),

  updateService: catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id as string;

    const updated = await ServiceService.updateService(id, req.body);

    res.status(200).json({
      success: true,
      data: updated,
    });
  }),

  deleteService: catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id as string;

    await ServiceService.deleteService(id);

    res.status(200).json({
      success: true,
      message: "Service deleted",
    });
  }),
};
