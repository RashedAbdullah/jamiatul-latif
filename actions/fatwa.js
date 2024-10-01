import { connectMongo } from "@/database/connection";
import { FatwaModel } from "@/models/fatwa-model";
import { replaceMongoIdInArray } from "@/utils/data-utils";

const createFatwa = async (fatwa) => {
  try {
    await connectMongo();

    const createdFatwa = await FatwaModel.create(fatwa);
    return createdFatwa;
  } catch (err) {
    console.log(err.message);
  }
};

const getFatwas = async () => {
  try {
    await connectMongo();

    const fatwas = await FatwaModel.find({}).lean();
    return replaceMongoIdInArray(fatwas);
  } catch (err) {
    console.log(err.message);
  }
};

export { createFatwa, getFatwas };
