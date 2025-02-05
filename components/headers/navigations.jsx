import DropDown from "./dropdown";
import NavTitle from "./nav-title";
import { introductiion } from "@/data/introduction";
import { curriculums } from "@/data/curriculum";
import NavSearch from "./search";
import AdminDialog from "./admin-dialog";
import { getUserWithRole } from "@/utils/user-with-role";
import { students } from "@/data/students";

const Navigations = async () => {
  const user = await getUserWithRole();

  const intro = introductiion();
  const stdns = students();

  const curriculum = curriculums();
  return (
    <>
      <nav
        className={`lg:relative lg:flex justify-between items-center align-middle absolute transition-all duration-300 text-primary hidden top-full`}
      >
        {/* <NavSearch /> */}
        <DropDown menu={intro} />
        <DropDown menu={stdns} />
        <NavTitle router={`/darul-ifta`}>ফতোয়া বিভাগ</NavTitle>
        <DropDown menu={curriculum} />
        <NavTitle router="/articles">প্রবন্ধ</NavTitle>
        <NavTitle router="/notices">নোটিশ</NavTitle>

        {user && (
          <div className="mx-4 te text-green-600 font-bold p-2 rounded-lg">
            <h2>{user.name}</h2>
          </div>
        )}
        <AdminDialog />
      </nav>
    </>
  );
};

export default Navigations;
