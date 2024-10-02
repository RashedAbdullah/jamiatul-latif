import { getFatwasByCategoryId } from "@/actions/fatwa";
import SubTitle from "@/components/sub-title";
import FatwaCategories from "../_components/fatwa-categories";
import FatwaCard from "../_components/fatwa-catd";

const FatwaCategoryPage = async ({ params: { category } }) => {
  const fatwasByCategory = await getFatwasByCategoryId(category);

  return (
    <div className="container mx-auto px-4">
      {/* Dynamic Category Title */}
      {fatwasByCategory.length > 0 && (
        <h1 className="text-2xl text-center pt-5 font-bold text-gray-800">
          {fatwasByCategory[0].categoryId.category} সম্পর্কিত ফতোয়া
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
            <div className="text-center py-36 text-gray-400">
              <p>এই ক্যাটাগরির কোন ফতোয়া পাওয়া যায় নি।</p>
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
