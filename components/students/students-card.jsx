import Link from "next/link";
import StudentAvatar from "./studnet-avatar";
import StudentInfo from "./student-info";

const StudentsCard = ({ lang = "bn", student }) => {
  console.log(student);
  return (
    <Link
      href={`/${lang}/students/${student.academicYearId.academicYear}/${student.dakhila}`}
    >
      <div className="shadow p-4 bg-white hover:shadow-lg transition-all duration-300">
        <StudentAvatar avatar={student.avatar} />
        <div className="pt-4 px-5 border-t">
          <StudentInfo student={student} />
        </div>
      </div>
    </Link>
  );
};

export default StudentsCard;
