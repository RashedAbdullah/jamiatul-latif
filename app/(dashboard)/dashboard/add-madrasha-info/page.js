import { createMadrashaInfo } from "@/actions/madrasha";
import { getUserWithRole } from "@/utils/user-with-role";
import { redirect } from "next/navigation";
import React from "react";

const AddMadrashaInfo = async () => {
  const user = await getUserWithRole();
   if (!user || user.role !== "teacher") {
     redirect("/dashboard");
   }

  const handleAddMadrashaInfo = async (formData) => {
    "use server";
    try {
      const newInfo = {
        title: formData.get("title"),
        details: formData.get("details"),
      };

      await createMadrashaInfo(newInfo);
      redirect("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add Madrasha Information</h1>
      <form action={handleAddMadrashaInfo} className="space-y-6">
        {/* Title Field */}
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Title</label>
          <input
            type="text"
            name="title"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            placeholder="Enter title (e.g., নাম, অবস্থান)"
            required
          />
        </div>

        {/* Details Field */}
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Details</label>
          <textarea
            name="details"
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            placeholder="Enter details about the Madrasha"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add Information
        </button>
      </form>
    </div>
  );
};

export default AddMadrashaInfo;
