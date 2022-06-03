import express from "express";
import {
  getOccupations,
  getOccupationsByCategory,
  createOccupation,
} from "../controllers/occupationsController.js";

const occupationsRouter = express.Router();

occupationsRouter.get("/", getOccupations);
occupationsRouter.get("/:categoryId", getOccupationsByCategory);
occupationsRouter.post("/", createOccupation);

export default occupationsRouter;
