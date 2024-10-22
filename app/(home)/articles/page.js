import { getArticles } from "@/actions/acticle";
import ArticlateCard from "./_components/article-card";

const ArticlesPage = async () => {
  const articles = await getArticles();
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Title */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">প্রবন্ধসমূহ</h1>
        <p className="text-lg text-gray-600">
          আমাদের সর্বশেষ প্রবন্ধ পড়ুন এবং ইসলামিক জীবন, প্রযুক্তি, শিক্ষা, এবং
          অন্যান্য গুরুত্বপূর্ণ বিষয় সম্পর্কে জ্ঞান অর্জন করুন।
        </p>
      </div>

      {/* Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article) => (
          <ArticlateCard key={article._id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default ArticlesPage;
