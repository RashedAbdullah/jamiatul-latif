"use client";

import { useState } from "react";

const AddNoticeForm = ({ onSubmitNotice }) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [activeDate, setActiveDate] = useState("");
  const [duration, setDuration] = useState("");
  const [active, setActive] = useState(true);

  const handleCreateNotice = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/expo-send-notification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, body: details }),
      });

      const result = await response.json();
      if (result.success) {
        await onSubmitNotice({ title, details, activeDate, duration, active });
        alert("Notification sent successfully!");

        setTitle("");
        setDetails("");
        setActiveDate("");
        setDuration("");
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      console.log("Pushing notice error", error);
    }
  };
  return (
    <form onSubmit={handleCreateNotice} className="space-y-6">
      {/* Title */}
      <div>
        <label className="block text-lg font-medium mb-2">
          নোটিশের শিরোনাম
        </label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="নোটিশের শিরোনাম লিখুন"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Details */}
      <div>
        <label className="block text-lg font-medium mb-2">বিস্তারিত</label>
        <input
          type="text"
          name="details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="বিস্তারিত লিখুন"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Active Date */}
      <div>
        <label className="block text-lg font-medium mb-2">সক্রিয় তারিখ</label>
        <input
          type="date"
          name="activeDate"
          value={activeDate}
          onChange={(e) => setActiveDate(e.target.value)}
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
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Active Select Option */}
      <div>
        <label className="block text-lg font-medium mb-2">সক্রিয় নোটিশ</label>
        <select
          onChange={(e) => setActive(e.target.value === "yes" ? true : false)}
          value={active}
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
  );
};

export default AddNoticeForm;
