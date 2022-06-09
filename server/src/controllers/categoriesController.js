import Category from "../models/Category.js";
import { logError } from "../util/logging.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.status(200).json({
      success: true,
      result: categories,
    });
  } catch (error) {
    logError(error);
    res.status(500).json({
      success: false,
      msg: "Could not to get categories, try again later",
    });
  }
};

export const createCategory = async (req, res) => {
  //Checking if category is already in the database
  const categoryExist = await Category.findOne({ name: req.body.name });
  if (categoryExist) {
    return res.status(400).json({
      success: false,
      msg: "Category is already exists",
    });
  }
  const category = new Category(req.body);
  try {
    await category.save();
    res
      .status(200)
      .json({ success: true, msg: "Category has been created successfully" });
  } catch (error) {
    logError(error);
    res.status(500).json({
      success: false,
      msg: "Unable to create category, try again later",
    });
  }
};
