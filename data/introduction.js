import { FaChalkboardTeacher } from "react-icons/fa";
import { RiSchoolFill } from "react-icons/ri";
import { PiStudentFill } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";

export const introductiion = (lang = "bn") => {
  return {
    title: "পরিচিতি",
    logo: <IoIosArrowDown color="#22c55e" />,
    categories: [
      {
        en: `/${lang}/about-madrasha`,
        bn: "প্রতিষ্ঠান পরিচিতি",
        ar: "",
        logo: <RiSchoolFill color="#22c55e" />,
      },
      {
        en: `/${lang}/teachers`,
        bn: "শিক্ষক পরিচিতি",
        ar: "",
        logo: <FaChalkboardTeacher color="#22c55e" />,
      },
      {
        en: `/${lang}/students`,
        bn: "ছাত্রদের তথ্য বিবরণ",
        ar: "",
        logo: <PiStudentFill color="#22c55e" />,
      },
    ],
  };
};
