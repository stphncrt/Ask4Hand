import Worker from "../models/Worker.js";
import { logError } from "../util/logging.js";
import { registerValidation, loginValidation } from "../util/authValidation.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createWorker = async (req, res) => {
  // validation
  const { error } = registerValidation(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      msg: error.details[0].message,
    });
  }
  //Checking if worker is already in the database
  const workerExist = await Worker.findOne({ email: req.body.email });
  if (workerExist) {
    return res.status(400).json({
      success: false,
      msg: "Email is already exists",
    });
  }

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  const worker = new Worker({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    title: req.body.title,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    birthYear: req.body.birthYear,
    profileImage: req.body.profileImage,
    categoryId: req.body.categoryId,
    description: req.body.description,
    street: req.body.street,
    houseNumber: req.body.houseNumber,
    postalCode: req.body.postalCode,
    city: req.body.city,
    location: req.body.location,
    hourlyRate: req.body.hourlyRate,
    workRange: req.body.workRange,
    password: hashPassword,
  });
  try {
    const savedWorker = await worker.save();
    res.status(200).json({ success: true, result: savedWorker });
  } catch (error) {
    logError(error);
    res.status(500).json({
      success: false,
      msg: "Unable to create worker, try again later",
    });
  }
};

export const loginWorker = async (req, res) => {
  // validation
  const { error } = loginValidation(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      msg: error.details[0].message,
    });
  }

  //Checking if worker exists
  const worker = await Worker.findOne({ email: req.body.email });
  if (!worker) {
    return res.status(400).json({
      success: false,
      msg: "Email is not found",
    });
  }

  //check password
  const validPassword = await bcrypt.compare(
    req.body.password,
    worker.password
  );
  if (!validPassword) {
    return res.status(400).json({
      success: false,
      msg: "Invalid password",
    });
  }

  //Create token
  const token = jwt.sign({ id: worker._id }, process.env.TOKEN_KEY, {
    expiresIn: "1h",
  });
  res.cookie("jwt", token, { httpOnly: true, expiresIn: 60 * 60 });

  res.status(200).json({
    success: true,
    result: { id: worker._id },
    message: "Successful Login",
  });
};

export const logoutWorker = async (req, res) => {
  res.cookie("jwt", "", { expiresIn: 1 });

  res.status(200).json({ success: true, result: "Logged out" });
};
