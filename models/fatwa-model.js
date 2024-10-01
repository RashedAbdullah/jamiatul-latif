import mongoose from "mongoose";

const FatwaSchema = new mongoose.Schema({
  fatwa_no: {
    type: String,
    required: true,
  },
  categoryId: {
    type: mongoose.Schema.ObjectId,
    ref: "fatwaCategory",
  },
  questionerId: {
    type: mongoose.Schema.ObjectId,
    ref: "IftaQuestion",
  },
  answer: {
    type: String,
    required: true,
  },
  references: {
    type: String,
    required: true,
  },
});
const FatwaModel =
  mongoose.models.Fatwa || mongoose.model("Fatwa", FatwaSchema);

export { FatwaModel };
