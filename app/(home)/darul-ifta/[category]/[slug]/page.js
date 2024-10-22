import Link from "next/link";
import CopyLinkButton from "../../_components/share-link-fatwa";
import { getSingleFatwa } from "@/actions/fatwa";
import { getEngToBnNumber } from "@/utils/number-converter";

const SinleFatwaPage = async ({ params: { slug } }) => {
  const singleFatwa = await getSingleFatwa(slug);

  // Ensure that singleFatwa is correctly fetched
  if (!singleFatwa) {
    return <div>Fatwa not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 md:py-20 py-5">
      <article className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
        {/* Fatwa Header */}
        <header className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            {getEngToBnNumber(singleFatwa.fatwa_no)} নং. প্রশ্ন
          </h1>
          <div className="text-sm text-gray-500 mt-2">
            <p>
              {singleFatwa.categoryId.category} |{" "}
              {new Date(singleFatwa.createdAt).toLocaleDateString("bn-BD")}
            </p>
          </div>
        </header>

        {/* Questioner Information */}
        <section className="mb-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-2">
            <h2 className="text-lg font-semibold text-gray-700">
              {singleFatwa.questionerId.name}
            </h2>
            <span className="hidden md:inline text-gray-400">|</span>
            <address className="text-sm italic text-gray-500">
              {singleFatwa.questionerId.address}
            </address>
          </div>
          <p className="text-gray-700 leading-relaxed">
            {singleFatwa.questionerId.question}
          </p>
        </section>

        {/* Answer Section */}
        <section className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">উত্তর:</h3>
          <p className="text-gray-700 leading-relaxed">{singleFatwa.answer}</p>
        </section>

        {/* References */}
        <section className="mt-6 border-t pt-4">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">
            তথ্যসূত্র:
          </h4>
          <p className="italic text-gray-600">{singleFatwa.references}</p>
        </section>

        {/* Footer - Link to Copy or Share */}
        <footer className="mt-6 flex items-center justify-between">
          <CopyLinkButton
            fatwaId={singleFatwa.id}
            categoryId={singleFatwa.categoryId._id}
          />

          <Link
            href={`/darul-ifta`}
            className="text-sm text-white bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-lg transition-all"
          >
            আরও ফতোয়া দেখুন
          </Link>
        </footer>
      </article>
    </div>
  );
};

export default SinleFatwaPage;
