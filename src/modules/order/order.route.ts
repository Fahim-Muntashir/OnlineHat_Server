// src/modules/order/order.route.ts
import express from "express";
import { authenticate } from "../../middlewares/auth.middleware";
import { authorizeRoles } from "../../middlewares/role.middleware";
import { validateRequest } from "../../middlewares/validateRequest";
import {
  createOrderSchema,
  orderIdSchema,
  updateOrderStatusSchema,
} from "./order.validation";
import { OrderController } from "./order.controller";

const router = express.Router();

// Create order (BUYER only)
router.post(
  "/",
  authenticate,
  authorizeRoles("BUYER"),
  validateRequest(createOrderSchema),
  OrderController.createOrder,
);

// Get my orders (buyer/seller/admin)
router.get("/my-orders", authenticate, OrderController.getMyOrders);

// Get order by ID
router.get(
  "/:id",
  authenticate,
  validateRequest(orderIdSchema),
  OrderController.getOrderById,
);

router.patch(
  "/:id/status",
  authenticate,
  authorizeRoles("SELLER", "BUYER", "ADMIN"),
  validateRequest(updateOrderStatusSchema),
  OrderController.updateOrderStatus,
);
// Delete (ADMIN)
router.delete(
  "/:id",
  authenticate,
  authorizeRoles("ADMIN"),
  validateRequest(orderIdSchema),
  OrderController.deleteOrder,
);

export const OrderRoutes = router;
