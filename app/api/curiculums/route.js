import { connectMongo } from "@/database/connection";
import { curriculumModel } from "@/models/curriculum-model";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    // Connection:
    await connectMongo();

    // Model:
    const curriculums = await curriculumModel.find({})

    // Retun:
    return NextResponse.json({ success: true, data: curriculums });
  } catch (err) {
    console.error("Error fetching curriculums:", err);

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
