export const metadata = {
  title: "নোটিশ বোর্ড",
  description: "জামিয়াতুল লতিফ রূপগঞ্জ মাদরাসার নোটিশ বোর্ড",
};

const Notices = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto py-10 px-4">
        {/* Page Header */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          নোটিশ বোর্ড
        </h1>
        <p className="text-center text-gray-600 mb-10">
          জামিয়াতুল লতিফ রূপগঞ্জ মাদরাসার সকল গুরুত্বপূর্ণ নোটিশ সমূহ এখানে
          পাবেন।
        </p>

        {/* Notices List */}
        <div className="space-y-6">
          {/* Single Notice */}
          <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800">
              নতুন ভর্তি বিজ্ঞপ্তি
            </h2>
            <p className="mt-4 text-gray-600">
              জামিয়াতুল লতিফ রূপগঞ্জ মাদরাসায় ২০২৫ সালের নতুন শিক্ষাবর্ষে ভর্তি
              শুরু হয়েছে।
            </p>
            <p className="mt-2 text-sm text-gray-500">
              তারিখ: ১লা নভেম্বর ২০২৪
            </p>
          </div>

          {/* Another Notice */}
          <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800">
              বার্ষিক পরীক্ষা সূচি
            </h2>
            <p className="mt-4 text-gray-600">
              ২০২৪ শিক্ষাবর্ষের বার্ষিক পরীক্ষার সূচি প্রকাশিত হয়েছে।
            </p>
            <p className="mt-2 text-sm text-gray-500">
              তারিখ: ১৫ই অক্টোবর ২০২৪
            </p>
          </div>

          {/* Another Notice */}
          <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800">
              ছুটির নোটিশ
            </h2>
            <p className="mt-4 text-gray-600">
              আসন্ন ঈদ উল ফিতর উপলক্ষে মাদরাসা ৭ দিন বন্ধ থাকবে।
            </p>
            <p className="mt-2 text-sm text-gray-500">
              তারিখ: ২০শে ডিসেম্বর ২০২৪
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notices;
