const PageTitle = ({ children }) => {
  return (
    <div id="title" className="text-3xl flex justify-center my-5 font-bold">
      <div className="mb-3 pb-5 border-b border-green-500 px-20 text-slate-700">
        <h2>{children}</h2>
      </div>
    </div>
  );
};

export default PageTitle;
