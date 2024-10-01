import { connectMongo } from "@/database/connection";
import { fatwaCategoryModel } from "@/models/fatwa-category-model";
import { replaceMongoIdInArray } from "@/utils/data-utils";

const createFatwaCategory = async (category) => {
  try {
    await connectMongo();

    const createdCategory = fatwaCategoryModel.create(category);
    return createdCategory;
  } catch (err) {
    console.log(err.message);
  }
};

const getFatwaCategories = async () => {
  try {
    await connectMongo();

    // const categories = fatwaCategoryModel.find({}).lean();
    // return replaceMongoIdInArray(categories);
    const categories = fatwaCategoryModel.find({});
    return categories;
  } catch (err) {
    console.log(err.message);
  }
};

export { getFatwaCategories, createFatwaCategory };
