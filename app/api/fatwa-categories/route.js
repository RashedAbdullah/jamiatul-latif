import { connectMongo } from "@/database/connection";
import { articleModel } from "@/models/article-model";
import { fatwaCategoryModel } from "@/models/fatwa-category-model";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    // Connect to MongoDB
    await connectMongo();

    const data = await fatwaCategoryModel.find({});

    // Return the response as JSON
    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("Error fetching categories:", err);

    // Prepare error message and status code
    const errorMessage = err.message || "An unexpected error occurred";
    const statusCode = err.name === "MongoNetworkError" ? 503 : 500;

    // Return error response as JSON (no 'new' keyword for NextResponse.json)
    return NextResponse.json(
      {
        success: false,
        message: errorMessage,
      },
      { status: statusCode }
    );
  }
};
