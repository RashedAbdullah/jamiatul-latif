import { connectMongo } from "@/database/connection";
import { curriculumModel } from "@/models/curriculum-model";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    // Connect to the MongoDB database
    await connectMongo();

    // Fetch all curriculums from the database
    const curriculums = await curriculumModel.find({});

    // Return success response with fetched data
    return NextResponse.json({ success: true, data: curriculums });
  } catch (err) {
    // Log the error for debugging purposes
    console.error("Error fetching curriculums:", err);

    // Initialize default error message and status code
    let errorMessage = "An unexpected error occurred";
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

    // Return a structured error response
    return NextResponse.json(
      {
        success: false,
        message: errorMessage,
      },
      { status: statusCode }
    );
  }
};
