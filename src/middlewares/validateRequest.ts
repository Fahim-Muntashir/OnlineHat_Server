// src/middlewares/validateRequest.ts
import { ZodSchema } from "zod";
import { Request, Response, NextFunction } from "express";

export const validateRequest =
  (schema: ZodSchema) => (req: Request, _res: Response, next: NextFunction) => {
    try {
      // only parse the relevant object (body, params, or query)
      const validatedData = schema.parse(req.body); // <-- body-only
      req.body = validatedData;
      next();
    } catch (error: any) {
      next(error); // send to global error handler
    }
  };
