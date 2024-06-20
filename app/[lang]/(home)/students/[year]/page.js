import { getStudents } from "@/actions";
import PageTitle from "@/components/page-title";
import SelectAcademicYear from "@/components/students/select-academic-year";
import StudentsCard from "@/components/students/students-card";
import SubTitle from "@/components/sub-title";

const StudentsPage = async ({ params: { year } }) => {
  const students = await getStudents();

  return (
    <div className="container">
      <PageTitle>ছাত্রদের তথ্য বিবরণ ( {year} )</PageTitle>
      <SelectAcademicYear />
      {students.map((student) => (
        <div key={student.className}>
          <SubTitle>{student.className}</SubTitle>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 py-3 gap-4">
            {student.students.map((student) => (
              <StudentsCard key={student.dakhila} student={student} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentsPage;
