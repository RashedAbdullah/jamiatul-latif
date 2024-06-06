import { databseConnection } from "@/database/connection";
import { userModel } from "@/models/user-model";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

const POST = async (req) => {
  try {
    await databseConnection();
    const { name, email, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 5);
    const newUser = {
      name,
      email,
      password: hashedPassword,
    };

    // Create new user:
    await userModel.create(newUser);

    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, { status: 500 });
  }
};

export { POST };
