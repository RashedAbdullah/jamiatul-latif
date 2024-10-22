import Link from "next/link";

import StudentInfo from "./student-info";
import { Button } from "../ui/button";
import StudentAvatar from "./studnet-avatar";
import StudentSchemaScript from "@/meta/student-meta";

const StudentsCard = ({ student }) => {
  const { avatar, academicYearId, classNameId, dakhila } = student;

  return (
    <div className="shadow p-4 bg-white rounded-lg transition-transform transform hover:scale-105">
      <StudentSchemaScript student={student} />
      <StudentAvatar avatar={avatar} />
      <div className="pt-4 px-5 border-t">
        <StudentInfo student={student} />
      </div>
      <div className="w-full text-right mt-4">
        <Link
          href={`/students/${
            academicYearId.academicYear
          }/${classNameId.class.replace(/ /g, "-")}/${dakhila}`}
        >
          <Button>বিস্তারিত</Button>
        </Link>
      </div>
    </div>
  );
};

export default StudentsCard;
