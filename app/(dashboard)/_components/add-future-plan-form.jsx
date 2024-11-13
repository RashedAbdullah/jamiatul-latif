"use client";

import { useState } from "react";

const AddFuturePlanForm = ({onAddFuturePlan}) => {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await onAddFuturePlan({ title, desc });
      setMessage("নতুন প্ল্যান যুক্ত করা হয়েছে।");
      setTitle("");
      setDesc("");
    } catch (error) {
      setMessage("Error adding new plan. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 container text-lg">
      <div>
        <label className="block mb-1 font-semibold">নতুন প্ল্যান</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold">বিস্তারিত</label>
        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        নতুন প্ল্যান যুক্ত করুন
      </button>
      {message && <p className="mt-4 text-green-500 text-lg">{message}</p>}
    </form>
  );
};

export default AddFuturePlanForm;
