import mongoose from "mongoose";

const workerSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    occupationId: { type: String, required: true },
    email: { type: String, required: true, lowercase: true, unique: true },
    phoneNumber: { type: Number, required: true },
    images: { type: Array },
    categoryId: { type: String, required: true },
    description: { type: String, required: true },
    postalCode: { type: String, required: true },
    city: { type: String, required: true },
    location: {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true },
    },
    hourlyRate: { type: Number, required: true },
    workRange: { type: Number, required: true },
    password: { type: String, required: true, unique: true, minLength: 6 },
  },
  { timestamps: true }
);

const Worker = mongoose.model("workers", workerSchema);

export default Worker;
