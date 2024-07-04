import Link from "next/link";
import React from "react";
import { ImBooks } from "react-icons/im";
import { LuPenSquare } from "react-icons/lu";
import { AiOutlineLogin } from "react-icons/ai";

const NavTitle = ({ children, router = "/" }) => {
  const child = () => {
    switch (children) {
      case "প্রবন্ধ":
        return <LuPenSquare />;
      case "ফতোয়া বিভাগ":
        return <ImBooks />;
      case "ফতোয়া বিভাগ":
        return <ImBooks />;
      case "লগইন":
        return <AiOutlineLogin />;
      default:
      // Code to execute if expression doesn't match any case
    }
  };

  return (
    <ul className="flex flex-wrap items-center">
      <li
        className={`py-2 lg:px-4 px-6 w-full relative flex items-center space-x-2 hover:text-white hover:bg-slate-800 transition duration-300 cursor-pointer ${
          children === "লগইন" && "bg-slate-800 text-white rounded-lg"
        }`}
      >
        <Link href={router}>
          <div className="flex items-center gap-2">
            <div>{child()}</div>
            <div className="text-nowrap">{children}</div>
          </div>
        </Link>
      </li>
    </ul>
  );
};

export default NavTitle;
