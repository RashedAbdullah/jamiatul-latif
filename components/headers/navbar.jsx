import IntroMadrasha from "./intro-madrasha";
import MadrashaLogo from "./logo";

const Navbar = () => {
  return (
    <div className="flex align-middle items-center gap-5 m-5">
      <MadrashaLogo />
      <IntroMadrasha />
    </div>
  );
};

export default Navbar;
