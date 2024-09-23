import { connectMongo } from "@/database/connection";
const { academicYearModel } = require("@/models/year-model");
const {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} = require("@/utils/data-utils");

const getYear = async () => {
  try {
    await connectMongo();

    const years = await academicYearModel.find({}).lean();

    return replaceMongoIdInArray(years);
  } catch (err) {
    console.log(err.message);
  }
};

const getSingleYear = async (yearId) => {
  try {
    await connectMongo();

    const year = await academicYearModel.findById(yearId).lean();

    return replaceMongoIdInObject(year);
  } catch (err) {
    console.log(err.message);
  }
};

export { getYear, getSingleYear };
