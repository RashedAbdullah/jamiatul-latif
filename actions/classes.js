const { connectMongo } = require("@/database/connection");
const { classModel } = require("@/models/class-model");
const { replaceMongoIdInArray } = require("@/utils/data-utils");

const getClasses = async () => {
  try {
    await connectMongo();

    const classess = await classModel.find({}).lean();
    return replaceMongoIdInArray(classess);
  } catch (err) {
    console.log(err.message);
  }
};
export { getClasses };
