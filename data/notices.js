import { MdCastForEducation } from "react-icons/md";

export const notices = (lang = "bn") => {
  return {
    title: "নোটিশ বোর্ড",
    logo: "",
    categories: [
      {
        en: `/${lang}/admission`,
        bn: "ভর্তি তথ্য",
        ar: "",
        logo: <MdCastForEducation color="#22c55e" />,
      },
    ],
  };
};
