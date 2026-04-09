import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { MetaService } from "./meta.service";

export const MetaController = {
  getSystemStats: catchAsync(async (req: Request, res: Response) => {
    const result = await MetaService.getSystemStats();
    console.log("System Stats fetch result:", result);
    res.status(200).json({
      success: true,
      data: result,
    });
  }),
};
