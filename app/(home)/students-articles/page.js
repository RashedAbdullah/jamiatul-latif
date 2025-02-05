import { getStudentsWriting } from "@/actions/students-writing";
import { Amiri } from "next/font/google";
import Link from "next/link";
const amiri = Amiri({ subsets: ["arabic"], weight: "400" });

const StudentsWriting = async () => {
  const studentsAritlces = await getStudentsWriting();

  return (
    <div
      dir="rtl"
      className={`${amiri.className} bg-gradient-to-b from-blue-100 to-gray-100 min-h-screen p-8`}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">مقالات الطلاب</h1>
        <p className="text-gray-700 mb-6 text-lg border-b-2 pb-3">
          لجامعة اللطيف روبغنج، نراينغنج
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {studentsAritlces.map((article) => (
          <Link key={article._id} href={`/students-articles/${article._id}`}>
            <div
              key={article._id}
              className="bg-white p-6 rounded-lg shadow-lg border-r-4 border-blue-600 hover:shadow-xl transition-all"
            >
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">
                {article.title}
              </h2>
              <p className="text-gray-600 mb-3">{article.desc}</p>
              <div className="text-sm text-gray-700 border-t pt-3 flex flex-wrap justify-between">
                <span className="font-medium">👤 {article.name}</span>
                <span className="font-medium">🏫 {article.className}</span>
                <span className="font-medium">📆 {article.academicYearId}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StudentsWriting;
