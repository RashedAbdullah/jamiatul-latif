import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { getAllFatwa } from "@/actions";
import FatwaCard from "./fatwa-card";

const RelatedFatwas = async ({ category }) => {
  const allFatwa = await getAllFatwa();
  const relatedAllFatwa = allFatwa.filter(
    (byCategory) => byCategory.categoryEn === category
  );

  return (
    <div className="col-span-1">
      <h2 className="text-3xl my-5 flex items-center gap-2 lg:mt-4 mt-10">
        প্রাসঙ্গিক মাসআলা <MdKeyboardDoubleArrowRight size={20} />
        <span></span>{" "}
      </h2>
      <div className="lg:col-span-1 md:col-span-2 col-span-1 grid grid-cols-1 gap-4">
        {relatedAllFatwa.map((fatwa) => (
          <FatwaCard key={fatwa.id} fatwa={fatwa} />
        ))}
      </div>
    </div>
  );
};

export default RelatedFatwas;
