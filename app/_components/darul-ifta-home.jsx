import Image from "next/image";
import ifta_book from "@/public/ifta_book.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RiQuestionAnswerFill } from "react-icons/ri";
import { MdLibraryBooks } from "react-icons/md";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DarulIftaHome = () => {
  return (
    <Card className="md:grid grid-cols-2 gap-8 overflow-hidden border-0 shadow-sm">
      {/* Image Section */}
      <div className="relative h-full min-h-[300px] md:min-h-[400px]">
        <Image
          src={ifta_book}
          alt="Jamia picture"
          fill
          className="object-cover"
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent md:bg-gradient-to-r md:from-black/20 md:to-transparent" />
      </div>

      {/* Content Section */}
      <CardContent className="flex flex-col justify-center gap-6 p-8">
        <CardHeader className="p-0">
          <CardTitle className="text-3xl font-bold text-center md:text-left">
            ফতোয়া বিভাগ
          </CardTitle>
        </CardHeader>

        <div className="space-y-4 text-muted-foreground">
          <p className="leading-relaxed">
            ইসলামের বিভিন্ন প্রশ্ন ও সমস্যার সমাধান প্রদানের জন্য আমাদের
            মাদ্রাসায় ফতোয়া বিভাগ রয়েছে। সাধারণ মানুষ তাদের দ্বীনি প্রশ্নের
            সমাধান পেতে পারেন।
          </p>
          <p className="leading-relaxed">
            আমাদের অভিজ্ঞ উস্তাদগণ ইসলামিক শরীয়াহের আলোকে ফতোয়া প্রদান করেন।
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Link href={`/ask-fatwa`} className="w-full sm:w-auto">
            <Button className="w-full gap-2">
              <RiQuestionAnswerFill size={16} />
              আপনার জিজ্ঞাসা
            </Button>
          </Link>
          <Link href={`/darul-ifta`} className="w-full sm:w-auto">
            <Button variant="outline" className="w-full gap-2">
              <MdLibraryBooks size={17} />
              ফতোয়া দেখুন
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default DarulIftaHome;