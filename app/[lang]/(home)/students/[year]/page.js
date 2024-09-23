import PageTitle from "@/components/page-title";
import StudentsCard from "@/components/students/students-card";
import SubTitle from "@/components/sub-title";

const StudentsPage = async ({ params: { year: academicYear } }) => {

  // const students = await getStudents();

  return (
    <div className="container">
      <PageTitle>ছাত্রদের তথ্য বিবরণ </PageTitle>

      {/* {studentsByYear.length ? (
        studentsByYear
          .sort((a, b) => a.classSerial - b.classSerial)
          .map((student) => (
            <div key={student.className}>
              <SubTitle>{student.className}</SubTitle>
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 py-3 gap-4">
                {student.students.map((student) => (
                  <StudentsCard key={student.dakhila} student={student} />
                ))}
              </div>
            </div>
          ))
      ) : ( */}
        <div className="text-center p-20">
          <h2 className="text-2xl text-gray-500">
            {/* {selectYear(academicYear)} শিক্ষাবর্ষের কোন ছাত্র খুঁজে পাওয়া যায়
            নি। */}
          </h2>
        </div>
      {/* )} */}
    </div>
  );
};

export default StudentsPage;
