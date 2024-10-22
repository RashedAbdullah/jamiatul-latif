import { getFatwaCategories } from "@/actions/fatwa-category";
import { ArrowDownRight } from "lucide-react";
import Link from "next/link";

const FatwaCategories = async () => {
  const fatwaCategories = await getFatwaCategories();

  return (
    <section className="col-span-4 my-4 p-6">
      <header className="pb-4 flex items-center space-x-2">
        <h2 className="text-xl font-semibold text-gray-800">
          অন্যান্য ক্যাটাগরি
        </h2>
        <ArrowDownRight
          className="text-gray-600"
          aria-label="Arrow pointing down and right"
        />
      </header>

      <nav>
        <ul className="space-y-3">
          {fatwaCategories.map((category) => (
            <li key={category.id}>
              <Link
                href={`/darul-ifta/${category.id}`}
                className="text-green-600 hover:text-green-800 underline transition-colors duration-200"
              >
                {category.category} সম্পর্কিত ফতোয়া
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default FatwaCategories;
