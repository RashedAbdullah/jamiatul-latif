import { connectMongo } from "@/database/connection";
import { MadrashaModel } from "@/models/about-madrasha-model";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    await connectMongo();

    const data = await MadrashaModel.find({});

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("Error fetching about madrasha:", err);

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
