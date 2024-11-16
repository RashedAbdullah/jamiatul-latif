import { connectMongo } from "@/database/connection";
import { fatwaCategoryModel } from "@/models/fatwa-category-model";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    // Connect to MongoDB
    await connectMongo();

    // Fetch data from the Fatwa Category model
    const data = await fatwaCategoryModel.find({});

    // Return the response as JSON with a success status
    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("Error fetching categories:", err);

    // Default error message and status code
    let errorMessage = "An unexpected error occurred.";
    let statusCode = 500;

    // Specific error handling
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

    // Return error response as JSON
    return NextResponse.json(
      {
        success: false,
        message: errorMessage,
      },
      { status: statusCode }
    );
  }
};
