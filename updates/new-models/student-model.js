import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  father: {
    type: String,
    required: true,
  },
  academicYearId: {
    type: mongoose.Schema.ObjectId,
    ref: "Year",
  },
  dakhila: {
    type: String,
    required: true,
  },
  classNameId: {
    type: mongoose.Schema.ObjectId,
    ref: "classes",
  },
  image: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  report: {
    type: String,
    required: false,
  },
});

const studentModel =
  mongoose.models.Student || mongoose.model("Student", studentSchema);

export { studentModel };
