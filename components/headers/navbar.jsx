import React from "react";
import MadrashaLogo from "./logo";
import Navigations from "./navigations";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center gap-5 shadow-lg py-3 bg-green-500 sticky top-0">
      <MadrashaLogo />
      <Navigations />
    </div>
  );
};

export default Navbar;
