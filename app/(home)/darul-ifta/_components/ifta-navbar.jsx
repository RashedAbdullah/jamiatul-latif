import { getFatwaCategories } from "@/actions/fatwa-category";
import CategoriesOptions from "@/app/(home)/darul-ifta/_components/categories-options";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const DarulIftaNavbar = async () => {
  const fatwaCategories = await getFatwaCategories();

  return (
    <div className="bg-slate-800 py-3">
      <div className="container flex flex-col md:flex-row justify-between items-center md:gap-5 gap-2">
        {/* Categories Options */}
        <CategoriesOptions categories={fatwaCategories} />

        {/* Ask Fatwa Button */}
        <div className="w-full md:w-auto">
          <Link href={`/ask-fatwa`}>
            <Button variant="outline" className="w-full md:w-auto">ফতোয়া জিজ্ঞেস করুন</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DarulIftaNavbar;
