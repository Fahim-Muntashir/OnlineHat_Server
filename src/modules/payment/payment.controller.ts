// src/modules/payment/payment.controller.ts
import { Request, Response } from "express";
import { PaymentService } from "./payment.service";

const initiatePayment = async (req: Request, res: Response): Promise<void> => {
  try {
    const orderId = req.params.orderId as string;
    const { url } = await PaymentService.initiatePayment(orderId);
    res.json({ success: true, url });
  } catch (err: any) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const paymentSuccess = async (req: Request, res: Response): Promise<void> => {
  try {
    const orderId = req.params.orderId as string;
    const redirectUrl = await PaymentService.handleSuccess(orderId, req.body);
    res.redirect(redirectUrl);
  } catch {
    res.redirect(`${process.env.CLIENT_URL}/payment/fail`);
  }
};

const paymentFail = async (req: Request, res: Response): Promise<void> => {
  try {
    const orderId = req.params.orderId as string;
    const redirectUrl = await PaymentService.handleFail(orderId);
    res.redirect(redirectUrl);
  } catch {
    res.redirect(`${process.env.CLIENT_URL}/payment/fail`);
  }
};

const paymentCancel = async (req: Request, res: Response): Promise<void> => {
  try {
    const orderId = req.params.orderId as string;
    const redirectUrl = await PaymentService.handleCancel(orderId);
    res.redirect(redirectUrl);
  } catch {
    res.redirect(`${process.env.CLIENT_URL}/payment/cancel`);
  }
};

export const PaymentController = {
  initiatePayment,
  paymentSuccess,
  paymentFail,
  paymentCancel,
};
