// src/modules/service/service.route.ts
import express from "express";
import { authenticate } from "../../middlewares/auth.middleware";
import { authorizeRoles } from "../../middlewares/role.middleware";
import { validateRequest } from "../../middlewares/validateRequest";
import { createServiceSchema, serviceIdSchema } from "./service.validation";
import { ServiceController } from "./service.controller";

import { FileUploadHelper } from "../../helpers/fileUploadHelper";

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
  FileUploadHelper.upload.array("images", 5),
  (req, res, next) => {
    if (req.body.data) {
      req.body = JSON.parse(req.body.data);
    }
    next();
  },
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
