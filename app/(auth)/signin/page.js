/* eslint-disable react/no-unescaped-entities */

import SigninForm from "@/components/auth/signin-form";
import SocialLogin from "@/components/auth/social-login";
import Link from "next/link";

const SignInPage = () => {
  return (
    <div className="contain py-16">
      <div className="max-w-lg mx-auto px-6 py-20 overflow-hidden">
        <SigninForm />
        {/* <SocialLogin /> */}
        {/* <p className="mt-4 text-center text-gray-600">
          কোন একাউন্ট নেই?{" "}
          <Link
            href={`/signup`}
            className="text-primary border-b border-green-500 hover:text-green-500"
          >
            রেজিস্টার করুন
          </Link>
        </p> */}
      </div>
    </div>
  );
};

export default SignInPage;