const { connectMongo } = require("@/database/connection");
const { examModel } = require("@/models/exam-model");
const { replaceMongoIdInArray } = require("@/utils/data-utils");

const getExams = async () => {
  try {
    await connectMongo();

    const exams = await examModel.find({}).lean();
    return replaceMongoIdInArray(exams);
  } catch (err) {
    console.log(err.message);
  }
};

export { getExams };
