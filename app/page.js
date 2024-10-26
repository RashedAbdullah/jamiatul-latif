import HeaderInfo from "./_components/header";
import BesicMadrashaInfo from "./_components/besic-madrasa-info";
import DarulIftaHome from "./_components/darul-ifta-home";
import HomePageTeachers from "./_components/teachers";
import HomeArticles from "./_components/home-articles";
import HomeFatwas from "./_components/home-fatwas";
import { auth } from "@/auth";
import { getUserWithRole } from "@/utils/user-with-role";

export default async function Home() {
  const user = await getUserWithRole();

  return (
    <>
      <div className="container flex flex-col gap-14">
        <header>
          <HeaderInfo />
        </header>

        <section>
          <BesicMadrashaInfo />
        </section>

        <section>
          <DarulIftaHome />
        </section>

        <section>
          <HomeFatwas />
        </section>

        <section>
          <HomeArticles />
        </section>

        <section>
          <HomePageTeachers />
        </section>
      </div>
    </>
  );
}
