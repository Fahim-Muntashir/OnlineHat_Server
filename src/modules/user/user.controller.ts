// src/modules/user/user.controller.ts
import { Request, Response } from "express";
import { UserService } from "./user.service";
import { catchAsync } from "../../utils/catchAsync";

export const UserController = {
  createUser: catchAsync(async (req: Request, res: Response) => {
    const result = await UserService.createUser(req.body);
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: result,
    });
  }),

  getAllUsers: catchAsync(async (_req: Request, res: Response) => {
    const result = await UserService.getAllUsers();
    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      data: result,
    });
  }),

  getUserById: catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const result = await UserService.getUserById(id);
    res.status(200).json({
      success: true,
      data: result,
    });
  }),

  deleteUser: catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const result = await UserService.deleteUser(id);
    res.status(200).json({
      success: true,
      message: result.message,
    });
  }),

  deleteAllUsers: catchAsync(async (_req: Request, res: Response) => {
    const result = await UserService.deleteAllUsers();
    res.status(200).json({
      success: true,
      message: result.message,
    });
  }),
};
