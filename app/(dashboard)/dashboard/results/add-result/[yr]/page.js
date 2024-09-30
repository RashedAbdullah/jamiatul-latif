import { getYear } from "@/actions/year";
import Link from "next/link";

const DhasAddResultYearPgae = async ({ params: { yr } }) => {
  const years = await getYear();
  return (
    <div>
      <h3 className="text-4xl text-center py-20 text-gray-400">
        <span className="font-NotoSerifBengali">
          {decodeURIComponent(yr)} শিক্ষাবর্ষ ।{" "}
        </span>
        জামাত সিলেক্ট করুন
      </h3>
    </div>
  );
};

export default DhasAddResultYearPgae;
