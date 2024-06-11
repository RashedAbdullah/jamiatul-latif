"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="border-b border-gray-200 bg-white shadow my-5">
      <button
        className="w-full text-left px-4 py-2 focus:outline-none hover:bg-gray-100 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-slate-700">{title}</h2>
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.div>
        </div>
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="overflow-x-auto px-4 py-2">
          <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border border-gray-200 text-gray-700">
                  বিষয়
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-gray-700">
                  কিতাব
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-gray-700">
                  কিতাব
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-gray-700">
                  কিতাব
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-gray-700">
                  কিতাব
                </th>
              </tr>
            </thead>
            <tbody>
              {content.map((item, index) => (
                <tr key={index} className="bg-white">
                  <td className="py-2 px-4 border-b border-gray-200 bg-gray-100">
                    {item.subject}
                  </td>
                  {item.books.map((book, i) => (
                    <td key={i} className="py-2 px-4 border border-gray-200">
                      {book}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default AccordionItem;
