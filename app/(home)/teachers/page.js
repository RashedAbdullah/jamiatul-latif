import { getTeachers } from "@/actions/teachers";
import PageTitle from "@/components/page-title";
import TeacherCard from "@/components/teachers/teacher-card";

const TeachersPage = async () => {
  const teachers = await getTeachers();

  return (
    <div className="text-primary">
      <PageTitle>শিক্ষক পরিচিতি</PageTitle>
      <div className="container grid lg:grid-cols-2 grid-cols-1 gap-5 mb-5">
        {teachers
          .sort((a, b) => a.teacherSerial - b.teacherSerial)
          .map(
            (teacher) =>
              !teacher.resignation.resigned && (
                <TeacherCard key={teacher.id} teacher={teacher} />
              )
          )}
      </div>
    </div>
  );
};

export default TeachersPage;
