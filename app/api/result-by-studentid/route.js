import mongoose from "mongoose";
import { connectMongo } from "@/database/connection";
import { classModel } from "@/models/class-model";
import { examModel } from "@/models/exam-model";
import { ResultModel } from "@/models/result-model";
import { studentModel } from "@/models/student-model";
import { academicYearModel } from "@/models/year-model";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export const GET = async (req) => {
  try {
    // Connect to the database
    await connectMongo();

    // Extract `studentId` from query parameters
    const url = new URL(req.url);
    const studentId = url.searchParams.get("studentId");

    // Validate `studentId`
    if (!studentId || !mongoose.Types.ObjectId.isValid(studentId)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid or missing student ID.",
        },
        { status: 400 }
      );
    }

    // Fetch results by `studentId`
    const resultsByStudentId = await ResultModel.findOne({
      studentId: new mongoose.Types.ObjectId(studentId),
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
      });

    // Check if results exist
    if (!resultsByStudentId) {
      return NextResponse.json(
        {
          success: false,
          message: "No results found for the given student ID.",
        },
        { status: 404 }
      );
    }

    // Return the fetched data
    return NextResponse.json({ success: true, data: resultsByStudentId });
  } catch (err) {
    console.error("Error fetching results:", err);

    const errorMessage = err.message || "An unexpected error occurred";
    const statusCode = err.name === "MongoNetworkError" ? 503 : 500;

    return NextResponse.json(
      {
        success: false,
        message: errorMessage,
      },
      { status: statusCode }
    );
  }
};
