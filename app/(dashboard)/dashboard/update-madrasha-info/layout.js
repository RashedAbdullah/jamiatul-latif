import { getUserWithRole } from "@/utils/user-with-role";
import { redirect } from "next/navigation";

const DashMadrashaInfoLayout = async ({ children }) => {
  const user = await getUserWithRole();
   if (!user || user.role !== "teacher") {
     redirect("/dashboard");
   }
  return <>{children}</>;
};

export default DashMadrashaInfoLayout;
