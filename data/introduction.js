import { FaChalkboardTeacher } from "react-icons/fa";
import { RiSchoolFill } from "react-icons/ri";
import { PiStudentFill } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";

export const introductiion = () => {
  return {
    title: "আমাদের সম্পর্কে",
    logo: <IoIosArrowDown color="#334155" />,
    href: "/about-madrasha",
    categories: [
      {
        en: `/about-madrasha`,
        bn: "প্রতিষ্ঠান পরিচিতি",
        ar: "",
        logo: <RiSchoolFill color="#334155" />,
      },
      {
        en: `/teachers`,
        bn: "শিক্ষক পরিচিতি",
        ar: "",
        logo: <FaChalkboardTeacher color="#334155" />,
      },
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
    ],
  };
};
