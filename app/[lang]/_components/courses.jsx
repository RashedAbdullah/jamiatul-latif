import Image from "next/image";
import quran_halaqah from "@/public/quran_halaqah.png";
import user from "@/public/user.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const HomaPageCourses = () => {
  // #083042
  return (
    <div>
      <div className="flex justify-center">
        <div className="bg-[#D5DEE0] px-10 py-2 rounded-full">
          <h2 className="text-[#083042]">কোর্সসমূহ</h2>
        </div>
      </div>
      <div>
        <div>
          <div>
            <Image src={quran_halaqah} alt="Quran's halaqah course" />
          </div>
          <div className="bg-[#083042] p-5 rounded-xl flex justify-between align-middle items-center">
            <div className="text-white">
              <h2 className="text-xl font-semibold">জেনারেল কুরআন শিক্ষা</h2>
              <p>প্রতি শনিবার - শুক্রবার সন্ধ্যা ৭-৮ টা পর্যন্ত</p>
            </div>
            <div className="">
              <div className="flex">
                <Image
                  src={user}
                  alt="course user"
                  className="h-8 w-8 rounded-full"
                />

                <Image
                  src={user}
                  alt="course user"
                  className="h-8 w-8 rounded-full"
                />

                <Image
                  src={user}
                  alt="course user"
                  className="h-8 w-8 rounded-full"
                />

                <Image
                  src={user}
                  alt="course user"
                  className="h-8 w-8 rounded-full"
                />
                <span className="h-8 w-8 bg-white rounded-full text-sm">৪+
                আগ্রহী</span>
              </div>
              <div className="text-end">
                <Link href="" className="text-yellow-200">
                  আরও জানুন
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomaPageCourses;
