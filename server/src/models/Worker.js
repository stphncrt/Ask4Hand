import mongoose from "mongoose";

//import validateAllowedFields from "../util/validateAllowedFields.js";

const workerSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    title: { type: String, required: true },
    email: { type: String, required: true, lowercase: true, unique: true },
    phoneNumber: { type: Number, required: true },
    dateOfBirth: { type: String, required: true },
    profileImage: { type: String },
    categoryId: { type: String, required: true },
    description: { type: String, required: true },
    street: { type: String, required: true },
    houseNumber: { type: Number, required: true },
    postalCode: { type: String, required: true },
    city: { type: String, required: true },
    location: {
      long: { type: Number, required: true },
      lat: { type: Number, required: true },
    },
    hourlyRate: { type: Number, required: true },
    workRange: { type: Number, required: true },
    password: { type: String, required: true, unique: true, minLength: 6 },
  },
  { timestamps: true }
);

const Worker = mongoose.model("workers", workerSchema);

/* export const validateUser = (userObject) => {
  const errorList = [];
  const allowedKeys = ["name", "email"];

  const validatedKeysMessage = validateAllowedFields(userObject, allowedKeys);

  if (validatedKeysMessage.length > 0) {
    errorList.push(validatedKeysMessage);
  }

  if (userObject.name == null) {
    errorList.push("name is a required field");
  }

  if (userObject.email == null) {
    errorList.push("email is a required field");
  }

  return errorList;
}; */

export default Worker;
