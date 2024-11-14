import { connectMongo } from "@/database/connection";
import { fatwaCategoryModel } from "@/models/fatwa-category-model";
import { FatwaModel } from "@/models/fatwa-model";
import { iftaQuestionModel } from "@/models/fatwa-question-model";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    // Connect to the database
    await connectMongo();

    // Parse the URL for the limit query parameter
    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get("limit")) || 0;

    // Fetch fatwas with an optional limit
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
