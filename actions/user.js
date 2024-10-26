const { connectMongo } = require("@/database/connection");
const { userModel } = require("@/models/user-model");

const getSingleUserByEmail = async (email) => {
  try {
    await connectMongo();
    const singleUser = await userModel.findOne({ email });
    return singleUser;
  } catch (err) {
    console.log(err.message);
  }
};

export { getSingleUserByEmail };
