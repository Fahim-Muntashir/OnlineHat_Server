// src/modules/admin/admin.route.ts
import express from "express";
import { AdminController } from "./admin.controller";
import { authenticate } from "../../middlewares/auth.middleware";
import { authorizeRoles } from "../../middlewares/role.middleware";
import { validateRequest } from "../../middlewares/validateRequest";
import { changeRoleSchema, adminUserIdSchema } from "./admin.validation";

const router = express.Router();

// All admin routes are protected
router.use(authenticate, authorizeRoles("ADMIN"));

// GET /admin/stats
router.get("/stats", AdminController.getStats);

// GET /admin/users
router.get("/users", AdminController.getAllUsers);

// PATCH /admin/users/:id/role
router.patch(
  "/users/:id/role",
  validateRequest(changeRoleSchema),
  AdminController.changeUserRole,
);

// DELETE /admin/users/:id
router.delete(
  "/users/:id",
  validateRequest(adminUserIdSchema),
  AdminController.deleteUser,
);

export const AdminRoutes = router;
