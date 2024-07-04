const SubTitle = ({ children }) => {
  return (
    <div className="flex justify-center my-4">
      <div className="text-2xl flex items-center gap-1 border-b pb-1 border-primary px-6 relative">
        <div className="h-2 w-2 bg-primary rounded-full absolute right-0 -bottom-[4px]" />
        <div className="h-2 w-2 bg-primary rounded-full absolute left-0 -bottom-[4px]" />
        <h3>{children}</h3>
      </div>
    </div>
  );
};

export default SubTitle;
