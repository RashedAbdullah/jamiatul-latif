import { FaChalkboardTeacher } from "react-icons/fa";
import { RiSchoolFill } from "react-icons/ri";
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
    ],
  };
};
