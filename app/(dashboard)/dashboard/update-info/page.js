import { getInfo } from "@/actions/info";
import PageTitle from "@/components/page-title";
import Link from "next/link";

const UpateInfoPage = async () => {
  const infos = await getInfo();

  return (
    <div className="container mx-auto p-6">
      <PageTitle>ইনফো আপডেট করুন</PageTitle>

      {/* Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {infos.map((info) => (
          <div
            key={info._id}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between"
          >
            {/* Info Title */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {info.title}
            </h3>

            {/* Info Count */}
            <p className="text-4xl font-bold text-indigo-500">{info.count}</p>

            {/* Update Button */}
            <div className="mt-4">
              <Link
                href={`/dashboard/update-info/${info._id}`}
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                আপডেট করুন
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpateInfoPage;
