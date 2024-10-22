import { getSingleArticle, updateSingleArticle } from "@/actions/acticle";

const UpdateSingleArticle = async ({ params: { slug } }) => {
  const article = await getSingleArticle(slug);

  const handleUpdateArticle = async (formData) => {
    "use server";

    const updatedArticle = {
      ...article,
      title: formData.get("title"),
      content: formData.get("content"),
      description: formData.get("description"),
      author: formData.get("author"),
    };

    await updateSingleArticle(slug, updatedArticle);
    try {
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">প্রবন্ধ আপডেট করুন</h1>

      <form action={handleUpdateArticle}>
        {/* Title */}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            প্রবন্ধের শিরোনাম
          </label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={article.title}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Content */}
        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700"
          >
            প্রবন্ধের বিষয়বস্তু
          </label>
          <textarea
            id="content"
            name="content"
            defaultValue={article.content}
            rows="10"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            প্রবন্ধের বিবরণ
          </label>
          <input
            type="text"
            id="description"
            name="description"
            defaultValue={article.description}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Author */}
        <div className="mb-4">
          <label
            htmlFor="author"
            className="block text-sm font-medium text-gray-700"
          >
            লেখক
          </label>
          <input
            type="text"
            id="author"
            name="author"
            defaultValue={article.author}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            আপডেট প্রবন্ধ
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateSingleArticle;
