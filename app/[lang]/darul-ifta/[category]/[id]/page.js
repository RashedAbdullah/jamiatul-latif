import { getFatwaById } from "@/actions";
import RelatedFatwas from "@/components/darul-ifta/related-fatwas";

const SingleFatwaPage = async ({ params: { id } }) => {
  const fatwaById = await getFatwaById(id);

  return (
    <div className="lg:mx-20 mx-10 my-10 ">
      <div className="lg:grid grid-cols-4 gap-5">
        <div className="flex flex-col gap-5 col-span-3 bg-white min-h-[80vh] p-10 rounded shadow-lg">
          {/* Category */}
          <div className="text-3xl">
            <p>বিভাগ: {fatwaById.categoryBn}</p>
          </div>

          {/* Name and address */}
          <div>
            <h3 className="text-2xl">
              {fatwaById.questioner} - {fatwaById.address}
            </h3>
            <p className="italic text-sm">{fatwaById.date}</p>
          </div>

          {/* Question */}
          <div>
            <p>
              <span className="text-2xl">প্রশ্ন: </span>
              <span>{fatwaById.question}</span>
            </p>
          </div>

          {/* Answer */}
          <div>
            <p>
              <span className="text-2xl">উত্তর: </span>
              <span>{fatwaById.answer}</span>
            </p>
          </div>

          {/* References */}
          <div className="italic">
            <div>
              <span>রেফারেন্স: </span>
              {fatwaById.references.map((ref) => (
                <span key={ref.kitab}>
                  {ref.kitab}, {ref.part_page};{" "}
                </span>
              ))}
            </div>
          </div>
        </div>
        <RelatedFatwas category={fatwaById.categoryEn} />
      </div>
    </div>
  );
};

export default SingleFatwaPage;
