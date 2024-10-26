import { getUserWithRole } from "@/utils/user-with-role";
import { redirect } from "next/navigation";

const DashResultsLayout = async ({ children }) => {
  const user = await getUserWithRole();
   if (!user || user.role !== "teacher") {
     redirect("/dashboard");
   }
  return <>{children}</>;
};

export default DashResultsLayout;
