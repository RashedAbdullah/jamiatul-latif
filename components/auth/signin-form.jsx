const SigninForm = () => {
  return (
    <form className="lg:p-10 lg:m-10 p-4 m-4 shadow-xl max-w-[40vw rounded-lg">
      <h2 className="text-center m-5 text-xl">সাইনআপ করুন</h2>
      <div className="flex flex-col gap-5">
        {/* ইমেইল */}
        <div className="grid grid-cols-10">
          <p className="col-span-2 text-end px-3">ইমেইল:</p>
          <div className="col-span-8">
            <input
              className="w-full py-1 px-3 resize-none focus:outline outline-2 outline-green-500 rounded"
              type="email"
              placeholder="আপনার ইমেইল"
              name="email"
            />
          </div>
        </div>

        {/* পাসওয়ার্ড */}
        <div className="grid grid-cols-10">
          <p className="col-span-2 text-end px-3">পাসওয়ার্ড:</p>
          <div className="col-span-8">
            <input
              className="w-full py-1 px-3 resize-none focus:outline outline-2 outline-green-500 rounded"
              type="password"
              placeholder="আপনার পাসওয়ার্ড"
              name="passowrd"
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

export default SigninForm;
