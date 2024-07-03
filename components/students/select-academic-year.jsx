"use client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";

export default function PopoverDemo({ lang = "bn" }) {
  const years = [
    { bn: "২০২৪-২৫", en: "2024-25" },
    { bn: "২০২৩-২৪", en: "2023-24" },
    { bn: "২০২২-২৩", en: "2022-23" },
    { bn: "২০২১-২২", en: "2021-22" },
    { bn: "২০২০-২১", en: "2020-21" },
  ];
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">শিক্ষাবর্ষ</Button>
      </PopoverTrigger>
      <PopoverContent className="w-40">
        {years.map((year) => (
          <ul key={year.en}>
            <li>
              <Link
                className="py-1 px-3 hover:bg-gray-100 block"
                href={`/${lang}/students/${year.en}`}
              >
                {year.bn}
              </Link>
            </li>
          </ul>
        ))}
      </PopoverContent>
    </Popover>
  );
}
