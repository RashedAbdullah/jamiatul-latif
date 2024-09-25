import { getClasses } from "@/actions/classes";
import { getYear } from "@/actions/year";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const SelectClass = async ({ lang = "bn", navlink }) => {
  const classes = await getClasses();
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          জামাত সিলেক্ট করুন <ChevronDown size={15} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-40">
        {classes.map((cls) => (
          <ul key={cls.id}>
            <li>
              <Link
                className="py-1 px-3 hover:bg-gray-100 block"
                href={`/${lang}/${navlink}/${"২০২৪-২০২৫"}/${cls.class.replace(
                  / /g,
                  "-"
                )}`}
              >
                {cls.class}
              </Link>
            </li>
          </ul>
        ))}
      </PopoverContent>
    </Popover>
  );
};

export default SelectClass;
