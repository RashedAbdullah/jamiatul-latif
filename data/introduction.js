import { FaChalkboardTeacher } from "react-icons/fa";
import { RiSchoolFill } from "react-icons/ri";
import { PiStudentFill } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";

export const introductiion = (lang = "bn") => {
  return {
    title: "পরিচিতি",
    logo: <IoIosArrowDown color="#334155" />,
    href: "/about-madrasha",
    categories: [
      {
        en: `/${lang}/about-madrasha`,
        bn: "প্রতিষ্ঠান পরিচিতি",
        ar: "",
        logo: <RiSchoolFill color="#334155" />,
      },
      {
        en: `/${lang}/teachers`,
        bn: "শিক্ষক পরিচিতি",
        ar: "",
        logo: <FaChalkboardTeacher color="#334155" />,
      },
      {
        en: `/${lang}/students`,
        bn: "ছাত্রদের তথ্য বিবরণ",
        ar: "",
        logo: <PiStudentFill color="#334155" />,
      },
      {
        en: `/${lang}/results`,
        bn: "পরীক্ষার ফলাফল",
        ar: "",
        logo: <PiStudentFill color="#334155" />,
      },
    ],
  };
};
