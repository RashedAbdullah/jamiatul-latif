import { getUserWithRole } from "@/utils/user-with-role";
import { redirect } from "next/navigation";

const AddCurriculumPage = async () => {
  const user = await getUserWithRole();
  if (!user || user.role !== "teacher") {
    redirect("/dashboard");
  }
  return <div>AddCurriculumPage</div>;
};

export default AddCurriculumPage;
