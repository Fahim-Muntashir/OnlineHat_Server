// src/middleware/validateRequest.ts
import { ZodSchema } from "zod";
import { Request, Response, NextFunction } from "express";

export const validateRequest =
  (schema: ZodSchema) => (req: Request, _res: Response, next: NextFunction) => {
    try {
      req.body = schema.parse(req.body);
      next();
    } catch (error: any) {
      next(error);
    }
  };
