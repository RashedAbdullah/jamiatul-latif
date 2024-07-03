import Image from "next/image";
import ifta from "@/public/jamia_pic.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const BlogCard = ({ lang = "bn" }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <Image className="rounded-t-lg" src={ifta} alt="" />
      </a>
      <div className="p-5">
        <Link href={`/${lang}/blogs/singleBlog`}>
          <h5 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">
            অবাধ্যতার ইতিহাস
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          সার্বজনীন পেনশন স্কিম নিয়ে চলমান আন্দোলনের পরিপ্রেক্ষিতে আগামীকাল
          বৃহস্পতিবার সকালে শিক্ষক নেতাদের সঙ্গে বৈঠক করবেন সড়ক পরিবহন ও
          সেতুমন্ত্রী এবং আওয়ামী লীগের সাধারণ সম্পাদক ওবায়দুল কাদের। আজ বুধবার
          বাংলাদেশ বিশ্ববিদ্যালয় শিক্ষক...
        </p>
        <Link href={`/${lang}/blogs/${3333}`}>
          <Button variant="primary">
            আরও পড়ুন
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
