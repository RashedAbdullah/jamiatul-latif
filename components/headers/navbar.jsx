"use client";

import { useState } from "react";
import MadrashaLogo from "./logo";
import Navigations from "./navigations";
import MobileMenu from "./mobile-menu";

const Navbar = ({ user }) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="flex justify-between items-center shadow-lg py-3 bg-green-500 sticky top-0 z-10">
      <MadrashaLogo />
      <Navigations openMenu={openMenu} user={user} />
      <MobileMenu
        onOpenMenu={() => setOpenMenu(!openMenu)}
        openMenu={openMenu}
      />
    </nav>
  );
};

export default Navbar;
