import { dashboardMenu } from "@/data/dashboard-menu";
import Link from "next/link";
import MenuAccordion from "./menu-accordion";

const DeashboardMenu = ({ lang = "bn" }) => {
  return (
    <div>
      <ul className="bg-slate-900 text-white min-h-[86vh] overflow-auto">
        {dashboardMenu.map((menu, ind) => (
          <li className="px-4 flex justify-center items-center gap-4" key={ind}>
            <MenuAccordion menu={menu} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeashboardMenu;
