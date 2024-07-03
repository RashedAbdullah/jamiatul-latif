import { MdLibraryBooks } from "react-icons/md";

export const courses = (lang = "bn") => {
  return {
    title: "অনলাইন কোর্সসমূহ",
    logo: <MdLibraryBooks color="#22c55e" />,
    href: "/courses",
    categories: [
      {
        en: `/${lang}/courses/quran-aducation`,
        bn: "কুরআন শিক্ষা কোর্স",
        ar: "",
        logo: <MdLibraryBooks color="#22c55e" />,
      },
      {
        en: `/${lang}/courses/farz-e-ayeen`,
        bn: "ফরজে আইন কোর্স",
        ar: "",
        logo: <MdLibraryBooks color="#22c55e" />,
      },
      {
        en: `/${lang}/courses/aqeedah`,
        bn: "আকিদা কোর্স",
        ar: "",
        logo: <MdLibraryBooks color="#22c55e" />,
      },
      {
        en: `/${lang}/courses/arabic-grammar`,
        bn: "নাহু কোর্স",
        ar: "",
        logo: <MdLibraryBooks color="#22c55e" />,
      },
      {
        en: `/${lang}/courses/sarf-course`,
        bn: "ছরফ কোর্স",
        ar: "",
        logo: <MdLibraryBooks color="#22c55e" />,
      },
      {
        en: `/${lang}/courses/arabic-language`,
        bn: "আদব কোর্স",
        ar: "",
        logo: <MdLibraryBooks color="#22c55e" />,
      },
    ],
  };
};
