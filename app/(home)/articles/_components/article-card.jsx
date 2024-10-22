import Link from "next/link";
import { FaCalendarAlt, FaUser } from "react-icons/fa";

const ArticleCard = ({ article }) => {
  const { title, author, description, publishedAt, _id } = article; // Destructure fields from article
  const formattedDate = new Date(publishedAt).toLocaleDateString("bn-BD", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-2xl">
      {/* Article Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>

      {/* Author and Date with Icons */}
      <div className="mb-4 text-sm text-gray-500 flex items-center justify-between">
        <div className="flex items-center justify-center gap-1">
          <FaUser />
          <p>
            <span className="font-semibold">{author}</span>
          </p>
        </div>
        <div className="flex items-center justify-center gap-1">
          <FaCalendarAlt />
          <p>{formattedDate}</p>
        </div>
      </div>

      {/* Article Description */}
      <p className="text-gray-700 mb-4">
        {description.length > 100
          ? description.slice(0, 100) + "..."
          : description}
      </p>

      {/* Button to Single Article Page */}
      <div className="text-end">
        <Link
          href={`/articles/${_id}`}
          passHref
          className="inline-block bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-900 transition-all duration-300"
        >
          প্রবন্ধ পড়ুন
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
