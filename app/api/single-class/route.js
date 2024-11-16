import { connectMongo } from "@/database/connection";
import { classModel } from "@/models/class-model";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    await connectMongo();

    const url = new URL(req.url);
    const classId = url.searchParams.get("classId");

    const singleClass = await classModel.findById(classId);

    return NextResponse.json({ success: true, data: singleClass });
  } catch (err) {
    console.error("Errror fetching single class", singleClass);

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
