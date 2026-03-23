// src/modules/admin/admin.controller.ts
import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { AdminService } from "./admin.service";

export const AdminController = {
  getStats: catchAsync(async (_req: Request, res: Response) => {
    const stats = await AdminService.getStats();
    res.status(200).json({ success: true, data: stats });
  }),

  getAllUsers: catchAsync(async (_req: Request, res: Response) => {
    const users = await AdminService.getAllUsers();
    res.status(200).json({ success: true, data: users });
  }),

  changeUserRole: catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const { role } = req.body;
    const updated = await AdminService.changeUserRole(id, role);
    res.status(200).json({ success: true, data: updated });
  }),

  deleteUser: catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id as string;
    await AdminService.deleteUser(id);
    res.status(200).json({ success: true, message: "User deleted" });
  }),
};
