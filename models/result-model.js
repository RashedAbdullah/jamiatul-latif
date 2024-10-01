import mongoose from "mongoose";

const ResultSchema = new mongoose.Schema({
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
  classId: {
    type: mongoose.Schema.ObjectId,
    ref: "classes",
  },
  marks: [
    {
      book: {
        type: String,
        required: true,
      },
      mark: {
        type: Number,
        required: true,
      },
    },
  ],
});

const ResultModel =
  mongoose.models.Result || mongoose.model("Result", ResultSchema);

export { ResultModel };
