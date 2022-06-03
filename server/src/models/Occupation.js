import mongoose from "mongoose";

const occupationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  categoryId: { type: String, required: true },
});

const Occupation = mongoose.model("occupations", occupationSchema);

export default Occupation;
