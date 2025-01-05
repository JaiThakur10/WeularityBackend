import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// CORS configuration to allow requests from localhost:5176
const corsOptions = {
  origin: "*", // Allow only your frontend origin
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  credentials: true, // Allow cookies to be sent with requests
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
