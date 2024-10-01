"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
const HomeTexts = () => {
  const router = useRouter();

  return (
    <div className="relative container mx-auto p-4 text-center text-white flex flex-col justify-center align-middle items-center h-screen">
      <motion.h2
        className="text-3xl mb-4 drop-shadow-md hover:drop-shadow-none"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        জামিয়াতুল লতিফ রূপগঞ্জ
      </motion.h2>
      <motion.div
        className="text-lg lg:mx-32"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <p className="drop-shadow-md hover:drop-shadow-none">
          জামিয়াতুল লতিফ একটি কওমি মাদরাসা যা অনুসরণ করে দারুল ‍উলুম দেওবন্দ ও
          আকাবিরে দেওবন্দকে। এবং জামিয়াতুল লতিফ অবশ্যই সবসময় সচেষ্ট থাকে
          ছাত্রদের লক্ষ্য উদ্দেশ্যের প্রতি। জামিয়াতুল লতিফ একটি কওমি মাদরাসা যা
          অনুসরণ করে দারুল ‍উলুম দেওবন্দ ও আকাবিরে দেওবন্দকে। এবং জামিয়াতুল লতিফ
          অবশ্যই সবসময় সচেষ্ট থাকে ছাত্রদের লক্ষ্য উদ্দেশ্যের প্রতি। জামিয়াতুল
          লতিফ একটি কওমি মাদরাসা যা অনুসরণ করে দারুল ‍উলুম দেওবন্দ ও আকাবিরে
          দেওবন্দকে। এবং জামিয়াতুল লতিফ অবশ্যই সবসময় সচেষ্ট থাকে ছাত্রদের লক্ষ্য
          উদ্দেশ্যের প্রতি।...
        </p>
      </motion.div>

      <motion.div
        className="mt-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <button
          onClick={() => router.push(`/about-madrasha`)}
          className="border py-2 px-5 rounded-md hover:bg-green-500 hover:border-green-500 transition-all duration-300"
        >
          প্রতিষ্ঠান পরিচিতি
        </button>
      </motion.div>
    </div>
  );
};

export default HomeTexts;
