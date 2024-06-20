import { getStudentByDakhila } from "@/actions";
import StudentOverView from "@/components/students/student-overview";
import StudentResultTable from "@/components/students/student-table";
import StudentsCard from "@/components/students/students-card";
import SubTitle from "@/components/sub-title";

const SingleStudentPage = async ({ params: { id, lang } }) => {
  const student = await getStudentByDakhila(id);
  const studentByDakhila = student.students.filter(
    (student) => student.dakhila === id
  );

  return (
    <div className="container my-5">
      <div className="lg:grid lg:grid-cols-12 gap-4">
        <div className="col-span-3 lg:mt-16">
          <StudentsCard student={studentByDakhila[0]} lang={lang} />
        </div>
        <div id="tableOfResult" className="col-span-9">
          <SubTitle>নাম্বারপত্র</SubTitle>
          <StudentResultTable results={studentByDakhila[0].results} />
          <SubTitle>সামগ্রিক মতামত</SubTitle>
          <StudentOverView opinion={studentByDakhila[0].opinion} />
        </div>
      </div>
    </div>
  );
};

export default SingleStudentPage;
