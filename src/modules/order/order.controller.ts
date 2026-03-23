// src/modules/order/order.controller.ts
import { Request, Response } from "express";
import { AuthRequest } from "../../middlewares/auth.middleware";
import { catchAsync } from "../../utils/catchAsync";
import { OrderService } from "./order.service";

export const OrderController = {
  createOrder: catchAsync(async (req: AuthRequest, res: Response) => {
    const userId = req.user?.userId;

    if (!userId)
      return res.status(401).json({ success: false, message: "Unauthorized" });

    const order = await OrderService.createOrder(userId, req.body);

    res.status(201).json({
      success: true,
      message: "Order created successfully",
      data: order,
    });
  }),

  getMyOrders: catchAsync(async (req: AuthRequest, res: Response) => {
    const userId = req.user?.userId;
    const role = req.user?.role;

    const orders = await OrderService.getMyOrders(userId!, role!);

    res.status(200).json({
      success: true,
      data: orders,
    });
  }),

  getOrderById: catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id as string;

    const order = await OrderService.getOrderById(id);

    if (!order)
      return res
        .status(404)
        .json({ success: false, message: "Order not found" });

    res.status(200).json({
      success: true,
      data: order,
    });
  }),

  updateOrderStatus: catchAsync(async (req: AuthRequest, res: Response) => {
    const id = req.params.id as string;
    const userId = req.user?.userId!;
    const role = req.user?.role!;
    const { status } = req.body;

    const updated = await OrderService.updateOrderStatus(
      id,
      userId,
      role,
      status,
    );

    res.status(200).json({ success: true, data: updated });
  }),

  deleteOrder: catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id as string;

    await OrderService.deleteOrder(id);

    res.status(200).json({
      success: true,
      message: "Order deleted",
    });
  }),
};
