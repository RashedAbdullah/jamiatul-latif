const { connectMongo } = require("@/database/connection");
const { infoModel } = require("@/models/madrasha-info");

const getInfo = async () => {
  try {
    await connectMongo();

    const infos = await infoModel.find({});
    return infos;
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

const getSingleInfo = async (id) => {
  try {
    await connectMongo();

    const info = await infoModel.findById(id);
    return info;
  } catch (err) {
    console.log(err.message);
  }
};

const updateInfo = async (id, data) => {
  try {
    await connectMongo();

    const info = await infoModel.findByIdAndUpdate(id, data);
    return info;
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

const creatInfo = async (data) => {
  try {
    await connectMongo();

    const info = await infoModel.create(data);
    return info;
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

export { getInfo, getSingleInfo, updateInfo, creatInfo };
