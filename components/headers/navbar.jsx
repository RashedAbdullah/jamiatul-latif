import MadrashaLogo from "./logo";
import Navigations from "./navigations";
import MobileMenu from "./mobile-menu";

const Navbar = ({ user }) => {
  return (
    <div className="border-b border-primary sticky top-0 z-10 backdrop-blur-lg">
      <nav className="flex justify-between items-center py-4 container">
        <MadrashaLogo />

        <Navigations user={user} />
        <MobileMenu />
      </nav>
    </div>
  );
};

export default Navbar;
