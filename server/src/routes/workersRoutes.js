import express from "express";
import {
  getWorkersByCategory,
  getWorkersBySearch,
} from "../controllers/workersController.js";

const workersRouter = express.Router();

workersRouter.get("/find", getWorkersByCategory);
workersRouter.get("/search", getWorkersBySearch);

export default workersRouter;
