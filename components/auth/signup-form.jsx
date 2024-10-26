"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Signup = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    role: "teacher",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json(); 
      if (!response.ok) {
        throw new Error(data.message || "কিছু ভুল হয়েছে!"); // Handle error response
      }

      setSuccess(data.message); // Set success message
      setFormData({
        name: "",
        email: "",
        number: "",
        password: "",
        role: "teacher",
      });
      router.push("/signin");
    } catch (err) {
      setError(err.message || "কিছু ভুল হয়েছে!"); // Set error message
    }
  };

  return (
    <div className="container mx-auto mt-10 p-5">
      <h1 className="text-3xl font-bold text-center">নিবন্ধন করুন</h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
      {success && <p className="text-green-500 text-center">{success}</p>}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-5">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">নাম:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">ইমেইল:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">ফোন নম্বর:</label>
          <input
            type="text"
            name="number"
            value={formData.number}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">পাসওয়ার্ড:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">ভূমিকা:</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          >
            <option value="principal">প্রধান</option>
            <option value="darul ifta">দারুল ইফতা</option>
            <option value="teacher">শিক্ষক</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          নিবন্ধন করুন
        </button>
      </form>
    </div>
  );
};

export default Signup;
