import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";

// Routes
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import workoutRoutes from "./routes/workoutRoutes.js";
import nutritionRoutes from "./routes/nutritionRoutes.js";
import trainerRoutes from "./routes/trainerRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import planRoutes from "./routes/planRoutes.js"; 

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true
}));

app.use(express.json());

// Routes
app.use("/api/plans", planRoutes);     // ✅ VERY IMPORTANT
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/workouts", workoutRoutes);
app.use("/api/nutrition", nutritionRoutes);
app.use("/api/trainers", trainerRoutes);
app.use("/api/payments", paymentRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
