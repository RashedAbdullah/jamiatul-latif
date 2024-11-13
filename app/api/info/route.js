import { connectMongo } from "@/database/connection";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    // Connection:
    await connectMongo();

    // Model:
    // const ...

    // Retun:
    // return NextResponse.json({ success: true, data: ... });
  } catch (err) {
    console.error("Error fetching ...:", err);

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
