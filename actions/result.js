import { connectMongo } from "@/database/connection";
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
      .lean();

    return replaceMongoIdInArray(results);
  } catch (err) {
    console.log(err.message);
  }
};

const getResultsByClass = async (yearId, cls) => {
  try {
    await connectMongo();

    const results = await ResultModel.find({
      yearId: {
        _id: new mongoose.Types.ObjectId(yearId),
      },
      classId: {},
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
      .lean();

    return replaceMongoIdInArray(results);
  } catch (err) {
    console.log(err.message);
  }
};

const getResultsByYearAndClass = async (year, className) => {
  try {
    await connectMongo();

    const results = await ResultModel.find({
      "studentId.academicYearId.academicYear": year, // Match the year
      "studentId.classNameId.class": className, // Match the class
    })
      .populate({
        path: "studentId",
        model: studentModel,
      })
      .populate({
        path: "examNameId",
        model: examModel,
      })
      .lean();

    return results; // Ensure the result array is returned
  } catch (err) {
    console.error(err.message);
    return [];
  }
};

export { getResults, getResultsByYear, getResultsByYearAndClass };
