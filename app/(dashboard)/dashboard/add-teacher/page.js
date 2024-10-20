import { redirect } from "next/navigation"; // Assuming you're using Next.js 13+
import { createTeacher } from "@/actions/teachers";

const AddTeacherPage = () => {
  const handleCreateTeacher = async (formData) => {
    "use server";
    try {
      const newTeacher = {
        name: formData.get("name"),
        teacherSerial: Number(formData.get("teacherSerial")),
        post: formData.get("post"),
        image: formData.get("image"),
        about: formData.get("about"),
        joined_date: formData.get("joined_date"),
        resignation: {
          resigned: formData.get("resignation") === "on" ? true : false,
          resignation_date: formData.get("resignation_date"),
        },
        address: formData.get("address"),
        masters: formData.get("masters"),
        degree: formData.get("degree"),
        email: formData.get("email"),
        number: formData.get("phone"),
        socials: [
          {
            name: "facebook",
            link: formData.get("social_0"),
          },
          {
            name: "twitter",
            link: formData.get("social_1"),
          },
          {
            name: "telegram",
            link: formData.get("social_2"),
          },
        ],
      };

      await createTeacher(newTeacher);
      redirect("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          নতুন শিক্ষক যোগ করুন
        </h1>

        <form action={handleCreateTeacher} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-lg font-medium mb-2">নাম</label>
            <input
              type="text"
              name="name"
              placeholder="শিক্ষকের নাম লিখুন"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Teacher Serial */}
          <div>
            <label className="block text-lg font-medium mb-2">
              শিক্ষক ক্রম
            </label>
            <input
              type="number"
              name="teacherSerial"
              placeholder="শিক্ষক ক্রম লিখুন"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Post */}
          <div>
            <label className="block text-lg font-medium mb-2">পদ</label>
            <input
              type="text"
              name="post"
              placeholder="শিক্ষকের পদ"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Image */}
          <div>
            <label className="block text-lg font-medium mb-2">ছবির লিঙ্ক</label>
            <input
              type="text"
              name="image"
              placeholder="ছবির URL লিখুন"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* About */}
          <div>
            <label className="block text-lg font-medium mb-2">সম্পর্কিত</label>
            <textarea
              name="about"
              placeholder="শিক্ষকের সম্পর্কে লিখুন"
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Joined Date */}
          <div>
            <label className="block text-lg font-medium mb-2">
              যোগদানের তারিখ
            </label>
            <input
              type="date"
              name="joined_date"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Resignation */}
          <div>
            <label className="block text-lg font-medium mb-2">ইস্তফা</label>
            <div className="flex items-center space-x-4">
              <input type="checkbox" name="resignation" className="mr-2" />
              <span className="text-sm text-gray-600">ইস্তফা দিয়েছেন</span>
              <input
                type="date"
                name="resignation_date"
                placeholder="ইস্তফার তারিখ"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-lg font-medium mb-2">ঠিকানা</label>
            <input
              type="text"
              name="address"
              placeholder="ঠিকানা লিখুন"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Masters */}
          <div>
            <label className="block text-lg font-medium mb-2">মাস্টার্স</label>
            <input
              type="text"
              name="masters"
              placeholder="মাস্টার্স ইনস্টিটিউট"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Degree */}
          <div>
            <label className="block text-lg font-medium mb-2">ডিগ্রি</label>
            <input
              type="text"
              name="degree"
              placeholder="ডিগ্রি লিখুন"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-lg font-medium mb-2">ইমেইল</label>
            <input
              type="email"
              name="email"
              placeholder="ইমেইল লিখুন"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-lg font-medium mb-2">ফোন নম্বর</label>
            <input
              type="tel"
              name="phone"
              placeholder="ফোন নম্বর লিখুন"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Socials */}
          <div>
            <label className="block text-lg font-medium mb-2">
              সোশ্যাল লিঙ্কসমূহ
            </label>
            <input
              type="text"
              name="social_0"
              placeholder="Facebook লিঙ্ক"
              className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="social_1"
              placeholder="Twitter লিঙ্ক"
              className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="social_2"
              placeholder="Telegram লিঙ্ক"
              className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-lg font-semibold text-lg shadow-md hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              শিক্ষক যোগ করুন
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTeacherPage;
