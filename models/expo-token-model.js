import mongoose from "mongoose";

const expoTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
});

const expoTokenModel =
  mongoose.models.ExpoToken || mongoose.model("ExpoToken", expoTokenSchema);

export { expoTokenModel };
