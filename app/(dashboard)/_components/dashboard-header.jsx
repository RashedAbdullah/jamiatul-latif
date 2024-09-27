import NavSearch from "@/components/headers/search";
import { LayoutDashboardIcon } from "lucide-react";
import AdminDetails from "./admin";
import SignoutComp from "@/components/headers/signout";

const DashboardHeader = () => {
  return (
    <div>
      <ul className="flex justify-between align-middle items-center py-2 bg-slate-900 px-4">
        <li className="flex gap-1 font-semibold text-white">
          <LayoutDashboardIcon /> ড্যাশবোর্ড
        </li>
        <li>
          <NavSearch />
        </li>
        <li className="text-white flex gap-2 justify-center align-middle items-center">
          <AdminDetails /> <SignoutComp />
        </li>
      </ul>
    </div>
  );
};

export default DashboardHeader;
