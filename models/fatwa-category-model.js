import mongoose from "mongoose";

const fatwaCategorySchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
});
const fatwaCategoryModel =
  mongoose.models.fatwaCategory ||
  mongoose.model("fatwaCategory", fatwaCategorySchema);

export { fatwaCategoryModel };
