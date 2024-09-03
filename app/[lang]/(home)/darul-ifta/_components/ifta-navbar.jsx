import CategoriesOptions from "@/components/darul-ifta/categories-options";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const DarulIftaNabvar = ({ lang = "bn" }) => {
  return (
    <div className="bg-slate-800 py-3">
      <div className="flex justify-center gap-10 container">
        <CategoriesOptions />
        <div className="">
          <Link href={`/${lang}/ask-fatwa`}>
            <Button variant="outline">ফতোয়া জিজ্ঞেস করুন</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DarulIftaNabvar;
