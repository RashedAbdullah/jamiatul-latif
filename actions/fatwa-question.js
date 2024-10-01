const { connectMongo } = require("@/database/connection");
const { iftaQuestionModel } = require("@/models/fatwa-question-model");
const { replaceMongoIdInArray } = require("@/utils/data-utils");

const getFatwaQuestions = async () => {
  try {
    await connectMongo();

    const questions = await iftaQuestionModel.find({}).lean();
    return replaceMongoIdInArray(questions);
  } catch (err) {
    console.log(err.message);
  }
};

const createFatwaQuestion = async (question) => {
  try {
    await connectMongo();

    const createdQuestion = await iftaQuestionModel.create(question);
    return createdQuestion;
  } catch (err) {
    console.log(err.message);
  }
};

export { getFatwaQuestions, createFatwaQuestion };
