import CourseCard from "./course-card";

const HomaPageCourses = () => {
  // #083042
  return (
    <div>
      <div className="flex justify-center">
        <div className="bg-[#D5DEE0] px-10 py-2 rounded-full">
          <h2 className="text-[#083042]">কোর্সসমূহ</h2>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-6">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  );
};

export default HomaPageCourses;
