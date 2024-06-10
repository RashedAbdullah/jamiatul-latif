import { IoIosArrowDown } from "react-icons/io";

const SubTitle = ({ children }) => {
  return (
    <div className="flex justify-center my-4">
      <div className="text-2xl flex items-center gap-1 border-b pb-1 border-green-500 px-6">
        <h3>{children}</h3>
        <IoIosArrowDown />
      </div>
    </div>
  );
};

export default SubTitle;
