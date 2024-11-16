import { connectMongo } from "@/database/connection";
import { examModel } from "@/models/exam-model";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    // Connect to MongoDB
    await connectMongo();

    // Fetch all exams
    const exams = await examModel.find({});

    // Return success response with fetched exams
    return NextResponse.json({ success: true, data: exams });
  } catch (err) {
    // Log the actual error
    console.error("Error fetching exams:", err);

    // Default error response
    let errorMessage = "An unexpected error occurred.";
    let statusCode = 500;

    // Handle specific error cases
    if (err.name === "MongoNetworkError") {
      errorMessage = "Database connection failed. Please try again later.";
      statusCode = 503; // Service unavailable
    } else if (err.name === "ValidationError") {
      errorMessage = "Invalid data provided. Please check your input.";
      statusCode = 400; // Bad request
    } else if (err.name === "CastError") {
      errorMessage = "Invalid query parameters or data format.";
      statusCode = 400; // Bad request
    } else if (err.name === "DocumentNotFoundError") {
      errorMessage = "Requested data not found in the database.";
      statusCode = 404; // Not found
    }

    // Return error response
    return NextResponse.json(
      {
        success: false,
        message: errorMessage,
      },
      { status: statusCode }
    );
  }
};
