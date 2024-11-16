import { getEngToBnNumber } from "@/utils/number-converter";
import CopyLinkButton from "./share-link-fatwa";
import Link from "next/link";

const FatwaCard = ({ fatwa }) => {
  return (
    <article className="bg-white p-6 rounded-lg mt-4 shadow-md transition-shadow hover:shadow-lg border border-gray-200">
      <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 mb-4">
        {fatwa.questionerId && (
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-semibold text-gray-800">
              {fatwa.questionerId?.name}
            </h2>
            <span className="hidden md:inline text-gray-400">|</span>
            <address className="text-sm italic text-gray-500">
              {fatwa.questionerId?.address}
            </address>
          </div>
        )}
        {fatwa.createdAt && (
          <span className="text-sm text-gray-500 mt-2 md:mt-0">
            {new Date(fatwa.createdAt).toLocaleDateString("bn-BD")}
          </span>
        )}
      </header>

      <section className="mb-4">
        <h3 className="text-xl font-bold text-blue-600 mb-2">
          {getEngToBnNumber(fatwa.fatwa_no)} নং. প্রশ্ন
        </h3>
        {fatwa.questionerId.question && (
          <p className="text-gray-700 leading-relaxed">
            {fatwa.questionerId?.question}
          </p>
        )}
      </section>

      <section className="mb-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">উত্তর:</h3>
        <p className="text-gray-700 leading-relaxed">{fatwa.answer}</p>
        <footer className="italic text-gray-500 mt-4 text-sm">
          <p>তথ্যসূত্র: {fatwa.references}</p>
        </footer>
      </section>

      <div className="flex items-center justify-between mt-4">
        <CopyLinkButton fatwaId={fatwa.id} categoryId={fatwa.categoryId._id} />

        {/* Navigate to Fatwa */}
        <Link
          href={`/darul-ifta/${fatwa.categoryId._id}/${fatwa.id}`}
          className="text-sm text-white bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-lg transition-all"
        >
          ফতোয়া দেখুন
        </Link>
      </div>
    </article>
  );
};

export default FatwaCard;
