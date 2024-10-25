import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import book from "@/public/book.png";
import darululum from "@/public/darululum.png";
import reader from "@/public/reader.png";
import homeImage from "@/public/home_image.jpeg";
import { ArrowRight } from "lucide-react";
import { BiComment } from "react-icons/bi";

const HeaderInfo = () => {
  return (
    <div className="lg:grid grid-cols-2 lg:gap-10 flex flex-col-reverse">
      {/* Text Section */}
      <div className="flex flex-col justify-center gap-14 md:min-h-[70vh] min-h-[40vh] p-5">
        <h2 className="text-2xl md:text-4xl leading-normal md:leading-snug font-semibold text-slate-800">
          জ্ঞান কেবল সূচনা, জ্ঞানের পরেই রয়েছে প্রজ্ঞা{" "}
          <strong className="font-bold text-green-900">জমিয়াতুল লতিফে</strong>{" "}
          আমরা মনকে করি আলোকিত এবং আত্মাকে করি প্রভুর পথে অনুপ্রাণিত।
        </h2>
        <p className="text-gray-700">
          ইলম ও গবেষণার পথে আমাদের সাথে যোগ দিন। আমরা আলোকিত{" "}
          <span className="hidden md:inline">
            <br />{" "}
          </span>
          শিক্ষার্থীদের একটি সমৃদ্ধ সমাজ গড়তে প্রতিশ্রুতিবদ্ধ।
        </p>

        {/* Buttons */}
        <div className="flex gap-3 mt-3">
          <Link href={`/get-opinion`}>
            <Button className="flex justify-center items-center gap-2">
              মতামত দিন <BiComment />
            </Button>
          </Link>
          <Link href={`/about-madrasha`}>
            <Button
              variant="outline"
              className="flex justify-center items-center gap-2"
            >
              আরও জানুন <ArrowRight size={15} />
            </Button>
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center gap-5 mt-10">
        {/* Desktop Images */}
        <div className="md:block hidden">
          <Image
            src={book}
            alt="Book representing knowledge"
            className="rounded-full"
            placeholder="blur"
            priority
          />
        </div>
        <div className="mt-10 md:block hidden">
          <Image src={reader} alt="Reader depicting learning" />
        </div>
        <div className="md:block hidden">
          <Image src={darululum} alt="Darululum representing education" />
        </div>
        {/* Mobile Image */}
        <div className="sm:hidden">
          <Image
            src={homeImage}
            alt="Jamia home image"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderInfo;
