import { getStudents } from "@/actions";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default async function SelectClass({ lang = "bn", path }) {
  const classes = await getStudents();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          জামাত নির্বাচন করুন <ChevronDown size={15} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-52">
        {classes
          .sort((a, b) => a.classSerial - b.classSerial)
          .map((cls) => (
            <ul key={cls.className}>
              <li>
                <Link
                  className="py-1 px-3 hover:bg-gray-100 block"
                  href={`/${lang}/results/2024-25//${cls.id}`}
                >
                  {cls.className}
                </Link>
              </li>
            </ul>
          ))}
      </PopoverContent>
    </Popover>
  );
}
