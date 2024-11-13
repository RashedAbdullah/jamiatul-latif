import { connectMongo } from "@/database/connection";
import { futurePlanModel } from "@/models/future-model";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    // Connection:
    await connectMongo();

    // Model:
    const futurePlans = await futurePlanModel.find({});

    // Retun:
    return NextResponse.json({ success: true, data: futurePlans });
  } catch (err) {
    console.error("Error fetching future plans:", err);

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
