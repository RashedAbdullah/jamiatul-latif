import Link from "next/link";
import StudentAvatar from "./studnet-avatar";
import StudentInfo from "./student-info";

const StudentsCard = ({ lang = "bn", year = "2023-24", studentId = "807" }) => {
  return (
    <Link href={`/${lang}/students/${year}/${studentId}`}>
      <div className="shadow p-4 bg-white hover:shadow-lg transition-all duration-300">
        <StudentAvatar />
        <div className="pt-4 px-5 border-t">
          <StudentInfo />
        </div>
      </div>
    </Link>
  );
};

export default StudentsCard;
