import PageTitle from "@/components/page-title";
import AddDepartmentForm from "../../_components/add-department-form";
import { createDepartment } from "@/actions/departments";
import { getUserWithRole } from "@/utils/user-with-role";
import { redirect } from "next/navigation";

const AddDepartmentPage = async () => {
  const user = await getUserWithRole();
  if (!user || user.role !== "teacher") {
    redirect("/dashboard");
  }

  const handleNewDepartment = async (newData) => {
    "use server";
    await createDepartment(newData);
  };
  return (
    <div className="add-department-page">
      <PageTitle>নতুন বিভাগ যুক্ত করুন</PageTitle>
      <AddDepartmentForm onAddNewDepartment={handleNewDepartment} />
    </div>
  );
};

export default AddDepartmentPage;
