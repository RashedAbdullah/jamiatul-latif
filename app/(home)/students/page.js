import { getClasses } from "@/actions/classes";
import StudentsCard from "@/components/students/students-card";
import SubTitle from "@/components/sub-title";
import StudentsNavbar from "./_components/students-navbar";
import { getStudentsByYearAndClass } from "@/actions/students";

const StudentsPage = async () => {
  const classes = await getClasses();

  // Fetch students for each class in parallel
  const studentsByClass = await Promise.all(
    classes.map(async (cls) => {
      const studentsInClass = await getStudentsByYearAndClass(
        cls.id,
        "66f13d0337317a1fbb7e7ff7"
      );
      return { class: cls.class, students: studentsInClass };
    })
  );

  return (
    <div>
      <StudentsNavbar navlink="students" />
      <div className="container">
        {studentsByClass.map(({ class: className, students }, index) => (
          <div key={index}>
            <SubTitle>{className}</SubTitle>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 py-3 gap-4">
              {students.length > 0 ? (
                students.map((student) => (
                  <StudentsCard key={student.dakhila} student={student} />
                ))
              ) : (
                <p>কোন ছাত্র খুজেঁ পাওয়া যায় নি।</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentsPage;
