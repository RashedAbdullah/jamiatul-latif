import { getLatestFatwas } from "@/actions/fatwa";
import { Button } from "@/components/ui/button";
import { getEngToBnNumber } from "@/utils/number-converter";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const HomeFatwas = async () => {
  const latestFatwas = await getLatestFatwas();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Title */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          সর্বশেষ ফতোয়া
        </h1>
        <p className="text-lg text-gray-600">
          ইসলামিক জীবনধারা ও নির্দেশনা সম্পর্কে জানুন।
        </p>
      </div>

      {/* Fatwa Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {latestFatwas.map((fatwa) => (
          <div
            key={fatwa._id}
            className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
          >
            {/* Fatwa Header */}
            <header className="mb-4">
              <h2 className="text-xl font-bold text-gray-800">
                {getEngToBnNumber(fatwa.fatwa_no)} নং. প্রশ্ন
              </h2>
              <p className="text-sm text-gray-500">
                ক্যাটাগরি: {fatwa.categoryId?.category}
              </p>
            </header>

            {/* Questioner Information */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-700">
                প্রশ্নকারী: {fatwa.questionerId?.name}
              </h3>
              <p className="text-sm text-gray-500 italic">
                ঠিকানা: {fatwa.questionerId?.address}
              </p>
              <p className="text-gray-700 mt-2">
                {fatwa.questionerId?.question.slice(0, 100)}...
              </p>
            </div>

            {/* Answer Section */}
            <section className="mb-4">
              <h4 className="text-lg font-semibold text-gray-800">উত্তর:</h4>
              <p className="text-gray-700 leading-relaxed">
                {fatwa.answer.slice(0, 150)}...
              </p>
            </section>

            {/* References */}
            <section className="mt-4">
              <h5 className="text-md font-semibold text-gray-800">
                তথ্যসূত্র:
              </h5>
              <p className="italic text-gray-600">{fatwa.references}</p>
            </section>

            {/* Read More Link */}
            <div className="mt-4 text-right">
              <Link
                href={`/darul-ifta/${fatwa.categoryId._id}/${fatwa.id}`}
                className="text-blue-600 hover:underline"
              >
                বিস্তারিত দেখুন
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* Read More Button */}
      <div className="my-10 text-end">
        <Link href="/darul-ifta">
          <Button className="px-6 py-3">
            আরও ফতোয়া দেখুন
            <ArrowRight className="ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomeFatwas;
