import mongoose from "mongoose";

const FatwaSchema = new mongoose.Schema({
  fatwa_no: {
    type: String,
    required: true,
  },
  categoryEn: {
    type: String,
    required: true,
  },
  categoryBn: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  references: {
    type: Array,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  questioner: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});
const FatwaModel =
  mongoose.models.all_fatwa || mongoose.model("all_fatwa", FatwaSchema);

export { FatwaModel };
