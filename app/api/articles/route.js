import { connectMongo } from "@/database/connection";
import { articleModel } from "@/models/article-model";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    await connectMongo();

    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get("limit")) || 0;

    const articles = await articleModel.find({}).limit(limit);

    return NextResponse.json({ success: true, data: articles });
  } catch (err) {
    console.error("Error fetching articles:", err);

    const errorMessage = err.message || "An unexpected error occurred";
    const statusCode = err.name === "MongoNetworkError" ? 503 : 500;

    return new NextResponse.json(
      {
        success: false,
        message: errorMessage,
      },
      { status: statusCode }
    );
  }
};
