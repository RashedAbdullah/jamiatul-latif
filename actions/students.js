import { connectMongo } from "@/database/connection";
import { studentModel } from "@/models/student-model";
import { academicYearModel } from "@/models/year-model";
import { classModel } from "@/models/class-model";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-utils";
import mongoose from "mongoose";

const getStudents = async () => {
  try {
    await connectMongo();

    const students = await studentModel
      .find({})
      .populate({
        path: "classNameId",
        model: classModel,
      })
      .populate({
        path: "academicYearId",
        model: academicYearModel,
      })
      .lean();
    return replaceMongoIdInArray(students);
  } catch (err) {
    console.log(err.message);
  }
};

const getStudentsByYear = async (yearId) => {
  try {
    await connectMongo();

    const studentsByYear = await studentModel
      .find({
        academicYearId: {
          _id: new mongoose.Types.ObjectId(yearId),
        },
      })
      .populate({
        path: "classNameId",
        model: classModel,
      })
      .populate({
        path: "academicYearId",
        model: academicYearModel,
      })
      .lean();

    return replaceMongoIdInArray(studentsByYear);
  } catch (err) {
    console.error("Error fetching students by year:", err.message);
  }
};

const getStudentsByYearAndClass = async (classId, yearId) => {
  try {
    await connectMongo();

    const studentsByClss = await studentModel
      .find({
        classNameId: {
          _id: new mongoose.Types.ObjectId(classId),
        },
        academicYearId: {
          _id: new mongoose.Types.ObjectId(yearId),
        },
      })
      .populate({
        path: "classNameId",
        model: classModel,
      })
      .populate({
        path: "academicYearId",
        model: academicYearModel,
      })
      .lean();

    return replaceMongoIdInArray(studentsByClss);
  } catch (err) {
    console.error("Error fetching students by year:", err.message);
  }
};

const getStudentBYDakhila = async (dakhilaNo) => {
  try {
    await connectMongo();

    const studentByDakhila = await studentModel
      .findOne({
        dakhila: dakhilaNo,
      })
      .populate({
        path: "classNameId",
        model: classModel,
      })
      .populate({
        path: "academicYearId",
        model: academicYearModel,
      })
      .lean();

    return replaceMongoIdInObject(studentByDakhila);
  } catch (err) {
    console.error("Error fetching student by dakhila:", err.message);
  }
};

const createNewStudent = async (studentData) => {
  try {
    await connectMongo();

    const student = await studentModel.create(studentData);

    return student;
  } catch (err) {
    console.log(err.message);
  }
};

const getStudentById = async (id) => {
  try {
    await connectMongo();

    const singleStudent = await studentModel
      .findById(id)
      .populate({
        path: "classNameId",
        model: classModel,
      })
      .populate({
        path: "academicYearId",
        model: academicYearModel,
      })
      .lean();

    return replaceMongoIdInObject(singleStudent);
  } catch (err) {
    console.log(err.message);
  }
};

const updateSingleStudent = async (id, updatedStudent) => {
  try {
    await connectMongo();

    const singleStudent = await studentModel.findByIdAndUpdate(
      id,
      updatedStudent
    );

    return singleStudent;
  } catch (err) {
    console.log(err.message);
  }
};

const getDeleteStudent = async (id) => {
  try {
    await connectMongo();

    const singleStudent = await studentModel.findByIdAndDelete(
      id,
      updatedStudent
    );

    return singleStudent;
  } catch (err) {
    console.log(err.message);
  }
};

export {
  getStudents,
  getStudentsByYear,
  getStudentsByYearAndClass,
  getStudentBYDakhila,
  createNewStudent,
  getStudentById,
  updateSingleStudent,
  getDeleteStudent,
};
