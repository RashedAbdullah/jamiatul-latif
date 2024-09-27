import Image from "next/image"
import Link from "next/link"
import quran_halaqah from "@/public/quran_halaqah.png";
import user from "@/public/user.png";

const CourseCard = () => {
  return (
    <div>
    <div>
      <Image src={quran_halaqah} alt="Quran's halaqah course" />
    </div>
    <div className="bg-[#083042] p-5 rounded-xl flex justify-between align-middle items-center mt-5">
      <div className="text-white">
        <h2 className="text-xl font-semibold">জেনারেল কুরআন শিক্ষা</h2>
        <p>প্রতি শনিবার - শুক্রবার সন্ধ্যা ৭-৮ টা পর্যন্ত</p>
      </div>
      <div className="">
        <div className="flex">
          <Image
            src={user}
            alt="course user"
            className="h-6 w-6 rounded-full"
          />

          <Image
            src={user}
            alt="course user"
            className="h-6 w-6 rounded-full"
          />

          <Image
            src={user}
            alt="course user"
            className="h-6 w-6 rounded-full"
          />

          <Image
            src={user}
            alt="course user"
            className="h-6 w-6 rounded-full"
          />
          <div className="h-6 w-6 bg-white rounded-full text-[10px] flex flex-col justify-center items-center leading-3">
            <p>৪+</p>
            <p>আগ্রহী</p>
          </div>
        </div>
        <div className="text-end">
          <Link href="" className="text-yellow-200 underline text-sm">
            বিস্তারিত
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CourseCard