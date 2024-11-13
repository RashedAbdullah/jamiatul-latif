import { connectMongo } from "@/database/connection";
import { teacherModel } from "@/models/teacher-model";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    await connectMongo();

    const teachers = await teacherModel.find({});

    return NextResponse.json({ success: true, data: teachers });
  } catch (err) {
    console.error("Error fetching teachers:", err);

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
