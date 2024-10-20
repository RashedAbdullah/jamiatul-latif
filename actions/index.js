"use server";

import { signIn } from "@/auth";
import { connectMongo } from "@/database/connection";
import { curriculumModel } from "@/models/curriculum-model";
import { replaceMongoIdInArray } from "@/utils/data-utils";

const handleSignin = async (formData) => {
  try {
    await connectMongo();
    const response = signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    return response;
  } catch (err) {
    throw new Error(err);
  }
};

const getCurriculums = async () => {
  try {
    await connectMongo();

    const curriculums = await curriculumModel.find().lean();
    return replaceMongoIdInArray(curriculums);
  } catch (err) {
    console.log(err.message);
  }
};

export { handleSignin, getCurriculums };
