import { Button } from "@/components/ui/button";
import Link from "next/link";
import jamiaPic from "@/public/jamia_pic.jpg";
import Image from "next/image";

export default function Home({ params: { lang } }) {
  return (
    <main className="container">
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-center gap-14 min-h-[70vh]">
          <div>
            <h2 className="lg:text-4xl md:text-2xl text-xl">
              নিছক জ্ঞানের বাইরে বাতাস রয়েছে, <strong>জমিয়াতুল লতিফে</strong>,
              আমরা মনকে আলোকিত করি এবং আত্মাকে ঈশ্বরের সন্ধানে উদ্বুদ্ধ করি।
            </h2>
          </div>
          <div>
            <p>
              নিছক জ্ঞানের বাইরে বাতাস রয়েছে, <strong>জমিয়াতুল লতিফে</strong>,
              আমরা মনকে আলোকিত করি এবং আত্মাকে ঈশ্বরের সন্ধানে উদ্বুদ্ধ করি।
              নিছক জ্ঞানের বাইরে বাতাস রয়েছে, জমিয়াতুল লতিফে, আমরা মনকে আলোকিত
              করি এবং আত্মাকে ঈশ্বরের সন্ধানে উদ্বুদ্ধ করি।
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
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
        <div className="flex">
          <div>
            <Image
              src={jamiaPic}
              alt="Jamia picture"
              className="rounded-full"
              placeholder="blur"
            />
          </div>
          <div>
            <Image src={jamiaPic} alt="Jamia picture" />
          </div>
          <div>
            <Image src={jamiaPic} alt="Jamia picture" />
          </div>
        </div>
      </div>

      {/* বেসিক মাদরাসা ইনফো */}
      <div className="flex justify-between">
        <div className="p-4">
          <h3 className="text-4xl">১১০+</h3>
          <h3>মোট ছাত্র সংখ্যা</h3>
        </div>
        <div className="border-r-2"></div>
        <div className="p-4">
          <h3 className="text-4xl">১৫+</h3>
          <h3>শিক্ষক সংখ্যা</h3>
        </div>
        <div className="border-r-2"></div>
        <div className="p-4">
          <h3 className="text-4xl">৫+</h3>
          <h3>স্টাপ ও কর্মচারি সংখ্যা</h3>
        </div>
        <div className="border-r-2"></div>
        <div className="p-4">
          <h3 className="text-4xl">৪+</h3>
          <h3>মাদরাসার বয়স</h3>
        </div>
      </div>
    </main>
  );
}
