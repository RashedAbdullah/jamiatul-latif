import { IoBookSharp } from "react-icons/io5";

export const curriculums = (lang = "bn") => {
  return {
    title: "শিক্ষা কারিকুলাম",
    logo: "",
    categories: [
      {
        en: `/${lang}/departments`,
        bn: "বিভাগসমূহ",
        ar: "",
        logo: <IoBookSharp color="#22c55e" />,
      },
      {
        en: `/${lang}/department`,
        bn: "পরিকল্পিত বিভাগ",
        ar: "",
        logo: <IoBookSharp color="#22c55e" />,
      },
    ],
  };
};
