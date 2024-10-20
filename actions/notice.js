const { connectMongo } = require("@/database/connection");
const { noticeModel } = require("@/models/notice-model");
const {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} = require("@/utils/data-utils");

const getNotices = async () => {
  try {
    await connectMongo();

    const notices = await noticeModel.find({}).lean();
    return replaceMongoIdInArray(notices);
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

const getActiveNotices = async () => {
  try {
    await connectMongo();

    const currentDate = new Date();

    const notices = await noticeModel.find({}).lean();

    const activeNotices = notices.filter((notice) => {
      const activeDate = new Date(notice.activeDate);
      const durationDate = new Date(notice.duration);

      return currentDate >= activeDate && currentDate <= durationDate;
    });

    return replaceMongoIdInArray(activeNotices);
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

const getSinleNotice = async (id) => {
  try {
    await connectMongo();
    const singleNotice = await noticeModel.findById(id).lean();
    return replaceMongoIdInObject(singleNotice);
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

const getLatestNotice = async () => {
  try {
    await connectMongo();

    const latestNotice = await noticeModel
      .findOne({})
      .sort({ createdAt: -1 })
      .lean();

    return latestNotice ? latestNotice : null;
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

const updateNotice = async (id, notice) => {
  try {
    await connectMongo();
    const updatedNotice = await noticeModel.findByIdAndUpdate(id, notice);
    return updatedNotice;
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

const createNotice = async (notice) => {
  try {
    await connectMongo();
    const newNotice = await noticeModel.create(notice);
    return newNotice;
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

export {
  getNotices,
  getActiveNotices,
  getLatestNotice,
  getSinleNotice,
  updateNotice,
  createNotice,
};
