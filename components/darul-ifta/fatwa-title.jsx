import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const FatwaTitle = ({ categoryBn = "", categoryName }) => {
  const categoryNames = categoryBn
    ? `${categoryBn} সংক্রান্ত মাসআলা`
    : categoryName
    ? ""
    : "নতুন মাসআলা";
  return (
    <h2 className="text-3xl my-5 flex items-center gap-2">
      {categoryNames}
      {categoryNames && <MdKeyboardDoubleArrowRight size={20} />}
    </h2>
  );
};

export default FatwaTitle;
