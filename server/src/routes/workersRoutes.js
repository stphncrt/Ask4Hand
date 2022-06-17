import express from "express";
import {
  getWorkersBySearch,
  getWorkersByFilter,
} from "../controllers/workersController.js";

const workersRouter = express.Router();

workersRouter.post("/search", getWorkersBySearch);
workersRouter.post("/filter", getWorkersByFilter);
export default workersRouter;
