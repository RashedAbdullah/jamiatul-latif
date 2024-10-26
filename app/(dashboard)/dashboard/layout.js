import { auth } from "@/auth";
import DashboardHeader from "../_components/dashboard-header";
import DashboardMenu from "../_components/dashboard-menu";
import { redirect } from "next/navigation";

const DashboardLayout = async ({ children }) => {
  const session = await auth();
  if (!session) {
    redirect("/signin");
  }

  return (
    <div className="max-h-screen flex flex-col">
      <DashboardHeader />
      <div className="flex flex-1">
        <aside className="w-1/4 hidden md:block">
          <DashboardMenu />
        </aside>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
