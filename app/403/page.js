import Link from "next/link";

export default function Custom403() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-6xl font-bold text-red-500">403</h1>
      <h2 className="text-2xl font-semibold mt-4 text-gray-800">অনুমতি নেই</h2>
      <p className="text-lg text-gray-600 mt-2">
        দুঃখিত, আপনি এই পৃষ্ঠায় প্রবেশের অনুমতি পাচ্ছেন না।
      </p>
      <Link
        href="/"
        className="mt-6 px-6 py-2 bg-slate-500 text-white rounded hover:bg-slate-600"
      >
        হোম পেজে ফিরে যান
      </Link>
    </div>
  );
}
