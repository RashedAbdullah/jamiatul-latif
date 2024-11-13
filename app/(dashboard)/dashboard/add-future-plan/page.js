import PageTitle from "@/components/page-title";
import AddFuturePlanForm from "../../_components/add-future-plan-form";
import { createFuturePlan } from "@/actions/future-plan";
import { getUserWithRole } from "@/utils/user-with-role";
import { redirect } from "next/navigation";

const AddFuturePlanPage = async () => {
  const user = await getUserWithRole();
  if (!user || user.role !== "teacher") {
    redirect("/dashboard");
  }

  const handleNewFuturePlan = async (newData) => {
    "use server";
    await createFuturePlan(newData);
  };
  return (
    <div className="add-department-page">
      <PageTitle>নতুন প্ল্যান যুক্ত করুন</PageTitle>
      <AddFuturePlanForm onAddFuturePlan={handleNewFuturePlan} />
    </div>
  );
};

export default AddFuturePlanPage;
