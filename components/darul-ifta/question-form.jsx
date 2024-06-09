const QuestionForm = () => {
  return (
    <form action="" className="bg-gray-300 lg:p-10 lg:m-10 p-4 m-4 shadow-xl">
      <h2 className="text-center m-5 text-xl">মাসআলা জিজ্ঞেস করুন</h2>
      <div className="flex flex-col gap-2">
        {/* প্রশ্ন */}
        <div className="grid grid-cols-10">
          <p className="col-span-2 text-end px-3" id="ask">
            প্রশ্ন:
          </p>
          <div className="col-span-8">
            <textarea
              placeholder="প্রশ্ন বিস্তারিত লিখুন"
              className="w-full p-1 resize-none focus:outline outline-2 outline-green-500"
              type="text"
              id="ask"
              name="ask"
              rows={7}
            />
          </div>
        </div>

        {/* নাম */}
        <div className="grid grid-cols-10">
          <p className="col-span-2 text-end px-3">নাম:</p>
          <div className="col-span-8 bg-red-200">
            <input
              className="w-full p-1 resize-none focus:outline outline-2 outline-green-500"
              type="text"
              placeholder="আপনার নাম"
            />
          </div>
        </div>

        {/* ঠিকানা */}
        <div className="grid grid-cols-10">
          <p className="col-span-2 text-end px-3">ঠিকানা:</p>
          <div className="col-span-8 bg-red-200">
            <input
              className="w-full p-1 resize-none focus:outline outline-2 outline-green-500"
              type="text"
              placeholder="আপনার ঠিকানা"
            />
          </div>
        </div>

        {/* মোবাইল */}
        <div className="grid grid-cols-10">
          <p className="col-span-2 text-end px-3">মোবাইল:</p>
          <div className="col-span-8 bg-red-200">
            <input
              className="w-full p-1 resize-none focus:outline outline-2 outline-green-500"
              type="text"
              placeholder="আপনার ফোন নাম্বার"
            />
          </div>
        </div>

        <div className="text-end">
          <button className="bg-green-500 text-white py-2 px-10 mt-3 rounded">
            জমা দিন
          </button>
        </div>
      </div>
    </form>
  );
};

export default QuestionForm;
