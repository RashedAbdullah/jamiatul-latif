import mongoose from "mongoose";

const examSchema = new mongoose.Schema({
  examName: {
    type: String,
    required: true,
  },
});

const examModel = mongoose.models.Exam || mongoose.model("Exam", examSchema);

export { examModel };
