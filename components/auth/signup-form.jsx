"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import SubTitle from "../sub-title";
// MONGO_URI = mongodb+srv://jamiatullatifdarulifta:q3TShx2W8TuHeynh@jamaitaullatif.z7dqkyn.mongodb.net/darul_ifta?retryWrites=true&w=majority&appName=jamaitaullatif/jamiatul_latif

const SignupForm = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmitSignup = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);

      const name = formData.get("name");
      const email = formData.get("email");
      const number = formData.get("number");
      const password = formData.get("password");

      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ name, email, number, password }),
      });
      response.status === 201 && router.push(`/signin`);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      {error && <div className="text-center text-sm text-red-500">{error}</div>}
      <form onSubmit={handleSubmitSignup}>
        <SubTitle showIcon={false}>সাইনআপ করুন</SubTitle>
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-10">
            <p className="col-span-2 text-end px-3">নাম:</p>
            <div className="col-span-8">
              <input
                className="w-full py-1 px-3 resize-none focus:outline outline-1 outline-green-500 border-b border-green-500 bg-transparent transition-all duration-300"
                type="text"
                placeholder="আপনার নাম"
                name="name"
              />
            </div>
          </div>

          {/* ইমেইল */}
          <div className="grid grid-cols-10">
            <p className="col-span-2 text-end px-3">ইমেইল:</p>
            <div className="col-span-8">
              <input
                className="w-full py-1 px-3 resize-none focus:outline outline-1 outline-green-500 border-b border-green-500 bg-transparent transition-all duration-300"
                type="email"
                placeholder="আপনার ইমেইল"
                name="email"
              />
            </div>
          </div>

          {/* নাম্বার */}
          <div className="grid grid-cols-10">
            <p className="col-span-2 text-end px-3">ফোন:</p>
            <div className="col-span-8">
              <input
                className="w-full py-1 px-3 resize-none focus:outline outline-1 outline-green-500 border-b border-green-500 bg-transparent transition-all duration-300"
                type="text"
                placeholder="আপনার ফোন নাম্বার"
                name="number"
              />
            </div>
          </div>

          {/* পাসওয়ার্ড */}
          <div className="grid grid-cols-10">
            <p className="col-span-2 text-end px-3">পাসওয়ার্ড:</p>
            <div className="col-span-8">
              <input
                className="w-full py-1 px-3 resize-none focus:outline outline-1 outline-green-500 bg-transparent border-b border-green-500"
                type="password"
                placeholder="পাসওয়ার্ড সেট করুন"
                name="password"
              />
            </div>
          </div>

          {/* কনফার্ম পাসওয়ার্ড */}
          <div className="grid grid-cols-10">
            <p className="col-span-2 text-end px-3">পাসওয়ার্ড:</p>
            <div className="col-span-8">
              <input
                className="w-full py-1 px-3 resize-none focus:outline outline-1 outline-green-500 bg-transparent border-b border-green-500"
                type="password"
                placeholder="পাসওয়ার্ড কনফার্ম করুন"
                name="conf-password"
              />
            </div>
          </div>

          <div className="text-center">
            <button className="bg-green-500 hover:bg-green-600 transition-all duration-300 text-white py-2 px-10 mt-3 shadow-lg">
              সাবমিট করুন
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignupForm;
