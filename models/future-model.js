import mongoose from "mongoose";

const futurePlanSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  desc: {
    type: String,
    required: true,
  },
});

const futurePlanModel =
  mongoose.models.FuturePlan || mongoose.model("FuturePlan", futurePlanSchema);

export { futurePlanModel };
