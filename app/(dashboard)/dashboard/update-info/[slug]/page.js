import { getSingleInfo, updateInfo } from "@/actions/info";
import PageTitle from "@/components/page-title";

const UpdateSingleInfoPage = async ({ params: { slug } }) => {
  const info = await getSingleInfo(slug);

  const handleUpdateInfo = async (formData) => {
    "use server";
    try {
      const updatedInfo = {
        title: formData.get("title"),
        count: Number(formData.get("count")),
      };

     await updateInfo(slug, updatedInfo)
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <PageTitle>ইনফো আপডেট করুন</PageTitle>

        {/* Form */}
        <form action={handleUpdateInfo} className="space-y-6">
          {/* Title Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              টাইটেল
            </label>
            <input
              type="text"
              name="title"
              defaultValue={info.title}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
              required
            />
          </div>

          {/* Count Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              সংখ্যা
            </label>
            <input
              type="number"
              name="count"
              defaultValue={info.count}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
            >
              Update Info
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateSingleInfoPage;
