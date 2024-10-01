import { BookOpenCheck } from "lucide-react";
import { MdLibraryBooks } from "react-icons/md";

export const courses = () => {
  return {
    title: "অনলাইন কোর্সসমূহ",
    logo: <BookOpenCheck size={18} color="#334155" />,
    href: "/courses",
    categories: [
      {
        en: `/courses/quran-aducation`,
        bn: "কুরআন শিক্ষা কোর্স",
        ar: "",
        logo: <MdLibraryBooks color="#334155" />,
      },
      {
        en: `/courses/farz-e-ayeen`,
        bn: "ফরজে আইন কোর্স",
        ar: "",
        logo: <MdLibraryBooks color="#334155" />,
      },
      {
        en: `/courses/aqeedah`,
        bn: "আকিদা কোর্স",
        ar: "",
        logo: <MdLibraryBooks color="#334155" />,
      },
      {
        en: `/courses/arabic-grammar`,
        bn: "নাহু কোর্স",
        ar: "",
        logo: <MdLibraryBooks color="#334155" />,
      },
      {
        en: `/courses/sarf-course`,
        bn: "ছরফ কোর্স",
        ar: "",
        logo: <MdLibraryBooks color="#334155" />,
      },
      {
        en: `/courses/arabic-language`,
        bn: "আদব কোর্স",
        ar: "",
        logo: <MdLibraryBooks color="#334155" />,
      },
    ],
  };
};
