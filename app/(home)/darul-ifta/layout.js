import CategoriesOptions from "@/app/(home)/darul-ifta/_components/categories-options";
import DarulIftaNabvar from "./_components/ifta-navbar";

export const metadata = {
  title: "দারুল ইফতা",
  description:
    "জামিয়াতুল লতিফ রূপগঞ্জ, নারায়ণগঞ্জ। একটি ধর্মীয় কওমি শিক্ষা প্রতিষ্ঠান। ঢাকা বিভাগের নারায়ণগঞ্জ জেলার রূপগঞ্জ থানার বরাব এলাকায় অবস্থিত।",
};

export default function LayoutIfta({ children }) {
  return (
    <div className="relative">
      <DarulIftaNabvar />

      {children}
    </div>
  );
}
