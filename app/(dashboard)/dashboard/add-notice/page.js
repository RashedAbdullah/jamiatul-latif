import React from "react";
import { redirect } from "next/navigation"; // Assuming Next.js 13+
import { createNotice } from "@/actions/notice";

const AddNoticePage = () => {
  const handleCreateNotice = async (formData) => {
    "use server";
    try {
      const newNotice = {
        title: formData.get("title"),
        activeDate: formData.get("activeDate"),
        duration: formData.get("duration"),
        active: formData.get("active") === "yes" ? true : false,
      };

      await createNotice(newNotice);

      redirect("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          নতুন নোটিশ যোগ করুন
        </h1>

        <form action={handleCreateNotice} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-lg font-medium mb-2">
              নোটিশের শিরোনাম
            </label>
            <input
              type="text"
              name="title"
              placeholder="নোটিশের শিরোনাম লিখুন"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Active Date */}
          <div>
            <label className="block text-lg font-medium mb-2">
              সক্রিয় তারিখ
            </label>
            <input
              type="date"
              name="activeDate"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Duration */}
          <div>
            <label className="block text-lg font-medium mb-2">মেয়াদ</label>
            <input
              type="date"
              name="duration"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Active Select Option */}
          <div>
            <label className="block text-lg font-medium mb-2">
              সক্রিয় নোটিশ
            </label>
            <select
              name="active"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="yes">হ্যাঁ</option>
              <option value="no">না</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-lg font-semibold text-lg shadow-md hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              নোটিশ যোগ করুন
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNoticePage;
