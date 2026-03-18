import express, { Application, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { applicationRoutes } from "./routes";
import { globalErrorHandler } from "./middlewares/globalErrorHandler";

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// application routes
app.use("/api/v1", applicationRoutes);
app.use(globalErrorHandler);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello from OnlineHat!");
});

export default app;
