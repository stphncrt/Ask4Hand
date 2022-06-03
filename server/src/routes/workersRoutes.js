import express from "express";
import {
  getWorkersByCategory,
  getWorkersBySearch,
  getWorkersByFilter,
} from "../controllers/workersController.js";

const workersRouter = express.Router();

workersRouter.get("/find", getWorkersByCategory);
workersRouter.get("/search", getWorkersBySearch);
workersRouter.get("/filter", getWorkersByFilter);
export default workersRouter;
