"use server";

import { connectMongo } from "@/database/connection";
import { FatwaModel } from "@/models/fatwa-model";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-utils";

const getAllFatwa = async () => {
  try {
    await connectMongo();

    const allFatwa = await FatwaModel.find().lean();
    return replaceMongoIdInArray(allFatwa);
  } catch (err) {
    console.log(err.message);
  }
};

const getFatwaById = async (fatwaId) => {
  try {
    await connectMongo();

    const Fatwa = await FatwaModel.findById(fatwaId).lean();
    return replaceMongoIdInObject(Fatwa);
  } catch (err) {
    console.log(err.message);
  }
};

export { getAllFatwa, getFatwaById };
