import HeaderInfo from "./_components/header";
import BesicMadrashaInfo from "./_components/besic-madrasa-info";
import DarulIftaHome from "./_components/darul-ifta-home";
// import HomaPageCourses from "./_components/courses";
import HomePageTeachers from "./_components/teachers";
import PopupNotice from "./_components/popup-notice"; // Client component
import { getLatestNotice } from "@/actions/notice";

export default async function Home() {
  const latestNotice = await getLatestNotice();
  return (
    <>
      <div className="container flex flex-col gap-20">
        <PopupNotice notice={latestNotice.title} />

        <header>
          <HeaderInfo />
        </header>

        <section>
          <BesicMadrashaInfo />
        </section>

        <section>
          <DarulIftaHome />
        </section>

        {/* <section>
          <HomaPageCourses />
        </section> */}

        <section>
          <HomePageTeachers />
        </section>
      </div>
    </>
  );
}
