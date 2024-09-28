import { connectMongo } from "@/database/connection";
import { bookModel } from "@/models/book-model";
import { classModel } from "@/models/class-model";
import { examModel } from "@/models/exam-model";
import { ResultModel } from "@/models/result-model";
import { studentModel } from "@/models/student-model";
import { academicYearModel } from "@/models/year-model";
import { replaceMongoIdInArray } from "@/utils/data-utils";
import mongoose from "mongoose";

const getResults = async () => {
  try {
    await connectMongo();

    const students = await ResultModel.find({})
      .populate({
        path: "studentId",
        model: studentModel,
      })
      .populate({
        path: "examNameId",
        model: examModel,
      })
      .populate({
        path: "yearId",
        model: academicYearModel,
      })
      .populate({
        path: "classId",
        model: classModel,
      })
      .populate({
        path: "marks.book",
        model: bookModel,
      })
      .lean();
    return replaceMongoIdInArray(students);
  } catch (err) {
    console.log(err.message);
  }
};

const getResultsByYear = async (yearId) => {
  try {
    await connectMongo();

    const results = await ResultModel.find({
      yearId: {
        _id: new mongoose.Types.ObjectId(yearId),
      },
    })
      .populate({
        path: "studentId",
        model: studentModel,
      })
      .populate({
        path: "examNameId",
        model: examModel,
      })
      .populate({
        path: "yearId",
        model: academicYearModel,
      })
      .populate({
        path: "classId",
        model: classModel,
      })
      .populate({
        path: "marks.book",
        model: bookModel,
      })
      .lean();

    return replaceMongoIdInArray(results);
  } catch (err) {
    console.log(err.message);
  }
};

const getResultsByYearAndClass = async (yearId, classId) => {
  try {
    await connectMongo();

    const results = await ResultModel.find({
      yearId: {
        _id: new mongoose.Types.ObjectId(yearId),
      },
      classId: {
        _id: new mongoose.Types.ObjectId(classId),
      },
    })
      .populate({
        path: "studentId",
        model: studentModel,
      })
      .populate({
        path: "examNameId",
        model: examModel,
      })
      .populate({
        path: "yearId",
        model: academicYearModel,
      })
      .populate({
        path: "classId",
        model: classModel,
      })
      .populate({
        path: "marks.book",
        model: bookModel,
      })
      .lean();

    return replaceMongoIdInArray(results);
  } catch (err) {
    console.log(err.message);
  }
};

export { getResults, getResultsByYear, getResultsByYearAndClass };
