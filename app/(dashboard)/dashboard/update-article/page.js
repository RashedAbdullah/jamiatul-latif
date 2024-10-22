import { getArticles } from "@/actions/acticle";
import Link from "next/link";

const UpdateArticlePage = async () => {
  const articles = await getArticles();

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">প্রবন্ধ আপডেট করুন</h1>

      {/* প্রবন্ধের তালিকা */}
      <ul className="space-y-4">
        {articles.map((article) => (
          <li
            key={article._id}
            className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 flex justify-between items-center"
          >
            {/* প্রবন্ধের শিরোনাম */}
            <h2 className="text-lg font-semibold text-gray-800">
              {article.title}
            </h2>

            {/* প্রবন্ধ আপডেট করার লিঙ্ক */}
            <Link
              href={`/dashboard/update-article/${article._id}`} // আপডেট রুট আইডি সহ
              passHref
              className="inline-block mt-2 bg-slate-600 text-white px-4 py-2 rounded hover:bg-slate-700 transition duration-300"
            >
              প্রবন্ধ আপডেট করুন
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpdateArticlePage;
