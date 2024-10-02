import { getFatwaCategories } from "@/actions/fatwa-category";
import { ArrowDownRight } from "lucide-react";
import Link from "next/link";

const FatwaCategories = async () => {
  const fatwaCategories = await getFatwaCategories();

  return (
    <section className="col-span-4 my-2 bg-white px-5 py-2">
      <header className="py-4 flex items-center">
        <h2 className="font-semibold">অনান্য ক্যাটাগরি</h2>
        <ArrowDownRight aria-label="Arrow pointing down and right" />
      </header>

      <nav>
        <ul>
          {fatwaCategories.map((category) => (
            <li key={category.id}>
              <Link
                className="underline text-green-600"
                href={`/darul-ifta/${category.id}`}
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
