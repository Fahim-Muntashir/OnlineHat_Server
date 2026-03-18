// src/utils/catchAsync.ts
import { Request, Response, NextFunction } from "express";

type AsyncFn<TReq extends Request = Request> = (
  req: TReq,
  res: Response,
  next: NextFunction,
) => Promise<any>;

export const catchAsync =
  <TReq extends Request = Request>(fn: AsyncFn<TReq>) =>
  (req: TReq, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
