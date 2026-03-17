// src/middleware/auth.middleware.ts
import { Request, Response, NextFunction } from "express";
import { JwtHelper, JwtPayloadData } from "../helpers/jwt.helper";

export interface AuthRequest extends Request {
  user?: JwtPayloadData;
}

export const authenticate = (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer "))
      return res.status(401).json({ success: false, message: "Unauthorized" });

    const token = authHeader.split(" ")[1];
    const payload = JwtHelper.verifyToken(token);

    req.user = payload;
    next();
  } catch (error: any) {
    return res.status(401).json({ success: false, message: error.message });
  }
};
