import { connectMongo } from "@/database/connection";
import { departmentModel } from "@/models/department-model";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    // Connection:
    await connectMongo();

    // Model:
    const departments = await departmentModel.find({});

    // Retun:
    return NextResponse.json({ success: true, data: departments });
  } catch (err) {
    console.error("Error fetching defartments:", err);

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
