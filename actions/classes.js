const { connectMongo } = require("@/database/connection");
const { classModel } = require("@/models/class-model");
const {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} = require("@/utils/data-utils");

const getClasses = async () => {
  try {
    await connectMongo();

    const classess = await classModel.find({}).lean();
    return replaceMongoIdInArray(classess);
  } catch (err) {
    console.log(err.message);
  }
};

const getSingleClassByClss = async (cls) => {
  try {
    await connectMongo();

    const clss = await classModel.findOne({ class: cls }).lean();

    return replaceMongoIdInObject(clss);
  } catch (err) {
    console.log(`Single class error: ${err}`);
  }
};
export { getClasses, getSingleClassByClss };
