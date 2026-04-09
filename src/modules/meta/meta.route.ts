import { Router } from "express";
import { MetaController } from "./meta.controller";

const router = Router();

router.get("/stats", MetaController.getSystemStats);

export const MetaRoutes = router;
