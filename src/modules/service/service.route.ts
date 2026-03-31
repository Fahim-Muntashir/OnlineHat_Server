// src/modules/service/service.route.ts
import express from "express";
import { authenticate } from "../../middlewares/auth.middleware";
import { authorizeRoles } from "../../middlewares/role.middleware";
import { validateRequest } from "../../middlewares/validateRequest";
import { createServiceSchema, serviceIdSchema } from "./service.validation";
import { ServiceController } from "./service.controller";

const router = express.Router();

// ⚠️ /my-services MUST come before /:id
router.get(
  "/my-services",
  authenticate,
  authorizeRoles("SELLER"),
  ServiceController.getMyServices,
);

// Public
router.get("/", ServiceController.getAllServices);

router.get(
  "/:id",
  validateRequest(serviceIdSchema),
  ServiceController.getServiceById,
);

// Seller only
router.post(
  "/",
  authenticate,
  authorizeRoles("SELLER"),
  validateRequest(createServiceSchema),
  ServiceController.createService,
);

router.put(
  "/:id",
  authenticate,
  authorizeRoles("SELLER"),
  validateRequest(serviceIdSchema),
  ServiceController.updateService,
);

// Seller or Admin
router.delete(
  "/:id",
  authenticate,
  authorizeRoles("SELLER", "ADMIN"),
  validateRequest(serviceIdSchema),
  ServiceController.deleteService,
);

export const ServiceRoutes = router;
