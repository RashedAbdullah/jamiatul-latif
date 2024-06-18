"use client";

import { handleSignin } from "@/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SubTitle from "../sub-title";

const SigninForm = ({ lang = "bn" }) => {
  const [error, setError] = useState();
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const response = await handleSignin(formData);
      if (!!response.error) {
        setError(response.error.message);
      } else {
        router.push(`/${lang}`);
      }
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <>
      {error && <div className="text-center text-sm text-red-500">{error}</div>}
      <form onSubmit={handleSubmit}>
        <SubTitle showIcon={false}>সাইনইস করুন</SubTitle>
        <div className="flex flex-col gap-5">
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

          {/* পাসওয়ার্ড */}
          <div className="grid grid-cols-10">
            <p className="col-span-2 text-end px-3">পাসওয়ার্ড:</p>
            <div className="col-span-8">
              <input
                className="w-full py-1 px-3 resize-none focus:outline outline-1 outline-green-500 bg-transparent border-b border-green-500"
                type="password"
                placeholder="আপনার পাসওয়ার্ড"
                name="password"
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

export default SigninForm;
