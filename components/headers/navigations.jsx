import { courses } from "@/data/courses";
import DropDown from "./dropdown";
import NavTitle from "./nav-title";
import { introductiion } from "@/data/introduction";
import { notices } from "@/data/notices";
import { curriculums } from "@/data/curriculum";
import UserProfile from "./user-profile";
import NavSearch from "./search";
import MadrashaLogo from "./logo";
import AdminDialog from "./admin-dialog";

const Navigations = ({ lang = "bn", user }) => {
  const intro = introductiion(lang);
  const course = courses(lang);
  const notice = notices(lang);
  const curriculum = curriculums(lang);
  return (
    <>
      <nav
        className={`lg:relative lg:flex justify-between items-center align-middle absolute transition-all duration-300 text-primary container lg:bg-transparent bg-white hidden top-full`}
      >
        <MadrashaLogo />
        <NavSearch />
        <DropDown menu={intro} />
        <DropDown menu={course} />
        <DropDown menu={curriculum} />
        <NavTitle router={`/${lang}/darul-ifta`}>ফতোয়া বিভাগ</NavTitle>
        <DropDown menu={notice} />
        <NavTitle router={`/${lang}/blogs`}>প্রবন্ধ</NavTitle>
        <AdminDialog />
      </nav>
    </>
  );
};

export default Navigations;
