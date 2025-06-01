import { getLatestArticles } from "@/actions/acticle";
import ArticleCard from "../(home)/articles/_components/article-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const HomeArticles = async () => {
  const latestArticles = await getLatestArticles();

  return (
    <div className="container px-4 py-12">
      {/* Page Header */}
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <CardHeader className="px-0">
          <CardTitle className="text-3xl md:text-4xl font-bold">
            প্রবন্ধসমূহ
          </CardTitle>
          <div className="w-16 h-1 bg-primary mx-auto my-4 rounded-full" />
          <CardDescription className="text-lg">
            আমাদের সর্বশেষ প্রবন্ধ পড়ুন এবং ইসলামিক জীবন, প্রযুক্তি, শিক্ষা,
            এবং অন্যান্য গুরুত্বপূর্ণ বিষয় সম্পর্কে জানুন।
          </CardDescription>
        </CardHeader>
      </div>

      {/* Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {latestArticles.map((article) => (
          <ArticleCard key={article._id} article={article} />
        ))}
      </div>

      {/* View More Button */}
      <div className="mt-12 text-center">
        <Link href="/articles">
          <Button variant="outline" className="px-8 py-5 gap-2">
            আরও প্রবন্ধ পড়ুন
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomeArticles;
