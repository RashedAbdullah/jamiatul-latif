"use client";
// Import necessary libraries
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "tailwindcss/tailwind.css";
import { getAllFatwa } from "@/actions";
import { useRouter } from "next/navigation";

const SelectDropdown = ({ lang = "bn" }) => {
  const router = useRouter();
  const [fatwa, setFatwa] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("বিষয়ভিত্তিক মাসআলা");

  useEffect(() => {
    const getData = async () => {
      const data = await getAllFatwa();
      setFatwa(data);
    };
    getData();
  }, []);

  const byCategory = Object.values(
    fatwa.reduce((acc, cur) => {
      if (!acc[cur.categoryEn]) {
        acc[cur.categoryEn] = cur;
      }
      return acc;
    }, {})
  );


  const handleOptionClick = (optionEn, optionBn) => {
    setSelectedOption(optionBn);
    router.push(`/${lang}/darul-ifta/${optionEn}`);
    setIsOpen(false);
  };

  return (
    <div className="flex justify-center">
      <div className="relative min-w-56 mt-6">
        <div
          className="border border-gray-300 rounded p-2 cursor-pointer flex justify-between items-center bg-green-500 text-white shadow"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption}
          <span
            className="ml-2 transform transition-transform duration-300"
            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          >
            ▼
          </span>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute mt-2 w-full bg-white border border-gray-300 rounded shadow-lg z-10"
            >
              {byCategory?.map((option) => (
                <li
                  key={option.categoryEn}
                  className="p-2 cursor-pointer hover:bg-gray-200"
                  onClick={() =>
                    handleOptionClick(option.categoryEn, option.categoryBn)
                  }
                >
                  {option.categoryBn}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SelectDropdown;
