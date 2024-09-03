import { getAllFatwa } from "@/actions";
import FatwaTitle from "./fatwa-title";
import FatwaCard from "./fatwa-card";

const GetFatwaByCategory = async ({ categoryName }) => {
  const allFatwa = await getAllFatwa();

  const fatwasByCategory = allFatwa?.filter(
    (byCategory) => byCategory.categoryEn === categoryName
  );

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 my-5 gap-10">
      <div className="col-span-4">
        {fatwasByCategory.length > 0 ? (
          <FatwaTitle
            categoryBn={fatwasByCategory[0].categoryBn}
            categoryName={categoryName}
          />
        ) : (
          <FatwaTitle categoryName={categoryName} />
        )}
        <div className="lg:col-span-4 md:col-span-3 col-span-1 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 relative">
          {categoryName ? (
            fatwasByCategory.length > 0 ? (
              fatwasByCategory.map((fatwa) => (
                <FatwaCard key={fatwa.id} fatwa={fatwa} />
              ))
            ) : (
              <div className="text-center text-gray-500 text-3xl absolute w-full mt-10">
                {/* {categoryName}  */} কোন মাসআলা খুঁজে পাওয়া যায় নি।
              </div>
            )
          ) : (
            allFatwa.map((fatwa) => <FatwaCard key={fatwa.id} fatwa={fatwa} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default GetFatwaByCategory;
