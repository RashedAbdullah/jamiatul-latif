import { getStudents } from "@/actions";
import PageTitle from "@/components/page-title";
import StudentsCard from "@/components/students/students-card";
import SubTitle from "@/components/sub-title";

const StudentsPage = async ({ params: { year: academicYear } }) => {
  const students = await getStudents();
  const selectYear = (year) => {
    if (year === "2024-25") return "২০২৪-২৫";
    else if (year === "2023-24") return "২০২৩-২৪";
    else if (year === "2022-23") return "২০২২-২৩";
    else if (year === "2021-22") return "২০২১-২২";
    else if (year === "2020-21") return "২০২০-২১";
    else return "২০২৩-২৪";
  };

  const studentsByYear = students.filter((year) => {
    return year.academicYear == academicYear;
  });

  return (
    <div className="container">
      <PageTitle>ছাত্রদের তথ্য বিবরণ ( {selectYear(academicYear)} )</PageTitle>

      {studentsByYear.length ? (
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
      ) : (
        <div className="text-center p-20">
          <h2 className="text-2xl text-gray-500">
            {selectYear(academicYear)} শিক্ষাবর্ষের কোন ছাত্র খুঁজে পাওয়া যায়
            নি।
          </h2>
        </div>
      )}
    </div>
  );
};

export default StudentsPage;
