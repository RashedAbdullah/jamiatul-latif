import { connectMongo } from "@/database/connection";
import { classModel } from "@/models/class-model";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectMongo();
    const classes = await classModel.find({});

    return NextResponse.json({ success: true, data: classes });
  } catch (err) {
    console.log("Error fetching classes", err);
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
