const { connectMongo } = require("@/database/connection");
const { articleModel } = require("@/models/article-model");

const getArticles = async () => {
  try {
    await connectMongo();

    const articles = await articleModel.find({}).sort({ publishedAt: -1 });
    return articles;
  } catch (err) {
    console.log(err.message);
  }
};

const getSingleArticle = async (id) => {
  try {
    await connectMongo();

    const article = await articleModel.findById(id);
    return article;
  } catch (err) {
    console.log(err.message);
  }
};

const updateSingleArticle = async (id, data) => {
  try {
    await connectMongo();

    const article = await articleModel.findByIdAndUpdate(id, data);
    return article;
  } catch (err) {
    console.log(err.message);
  }
};

const createSingleArticle = async (data) => {
  try {
    await connectMongo();

    const article = await articleModel.create(data);
    return article;
  } catch (err) {
    console.log(err.message);
  }
};

export {
  getArticles,
  getSingleArticle,
  updateSingleArticle,
  createSingleArticle,
};
