// src/modules/service/service.route.ts
import express from "express";
import { authenticate } from "../../middlewares/auth.middleware";
import { authorizeRoles } from "../../middlewares/role.middleware";
import { validateRequest } from "../../middlewares/validateRequest";
import { createServiceSchema, serviceIdSchema } from "./service.validation";
import { ServiceController } from "./service.controller";

const router = express.Router();

// Create service (SELLER only)
router.post(
  "/",
  authenticate,
  authorizeRoles("SELLER"),
  validateRequest(createServiceSchema),
  ServiceController.createService,
);

// Get all services
router.get("/", ServiceController.getAllServices);

// Get by ID
router.get(
  "/:id",
  validateRequest(serviceIdSchema),
  ServiceController.getServiceById,
);

// Update (SELLER)
router.put(
  "/:id",
  authenticate,
  authorizeRoles("SELLER"),
  validateRequest(serviceIdSchema),
  ServiceController.updateService,
);

// Delete (SELLER or ADMIN)
router.delete(
  "/:id",
  authenticate,
  authorizeRoles("SELLER", "ADMIN"),
  validateRequest(serviceIdSchema),
  ServiceController.deleteService,
);

export const ServiceRoutes = router;
