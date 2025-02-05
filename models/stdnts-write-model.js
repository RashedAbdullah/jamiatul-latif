import mongoose from "mongoose";

const studentWritingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    academicYearId: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    texts: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const studentWriteModel =
  mongoose.models.Students_text ||
  mongoose.model("Students_text", studentWritingSchema);

export { studentWriteModel };
