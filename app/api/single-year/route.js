import { connectMongo } from "@/database/connection";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { academicYearModel } from "@/models/year-model";

export const dynamic = "force-dynamic";

export const GET = async (req) => {
  try {
    // Connect to the database
    await connectMongo();

    // Extract studentId from the query parameters
    const url = new URL(req.url);
    const yearId = url.searchParams.get("yearId");

    // Validate yearId
    if (!yearId || !mongoose.Types.ObjectId.isValid(yearId)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid or missing Year ID.",
        },
        { status: 400 }
      );
    }

    // Fetch the single Fatwa by ID
    const singleYear = await academicYearModel.findById(yearId);

    // Check if the student exists
    if (!singleYear) {
      return NextResponse.json(
        {
          success: false,
          message: "Student not found with the given ID.",
        },
        { status: 404 }
      );
    }

    // Return the fetched data
    return NextResponse.json({ success: true, data: singleYear });
  } catch (err) {
    console.error("Error fetching academic year:", err);

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
