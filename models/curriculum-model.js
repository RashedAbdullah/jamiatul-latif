import mongoose from "mongoose";

const CurriculumSchema = new mongoose.Schema({
  className: {
    type: String,
    required: true,
  },

  content: {
    type: String,
    required: true,
  },
});

const curriculumModel =
  mongoose.models.curriculums ||
  mongoose.model("curriculums", CurriculumSchema);

export { curriculumModel };
