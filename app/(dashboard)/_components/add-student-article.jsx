"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const AddAtudentArticle = ({ createStudentsArticles }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [className, setClassName] = useState("");
  const [year, setYear] = useState("");

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const articleData = {
        title,
        name: author,
        academicYearId: year,
        className,
        desc: description,
        texts: content,
      };

      await createStudentsArticles(articleData);
      setLoading(false);
      router.push("/students-articles"); // সফলভাবে জমা দেওয়ার পর প্রবন্ধ তালিকায় রিডিরেক্ট করা হবে
    } catch (error) {
      console.error("প্রবন্ধ জমা দেওয়ার সময় সমস্যা:", error);
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          العنوان
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="content"
          className="block text-sm font-medium text-gray-700"
        >
          المقالة
        </label>
        <ReactQuill
          id="content"
          value={content}
          onChange={setContent}
          className="h-64 bg-white"
        />
      </div>

      <div className="mb-4 mt-16">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          على الاختصار
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          rows="3"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="author"
          className="block text-sm font-medium text-gray-700"
        >
          الكاتب
        </label>
        <input
          id="author"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="author"
          className="block text-sm font-medium text-gray-700"
        >
          المرحلة
        </label>
        <input
          id="class"
          type="text"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="author"
          className="block text-sm font-medium text-gray-700"
        >
          السنة الدراسية
        </label>
        <input
          id="year"
          type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          required
        />
      </div>

      <button
        type="submit"
        className={`bg-blue-500 text-white px-4 py-2 rounded-md ${
          loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
        }`}
        disabled={loading}
      >
        {loading ? "জমা হচ্ছে..." : "প্রবন্ধ যোগ করুন"}
      </button>
    </form>
  );
};

export default AddAtudentArticle;
