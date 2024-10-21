const { connectMongo } = require("@/database/connection");
const { MadrashaModel } = require("@/models/about-madrasha-model");

const getMadrashaInfo = async () => {
  try {
    await connectMongo();

    const data = await MadrashaModel.find({});
    return data;
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

const getSingleMadrashaInfo = async (id) => {
  try {
    await connectMongo();
    const data = await MadrashaModel.findById(id);
    return data;
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

const updateMadrashaInfo = async (id, data) => {
  try {
    await connectMongo();
    const info = await MadrashaModel.findByIdAndUpdate(id, data);
    return info;
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

const createMadrashaInfo = async (data) => {
  try {
    await connectMongo();
    const info = await MadrashaModel.create(data);
    return info;
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

export {
  getMadrashaInfo,
  getSingleMadrashaInfo,
  updateMadrashaInfo,
  createMadrashaInfo,
};
