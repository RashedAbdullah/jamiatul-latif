import mongoose from "mongoose";

const academicYearSchema = new mongoose.Schema({
  academicYearSchema: {
    type: String,
    required: true,
  },
});

const academicYearModel =
  mongoose.models.Year || mongoose.model("Year", academicYearSchema);

export { academicYearModel };
