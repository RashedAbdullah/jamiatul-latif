import { connectMongo } from "@/database/connection";
import { fatwaCategoryModel } from "@/models/fatwa-category-model";
import { FatwaModel } from "@/models/fatwa-model";
import { iftaQuestionModel } from "@/models/fatwa-question-model";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-utils";
import mongoose from "mongoose";

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

    const fatwas = await FatwaModel.find({})
      .populate({
        path: "categoryId",
        model: fatwaCategoryModel,
      })
      .populate({
        path: "questionerId",
        model: iftaQuestionModel,
      })
      .sort({ createdAt: -1 })
      .lean();
    return replaceMongoIdInArray(fatwas);
  } catch (err) {
    console.log(err.message);
  }
};

const getFatwasByCategoryId = async (categoryId) => {
  try {
    await connectMongo();

    const fatwasByCategory = await FatwaModel.find({
      categoryId: new mongoose.Types.ObjectId(categoryId),
    })
      .populate({
        path: "categoryId",
        model: fatwaCategoryModel,
      })
      .populate({
        path: "questionerId",
        model: iftaQuestionModel,
      })
      .lean();
    return replaceMongoIdInArray(fatwasByCategory);
  } catch (err) {
    console.log(err.message);
  }
};

const getSingleFatwa = async (id) => {
  try {
    await connectMongo();
    const fatwa = FatwaModel.findById(id)
      .populate({
        path: "categoryId",
        model: fatwaCategoryModel,
      })
      .populate({
        path: "questionerId",
        model: iftaQuestionModel,
      });

    return fatwa;
  } catch (err) {
    console.log(err.message);
  }
};

const updateFatwa = async (id, data) => {
  try {
    await connectMongo();

    const fatwa = FatwaModel.findByIdAndUpdate(id, data);
    return fatwa;
  } catch (err) {
    console.log(err.message);
  }
};

export {
  createFatwa,
  getFatwas,
  getFatwasByCategoryId,
  getSingleFatwa,
  updateFatwa,
};
