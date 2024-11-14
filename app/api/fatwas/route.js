import { connectMongo } from "@/database/connection";
import { FatwaModel } from "@/models/fatwa-model";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    // Connect to the database
    await connectMongo();

    // Parse the URL for the limit query parameter
    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get("limit")) || 0; // Default to 0 (no limit)

    // Fetch fatwas with an optional limit
    const fatwas = await FatwaModel.find({}).limit(limit);

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
