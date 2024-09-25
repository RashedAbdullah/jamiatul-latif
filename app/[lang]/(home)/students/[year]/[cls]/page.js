import { getSingleClassByClss } from "@/actions/classes";
import { getStudentsByClass } from "@/actions/students";
import StudentsCard from "@/components/students/students-card";
import SubTitle from "@/components/sub-title";

const StudentByClassPage = async ({ params: { cls } }) => {
  const clsName = decodeURIComponent(cls.replace(/-/g, " "));
  const classByClss = await getSingleClassByClss(clsName);
  const studentsByClas = await getStudentsByClass(classByClss.id);

  return (
    <div className="container">
      <SubTitle>{classByClss.class}</SubTitle>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 py-3 gap-4">
        {studentsByClas.length > 0 ? (
          studentsByClas.map((student) => (
            <StudentsCard key={student.dakhila} student={student} />
          ))
        ) : (
          <p>কোন ছাত্র খুজেঁ পাওয়া যায় নি।</p>
        )}
      </div>
    </div>
  );
};

export default StudentByClassPage;
