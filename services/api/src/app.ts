
import express from "express";
import cors from "cors";
import healthRoutes from "./routes/health.routes";

const app = express();

// Allow communication with our Next.js frontend
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
  })
);

// Allow Express to read JSON request bodies
app.use(express.json());

// Welcome route
app.get("/", (_req, res) => {
  res.json({
    message: "Welcome to HighCareer API",
    status: "running",
  });
});

// Health-check route
app.use("/api/health", healthRoutes);

export default app;
