import { connectMongo } from "@/database/connection";
import { classModel } from "@/models/class-model";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    // Attempt to connect to the database
    await connectMongo();

    // Fetch all classes from the database
    const classes = await classModel.find({});

    // Return the classes data with success response
    return NextResponse.json({ success: true, data: classes });
  } catch (err) {
    // Log the error for debugging
    console.error("Error fetching classes:", err);

    // Define default error response
    let errorMessage = "An unexpected error occurred";
    let statusCode = 500;

    // Handle specific error types
    if (err.name === "MongoNetworkError") {
      errorMessage = "Database connection error. Please try again later.";
      statusCode = 503; // Service unavailable
    } else if (err.name === "ValidationError") {
      errorMessage = "Validation error in the database operation.";
      statusCode = 400; // Bad request
    } else if (err.name === "CastError") {
      errorMessage = "Invalid query or data type used in the request.";
      statusCode = 400; // Bad request
    }

    // Send an error response
    return NextResponse.json(
      { success: false, message: errorMessage },
      { status: statusCode }
    );
  }
};
