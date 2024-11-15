import mongoose from "mongoose";
import { connectMongo } from "@/database/connection";
import { classModel } from "@/models/class-model";
import { examModel } from "@/models/exam-model";
import { ResultModel } from "@/models/result-model";
import { studentModel } from "@/models/student-model";
import { academicYearModel } from "@/models/year-model";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    // Connect to the database
    await connectMongo();

    // Extract `yearId` from the query parameters
    const url = new URL(req.url);
    const yearId = url.searchParams.get("yearId");

    // Validate `yearId`
    if (!yearId || !mongoose.Types.ObjectId.isValid(yearId)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid or missing academic year ID.",
        },
        { status: 400 }
      );
    }

    // Fetch results by year ID
    const resultsByYear = await ResultModel.find({
      yearId: new mongoose.Types.ObjectId(yearId),
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
    if (!resultsByYear.length) {
      return NextResponse.json(
        {
          success: false,
          message: "No results found for the given academic year ID.",
        },
        { status: 404 }
      );
    }

    // Return the fetched data
    return NextResponse.json({ success: true, data: resultsByYear });
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
