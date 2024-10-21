import { getInfo } from "@/actions/info";
import AnimateNumbers from "./animate-numbers";
import { Fragment } from "react";

const BesicMadrashaInfo = async () => {
  let infos = [];
  let error = null;

  try {
    infos = await getInfo();
  } catch (err) {
    console.error("Error fetching info:", err.message);
    error = "তথ্য লোড করা সম্ভব হচ্ছে না। অনুগ্রহ করে পরে আবার চেষ্টা করুন।";
  }

  // Error handling: if error exists, display error message
  if (error) {
    return (
      <div className="p-4 text-red-500">
        {error}
      </div>
    );
  }

  // Handle no data
  if (!infos || infos.length === 0) {
    return (
      <div className="p-4 text-gray-500">
        কোন তথ্য পাওয়া যায়নি।
      </div>
    );
  }

  return (
    <div className="lg:flex justify-between">
      {infos.map((info) => (
        <Fragment key={info._id}>
          <div className="p-4">
            <h3 className="text-4xl font-NotoSerifBengali">
              <AnimateNumbers number={info.count} />+
            </h3>
            <h3>{info.title}</h3>
          </div>
          <div className="lg:border-r-2 border-b-2"></div>
        </Fragment>
      ))}
    </div>
  );
};

export default BesicMadrashaInfo;
