import { getSingleArticle } from "@/actions/acticle";
import ArticleSchemaScript from "@/meta/article-meta";
import Image from "next/image";
import { FaUser, FaCalendarAlt } from "react-icons/fa";

export const generateMetadata = async ({ params: { slug } }) => {
  const article = await getSingleArticle(slug);
  return {
    title: article.title || "প্রবন্ধ",
    description: article.excerpt || "এই প্রবন্ধটি সম্পর্কে আরো জানুন।",
    openGraph: {
      title: article.title || "প্রবন্ধ",
      description: article.excerpt || "এই প্রবন্ধটি সম্পর্কে আরো জানুন।",
      type: "article",
      url: `আপনার পেজের URL/${slug}`,
      images: [
        {
          url: article.coverImage || "/ifta_book.png",
          alt: article.title || "প্রবন্ধের ছবি",
        },
      ],
    },
  };
};

const SingleArticlePage = async ({ params: { slug } }) => {
  const article = await getSingleArticle(slug);

  const publishedAt = new Date(article.publishedAt).toLocaleDateString(
    "bn-BD",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <ArticleSchemaScript article={article} />
      <article className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
        {/* Cover Image with Overlay */}
        <div className="relative w-full h-72 mb-6">
          {article.coverImage ? (
            <Image
              src={article.coverImage}
              alt={article.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          ) : (
            <Image
              src="/ifta_book.png"
              alt={article.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          )}
          {/* Overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 rounded-lg"></div>
          {/* Text overlay on top of the cover image */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
            <h1 className="md:text-4xl text-2xl font-bold">{article.title}</h1>
            <div className="text-sm flex items-center gap-5 md:gap-20">
              <div className="flex justify-center items-center gap-1">
                <FaUser className="mr-1" /> {article.author}
              </div>
              <div className="flex justify-center items-center gap-1">
                <FaCalendarAlt className="mr-1" /> {publishedAt}
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <section
          className="text-gray-700 leading-relaxed articlesdetails"
          dangerouslySetInnerHTML={{ __html: article.content }}
        ></section>
      </article>
    </div>
  );
};

export default SingleArticlePage;
