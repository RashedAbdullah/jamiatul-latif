import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import book from "@/public/book.png";
import darululum from "@/public/darululum.png";
import reader from "@/public/reader.png";
import homeImage from "@/public/home_image.jpeg"
const HeaderInfo = ({ lang = "bn" }) => {
  return (
    <div className="lg:grid grid-cols-2 flex flex-col-reverse">
      <div className="flex flex-col justify-center gap-14 md:min-h-[70vh] min-h-[40vh]">
        <div>
          <h2 className="lg:text-4xl text-2xl">
            জ্ঞান কেবল সূচনা, জ্ঞানের পরেই রয়েছে প্রজ্ঞা{" "}
            <strong>জমিয়াতুল লতিফে</strong> আমরা মনকে করি আলোকিত এবং আত্মাকে
            করি প্রভুর পথে অনুপ্রাণিত।
          </h2>
        </div>
        <div>
          <p>
            ইলম ও গবেষণার পথে আমাদের সাথে যোগ দিন। আমরা আলোকিত <br />{" "}
            শিক্ষার্থীদের একটি সমৃদ্ধ সমাজ গড়তে প্রতিশ্রুতিবদ্ধ।
          </p>

          {/* Buttons */}
          <div className="flex gap-3 mt-3">
            <div>
              <Link href={`${lang}/donate`}>
                <Button>অনুদান দিন</Button>
              </Link>
            </div>
            <div>
              <Link href={`${lang}/about-madrasha`}>
                <Button variant="outline">আরও জানুন</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-5 mt-10">
        <div className="md:block hidden">
          <Image
            src={book}
            alt="Jamia picture"
            className="rounded-full"
            placeholder="blur"
          />
        </div>
        <div className="mt-10 md:block hidden">
          <Image src={reader} alt="Jamia picture" />
        </div>
        <div className="md:block hidden">
          <Image src={darululum} alt="Jamia picture"/>
        </div>
        <div className="sm:hidden">
        <Image src={homeImage} alt="Jamia picture"/>
        </div>
      </div>
    </div>
  );
};

export default HeaderInfo;
