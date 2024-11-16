import { connectMongo } from "@/database/connection";
import { fatwaCategoryModel } from "@/models/fatwa-category-model";
import { FatwaModel } from "@/models/fatwa-model";
import { iftaQuestionModel } from "@/models/fatwa-question-model";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export const GET = async (req) => {
  try {
    // Connect to the database
    await connectMongo();

    // Parse the URL to get query parameters
    const { searchParams } = new URL(req.url);
    const limitParam = searchParams.get("limit");

    // Validate and parse the limit parameter
    let limit = 0; // Default limit: no limit
    if (limitParam) {
      limit = parseInt(limitParam, 10);
      if (isNaN(limit) || limit < 0) {
        return NextResponse.json(
          {
            success: false,
            message: "The 'limit' parameter must be a non-negative integer.",
          },
          { status: 400 } // Bad Request
        );
      }
    }

    // Fetch fatwas from the database
    const fatwas = await FatwaModel.find({})
      .populate({
        path: "categoryId",
        model: fatwaCategoryModel,
      })
      .populate({
        path: "questionerId",
        model: iftaQuestionModel,
      })
      .sort({ createdAt: -1 })
      .limit(limit);

    // Return the fetched data
    return NextResponse.json({ success: true, data: fatwas });
  } catch (err) {
    console.error("Error fetching fatwas:", err);

    // Default error message and status code
    let errorMessage = "An unexpected error occurred.";
    let statusCode = 500;

    // Handle specific errors
    if (err.name === "MongoNetworkError") {
      errorMessage =
        "Failed to connect to the database. Please try again later.";
      statusCode = 503; // Service Unavailable
    } else if (err.name === "ValidationError") {
      errorMessage = "Invalid data provided. Please check your input.";
      statusCode = 400; // Bad Request
    } else if (err.name === "CastError") {
      errorMessage = "Invalid query parameters or data format.";
      statusCode = 400; // Bad Request
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
