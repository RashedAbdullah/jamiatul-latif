import { getStudentByDakhila } from "@/actions";
import GetResultPdf from "@/components/students/result-pdf";
import StudentOverView from "@/components/students/student-overview";
import StudentResultTable from "@/components/students/student-table";
import StudentsCard from "@/components/students/students-card";
import SubTitle from "@/components/sub-title";

const SingleStudentPage = async ({ params: { id, lang } }) => {
  const student = await getStudentByDakhila(id);
  const studentByDakhila = student.students.filter(
    (student) => student.dakhila === id
  );

  const studentData = {
    name: "John Doe",
    rollNumber: "123456",
    subjects: [
      { book: "Mathematics", number: 85 },
      { book: "Science", number: 90 },
      { book: "English", number: 88 },
    ],
  };

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
      <GetResultPdf studentData={studentData} />
    </div>
  );
};

export default SingleStudentPage;
