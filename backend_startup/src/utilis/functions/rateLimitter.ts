import rateLimit from "express-rate-limit";

const appRateLimitter = rateLimit({
  windowMs: 2 * 60 * 1000,
  max: 5,
  message: "Sumbited to may form wait for some time",
  standardHeaders: true,
  legacyHeaders: false,
});

export { appRateLimitter };
