const { connectMongo } = require("@/database/connection");
const { futurePlanModel } = require("@/models/future-model");

const getFuturePlans = async () => {
  try {
    await connectMongo();

    const futureplans = await futurePlanModel.find({});
    return futureplans;
  } catch (err) {
    console.log(err.message);
  }
};

const updateFuturePlan = async (id, updatedPlan) => {
  try {
    await connectMongo();
    const plan = await futurePlanModel.findByIdAndUpdate(id, updatedPlan);
    return plan;
  } catch (err) {
    console.log(err.message);
  }
};

const createFuturePlan = async (newPlan) => {
  try {
    await connectMongo();
    const plan = await futurePlanModel.create(newPlan);
    return plan;
  } catch (err) {
    console.log(err.message);
  }
};

export { getFuturePlans, updateFuturePlan, createFuturePlan };
