import { getSingleMadrashaInfo, updateMadrashaInfo } from "@/actions/madrasha";

const UpdateSingleUpdatePage = async ({ params: { slug } }) => {
  const madrashaInfo = await getSingleMadrashaInfo(slug);

  const handleUpdateMadrashaInfo = async (formData) => {
    "use server";
    try {
      const updatedInfo = {
        title: formData.get("title"),
        details: formData.get("details"),
      };

      await updateMadrashaInfo(slug, updatedInfo);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Update Madrasha Information</h1>
      <form action={handleUpdateMadrashaInfo} className="space-y-6">
        {/* Title Field */}
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Title</label>
          <input
            type="text"
            name="title"
            defaultValue={madrashaInfo.title}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            placeholder="Enter title (e.g., নাম, অবস্থান)"
            required
          />
        </div>

        {/* Details Field */}
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Details</label>
          <textarea
            name="details"
            rows="4"
            defaultValue={madrashaInfo.details}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            placeholder="Enter details about the Madrasha"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Update Information
        </button>
      </form>
    </div>
  );
};

export default UpdateSingleUpdatePage;
