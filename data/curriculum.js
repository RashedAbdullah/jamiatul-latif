import { IoBookSharp } from "react-icons/io5";

export const curriculums = (lang = "bn") => {
  return {
    title: "শিক্ষা কারিকুলাম",
    logo: "",
    href: "/curriculums",
    categories: [
      {
        en: `/${lang}/curriculums`,
        bn: "পাঠ্যসূচী",
        ar: "",
        logo: <IoBookSharp color="#334155" />,
      },
      {
        en: `/${lang}/departments`,
        bn: "বিভাগসমূহ",
        ar: "",
        logo: <IoBookSharp color="#334155" />,
      },
      {
        en: `/${lang}/future-plans`,
        bn: "ভবিষ্যত পরিকল্পনা",
        ar: "",
        logo: <IoBookSharp color="#334155" />,
      },
    ],
  };
};
