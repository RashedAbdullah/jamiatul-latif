"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaCalendarDays } from "react-icons/fa6";

const AcademicYearDropDown = ({ lang = "bn" }) => {
  const [open, setOpen] = useState(false);

  const menu = ["2023-24", "2022-23", "2021-22", "2020-21"];
  return (
    <ul className="lg:grid grid-cols-4">
      <li
        className="py-2 lg:px-2 px-6 relative flex items-center space-x-2 border-b cursor-pointer bg-green-500 hover:bg-green-600 transition duration-300 text-white"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <div className="flex items-center gap-2">
          <div>
            <FaCalendarDays />
          </div>
          <div className="text-nowrap" aria-expanded={open}>
            শিক্ষাবর্ষ নির্বাচন করুন
          </div>
        </div>
        <button
          className="shrink-0 p-1"
          aria-expanded={open}
          onClick={(e) => {
            e.preventDefault();
            setOpen(!open);
          }}
        >
          <span className="sr-only">মেনু সমূহ</span>
          <IoIosArrowForward />
        </button>
        {/* 2nd level menu */}
        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="origin-top-right absolute top-full left-12 -translate-x-1/2 min-w-[240px] bg-white border border-slate-200 p-2 shadow-xl z-10"
            >
              {menu.map((year) => (
                <li key={year}>
                  <Link
                    className="text-slate-800 hover:bg-slate-200 flex items-center p-2 transition-all duration-300"
                    href={`/${lang}/students/${year}`}
                  >
                    {year}
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </li>
    </ul>
  );
};

export default AcademicYearDropDown;
