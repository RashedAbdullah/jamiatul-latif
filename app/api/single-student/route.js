import { connectMongo } from "@/database/connection";
import { classModel } from "@/models/class-model";
import { studentModel } from "@/models/student-model";
import { academicYearModel } from "@/models/year-model";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export const GET = async (req) => {
  try {
    // Connect to the database
    await connectMongo();

    // Extract studentId from the query parameters
    const url = new URL(req.url);
    const studentId = url.searchParams.get("studentId");

    // Validate studentId
    if (!studentId || !mongoose.Types.ObjectId.isValid(studentId)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid or missing student ID.",
        },
        { status: 400 }
      );
    }

    // Fetch the single student by ID
    const singleStudent = await studentModel
      .findById(studentId)
      .populate({
        path: "classNameId",
        model: classModel,
      })
      .populate({
        path: "academicYearId",
        model: academicYearModel,
      });

    // Check if the student exists
    if (!singleStudent) {
      return NextResponse.json(
        {
          success: false,
          message: "Student not found with the given ID.",
        },
        { status: 404 }
      );
    }

    // Return the fetched data
    return NextResponse.json({ success: true, data: singleStudent });
  } catch (err) {
    console.error("Error fetching student:", err);

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
