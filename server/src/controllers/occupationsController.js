import Occupation from "../models/Occupation.js";
import { logError } from "../util/logging.js";

export const getOccupations = async (req, res) => {
  try {
    const occupations = await Occupation.find({});
    res.status(200).json({
      success: true,
      result: occupations,
    });
  } catch (error) {
    logError(error);
    res.status(500).json({
      success: false,
      msg: "Could not to get occupations, try again later",
    });
  }
};

export const getOccupationsByCategory = async (req, res) => {
  try {
    const occupations = await Occupation.find({
      categoryId: req.params.categoryId,
    });
    res.status(200).json({
      success: true,
      result: occupations,
    });
  } catch (error) {
    logError(error);
    res.status(500).json({
      success: false,
      msg: "Could not to get occupations, try again later",
    });
  }
};

export const createOccupation = async (req, res) => {
  //Checking if occupation is already in the database
  const occupationExists = await Occupation.findOne({ name: req.body.name });
  if (occupationExists) {
    return res.status(400).json({
      success: false,
      msg: "Occupation is already exists",
    });
  }
  const occupation = new Occupation(req.body);
  try {
    await occupation.save();
    res
      .status(200)
      .json({ success: true, msg: "Occupation has created successfully" });
  } catch (error) {
    logError(error);
    res.status(500).json({
      success: false,
      msg: "Unable to create occupation, try again later",
    });
  }
};
