import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  desc: {
    type: String,
    required: true,
  },
});

const departmentModel =
  mongoose.models.Department || mongoose.model("Department", departmentSchema);

export { departmentModel };
