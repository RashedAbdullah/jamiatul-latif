import { connectMongo } from "@/database/connection";
import { FatwaModel } from "@/models/fatwa-model";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    // Connection:
    await connectMongo();

    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get("limit")) || 0;

    // Model:
    const fatwas = await FatwaModel.find({}).limit(limit);

    // Retun:
    return NextResponse.json({ success: true, data: fatwas });
  } catch (err) {
    console.error("Error fetching fatwas:", err);

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
