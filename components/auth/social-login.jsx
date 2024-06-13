"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  const handleAuth = (event) => {
    signIn(event, { callbackUrl: "http://localhost:3000" });
  };
  return (
    <>
      <div className="mt-6 flex justify-center relative">
        <div className="text-gray-600 uppercase px-3 bg-gradient-to-r from-emerald-50 to-teal-50 z-10 relative">
          অথবা সাইন-ইন করুন:
        </div>
        <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
      </div>
      <div className="mt-4 flex justify-center">
        <button
          onClick={() => handleAuth("google")}
          className=" border border-green-500 text-white shadow-lg"
        >
          <div className="flex gap-1 items-center">
            <FcGoogle size={25} />
            <div className="bg-green-500 p-2 hover:bg-green-600 transition-all duration-300">
              Sign in with Google
            </div>
          </div>
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
