import { getMadrashaInfo } from "@/actions/madrasha";
import PageTitle from "@/components/page-title";
import Link from "next/link";

const UpdateMadrashaInfoPage = async () => {
  const madrashaInfos = await getMadrashaInfo();

  return (
    <div className="container mx-auto p-4">
      <PageTitle className="text-2xl font-bold mb-6">
        মাদ্রাসাতথ্য আপডেট করুন
      </PageTitle>

      {madrashaInfos.length === 0 ? (
        <p>No Madrasha information found.</p>
      ) : (
        <div className="space-y-4">
          {madrashaInfos.map((info) => (
            <div
              key={info._id}
              className="p-4 border border-gray-300 rounded-lg grid grid-cols-12"
            >
              <h2 className="text-lg font-semibold mb-2 col-span-2">
                {info.title}:
              </h2>
              <p className="mb-2 col-span-8">{info.details}</p>
              <Link
                href={`/dashboard/update-madrasha-info/${info._id}`}
                className="text-blue-500 hover:underline col-span-2"
              >
                আপডেট করুন
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UpdateMadrashaInfoPage;
