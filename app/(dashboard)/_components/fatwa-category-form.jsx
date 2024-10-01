import { createFatwaCategory } from "@/actions/fatwa-category";
import { Button } from "@/components/ui/button";
import React from "react";

const FatwaCategoryForm = () => {
  const handleNewFatwaCategory = async (formData) => {
    "use server";
    try {
      const category = formData.get("category");

      await createFatwaCategory({ category });
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <form
      action={handleNewFatwaCategory}
      className="p-8 max-w-4xl bg-white shadow-lg rounded-lg transform transition duration-700 ease-in-out opacity-0 translate-y-6 animate-fade-in flex flex-col gap-5"
    >
      <div className="mt-3">
        <label htmlFor="fatwa_no" className="block text-lg font-medium mb-2">
          ফতোয়া ক্যাটাগরি তৈরি করুন।
        </label>
        <input
          required
          type="text"
          placeholder="ফতোয়া ক্যাটাগরি"
          name="category"
          id="category"
          className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-slate-800 focus:outline-none`}
        ></input>
      </div>
      {/* Submit Button */}
      <div className="text-center col-span-2">
        <Button
          type="submit"
          className="w-full py-3 text-white rounded-lg hover:bg-slate-700 transition-all"
        >
          ক্যাটাগরি সাবমিট করুন
        </Button>
      </div>
    </form>
  );
};

export default FatwaCategoryForm;
