import express from "express";
import { createWorker, loginWorker } from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.post("/register", createWorker);
authRouter.post("/login", loginWorker);

export default authRouter;
