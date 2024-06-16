"use client";

import { motion } from "framer-motion";
const HomeTexts = () => {
  return (
    <div className="relative container mx-auto p-4 text-center text-white pt-20">
      <motion.h2
        className="text-3xl mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        জামিয়াতুল লতিফ রূপগঞ্জ
      </motion.h2>
      <motion.p
        className="text-lg lg:mx-32"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        জামিয়াতুল লতিফ একটি কওমি মাদরাসা যা অনুসরণ করে দারুল ‍উলুম দেওবন্দ ও
        আকাবিরে দেওবন্দকে। এবং জামিয়াতুল লতিফ অবশ্যই সবসময় সচেষ্ট থাকে ছাত্রদের
        লক্ষ্য উদ্দেশ্যের প্রতি। জামিয়াতুল লতিফ একটি কওমি মাদরাসা যা অনুসরণ করে
        দারুল ‍উলুম দেওবন্দ ও আকাবিরে দেওবন্দকে। এবং জামিয়াতুল লতিফ অবশ্যই সবসময়
        সচেষ্ট থাকে ছাত্রদের লক্ষ্য উদ্দেশ্যের প্রতি। জামিয়াতুল লতিফ একটি কওমি
        মাদরাসা যা অনুসরণ করে দারুল ‍উলুম দেওবন্দ ও আকাবিরে দেওবন্দকে। এবং
        জামিয়াতুল লতিফ অবশ্যই সবসময় সচেষ্ট থাকে ছাত্রদের লক্ষ্য উদ্দেশ্যের
        প্রতি।
      </motion.p>
    </div>
  );
};

export default HomeTexts;
