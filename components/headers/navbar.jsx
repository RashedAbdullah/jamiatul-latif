import MadrashaLogo from "./logo";
import Navigations from "./navigations";
import MobileMenu from "./mobile-menu";

const Navbar = ({ user }) => {
  return (
    <nav className="flex justify-between items-center py-4 sticky top-0 z-10 backdrop-blur-lg container">
      <MadrashaLogo />

      <Navigations user={user} />
      <MobileMenu />
    </nav>
  );
};

export default Navbar;
