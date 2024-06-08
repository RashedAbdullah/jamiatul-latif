import { MdLibraryBooks } from "react-icons/md";

export const courses = (lang = "bn") => {
  return {
    title: "অনলাইন কোর্সসমূহ",
    logo: <MdLibraryBooks color="#22c55e" />,
    categories: [
      {
        en: `/${lang}/quran-aducation`,
        bn: "কুরআন শিক্ষা কোর্স",
        ar: "",
        logo: <MdLibraryBooks color="#22c55e" />,
      },
      {
        en: `/${lang}/farz-e-ayeen`,
        bn: "ফরজে আইন কোর্স",
        ar: "",
        logo: <MdLibraryBooks color="#22c55e" />,
      },
      {
        en: `/${lang}/aqeedah`,
        bn: "আকিদা কোর্স",
        ar: "",
        logo: <MdLibraryBooks color="#22c55e" />,
      },
      {
        en: `/${lang}/arabic-grammar`,
        bn: "নাহু কোর্স",
        ar: "",
        logo: <MdLibraryBooks color="#22c55e" />,
      },
      {
        en: `/${lang}/sarf-course`,
        bn: "ছরফ কোর্স",
        ar: "",
        logo: <MdLibraryBooks color="#22c55e" />,
      },
      {
        en: `/${lang}/arabic-language`,
        bn: "আদব কোর্স",
        ar: "",
        logo: <MdLibraryBooks color="#22c55e" />,
      },
    ],
  };
};
