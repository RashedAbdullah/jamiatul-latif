import { getFatwasByCategoryId } from "@/actions/fatwa";
import FatwaCategories from "../_components/fatwa-categories";
import FatwaCard from "../_components/fatwa-catd";

export const metadata = {
  title: "ফতোয়া ক্যাটাগরি",
  description: "বিভিন্ন ফতোয়া সম্পর্কিত তথ্য এবং উত্তর।",
};

const FatwaCategoryPage = async ({ params: { category } }) => {
  const fatwasByCategory = await getFatwasByCategoryId(category);

  // If you have a specific category title, consider fetching it based on the category ID
  const categoryTitle =
    fatwasByCategory.length > 0
      ? fatwasByCategory[0].categoryId.category
      : "ফতোয়া";

  return (
    <div className="container mx-auto px-4 min-h-screen">
      {/* Dynamic Category Title */}
      {fatwasByCategory.length > 0 && (
        <h1 className="text-2xl text-center pt-5 font-bold text-gray-800">
          {categoryTitle} সম্পর্কিত ফতোয়া
        </h1>
      )}

      {/* Main Content Area */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4">
        {/* Fatwa List */}
        <div className="md:col-span-8">
          {fatwasByCategory.length > 0 ? (
            fatwasByCategory.map((fatwa) => (
              <article key={fatwa.id}>
                <FatwaCard fatwa={fatwa} />
              </article>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-36">
              <div className="text-center">
                <p className="text-xl font-semibold text-gray-800 mb-2">
                  দুঃখিত!
                </p>
                <p className="text-lg text-gray-600">
                  এই ক্যাটাগরির কোন ফতোয়া পাওয়া যায় নি।
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar with Categories */}
        <aside className="md:col-span-4">
          <FatwaCategories />
        </aside>
      </div>
    </div>
  );
};

export default FatwaCategoryPage;
