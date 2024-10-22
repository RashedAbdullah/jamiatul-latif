import { createSingleArticle } from "@/actions/acticle";
import AddArticleForm from "../../_components/add-article-form";

const AddArticlePage = () => {
  const createArticle = async (article) => {
    "use server";
    await createSingleArticle(article);
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        নতুন প্রবন্ধ যোগ করুন
      </h1>
      <AddArticleForm createArticle={createArticle} />
    </div>
  );
};

export default AddArticlePage;
