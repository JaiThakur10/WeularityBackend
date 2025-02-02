import express from "express";
import cors from "cors";
import { V1Route } from "./version/v1";
import { appRateLimitter, errorHandler } from "./utilis";

const createServer = () => {
  const app = express();

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
