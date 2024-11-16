import { connectMongo } from "@/database/connection";
import { academicYearModel } from "@/models/year-model";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    await connectMongo();

    const years = await academicYearModel.find();

    return NextResponse.json({ success: true, data: years });
  } catch (err) {
    console.log("Error fetching acdemic years", err);
  }
};
