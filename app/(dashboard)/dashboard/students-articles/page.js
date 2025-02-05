import { createSingleArticle } from "@/actions/acticle";

import AddAtudentArticle from "../../_components/add-student-article";
import { createStudentsWriting } from "@/actions/students-writing";

const AddArticlePage = () => {
  const createStudentsArticles = async (article) => {
    "use server";
    await createStudentsWriting(article);
  };
  return (
    <div dir="rtl" className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">إضافة المقالة</h1>
      <AddAtudentArticle createStudentsArticles={createStudentsArticles} />
    </div>
  );
};

export default AddArticlePage;
