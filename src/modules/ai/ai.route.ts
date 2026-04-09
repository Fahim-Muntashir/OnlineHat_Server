import { Router } from "express";
import { AIController } from "./ai.controller";

const router = Router();

router.post("/generate-description", AIController.generateDescription);

export const AIRoutes = router;
