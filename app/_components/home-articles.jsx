import { getLatestArticles } from "@/actions/acticle";
import ArticleCard from "../(home)/articles/_components/article-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HomeArticles = async () => {
  const latestArticles = await getLatestArticles();
  return (
    <div className="container px-4">
      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">প্রবন্ধসমূহ</h1>
        <div className="w-24 mx-auto mt-2 mb-6"></div>
        <p className="text-lg text-gray-600">
          আমাদের সর্বশেষ প্রবন্ধ পড়ুন এবং ইসলামিক জীবন, প্রযুক্তি, শিক্ষা, এবং
          অন্যান্য গুরুত্বপূর্ণ বিষয় সম্পর্কে জানুন।
        </p>
      </div>

      {/* Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {latestArticles.map((article) => (
          <div
            key={article._id}
            className="transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <ArticleCard article={article} />
          </div>
        ))}
      </div>

      {/* Read More Button */}
      <div className="my-10 text-end">
        <Link href="/articles">
          <Button className="px-6 py-3">
            আরও প্রবন্ধ পড়ুন
            <ArrowRight className="ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomeArticles;
