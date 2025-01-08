import express from "express";
import cors from "cors";
import { V1Route } from "./version/v1";
import { errorHandler } from "./utilis";
import rateLimit from "express-rate-limit";

const createServer = () => {
  const app = express();

  const appRateLimitter = rateLimit({
    windowMs: 2 * 60 * 1000,
    max: 3,
    message: "Sumbited to may form wait for some time",
    standardHeaders: true,
    legacyHeaders: false,
  });

  app.use(express.json());
  app.use(
    cors({
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
      allowedHeaders: ["Content-Type", "Authorization"],
    }),
  );

  app.use("/api/v1", appRateLimitter, V1Route);

  app.use(errorHandler);
  return app;
};

export default createServer;
