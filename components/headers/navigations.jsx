import { courses } from "@/data/courses";
import DropDown from "./dropdown";
import NavTitle from "./nav-title";
import { introductiion } from "@/data/introduction";
import { notices } from "@/data/notices";
import { curriculums } from "@/data/curriculum";
import UserProfile from "./user-profile";

const Navigations = ({ openMenu, lang = "bn", user }) => {
  const intro = introductiion(lang);
  const course = courses(lang);
  const notice = notices(lang);
  const curriculum = curriculums(lang);
  return (
    <>
      <nav
        className={`lg:relative lg:flex absolute transition-all duration-300 mr-5 lg:mr-10 bg-green-500 ${
          openMenu ? "block -right-5" : "hidden"
        } top-full`}
      >
        <DropDown menu={intro} />
        <DropDown menu={course} />
        <DropDown menu={curriculum} />
        <NavTitle router={`/${lang}/darul-ifta`}>ফতোয়া বিভাগ</NavTitle>
        <DropDown menu={notice} />
        <NavTitle router={`/${lang}/gallery`}>গ্যালারি</NavTitle>
        <UserProfile user={user} />
      </nav>
    </>
  );
};

export default Navigations;
