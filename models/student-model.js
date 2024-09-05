import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  className: {
    type: String,
    required: true,
  },
  classSerial: {
    type: Number,
    required: true,
  },
  academicYear: {
    type: String,
    required: true,
  },
  students: {
    type: Array,
    required: false,
  },
});

const studentModel =
  mongoose.models.students || mongoose.model("students", StudentSchema);

export { studentModel };
