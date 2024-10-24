import DropDown from "./dropdown";
import NavTitle from "./nav-title";
import { introductiion } from "@/data/introduction";

import { curriculums } from "@/data/curriculum";
import NavSearch from "./search";
import AdminDialog from "./admin-dialog";

const Navigations = () => {
  const intro = introductiion();

  const curriculum = curriculums();
  return (
    <>
      <nav
        className={`lg:relative lg:flex justify-between items-center align-middle absolute transition-all duration-300 text-primary hidden top-full`}
      >
        <NavSearch />
        <DropDown menu={intro} />
        <NavTitle router={`/darul-ifta`}>ফতোয়া বিভাগ</NavTitle>
        <DropDown menu={curriculum} />
        <NavTitle router="/articles">প্রবন্ধ</NavTitle>
        <NavTitle router="/notices">নোটিশ</NavTitle>
        {/* <DropDown menu={course} /> */}
        <AdminDialog />
      </nav>
    </>
  );
};

export default Navigations;
