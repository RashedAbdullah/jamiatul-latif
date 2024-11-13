const { connectMongo } = require("@/database/connection");
const { departmentModel } = require("@/models/department-model");

const getDepartments = async () => {
  try {
    await connectMongo();

    const departments = await departmentModel.find({});
    return departments;
  } catch (err) {
    console.log(err.message);
  }
};

const updateDepartment = async (id, updatedDeparment) => {
  try {
    await connectMongo();
    const department = await departmentModel.findByIdAndUpdate(
      id,
      updatedDeparment
    );
    return department;
  } catch (err) {
    console.log(err.message);
  }
};

const createDepartment = async (newDepartment) => {
  try {
    await connectMongo();
    const department = await departmentModel.create(newDepartment);
    return department;
  } catch (err) {
    console.log(err.message);
  }
};

export { getDepartments, updateDepartment, createDepartment };
