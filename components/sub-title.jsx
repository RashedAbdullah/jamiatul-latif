import { IoIosArrowForward } from "react-icons/io";

const SubTitle = ({ children }) => {
  return (
    <div className="flex">
      <div className="text-2xl flex items-center gap-1 border-b pb-1 border-green-500">
        <h3>{children}</h3>
        <IoIosArrowForward />
      </div>
    </div>
  );
};

export default SubTitle;
