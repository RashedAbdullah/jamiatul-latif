import { getClasses } from "@/actions/classes";
import { getStudentsByClass } from "@/actions/students";
import StudentsCard from "@/components/students/students-card";
import SubTitle from "@/components/sub-title";
import StudentsNavbar from "./_components/students-navbar";

const StudentsPage = async ({ params: { lang } }) => {
  const classes = await getClasses();

  return (
    <div>
      <StudentsNavbar />
      <div className="container">
        {await Promise.all(
          classes.map(async (cls) => {
            const studentsInClass = await getStudentsByClass(cls.id);

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
    </div>
  );
};

export default StudentsPage;
