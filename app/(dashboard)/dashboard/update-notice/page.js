import { getNotices } from "@/actions/notice";
import Link from "next/link";

const UpdateNotice = async () => {
  const notices = await getNotices();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">নোটিশ আপডেট করুন</h1>

      <div className="space-y-4">
        {notices.map((notice) => (
          <div
            key={notice.id}
            className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md"
          >
            <h2 className="text-xl">{notice.title}</h2>
            <Link
              href={`/dashboard/update-notice/${notice.id}`}
              className="text-blue-500 hover:underline"
            >
              আপডেট করুন
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpdateNotice;
