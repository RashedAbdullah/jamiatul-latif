import { courses } from "@/data/courses";
import DropDown from "./dropdown";
import NavTitle from "./nav-title";
import { introductiion } from "@/data/introduction";
import { notices } from "@/data/notices";
import { curriculums } from "@/data/curriculum";
import NavSearch from "./search";
import AdminDialog from "./admin-dialog";

const Navigations = ({ lang = "bn", user }) => {
  const intro = introductiion(lang);
  const course = courses(lang);
  const notice = notices(lang);
  const curriculum = curriculums(lang);
  return (
    <>
      <nav
        className={`lg:relative lg:flex justify-between items-center align-middle absolute transition-all duration-300 text-primary hidden top-full`}
      >
        <NavSearch />
        <DropDown menu={intro} />
        <NavTitle router={`/${lang}/darul-ifta`}>ফতোয়া বিভাগ</NavTitle>
        <DropDown menu={curriculum} />
        <DropDown menu={notice} />
        <DropDown menu={course} />
        <AdminDialog />
      </nav>
    </>
  );
};

export default Navigations;
