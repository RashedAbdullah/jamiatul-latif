import { IoBookSharp } from "react-icons/io5";

export const curriculums = (lang = "bn") => {
  return {
    title: "শিক্ষা কারিকুলাম",
    logo: "",
    categories: [
      {
        en: `/${lang}/curriculums`,
        bn: "পাঠ্যসূচী",
        ar: "",
        logo: <IoBookSharp color="#22c55e" />,
      },
      {
        en: `/${lang}/departments`,
        bn: "বিভাগসমূহ",
        ar: "",
        logo: <IoBookSharp color="#22c55e" />,
      },
      {
        en: `/${lang}/department`,
        bn: "ভবিষ্যত পরিকল্পনা",
        ar: "",
        logo: <IoBookSharp color="#22c55e" />,
      },
    ],
  };
};
