import express from "express";
import cors from "cors";

import authRouter from "./routes/authRoutes.js";
import profileRouter from "./routes/profileRoutes.js";
import categoriesRouter from "./routes/categoriesRoutes.js";
import workersRouter from "./routes/workersRoutes.js";
import occupationsRouter from "./routes/occupationsRoutes.js";
import cookieParser from "cookie-parser";
import { verifyToken } from "./middleware/verifyToken.js";

// Create an express server
const app = express();

// Tell express to use the json middleware
app.use(express.json());
// Allow everyone to access our API. In a real application, we would need to restrict this!
const corsConfig = {
  origin: true,
  credentials: true,
};
app.use(cors(corsConfig));
app.use(cookieParser());

/****** Attach routes ******/
/**
 * We use /api/ at the start of every route!
 * As we also host our client code on heroku we want to separate the API endpoints.
 */
app.use("/api/auth", authRouter);
app.use("/api/profile", verifyToken, profileRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/worker", workersRouter);
app.use("/api/occupations", occupationsRouter);

export default app;
