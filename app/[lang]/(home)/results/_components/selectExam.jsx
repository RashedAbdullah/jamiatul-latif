import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function SelectExam({ lang = "bn", path }) {
  console.log(path);
  const exams = [
    { bn: "প্রথম সাময়ীক পরীক্ষা", en: 0 },
    { bn: "দ্বিতীয় সাময়ীক পরীক্ষা", en: 1 },
    { bn: "বার্ষিক পরীক্ষা", en: 2 },
  ];
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          পরীক্ষা নির্বাচন করুন <ChevronDown size={15} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-52">
        {exams.map((exam) => (
          <ul key={exam.en}>
            <li>
              <Link
                className="py-1 px-3 hover:bg-gray-100 block"
                href={`/${lang}/results/2024-25//${exam.en}`}
              >
                {exam.bn}
              </Link>
            </li>
          </ul>
        ))}
      </PopoverContent>
    </Popover>
  );
}
