import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 5,
    max: 100,
  },
  email: {
    type: String,
    required: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: {
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
});

const UserModel = mongoose.models.users || mongoose.model("user", UserSchema);

export { UserModel };
