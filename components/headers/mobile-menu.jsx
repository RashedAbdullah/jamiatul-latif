import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import DropDown from "./dropdown";
import { introductiion } from "@/data/introduction";
import { courses } from "@/data/courses";
import { notices } from "@/data/notices";
import { curriculums } from "@/data/curriculum";
import NavTitle from "./nav-title";

export default function MobileMenu({ lang = "bn" }) {
  const intro = introductiion(lang);
  const course = courses(lang);
  const notice = notices(lang);
  const curriculum = curriculums(lang);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="lg:hidden">
          <Menu size={25} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>জামিয়াতুল লতিফ</SheetTitle>
          <SheetDescription>
            জামিয়াতুল লতিফ, রূপগঞ্জ, নারায়ণগঞ্জ।
          </SheetDescription>
        </SheetHeader>
        <div>
          <DropDown menu={intro} />
          <DropDown menu={course} />
          <DropDown menu={notice} />
          <DropDown menu={curriculum} />
          <NavTitle router={`/${lang}/darul-ifta`}>ফতোয়া বিভাগ</NavTitle>
          <NavTitle router={`/${lang}/blogs`}>প্রবন্ধ</NavTitle>
        </div>
      </SheetContent>
    </Sheet>
  );
}
