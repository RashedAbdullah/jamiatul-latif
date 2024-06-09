import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const FatwaCard = ({ fatwa, lang = "bn" }) => {
  return (
    <div className="bg-white p-5 rounded shadow-lg">
      <h2 className="text-lg font-semibold">
        {fatwa.questioner} - {fatwa.address}
      </h2>
      <div className="flex flex-col gap-2">
        <p>
          <span className="text-lg font-semibold">প্রশ্ন: </span>
          <span>{fatwa.question?.slice(0, 80)}...</span>
        </p>

        <p>
          <span className="text-lg font-semibold">উত্তর: </span>
          <span>{fatwa.answer?.slice(0, 160)}...</span>
        </p>
      </div>
      <div className="flex justify-end mt-2">
        <Link href={`/${lang}/darul-ifta/${fatwa.categoryEn}/${fatwa.id}`}>
          <button className="mt-1 bg-green-500 text-white px-5 py-2 text-sm rounded-lg flex gap-1 items-center justify-center hover:bg-green-800 transition duration-300">
            বিস্তারিত <MdKeyboardDoubleArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FatwaCard;
