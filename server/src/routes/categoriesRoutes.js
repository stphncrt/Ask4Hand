import express from "express";
import {
  getCategories,
  createCategory,
} from "../controllers/categoriesController.js";

const categoriesRouter = express.Router();

categoriesRouter.get("/", getCategories);
categoriesRouter.post("/", createCategory);

export default categoriesRouter;
