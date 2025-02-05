import { getSingleStudentTexts } from "@/actions/students-writing";
import { Amiri } from "next/font/google";
const amiri = Amiri({ subsets: ["arabic"], weight: "400" });

const SingleStudentArticlePage = async ({ params: { slug } }) => {
  const article = await getSingleStudentTexts(slug);

  if (!article) {
    return (
      <div className="text-center text-red-600 text-xl mt-10">
        المقال غير موجود
      </div>
    );
  }

  return (
    <div
      dir="rtl"
      className={`${amiri.className} max-w-4xl mx-auto px-6 py-10`}
    >
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center text-gray-800 p-6 border-b border-gray-300">
          {article.title}
        </h1>

        {/* Article Content */}
        <div className="p-6">
          {/* Student Info */}
          <div className="text-gray-600 mb-6">
            <p className="text-lg">
              <span className="font-semibold">اسم الطالب :</span> {article.name}
            </p>
            <p className="text-lg">
              <span className="font-semibold">المرحلة :</span>{" "}
              {article.className}
            </p>
            <p className="text-lg">
              <span className="font-semibold">السنة الدراسية :</span>{" "}
              {article.academicYearId}
            </p>
          </div>

          <div
            className="text-gray-700 mt-6 text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: article.texts }}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleStudentArticlePage;
