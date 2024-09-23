import { connectMongo } from "@/database/connection";
import { classModel } from "@/models/class-model";
import { examModel } from "@/models/exam-model";
import { ResultModel } from "@/models/result-model";
import { studentModel } from "@/models/student-model";
import { academicYearModel } from "@/models/year-model";
import { replaceMongoIdInArray } from "@/utils/data-utils";

const getResults = async () => {
  try {
    await connectMongo();

    const students = await ResultModel.find({})
      .populate({
        path: "classId",
        model: classModel,
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
    return replaceMongoIdInArray(students);
  } catch (err) {
    console.log(err.message);
  }
};

export { getResults };
