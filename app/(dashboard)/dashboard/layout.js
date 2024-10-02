import DashboardHeader from "../_components/dashboard-header";
import DeashboardMenu from "../_components/dashboard-menu";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const DashboardLayout = async ({ children }) => {
  const session = await auth();
  if (!session) {
    redirect("/signin");
  }
  return (
    <div className="max-h-screen overflow-auto">
      <DashboardHeader />
      <div className="grid grid-cols-8">
        <div className="col-span-1">
          <DeashboardMenu />
        </div>
        <div className="col-span-7"> {children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
