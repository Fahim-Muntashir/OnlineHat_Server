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

export const AIController = {
  generateDescription,
};
