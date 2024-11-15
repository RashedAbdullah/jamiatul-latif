import { connectMongo } from "@/database/connection";
import { classModel } from "@/models/class-model";
import { studentModel } from "@/models/student-model";
import { academicYearModel } from "@/models/year-model";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    // Connection:
    await connectMongo();

    // Model:
    const students = await studentModel
      .find({})
      .populate({
        path: "classNameId",
        model: classModel,
      })
      .populate({
        path: "academicYearId",
        model: academicYearModel,
      });

    // Retun:
    return NextResponse.json({ success: true, data: students });
  } catch (err) {
    console.error("Error fetching students:", err);

    const errorMessage = err.message || "An unexpected error occurred";
    const statusCode = err.name === "MongoNetworkError" ? 503 : 500;

    return new NextResponse.json(
      {
        success: false,
        message: errorMessage,
      },
      { status: statusCode }
    );
  }
};
