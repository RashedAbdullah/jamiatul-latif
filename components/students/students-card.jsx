import Link from "next/link";
import StudentAvatar from "./studnet-avatar";
import StudentInfo from "./student-info";
import { Button } from "../ui/button";

const StudentsCard = ({ lang = "bn", year = "2023-24", student }) => {
  return (
 
      <div className="shadow p-4 bg-white hover:shadow-lg transition-all duration-300">
        <StudentAvatar avatar={student.avatar} />
        <div className="pt-4 px-5 border-t">
          <StudentInfo student={student} />
        </div>
         <div className="w-full text-end">
        <Link
         href={`/${lang}/students/${year}/${student.dakhila}`}
          <Button>বিস্তারিত</Button>
        </Link>
      </div>
      </div>
    
  );
};

export default StudentsCard;
