import { getSingleYearByYear } from "@/actions/year";
import PageTitle from "@/components/page-title";
import StudentsCard from "@/components/students/students-card";
import SubTitle from "@/components/sub-title";
import { getClasses } from "@/actions/classes";
import { getStudentsByYear } from "@/actions/students";

const StudentsPage = async ({ params: { year } }) => {
  const academicYear = decodeURIComponent(year);
  const yearByYear = await getSingleYearByYear(academicYear);
  const classes = await getClasses();
  const studentsForYear = await getStudentsByYear(yearByYear.id);

  return (
    <div className="container">
      <PageTitle>
        শিক্ষাবর্ষ <span className="font-NotoSerifBengali">{academicYear}</span>
      </PageTitle>
   1
      {await Promise.all(
        classes.map((cls) => {
          const studentsInClass = studentsForYear.filter((student) => {
            return student.classNameId._id.toString() === cls.id;
          });

          return (
            <div key={cls.id}>
              <SubTitle>{cls.class}</SubTitle>
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 py-3 gap-4">
                {studentsInClass.length > 0 ? (
                  studentsInClass.map((student) => (
                    <StudentsCard key={student.dakhila} student={student} />
                  ))
                ) : (
                  <p>কোন ছাত্র খুজেঁ পাওয়া যায় নি।</p>
                )}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default StudentsPage;
