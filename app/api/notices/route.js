import { connectMongo } from "@/database/connection";
import { noticeModel } from "@/models/notice-model";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    // Connection:
    await connectMongo();

    // Model:
    const notices = await noticeModel.find({});

    // Retun:
    return NextResponse.json({ success: true, data: notices });
  } catch (err) {
    console.error("Error fetching notices:", err);

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
