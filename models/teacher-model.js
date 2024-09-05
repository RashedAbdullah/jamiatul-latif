import mongoose from "mongoose";

const TeacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  teacherSerial: {
    type: Number,
    required: true,
  },
  post: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  about: {
    type: String,
    required: true,
  },
  joined_date: {
    type: String,
    required: false,
  },
  resignation: {
    type: Object,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  masters: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  number: {
    type: String,
    required: true,
  },
  socilas: {
    type: Array,
    required: false,
  },
});

const teacherModel =
  mongoose.models.teachers || mongoose.model("teachers", TeacherSchema);

export { teacherModel };
