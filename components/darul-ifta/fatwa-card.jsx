import Link from "next/link";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

const FatwaCard = ({ fatwa }) => {
  return (
    <div className="bg-white p-5 border shadow">
      <h2 className="text-lg font-semibold">
        {fatwa.questioner} - {fatwa.address}
      </h2>
      <div className="flex flex-col gap-2">
        <p>
          <span className="text-lg font-semibold">প্রশ্ন: </span>
          <span>{fatwa.question?.slice(0, 80)}...</span>
        </p>

        <p>
          <span className="text-lg font-semibold">উত্তর: </span>
          <span>{fatwa.answer?.slice(0, 160)}...</span>
        </p>
      </div>
      <div className="flex justify-end mt-2">
        <Link href={`/darul-ifta/${fatwa.categoryEn}/${fatwa.id}`}>
          <Button className="flex gap-2">
            বিস্তারিত <MoveRight />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FatwaCard;
