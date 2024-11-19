import { connectMongo } from "@/database/connection";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { articleModel } from "@/models/article-model";
import { FatwaModel } from "@/models/fatwa-model";
import { fatwaCategoryModel } from "@/models/fatwa-category-model";
import { iftaQuestionModel } from "@/models/fatwa-question-model";

export const dynamic = "force-dynamic";

export const GET = async (req) => {
  try {
    // Connect to the database
    await connectMongo();

    // Extract studentId from the query parameters
    const url = new URL(req.url);
    const fatwaId = url.searchParams.get("fatwaId");

    // Validate fatwaId
    if (!fatwaId || !mongoose.Types.ObjectId.isValid(fatwaId)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid or missing Fatwa ID.",
        },
        { status: 400 }
      );
    }

    // Fetch the single Fatwa by ID
    const singleFatwa = await FatwaModel.findById(fatwaId)
      .populate({
        path: "categoryId",
        model: fatwaCategoryModel,
      })
      .populate({
        path: "questionerId",
        model: iftaQuestionModel,
      });

    // Check if the student exists
    if (!singleFatwa) {
      return NextResponse.json(
        {
          success: false,
          message: "Student not found with the given ID.",
        },
        { status: 404 }
      );
    }

    // Return the fetched data
    return NextResponse.json({ success: true, data: singleFatwa });
  } catch (err) {
    console.error("Error fetching fatwa:", err);

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
