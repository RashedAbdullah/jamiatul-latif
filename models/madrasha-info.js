import mongoose from "mongoose";

const infoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const infoModel = mongoose.models.Info || mongoose.model("Info", infoSchema);

export { infoModel };
