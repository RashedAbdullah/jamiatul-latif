import { getFatwaCategories } from "@/actions/fatwa-category";
import CategoriesOptions from "@/app/(home)/darul-ifta/_components/categories-options";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const DarulIftaNabvar = async () => {
  const fatwaCategories = await getFatwaCategories();
  return (
    <div className="bg-slate-800 py-3">
      <div className="flex justify-center gap-10 container">
        <CategoriesOptions categories={fatwaCategories} />
        <div className="">
          <Link href={`/ask-fatwa`}>
            <Button variant="outline">ফতোয়া জিজ্ঞেস করুন</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DarulIftaNabvar;
