import CategoriesOptions from "@/components/darul-ifta/categories-options";

export const metadata = {
  title: "দারুল ইফতা",
  description:
    "জামিয়াতুল লতিফ মাদরাসা। রূপগঞ্জ, নারায়ণগঞ্জ। একটি ধর্মীয় কওমি শিক্ষা প্রতিষ্ঠান। ঢাকা বিভাগের নারায়ণগঞ্জ জেলার রূপগঞ্জ থানার বরাব এলাকায় অবস্থিত।",
};

export default function LayoutIfta({ children, params: { lang } }) {
  return (
    <div>
     
      <CategoriesOptions />
      {children}
    </div>
  );
}
