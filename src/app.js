import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// CORS configuration to allow requests from weularity-frontend.vercel.app
const allowedOrigins = [
  "https://weularity-frontend.vercel.app/getstarted",
  "http://localhost:3000", // Add local development origin if needed
];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

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
