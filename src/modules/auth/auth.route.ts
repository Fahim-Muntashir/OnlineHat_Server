// src/modules/auth/auth.route.ts
import express from "express";
import { AuthController } from "./auth.controller";

const router = express.Router();

// POST /api/auth/login
router.post("/login", AuthController.loginUser);

export const AuthRoutes = router;
