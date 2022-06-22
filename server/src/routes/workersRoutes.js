import express from "express";
import { getWorkers } from "../controllers/workersController.js";

const workersRouter = express.Router();

workersRouter.post("/filter", getWorkers);
export default workersRouter;
