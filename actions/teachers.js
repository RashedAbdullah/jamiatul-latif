const { connectMongo } = require("@/database/connection");
const { teacherModel } = require("@/models/teacher-model");
const {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} = require("@/utils/data-utils");

const getTeachers = async () => {
  try {
    await connectMongo();

    const teachers = await teacherModel.find().lean();
    return replaceMongoIdInArray(teachers);
  } catch (err) {
    console.log(err.message);
  }
};

const getSingleTeacher = async (teacherId) => {
  try {
    await connectMongo();

    const teacher = await teacherModel.findById(teacherId).lean();
    return replaceMongoIdInObject(teacher);
  } catch (err) {
    console.log(err.message);
  }
};

const updateTeacher = async (id, data) => {
  try {
    await connectMongo();

    const teacher = await teacherModel.findByIdAndUpdate(id, data);
    return teacher;
  } catch (err) {
    console.log(err.message);
  }
};

const createTeacher = async (data) => {
  try {
    await connectMongo();

    const newTeacher = await teacherModel.create(data);
    return newTeacher;
  } catch (err) {
    console.log(err.message);
  }
};

export { getSingleTeacher, getTeachers, updateTeacher, createTeacher };
