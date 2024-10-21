import { getSingleFatwa } from "@/actions/fatwa";
import { getFatwaCategories } from "@/actions/fatwa-category";
import React from "react";

const UpdateSingleFatwa = async ({ params: { slug } }) => {
  const singleFatwa = await getSingleFatwa(slug);
  const categories = await getFatwaCategories();

  const handleUpdateFatwa = async (formData) => {
    "use server";
    try {
      const fatwa_no = formData.get("fatwa_no");
      const categoryId = formData.get("categoryId");
      const answer = formData.get("answer");
      const references = formData.get("references");

      const updatedFatwa = {
        fatwa_no,
        categoryId,
        answer,
        references,
      };

      console.log("Updated Fatwa Data: ", updatedFatwa);
      // e.g., await updateFatwaInDatabase(slug, updatedFatwa);
    } catch (err) {
      console.log("Error updating fatwa: ", err.message);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">ফতোয়া আপডেট করুন</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <form action={handleUpdateFatwa}>
          {/* Fatwa Number */}
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2">
              ফতোয়া নম্বর
            </label>
            <input
              type="text"
              name="fatwa_no"
              defaultValue={singleFatwa.fatwa_no}
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Category */}
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2">
              ক্যাটাগরি
            </label>
            <select
              name="categoryId"
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value={singleFatwa.categoryId._id}>
                {singleFatwa.categoryId.category}
              </option>
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.category}
                </option>
              ))}
            </select>
          </div>

          {/* Questioner Name */}
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2">
              প্রশ্নকর্তার নাম
            </label>
            <input
              type="text"
              name="questioner_name"
              defaultValue={singleFatwa.questionerId.name}
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled
            />
          </div>

          {/* Answer */}
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2">উত্তর</label>
            <textarea
              name="answer"
              defaultValue={singleFatwa.answer}
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              required
            />
          </div>

          {/* References */}
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2">
              রেফারেন্স সমূহ
            </label>
            <textarea
              name="references"
              defaultValue={singleFatwa.references}
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={2}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-lg font-semibold text-lg shadow-md hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              আপডেট করুন
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateSingleFatwa;
