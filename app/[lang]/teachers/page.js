import PageTitle from "@/components/page-title";
import TeacherCard from "@/components/teachers/teacher-card";

const TeachersPage = () => {
  return (
    <div className="text-slate-700">
      <PageTitle>শিক্ষক পরিচিতি</PageTitle>
      <div className="container grid lg:grid-cols-2 grid-cols-1 gap-5 mb-5">
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
      </div>
    </div>
  );
};

export default TeachersPage;
