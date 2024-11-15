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

    // Extract yearId and classId from the query parameters
    const url = new URL(req.url);
    const yearId = url.searchParams.get("yearId");
    const classId = url.searchParams.get("classId");

    // Validate yearId and classId
    if (!yearId || !mongoose.Types.ObjectId.isValid(yearId)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid or missing academic year ID.",
        },
        { status: 400 }
      );
    }

    if (!classId || !mongoose.Types.ObjectId.isValid(classId)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid or missing class ID.",
        },
        { status: 400 }
      );
    }

    // Fetch students by year ID and class ID
    const studentsByYearAndClass = await studentModel
      .find({
        classNameId: classId,
        academicYearId: yearId,
      })
      .populate({
        path: "classNameId",
        model: classModel,
      })
      .populate({
        path: "academicYearId",
        model: academicYearModel,
      });

    // Check if students exist for the year and class
    if (!studentsByYearAndClass.length) {
      return NextResponse.json(
        {
          success: false,
          message:
            "No students found for the given academic year and class ID.",
        },
        { status: 404 }
      );
    }

    // Return the fetched data
    return NextResponse.json({ success: true, data: studentsByYearAndClass });
  } catch (err) {
    console.error("Error fetching students:", err);

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
