import { connectMongo } from "@/database/connection";
import { articleModel } from "@/models/article-model";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export const GET = async (req) => {
  try {
    // Connect to MongoDB
    await connectMongo();

    // Parse URL for the limit parameter
    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get("limit"), 10) || 0; // Default to 0 if limit is not specified

    // Fetch articles with the specified limit
    const articles = await articleModel
      .find({})
      .sort({ publishedAt: -1 })
      .limit(limit);

    // Return the response as JSON
    return NextResponse.json({ success: true, data: articles });
  } catch (err) {
    console.error("Error fetching articles:", err);

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
