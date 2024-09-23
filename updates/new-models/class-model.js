import mongoose from "mongoose";

const classSchema = new mongoose.Schema(
  {
    class: {
      type: String,
      required: true,
    },
  }
);

const classModel =
  mongoose.models.classes || mongoose.model("classes", classSchema);

export { classModel };
