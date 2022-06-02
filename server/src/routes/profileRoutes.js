import express from "express";
import {
  getWorker,
  updateWorker,
  deleteWorker,
} from "../controllers/profileController.js";

const profileRouter = express.Router();

profileRouter.get("/:id", getWorker);
profileRouter.put("/:id", updateWorker);
profileRouter.delete("/:id", deleteWorker);

export default profileRouter;
