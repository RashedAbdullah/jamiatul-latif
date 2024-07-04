"use client";

import { useState } from "react";
import MadrashaLogo from "./logo";
import Navigations from "./navigations";
import MobileMenu from "./mobile-menu";

const Navbar = ({ user }) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="flex justify-between items-center py-4 sticky top-0 z-10 border-b shadow backdrop-blur-lg bg-white/30">
      <MadrashaLogo classes="lg:hidden" />
     
      <Navigations openMenu={openMenu} user={user} />
      <MobileMenu
        onOpenMenu={() => setOpenMenu(!openMenu)}
        openMenu={openMenu}
      />
    </nav>
  );
};

export default Navbar;
