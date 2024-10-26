const DashboardPage = async () => {
  return (
    <div className="max-h-[85vh] p-6 bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h1 className="text-3xl font-bold text-primary">ড্যাশবোর্ড</h1>
        <p className="text-gray-700 mt-2">
          এই ড্যাশবোর্ডে আপনি সমস্ত কার্যক্রমের একটি সারসংক্ষেপ দেখতে পাবেন। এটি
          আপনাকে প্রতিষ্ঠানের গুরুত্বপূর্ণ তথ্য, ছাত্র-শিক্ষক সম্পর্কিত বিভিন্ন
          কার্যক্রম এবং অন্যান্য কার্যক্রম সম্পর্কে তথ্য প্রদান করবে।
        </p>
      </div>

      {/* Section for Overview */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold text-primary">সারাংশ</h2>
        <p className="text-gray-700 mt-2">
          এখানে আপনি প্রতিষ্ঠানের সারসংক্ষেপ, শিক্ষার্থীদের সংখ্যা,
          শিক্ষকবৃন্দের সংখ্যা এবং অন্যান্য গুরুত্বপূর্ণ পরিসংখ্যান দেখতে পাবেন।
        </p>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-4">
          <div className="bg-blue-100 p-4 rounded-lg text-center">
            <h3 className="text-lg font-bold text-blue-600">মোট ছাত্র</h3>
            <p className="text-2xl font-semibold">120</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg text-center">
            <h3 className="text-lg font-bold text-green-600">মোট শিক্ষক</h3>
            <p className="text-2xl font-semibold">15</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg text-center">
            <h3 className="text-lg font-bold text-yellow-600">শিক্ষাবর্ষ</h3>
            <p className="text-2xl font-semibold">2024</p>
          </div>
        </div>
      </div>

      {/* Section for Recent Activities */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold text-primary">
          সাম্প্রতিক কার্যক্রম
        </h2>
        <ul className="list-disc list-inside mt-4 text-gray-700">
          <li>নতুন শিক্ষার্থীদের ভর্তি প্রক্রিয়া শুরু হয়েছে।</li>
          <li>শিক্ষক প্রশিক্ষণ কর্মশালা অনুষ্ঠিত হয়েছে।</li>
          <li>বার্ষিক ক্রীড়া প্রতিযোগিতা আগামী মাসে অনুষ্ঠিত হবে।</li>
          <li>বিদ্যালয়ে স্যানিটাইজেশন কার্যক্রম সম্পন্ন হয়েছে।</li>
        </ul>
      </div>

      {/* Section for Notifications */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold text-primary">নোটিফিকেশন</h2>
        <div className="mt-4 text-gray-700">
          <p>
            সকল শিক্ষক ও শিক্ষার্থীদের জানানো যাচ্ছে যে, আগামীকাল প্রতিষ্ঠান
            বন্ধ থাকবে।
          </p>
          <p>বিভিন্ন বিষয়ের ক্লাসের সময়সূচী শীঘ্রই প্রকাশ করা হবে।</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
