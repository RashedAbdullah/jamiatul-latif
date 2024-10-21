import mongoose from "mongoose";

const madrashaSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const MadrashaModel =
  mongoose.models.Madrasha || mongoose.model("Madrasha", madrashaSchema);

export { MadrashaModel };
