import { creatInfo } from "@/actions/info";

const AddInfoPage = () => {
  const handleAddInfo = async (formData) => {
    "use server";
    try {
      const newInfo = {
        title: formData.get("title"),
        count: Number(formData.get("count")),
      };

      console.log(newInfo);
      await creatInfo(newInfo);
    } catch (err) {
      console.log(err.message);
      return null;
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-700">
        নতুন তথ্য যুক্ত করুন
      </h1>
      <form
        action={handleAddInfo}
        className="bg-gray-100 p-6 rounded shadow-lg"
      >
        {/* Title Field */}
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">শিরোনাম</label>
          <input
            type="text"
            name="title"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="শিরোনাম লিখুন"
            required
          />
        </div>

        {/* Count Field */}
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">সংখ্যা</label>
          <input
            type="number"
            name="count"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="সংখ্যা লিখুন"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-all duration-200"
        >
          তথ্য যুক্ত করুন
        </button>
      </form>
    </div>
  );
};

export default AddInfoPage;
