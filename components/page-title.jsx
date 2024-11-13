const PageTitle = ({ children }) => {
  return (
    <div className="md:text-3xl text-2xl flex justify-center my-5 font-bold">
      <div className="mb-3 pb-2 border-b border-primary md:px-5 px-10 text-primary relative">
        <div className="h-3 w-3 bg-primary rounded-full absolute right-0 -bottom-[6px]" />
        <div className="h-3 w-3 bg-primary rounded-full absolute left-0 -bottom-[6px]" />
        <h1 className="text-nowrap">{children}</h1>
      </div>
    </div>
  );
};

export default PageTitle;
