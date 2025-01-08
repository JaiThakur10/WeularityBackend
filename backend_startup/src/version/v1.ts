import { Router } from "express";
import { HealthCheckController } from "../controller/health.controller";
import { UserControllerRouter } from "../controller/user.controller";

const router = Router();

router.use("/health", HealthCheckController);
router.use("/user", UserControllerRouter);

export { router as V1Route };
