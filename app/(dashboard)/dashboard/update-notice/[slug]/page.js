import { getSinleNotice, updateNotice } from "@/actions/notice"; // Make sure to correct the import name
import { redirect } from "next/navigation";

const UpdateSingleNoticePage = async ({ params: { slug } }) => {
  const singleNotice = await getSinleNotice(slug);

  const handleUpdateNotice = async (formData) => {
    "use server";
    try {
      const updatedNotice = {
        title: formData.get("title"),
        details: formData.get("details"),
        activeDate: formData.get("activeDate"),
        duration: formData.get("duration"),
        active: formData.get("active"),
      };
      await updateNotice(slug, updatedNotice);
      redirect("/");
    } catch (err) {
      console.log(err.message);
      return null;
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">নোটিশ আপডেট করুন</h1>

      <form
        action={handleUpdateNotice}
        className="bg-white p-6 rounded-lg shadow-md space-y-6"
      >
        {/* Title */}
        <div>
          <label className="block text-lg font-semibold mb-2">
            নোটিশের শিরোনাম
          </label>
          <input
            type="text"
            name="title"
            defaultValue={singleNotice.title}
            className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Title */}
        <div>
          <label className="block text-lg font-semibold mb-2">
            নোটিশের শিরোনাম
          </label>
          <input
            type="text"
            name="details"
            defaultValue={singleNotice.details}
            className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Active Date */}
        <div>
          <label className="block text-lg font-semibold mb-2">
            সক্রিয় তারিখ
          </label>
          <input
            type="date"
            name="activeDate"
            defaultValue={singleNotice.activeDate}
            className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Duration */}
        <div>
          <label className="block text-lg font-semibold mb-2">সময়কাল</label>
          <input
            type="date"
            name="duration"
            defaultValue={singleNotice.duration}
            className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Active Status */}
        <div>
          <label className="block text-lg font-semibold mb-2">সক্রিয়?</label>
          <select
            name="active"
            defaultValue={singleNotice.active ? "yes" : "no"}
            className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-lg font-semibold text-lg shadow-md hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            হালনাগাদ করুন
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateSingleNoticePage;
