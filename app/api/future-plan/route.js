import { connectMongo } from "@/database/connection";
import { futurePlanModel } from "@/models/future-model";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    // Connect to MongoDB
    await connectMongo();

    // Fetch future plans
    const futurePlans = await futurePlanModel.find({});
    console.log("Fetched future plans:", futurePlans.length);

    // Return the fetched plans
    return NextResponse.json({ success: true, data: futurePlans });
  } catch (err) {
    console.error("Error fetching future plans:", err);

    // Prepare error response details
    const errorMessage = err.message || "An unexpected error occurred.";
    const statusCode = err.name === "MongoNetworkError" ? 503 : 500;

    // Return error response
    return NextResponse.json(
      {
        success: false,
        message: errorMessage,
      },
      { status: statusCode }
    );
  }
};
