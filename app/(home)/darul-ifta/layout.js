import CategoriesOptions from "@/app/(home)/darul-ifta/_components/categories-options";
import DarulIftaNabvar from "./_components/ifta-navbar";

export const metadata = {
  title: "দারুল ইফতা",
  description: "জামিয়াতুল লতিফ রূপগঞ্জ মাদরাসারা ফতোয়া বিভাগ।",
};

export default function LayoutIfta({ children }) {
  return (
    <div className="relative">
      <DarulIftaNabvar />

      {children}
    </div>
  );
}
