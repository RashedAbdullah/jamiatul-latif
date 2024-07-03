import { MdCastForEducation } from "react-icons/md";

export const notices = (lang = "bn") => {
  return {
    title: "নোটিশ বোর্ড",
    logo: "",
    href: "/notices/admission",
    categories: [
      {
        en: `/${lang}/notices/admission`,
        bn: "ভর্তি তথ্য",
        ar: "",
        logo: <MdCastForEducation color="#22c55e" />,
      },
    ],
  };
};
