import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectMongo } from "@/database/connection";
import { expoTokenModel } from "@/models/expo-token-model";

export async function POST(request) {
  try {
    await connectMongo();
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json({ error: "Token is required" }, { status: 400 });
    }

    const existingToken = await expoTokenModel.findOne({ token });

    if (!existingToken) {
      await expoTokenModel.create({ token });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error saving push token:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
