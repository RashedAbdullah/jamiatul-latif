import HeaderInfo from "./_components/header";
import BesicMadrashaInfo from "./_components/besic-madrasa-info";
import DarulIftaHome from "./_components/darul-ifta-home";
import HomaPageCourses from "./_components/courses";
import HomePageTeachers from "./_components/teachers";
import PopupNotice from "./_components/popup-notice"; // Client component

export default function Home() {
  return (
    <>
      <div className="container flex flex-col gap-20">
        {/* Render the PopupNotice */}
        <PopupNotice notice="ইনশাআল্লাহ আগামী ৬ নভেম্বর মাদ্রাসার দ্বিতীয় সাময়ীক পরীক্ষা অনুষ্ঠিত হবে।" />

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
