import mongoose from "mongoose";

const iftaQuestionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: false,
    },
    contact: {
      type: String,
      required: false,
    },
    question: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const iftaQuestionModel =
  mongoose.models.IftaQuestion ||
  mongoose.model("IftaQuestion", iftaQuestionSchema);

export { iftaQuestionModel };
