import Link from "next/link";
import StudentAvatar from "./studnet-avatar";
import StudentInfo from "./student-info";

const StudentsCard = ({ lang = "bn", year = "2023-24", student }) => {
  return (
   <div className="shadow p-4 bg-white">
      <StudentAvatar avatar={student.avatar} />
      <div className="pt-4 px-5 border-t">
        <StudentInfo student={student} />
      </div>
      <div className="w-full text-end">
        <Link
          href={`/students/${
            student.academicYearId.academicYear
          }/${student.classNameId.class.replace(/ /g, "-")}/${student.dakhila}`}
        >
          <Button>বিস্তারিত</Button>
        </Link>
      </div>
    </div>
  );
};

export default StudentsCard;
