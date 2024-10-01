import { connectMongo } from "@/database/connection";
import { opinionModel } from "@/models/opinion-model";
import { replaceMongoIdInArray } from "@/utils/data-utils";

const getOpinions = async () => {
  try {
    await connectMongo();

    const opinions = await opinionModel.find({}).lean();
    return replaceMongoIdInArray(opinions);
  } catch (err) {
    console.log(err.message);
  }
};

export { getOpinions };
