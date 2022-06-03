import express from "express";
import {
  createWorker,
  loginWorker,
  logoutWorker,
} from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.post("/register", createWorker);
authRouter.post("/login", loginWorker);
authRouter.get("/logout", logoutWorker);

export default authRouter;
