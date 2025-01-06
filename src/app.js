import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// CORS configuration to allow requests from weularity-frontend.vercel.app
const corsOptions = {
  origin: "*", // Allow the frontend domain (no path)
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  credentials: true, // Allow cookies to be sent with requests
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

app.options("*", cors(corsOptions)); // Enable preflight for all routes

app.use((req, res, next) => {
  console.log("Incoming Request Origin:", req.headers.origin);
  console.log(
    "Access-Control-Allow-Origin:",
    res.getHeader("Access-Control-Allow-Origin")
  );
  next();
});

app.use(
  express.json({
    limit: "16kb",
  })
);

app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(express.static("public"));

app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Deployed successfully");
});

// routes import
import userRoutes from "./routes/userRoutes.js";

// routes declaration
app.use("/api/users", userRoutes);

export { app };
