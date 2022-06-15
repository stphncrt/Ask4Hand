import express from "express";
import {
  getWorkersByCategory,
  getWorkersBySearch,
  getWorkersByFilter,
} from "../controllers/workersController.js";

const workersRouter = express.Router();

workersRouter.get("/find/:categoryId", getWorkersByCategory);
workersRouter.get("/search/:occupationId", getWorkersBySearch);
workersRouter.post("/filter", getWorkersByFilter);
export default workersRouter;
