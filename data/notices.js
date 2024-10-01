import { MdCastForEducation } from "react-icons/md";

export const notices = () => {
  return {
    title: "নোটিশ বোর্ড",
    logo: "",
    href: "/notices/admission",
    categories: [
      {
        en: `/notices/admission`,
        bn: "ভর্তি তথ্য",
        ar: "",
        logo: <MdCastForEducation color="#334155" />,
      },
    ],
  };
};
