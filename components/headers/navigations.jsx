import DropDown from "./dropdown";
import NavTitle from "./nav-title";
import { introductiion } from "@/data/introduction";

import { curriculums } from "@/data/curriculum";
import NavSearch from "./search";
import AdminDialog from "./admin-dialog";
import { auth } from "@/auth";

const Navigations = async () => {
  const session = await auth();

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

        {session && (
          <div className="mx-4 te text-green-600 font-bold p-2 rounded-lg">
            <h2>{session.user.name}</h2>
          </div>
        )}
        <AdminDialog />
      </nav>
    </>
  );
};

export default Navigations;
