import Image from "next/image";
import ifta from "@/public/jamia_pic.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MoveRight } from "lucide-react";
const BlogCard = () => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <Image className="rounded-t-lg" src={ifta} alt="" />
      </a>
      <div className="p-5">
        <Link href={`/blogs/singleBlog`}>
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
        <Link href={`/blogs/${3333}`}>
          <Button>
            আরও পড়ুন <MoveRight />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
