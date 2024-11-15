import { connectMongo } from "@/database/connection";
import { classModel } from "@/models/class-model";
import { examModel } from "@/models/exam-model";
import { ResultModel } from "@/models/result-model";
import { studentModel } from "@/models/student-model";
import { academicYearModel } from "@/models/year-model";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-utils";
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

      .lean();

    return replaceMongoIdInArray(results);
  } catch (err) {
    console.log(err.message);
  }
};

const getResultsByYearAndClass = async (yearId, classId) => {
  try {
    await connectMongo();

    const results = await ResultModel
      .find({
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

      .lean();

    return replaceMongoIdInArray(results);
  } catch (err) {
    console.log(err.message);
  }
};

const getResultByStudentId = async (studentId) => {

  try {
    await connectMongo();

    const result = await ResultModel
      .findOne({
      studentId: {
        _id: new mongoose.Types.ObjectId(studentId),
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
      .lean();

    return replaceMongoIdInObject(result);
  } catch (err) {
    console.log(err.message);
  }
};

const updateResult = async (resultId, updatedMarks) => {
  try {
    await connectMongo();

    const updateResult = await ResultModel.findByIdAndUpdate(
      resultId,
      updatedMarks
    );
    return updateResult;
  } catch (err) {
    console.log(err.message);
  }
};

const createResult = async (result) => {
  try {
    await connectMongo();

    const results = await ResultModel.create(result);

    return results;
  } catch (err) {
    console.log(err.message);
  }
};

export {
  getResults,
  getResultsByYear,
  getResultsByYearAndClass,
  getResultByStudentId,
  createResult,
  updateResult,
};
