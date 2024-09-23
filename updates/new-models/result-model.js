import mongoose from "mongoose";

const ResultSchema = new mongoose.Schema({
  classId: {
    type: mongoose.Schema.ObjectId,
    ref: "classes",
  },
  studentId: {
    type: mongoose.Schema.ObjectId,
    ref: "Student",
  },
  examNameId: {
    type: mongoose.Schema.ObjectId,
    ref: "Exam",
  },
  yearId: {
    type: mongoose.Schema.ObjectId,
    ref: "Year",
  },
  results: {
    type: Array,
    required: true,
  },
});

const ResultModel =
  mongoose.models.Result || mongoose.model("Result", ResultSchema);

export { ResultModel };
