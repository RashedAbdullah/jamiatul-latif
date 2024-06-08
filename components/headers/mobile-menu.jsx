import { TiThMenu } from "react-icons/ti";
const MobileMenu = ({ onOpenMenu }) => {
  return (
    <div>
      <div className="block lg:hidden mr-5 text-2xl">
        <button onClick={onOpenMenu}>
          <TiThMenu color="white" />
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
