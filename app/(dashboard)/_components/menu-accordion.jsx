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
              href={`/dashboard/results/add-result/২০২৪-২০২৫`}
            >
              <MoveRight />
              ফলাফল যুক্ত করুন
            </Link>
          </li>
          <li>
            <Link
              className="py-2 px-4 hover:bg-slate-800 w-full flex items-center gap-2 transition-all duration-300"
              href={`/dashboard/students-articles`}
            >
              <MoveRight />
              লেখা যুক্ত করুন
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
              href="/dashboard/add-teacher"
            >
              <MoveRight />
              শিক্ষক যোগ করুন
            </Link>
          </li>
          <li>
            <Link
              className="py-2 px-4 hover:bg-slate-800 w-full flex items-center gap-2 transition-all duration-300"
              href="/dashboard/update-teacher"
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
              href="/dashboard/darul-ifta/get-questions"
            >
              <MoveRight />
              ইস্তেফতা দেখুন
            </Link>
          </li>{" "}
          <li>
            <Link
              className="py-2 px-4 hover:bg-slate-800 w-full flex items-center gap-2 transition-all duration-300"
              href="/dashboard/darul-ifta/add-fatwa"
            >
              <MoveRight />
              ফতোয়া যুক্ত করুন
            </Link>
          </li>
          <li>
            <Link
              className="py-2 px-4 hover:bg-slate-800 w-full flex items-center gap-2 transition-all duration-300"
              href="/dashboard/darul-ifta/update-fatwa"
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
              href="/dashboard/add-notice"
            >
              <MoveRight />
              নোটিশ দিন
            </Link>
          </li>
          <li>
            <Link
              className="py-2 px-4 hover:bg-slate-800 w-full flex items-center gap-2 transition-all duration-300"
              href="/dashboard/update-notice"
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
              href="/dashboard/add-department"
            >
              <MoveRight />
              নতুন বিভাগ যুক্ত করুন
            </Link>
          </li>
          <li>
            <Link
              className="py-2 px-4 hover:bg-slate-800 w-full flex items-center gap-2 transition-all duration-300"
              href="/dashboard/update-department"
            >
              <MoveRight />
              বিভাগসমূহ আপডেট করুন
            </Link>
          </li>
          <li>
            <Link
              className="py-2 px-4 hover:bg-slate-800 w-full flex items-center gap-2 transition-all duration-300"
              href="/dashboard/add-curriculum"
            >
              <MoveRight />
              পাঠ্যসূচী সংযুক্ত করুন
            </Link>
          </li>
          <li>
            <Link
              className="py-2 px-4 hover:bg-slate-800 w-full flex items-center gap-2 transition-all duration-300"
              href="/dashboard/update-curriculum"
            >
              <MoveRight />
              পাঠ্যসূচী আপডেট করুন
            </Link>
          </li>
          <li>
            <Link
              className="py-2 px-4 hover:bg-slate-800 w-full flex items-center gap-2 transition-all duration-300"
              href="/dashboard/add-future-plan"
            >
              <MoveRight />
              ভবিষ্যৎ পরিকল্পনা যুক্ত করুন
            </Link>
          </li>
          <li>
            <Link
              className="py-2 px-4 hover:bg-slate-800 w-full flex items-center gap-2 transition-all duration-300"
              href="/dashboard/update-future-plan"
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
              href="/dashboard/update-madrasha-info"
            >
              <MoveRight />
              মাদর্রাসা পরিচিতি আপডেট করুন
            </Link>
          </li>
          <li>
            <Link
              className="py-2 px-4 hover:bg-slate-800 w-full flex items-center gap-2 transition-all duration-300"
              href="/dashboard/add-madrasha-info"
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
    } else if (menu.dash === "মতামত সমূহ") {
      return (
        <ul>
          <li>
            <Link
              className="py-2 px-4 hover:bg-slate-800 w-full flex items-center gap-2 transition-all duration-300"
              href="/dashboard/opinions"
            >
              <MoveRight />
              মতামত সমূহ
            </Link>
          </li>
        </ul>
      );
    } else if (menu.dash === "বেসিক ইনফো") {
      return (
        <ul>
          <li>
            <Link
              className="py-2 px-4 hover:bg-slate-800 w-full flex items-center gap-2 transition-all duration-300"
              href="/dashboard/add-info"
            >
              <MoveRight />
              ইনফো যুক্ত করুন
            </Link>
          </li>
          <li>
            <Link
              className="py-2 px-4 hover:bg-slate-800 w-full flex items-center gap-2 transition-all duration-300"
              href="/dashboard/update-info"
            >
              <MoveRight />
              ইনফো আপডেট করুন
            </Link>
          </li>
        </ul>
      );
    } else if (menu.dash === "প্রবন্ধ সমূহ") {
      return (
        <ul>
          <li>
            <Link
              className="py-2 px-4 hover:bg-slate-800 w-full flex items-center gap-2 transition-all duration-300"
              href="/dashboard/add-article"
            >
              <MoveRight />
              প্রবন্ধ যুক্ত করুন
            </Link>
          </li>
          <li>
            <Link
              className="py-2 px-4 hover:bg-slate-800 w-full flex items-center gap-2 transition-all duration-300"
              href="/dashboard/update-article"
            >
              <MoveRight />
              প্রবন্ধ আপডেট করুন
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
