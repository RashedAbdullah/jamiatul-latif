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
import { curriculums } from "@/data/curriculum";
import NavTitle from "./nav-title";
import { students } from "@/data/students";

export default function MobileMenu() {
  const intro = introductiion();
  const stdts = students();

  const curriculum = curriculums();
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
          <DropDown menu={stdts} />
          <NavTitle router={`/articles`}>প্রবন্ধ</NavTitle>
          <NavTitle router={`/notices`}>নোটিশ</NavTitle>
          <DropDown menu={curriculum} />
          <NavTitle router={`/darul-ifta`}>ফতোয়া বিভাগ</NavTitle>
        </div>
      </SheetContent>
    </Sheet>
  );
}
