"use server";

import { signIn } from "@/auth";
import { connectMongo } from "@/database/connection";
import { curriculumModel } from "@/models/curriculum-model";
import { FatwaModel } from "@/models/fatwa-model";
import { studentModel } from "@/models/student-model";
import { teacherModel } from "@/models/teacher-model";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-utils";

const handleSignin = async (formData) => {
  try {
    await connectMongo();
    const response = signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    return response;
  } catch (err) {
    throw new Error(err);
  }
};

const getTeachers = async () => {
  try {
    await connectMongo();

    const teachers = await teacherModel.find().lean();
    return replaceMongoIdInArray(teachers);
  } catch (err) {
    console.log(err.message);
  }
};

const getStudents = async () => {
  try {
    await connectMongo();

    const students = await studentModel.find().lean();
    return replaceMongoIdInArray(students);
  } catch (err) {
    console.log(err.message);
  }
};

const getStudentsByClass = async (classId) => {
  try {
    await connectMongo();

    const studentByclass = await studentModel.findById(classId).lean();
    return replaceMongoIdInObject(studentByclass);
  } catch (err) {
    console.log(err.message);
  }
};

const getStudentByDakhila = async (dakhila) => {
  try {
    await connectMongo();

    const studentByDakhila = await studentModel
      .findOne({
        "students.dakhila": dakhila,
      })
      .lean();
    return replaceMongoIdInObject(studentByDakhila);
  } catch (err) {
    console.log(err.message);
  }
};

const getCurriculums = async () => {
  try {
    await connectMongo();

    const curriculums = await curriculumModel.find().lean();
    return replaceMongoIdInArray(curriculums);
  } catch (err) {
    console.log(err.message);
  }
};

const getAllFatwa = async () => {
  try {
    await connectMongo();

    const allFatwa = await FatwaModel.find().lean();
    return replaceMongoIdInArray(allFatwa);
  } catch (err) {
    console.log(err.message);
  }
};

const getFatwaById = async (fatwaId) => {
  try {
    await connectMongo();

    const Fatwa = await FatwaModel.findById(fatwaId).lean();
    return replaceMongoIdInObject(Fatwa);
  } catch (err) {
    console.log(err.message);
  }
};

export {
  handleSignin,
  getTeachers,
  getStudents,
  getStudentsByClass,
  getStudentByDakhila,
  getCurriculums,
  getAllFatwa,
  getFatwaById,
};
