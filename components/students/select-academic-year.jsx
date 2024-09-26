import { getYear } from "@/actions/year";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default async function SelectAcademicYear({ lang = "bn", navlink }) {
  const years = await getYear();
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          শিক্ষাবর্ষ নির্বাচন করুন <ChevronDown size={15} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-40">
        {years.map((yr) => (
          <ul key={yr.id}>
            <li>
              <Link
                className="py-1 px-3 hover:bg-gray-100 block"
                href={`/${lang}/${navlink}/${yr.academicYear}`}
              >
                {yr.academicYear}
              </Link>
            </li>
          </ul>
        ))}
      </PopoverContent>
    </Popover>
  );
}
