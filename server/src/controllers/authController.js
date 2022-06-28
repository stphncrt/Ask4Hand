import Worker from "../models/Worker.js";
import { logError } from "../util/logging.js";
import { registerValidation, loginValidation } from "../util/authValidation.js";
import bcrypt from "bcrypt";
import { generateJwt } from "../util/jwtSign.js";

export const createWorker = async (req, res) => {
  //Validation
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
    occupationId: req.body.occupationId,
    email: req.body.email,
    profileImage: req.body.profileImage,
    phoneNumber: req.body.phoneNumber,
    images: req.body.images,
    categoryId: req.body.categoryId,
    description: req.body.description,
    postalCode: req.body.postalCode,
    city: req.body.city,
    location: req.body.location,
    hourlyRate: req.body.hourlyRate,
    workRange: req.body.workRange,
    password: hashPassword,
  });
  try {
    await worker.save();
    //Create token
    const token = generateJwt(worker._id);
    res.cookie("token", token, { httpOnly: true });
    res.status(201).json({
      success: true,
      result: { worker },
      msg: "Worker has been registered successfully",
    });
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
  const token = generateJwt(worker._id);
  res.cookie("token", token, { httpOnly: true });
  delete worker.password;
  res.status(200).json({
    success: true,
    result: { worker },
    msg: "Successful Login",
  });
};

export const logoutWorker = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({
    success: true,
    result: null,
    msg: "Successful Logout",
  });
};
