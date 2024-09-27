import { IoBookSharp } from "react-icons/io5";

export const curriculums = () => {
  return {
    title: "পাঠ্যক্রম",
    logo: "",
    href: "/curriculums",
    categories: [
      {
        en: `/curriculums`,
        bn: "পাঠ্যসূচী",
        ar: "",
        logo: <IoBookSharp color="#334155" />,
      },
      {
        en: `/departments`,
        bn: "বিভাগসমূহ",
        ar: "",
        logo: <IoBookSharp color="#334155" />,
      },
      {
        en: `/future-plans`,
        bn: "ভবিষ্যত পরিকল্পনা",
        ar: "",
        logo: <IoBookSharp color="#334155" />,
      },
    ],
  };
};
