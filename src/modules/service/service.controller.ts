// src/modules/service/service.controller.ts
import { Request, Response } from "express";
import { AuthRequest } from "../../middlewares/auth.middleware";
import { catchAsync } from "../../utils/catchAsync";
import { ServiceService } from "./service.service";

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

  getAllServices: catchAsync(async (_req: Request, res: Response) => {
    const services = await ServiceService.getAllServices();

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
