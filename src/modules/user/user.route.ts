// src/modules/user/user.route.ts
import express from "express";
import { UserController } from "./user.controller";
import { authenticate } from "../../middlewares/auth.middleware";
import { authorizeRoles } from "../../middlewares/role.middleware";
import { validateRequest } from "../../middlewares/validateRequest";

const router = express.Router();

// Public
router.post("/register", UserController.createUser);

router.get("/notifications", authenticate, UserController.getNotifications);

// ⚠️ /all MUST come before /:id
router.delete(
  "/all",
  authenticate,
  authorizeRoles("ADMIN"),
  UserController.deleteAllUsers,
);

// Admin only
router.get(
  "/",
  authenticate,
  authorizeRoles("ADMIN"),
  UserController.getAllUsers,
);

router.get(
  "/:id",
  authenticate,
  authorizeRoles("ADMIN"),
  UserController.getUserById,
);

router.delete(
  "/:id",
  authenticate,
  authorizeRoles("ADMIN"),
  UserController.deleteUser,
);

export const UserRoutes = router;
