import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    activeDate: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const noticeModel =
  mongoose.models.Notice || mongoose.model("Notice", noticeSchema);

export { noticeModel };
