import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const MenuAccordion = async ({ menu }) => {
  const getMenu = () => {
    if (menu.dash === "ছাত্রদের তথ্য") {
      return (
        <ul>
          <li>
            <Link
              className="py-2 px-4 hover:bg-slate-800 w-full flex items-center gap-2 transition-all duration-300"
              href="/dashboard/students/add-student"
            >
              <MoveRight />
              ছাত্র যোগ করুন
            </Link>
          </li>
          <li>
            <Link
              className="py-2 px-4 hover:bg-slate-800 w-full flex items-center gap-2 transition-all duration-300"
              href="/dashboard/students/update-student/২০২৪-২০২৫"
            >
              <MoveRight />
              ছাত্র তথ্য আপডেট করুন
            </Link>
          </li>
          <li>
            <Link
              className="py-2 px-4 hover:bg-slate-800 w-full flex items-center gap-2 transition-all duration-300"
              href={`http://localhost:3000/dashboard/results`}
            >
              <MoveRight />
              ফলাফল যুক্ত করুন
            </Link>
          </li>
        </ul>
      );
    } else if (menu.dash === "শিক্ষক ইনফো") {
      return (
        <ul>
          <li>
            <Link
              className="py-2 px-4 hover:bg-slate-800 w-full flex items-center gap-2 transition-all duration-300"
              href=""
            >
              <MoveRight />
              শিক্ষক যোগ করুন
            </Link>
          </li>
          <li>
            <Link
              className="py-2 px-4 hover:bg-slate-800 w-full flex items-center gap-2 transition-all duration-300"
              href=""
            >
              <MoveRight />
              শিক্ষক আপডেট করুন
            </Link>
          </li>
        </ul>
      );
    } else if (menu.dash === "ফতোয়া বিভাগ") {
      return (
        <ul>
          <li>
            <Link
              className="py-2 px-4 hover:bg-slate-800 w-full flex items-center gap-2 transition-all duration-300"
              href=""
            >
              <MoveRight />
              ফতোয়া যুক্ত করুন
            </Link>
          </li>
          <li>
            <Link
              className="py-2 px-4 hover:bg-slate-800 w-full flex items-center gap-2 transition-all duration-300"
              href=""
            >
              <MoveRight />
              ফতোয়া আপডেট করুন
            </Link>
          </li>
        </ul>
      );
    } else if (menu.dash === "নোটিশ বোর্ড") {
      return (
        <ul>
          <li>
            <Link
              className="py-2 px-4 hover:bg-slate-800 w-full flex items-center gap-2 transition-all duration-300"
              href=""
            >
              <MoveRight />
              নোটিশ দিন
            </Link>
          </li>
          <li>
            <Link
              className="py-2 px-4 hover:bg-slate-800 w-full flex items-center gap-2 transition-all duration-300"
              href=""
            >
              <MoveRight />
              নোটিশ আপডেট করুন
            </Link>
          </li>
        </ul>
      );
    } else if (menu.dash === "পাঠ্যক্রম") {
      return (
        <ul>
          <li>
            <Link
              className="py-2 px-4 hover:bg-slate-800 w-full flex items-center gap-2 transition-all duration-300"
              href=""
            >
              <MoveRight />
              পাঠ্যসূচী আপডেট করুন
            </Link>
          </li>
          <li>
            <Link
              className="py-2 px-4 hover:bg-slate-800 w-full flex items-center gap-2 transition-all duration-300"
              href=""
            >
              <MoveRight />
              বিভাগসমূহ আপডেট করুন
            </Link>
          </li>
          <li>
            <Link
              className="py-2 px-4 hover:bg-slate-800 w-full flex items-center gap-2 transition-all duration-300"
              href=""
            >
              <MoveRight />
              নতুন বিভাগ যুক্ত করুন
            </Link>
          </li>
          <li>
            <Link
              className="py-2 px-4 hover:bg-slate-800 w-full flex items-center gap-2 transition-all duration-300"
              href=""
            >
              <MoveRight />
              ভবিষ্যৎ পরিকল্পনা যুক্ত করুন
            </Link>
          </li>
          <li>
            <Link
              className="py-2 px-4 hover:bg-slate-800 w-full flex items-center gap-2 transition-all duration-300"
              href=""
            >
              <MoveRight />
              ভবিষ্যৎ পরিকল্পনা আপডেট করুন
            </Link>
          </li>
        </ul>
      );
    } else if (menu.dash === "মাদর্রাসা পরিচিতি") {
      return (
        <ul>
          <li>
            <Link
              className="py-2 px-4 hover:bg-slate-800 w-full flex items-center gap-2 transition-all duration-300"
              href=""
            >
              <MoveRight />
              মাদর্রাসা পরিচিতি আপডেট করুন
            </Link>
          </li>
          <li>
            <Link
              className="py-2 px-4 hover:bg-slate-800 w-full flex items-center gap-2 transition-all duration-300"
              href=""
            >
              <MoveRight />
              মাদর্রাসা পরিচিতি যুক্ত করুন
            </Link>
          </li>
        </ul>
      );
    } else if (menu.dash === "কোর্স সমূহ") {
      return (
        <ul>
          <li>
            <Link
              className="py-2 px-4 hover:bg-slate-800 w-full flex items-center gap-2 transition-all duration-300"
              href=""
            >
              <MoveRight />
              কোর্স আপডেট করুন
            </Link>
          </li>
          <li>
            <Link
              className="py-2 px-4 hover:bg-slate-800 w-full flex items-center gap-2 transition-all duration-300"
              href=""
            >
              <MoveRight />
              নতুন কোর্স যুক্ত করুন
            </Link>
          </li>
        </ul>
      );
    }
  };
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>{menu.dash}</AccordionTrigger>
        <AccordionContent>{getMenu()}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default MenuAccordion;
