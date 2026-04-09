import { Request, Response } from "express";
import httpStatus from "http-status";
import { AIService } from "./ai.service";

const generateDescription = async (req: Request, res: Response) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(httpStatus.BAD_REQUEST).json({
        success: false,
        message: "Title is required",
      });
    }

    const description = await AIService.generateServiceDescription(title);

    res.status(httpStatus.OK).json({
      success: true,
      message: "Description generated successfully",
      data: description,
    });
  } catch (error: any) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};

const chatWithAI = async (req: Request, res: Response) => {
  try {
    const { message, history } = req.body;
    const user = (req as any).user; // If auth middleware is used

    let userContext = null;
    if (user) {
      // Basic context for now: User name and role
      userContext = {
        userName: user.name || user.email,
        role: user.role,
      };
      
      // We could add more here, like recent orders, but let's keep it lightweight for now
    }

    const response = await AIService.chatWithAI(message, history || [], userContext);

    res.status(httpStatus.OK).json({
      success: true,
      data: response,
    });
  } catch (error: any) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};

export const AIController = {
  generateDescription,
  chatWithAI,
};
