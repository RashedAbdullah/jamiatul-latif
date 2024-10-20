import { getFatwas } from "@/actions/fatwa";
import Link from "next/link"; // Make sure to import Link from Next.js

const DashUpdateFatwa = async () => {
  const fatwas = await getFatwas();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">ফতোয়া আপডেট করুন</h1>

      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        {fatwas.map((fatwa) => (
          <div key={fatwa.id} className="border-b border-gray-300 pb-4 mb-4">
            <h2 className="text-2xl font-semibold mb-2">{fatwa.fatwa_no}</h2>
            <p className="text-lg mb-2">উত্তর: {fatwa.answer}</p>
            <Link
              href={`/dashboard/darul-ifta/update-fatwa/${fatwa.id}`} // Adjust the path as per your route structure
              className="text-blue-500 hover:underline"
            >
              ফতোয়া আপডেট করুন
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashUpdateFatwa;
