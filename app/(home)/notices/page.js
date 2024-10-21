import { getActiveNotices } from "@/actions/notice";

export const metadata = {
  title: "নোটিশ বোর্ড",
  description: "জামিয়াতুল লতিফ রূপগঞ্জ মাদরাসার নোটিশ বোর্ড",
};

const Notices = async () => {
  const notices = await getActiveNotices();

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto py-10 px-4">
        {/* Page Header */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          নোটিশ বোর্ড
        </h1>
        <p className="text-center text-gray-600 mb-10">
          জামিয়াতুল লতিফ রূপগঞ্জ মাদরাসার সকল গুরুত্বপূর্ণ নোটিশ সমূহ
        </p>

        {/* Notices List */}
        <div className="space-y-6">
          {/* Single Notice */}
          {notices.map((notice) => (
            <div
              key={notice.id}
              className="p-6 bg-white rounded-lg shadow-md border border-gray-200"
            >
              <h2 className="text-2xl font-semibold text-gray-800">
               {notice.title ?? "সর্বশেষ নোটিশ"}
              </h2>

              <p className="mt-4 text-gray-600">{notice.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notices;
