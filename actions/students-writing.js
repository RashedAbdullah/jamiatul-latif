const { connectMongo } = require("@/database/connection");
const { studentWriteModel } = require("@/models/stdnts-write-model");

const getStudentsWriting = async () => {
  try {
    await connectMongo();

    const studentsWriting = await studentWriteModel.find({});

    return studentsWriting;
  } catch (err) {
    console.log(err.message);
  }
};

const getSingleStudentTexts = async (id) => {
  try {
    await connectMongo();

    const studentsWriting = await studentWriteModel.findById(id);

    return studentsWriting;
  } catch (err) {
    console.log(err.message);
  }
};

const createStudentsWriting = async (texts) => {
  try {
    await connectMongo();

    const data = await studentWriteModel.create(texts);

    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export { getSingleStudentTexts, getStudentsWriting, createStudentsWriting };
