import { getSingleClassByClss } from "@/actions/classes";
import { getStudentsByYearAndClass } from "@/actions/students";
import { getSingleYearByYear } from "@/actions/year";
import StudentsCard from "@/components/students/students-card";
import SubTitle from "@/components/sub-title";

const StudentByClassPage = async ({ params: { cls, year } }) => {
  const yr = decodeURIComponent(year);
  const yearByYear = await getSingleYearByYear(yr);
  const clsName = decodeURIComponent(cls.replace(/-/g, " "));
  const classByClss = await getSingleClassByClss(clsName);
  const studentsByClas = await getStudentsByYearAndClass(
    classByClss.id,
    yearByYear.id
  );

  return (
    <div className="container">
      <SubTitle>
        {classByClss.class} ({yr})
      </SubTitle>

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
