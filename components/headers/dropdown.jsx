"use client"

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RiSchoolLine } from "react-icons/ri";
const DropDown = ({ menu }) => {

  const [open, setOpen] = useState(false);
  return (
    <ul className="flex flex-wrap items-center">
      <li
        className="py-2 lg:px-2 px-6 w-full relative flex items-center space-x-2 cursor-pointer hover:bg-primary hover:text-white transition duration-300"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <Link href={`${menu.href}`}>
          <div className="flex items-center gap-2">
            <div>
              <RiSchoolLine />
            </div>
            <div className="text-nowrap" aria-expanded={open}>
              {menu.title}
            </div>
          </div>
        </Link>
        <button
          className="shrink-0 p-1"
          aria-expanded={open}
          onClick={(e) => {
            e.preventDefault();
            setOpen(!open);
          }}
        >
          <span className="sr-only">মেনু সমূহ</span>
          <IoIosArrowDown />
        </button>
        {/* 2nd level menu */}
        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="origin-top-right absolute top-full -left-14 -translate-x-1/2 min-w-[240px] bg-white border border-slate-200 p-2 rounded-lg shadow-xl z-10"
            >
              {menu.categories.map((category) => (
                <li key={category.bn}>
                  <Link
                    className="text-slate-800 hover:bg-slate-50 flex items-center p-2"
                    href={category.en}
                  >
                    <div className="flex items-center justify-center bg-white border border-slate-200 rounded shadow-sm h-7 w-7 shrink-0 mr-3">
                      {category.logo}
                    </div>
                    <span className="whitespace-nowrap">{category.bn}</span>
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

export default DropDown;
