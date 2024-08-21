import PageTitle from "@/components/page-title";
import Link from "next/link";
import DashboardHeader from "./results/_components/dashboard-header";
import DeashboardMenu from "./results/_components/dashboard-menu";

const DashboardLayout = ({ children, params: { lang } }) => {
  return (
    <>
      <DashboardHeader />
      <div className="grid grid-cols-12">
        <DeashboardMenu />
        <div className="col-span-10"> {children}</div>
      </div>
    </>
  );
};

export default DashboardLayout;
