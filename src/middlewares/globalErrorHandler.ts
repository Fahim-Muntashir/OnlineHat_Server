// src/middleware/globalErrorHandler.ts
import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import { AppError } from "../errors/AppError";
import { handlePrismaError } from "../errors/handlePrismaError";

export const globalErrorHandler = (
  error: any,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  let statusCode = 500;
  let message = "Something went wrong";
  let errorDetails: any = [];

  if (error instanceof ZodError) {
    statusCode = 400;
    message = "Validation Error";

    errorDetails = error.issues.map((err) => ({
      field: err.path.join("."),
      message: err.message,
    }));
  }

  // ✅ Prisma error
  else if (error.code) {
    const prismaError = handlePrismaError(error);
    statusCode = prismaError.statusCode;
    message = prismaError.message;
  }

  // ✅ Custom AppError
  else if (error instanceof AppError) {
    statusCode = error.statusCode;
    message = error.message;
  }

  // ✅ JWT errors
  else if (error.name === "JsonWebTokenError") {
    statusCode = 401;
    message = "Invalid token";
  } else if (error.name === "TokenExpiredError") {
    statusCode = 401;
    message = "Token expired";
  }

  // ✅ Default fallback
  else if (error.message) {
    message = error.message;
  }

  res.status(statusCode).json({
    success: false,
    message,
    errors: errorDetails.length ? errorDetails : undefined,
    stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
  });
};
