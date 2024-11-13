import { getUserWithRole } from "@/utils/user-with-role";
import { redirect } from "next/navigation";
import React from "react";

const UpdateDepartmentPage = async () => {
  const user = await getUserWithRole();
  if (!user || user.role !== "teacher") {
    redirect("/dashboard");
  }
  return <div>UpdateDepartmentPage</div>;
};

export default UpdateDepartmentPage;
