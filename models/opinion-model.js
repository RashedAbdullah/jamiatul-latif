import mongoose from "mongoose";

const opinionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      required: false,
    },
    opinion: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const opinionModel =
  mongoose.models.Opinion || mongoose.model("Opinion", opinionSchema);

export { opinionModel };
