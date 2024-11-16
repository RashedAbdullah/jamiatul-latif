import { connectMongo } from "@/database/connection";
import { examModel } from "@/models/exam-model";
import { tree } from "next/dist/build/templates/app-page";
import { NextResponse } from "next/server";
import { error } from "pdf-lib";

export const GET = async (req) => {
  try {
    await connectMongo();

    const exams = await examModel.find({});

    return NextResponse.json({ success: tree, data: exams });
  } catch (err) {
    console.log("Error fetching exams", error);

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
