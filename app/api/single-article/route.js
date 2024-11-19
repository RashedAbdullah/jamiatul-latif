import { connectMongo } from "@/database/connection";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { articleModel } from "@/models/article-model";

export const dynamic = "force-dynamic";

export const GET = async (req) => {
  try {
    // Connect to the database
    await connectMongo();

    // Extract studentId from the query parameters
    const url = new URL(req.url);
    const articleId = url.searchParams.get("articleId");

    // Validate articleId
    if (!articleId || !mongoose.Types.ObjectId.isValid(articleId)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid or missing Article ID.",
        },
        { status: 400 }
      );
    }

    // Fetch the single Article by ID
    const singleArticle = await articleModel.findById(articleId);

    // Check if the student exists
    if (!singleArticle) {
      return NextResponse.json(
        {
          success: false,
          message: "Student not found with the given ID.",
        },
        { status: 404 }
      );
    }

    // Return the fetched data
    return NextResponse.json({ success: true, data: singleArticle });
  } catch (err) {
    console.error("Error fetching article:", err);

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
