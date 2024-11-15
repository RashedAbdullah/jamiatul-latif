import { connectMongo } from "@/database/connection";
import { teacherModel } from "@/models/teacher-model";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    // Connect to the database
    await connectMongo();

    // Extract the teacher ID from the query parameters
    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message: "Teacher ID is required.",
        },
        { status: 400 }
      );
    }

    // Fetch the teacher by ID
    const teacher = await teacherModel.findById(id);

    if (!teacher) {
      return NextResponse.json(
        {
          success: false,
          message: "Teacher not found.",
        },
        { status: 404 }
      );
    }

    // Return the fetched data
    return NextResponse.json({ success: true, data: teacher });
  } catch (err) {
    console.error("Error fetching teacher:", err);

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
