import Worker from "../models/Worker.js";
import { logError } from "../util/logging.js";
import { registerValidation } from "../util/authValidation.js";
import bcrypt from "bcrypt";

export const getWorker = async (req, res) => {
  try {
    const worker = await Worker.findOne({ _id: req.params.id });
    res.status(200).json({
      success: true,
      result: worker,
    });
  } catch (error) {
    logError(error);
    res.status(500).json({
      success: false,
      msg: "Could not to get worker, try again later",
    });
  }
};

export const updateWorker = async (req, res) => {
  // validation
  const { error } = registerValidation(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      msg: error.details[0].message,
    });
  }

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  const worker = await Worker.findOne({ _id: req.params.id });

  worker.firstName = req.body.firstName;
  worker.lastName = req.body.lastName;
  worker.occupationId = req.body.occupationId;
  worker.email = req.body.email;
  worker.phoneNumber = req.body.phoneNumber;
  worker.images = req.body.images;
  worker.categoryId = req.body.categoryId;
  worker.description = req.body.description;
  worker.postalCode = req.body.postalCode;
  worker.city = req.body.city;
  worker.location = req.body.location;
  worker.hourlyRate = req.body.hourlyRate;
  worker.workRange = req.body.workRange;
  worker.password = hashPassword;

  try {
    const updatedWorker = await worker.save();
    res.status(200).json({
      success: true,
      result: updatedWorker,
      msg: "Profile has been updated successfully",
    });
  } catch (error) {
    logError(error);
    res.status(500).json({
      success: false,
      msg: "Unable to update worker, try again later",
    });
  }
};

export const deleteWorker = async (req, res) => {
  const worker = await Worker.findOne({ _id: req.params.id });

  try {
    await worker.remove();
    res.status(200).json({
      success: true,
      msg: "Worker has been deleted successfully",
    });
  } catch (error) {
    logError(error);
    res.status(500).json({
      success: false,
      msg: "Unable to update worker, try again later",
    });
  }
};
