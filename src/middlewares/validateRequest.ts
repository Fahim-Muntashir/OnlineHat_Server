// src/middlewares/validateRequest.ts
import { Request, Response, NextFunction } from "express";
import { ZodType } from "zod";

export const validateRequest =
  (schema: ZodType<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        params: req.params,
        query: req.query,
      });
      next();
    } catch (err: any) {
      return res.status(400).json({
        success: false,
        message:
          err.errors?.map((e: any) => e.message).join(", ") || err.message,
      });
    }
  };
