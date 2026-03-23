// src/modules/payment/payment.route.ts
import express from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { orderIdSchema } from "./payment.validation";
import { PaymentController } from "./payment.controller";

const router = express.Router();

// Buyer initiates payment for an order (BUYER only)
router.post(
  "/initiate/:orderId",

  validateRequest(orderIdSchema),
  PaymentController.initiatePayment,
);

// ⚠️ These are called by SSLCommerz server — NO auth middleware
router.post("/success/:orderId", PaymentController.paymentSuccess);

router.post("/fail/:orderId", PaymentController.paymentFail);

router.post("/cancel/:orderId", PaymentController.paymentCancel);

export const PaymentRoutes = router;
