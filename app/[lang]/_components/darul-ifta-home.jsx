import Image from "next/image";
import ifta_book from "@/public/ifta_book.png";
import { Button } from "@/components/ui/button";

const DarulIftaHome = () => {
  return (
    <div className="lg:grid grid-cols-2 gap-10">
      <div>
        <Image src={ifta_book} alt="Jamia picture" placeholder="blur" />
      </div>
      <div className="flex flex-col justify-center gap-5">
        <div className="text-2xl font-semibold">
          <h2>ফতোয়া বিভাগ</h2>
        </div>
        <div>
          <p>
            ইসলামের বিভিন্ন প্রশ্ন ও সমস্যার সমাধান প্রদানের জন্য আমাদের
            মাদ্রাসায় ফতোয়া বিভাগ রয়েছে। সাধারণ মানুষ তাদের দ্বীনি প্রশ্নের
            সমাধান পেতে পারেন। আমাদের অভিজ্ঞ উস্তাদগণ ইসলামিক শরীয়াহের আলোকে
            ফতোয়া প্রদান করেন।
          </p>
        </div>
        <div className="flex gap-4">
        <Button>আপনার জিজ্ঞাসা</Button>
        <Button variant="secondary">ইফতার প্রবন্ধ পড়ুন</Button>
        </div>
      </div>
    </div>
  );
};

export default DarulIftaHome;
