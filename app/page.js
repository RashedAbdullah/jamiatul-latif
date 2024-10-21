import HeaderInfo from "./_components/header";
import BesicMadrashaInfo from "./_components/besic-madrasa-info";
import DarulIftaHome from "./_components/darul-ifta-home";
// import HomaPageCourses from "./_components/courses";
import HomePageTeachers from "./_components/teachers";
import Ads from "@/components/ads";

export default async function Home() {
  return (
    <>
      <div className="container flex flex-col gap-20">
        <header>
          <HeaderInfo />
        </header>

        <section>
          <BesicMadrashaInfo />
        </section>
        <Ads />
        <section>
          <DarulIftaHome />
        </section>
        <Ads />
        {/* <section>
          <HomaPageCourses />
        </section> */}

        <section>
          <HomePageTeachers />
        </section>
        <Ads />
      </div>
    </>
  );
}
