import { FaChalkboardTeacher } from "react-icons/fa";
import { RiSchoolFill } from "react-icons/ri";
import { PiStudentFill } from "react-icons/pi";
import { User } from "lucide-react";

export const students = () => {
  return {
    title: "শিক্ষার্থী-তথ্য",
    logo: <User color="#334155" />,
    href: "/students/২০২৪-২০২৫",
    categories: [
      {
        en: `/students/২০২৪-২০২৫`,
        bn: "ছাত্রদের তথ্য বিবরণ",
        ar: "",
        logo: <PiStudentFill color="#334155" />,
      },
      {
        en: `/results/২০২৪-২০২৫`,
        bn: "পরীক্ষার ফলাফল",
        ar: "",
        logo: <PiStudentFill color="#334155" />,
      },
      {
        en: `/students-articles`,
        bn: "শিক্ষার্থীদের লেখা",
        ar: "",
        logo: <PiStudentFill color="#334155" />,
      },
    ],
  };
};
