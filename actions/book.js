import { classModel } from "@/models/class-model";
const { connectMongo } = require("@/database/connection");
const { bookModel } = require("@/models/book-model");
const { replaceMongoIdInArray } = require("@/utils/data-utils");

const getBooks = async () => {
  try {
    await connectMongo();

    const books = await bookModel
      .find({})
      .populate({
        path: "classId",
        model: classModel,
      })
      .lean();

    return replaceMongoIdInArray(books);
  } catch (err) {
    console.log(err.message);
  }
};

export { getBooks };
