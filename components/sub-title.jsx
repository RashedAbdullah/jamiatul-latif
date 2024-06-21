import { IoIosArrowDown } from "react-icons/io";

const SubTitle = ({ children, showIcon = true }) => {
  return (
    <div className="flex justify-center my-4">
      <div className="text-2xl flex items-center gap-1 border-b pb-1 border-green-500 px-6 relative">
        <div className="h-2 w-2 bg-green-500 rounded-full absolute right-0 -bottom-[4px]" />
        <div className="h-2 w-2 bg-green-500 rounded-full absolute left-0 -bottom-[4px]" />
        <h3>{children}</h3>
        {/* {showIcon && <IoIosArrowDown />} */}
      </div>
    </div>
  );
};

export default SubTitle;
