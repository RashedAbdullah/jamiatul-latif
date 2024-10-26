import { getSingleTeacher, updateTeacher } from "@/actions/teachers";
import { redirect } from "next/navigation";

const UpdateSingleTeacherPage = async ({ params: { slug } }) => {
  const teacher = await getSingleTeacher(slug);

  const handleUpdateTeacher = async (formData) => {
    "use server";
    try {
      const updatedTeacher = {
        name: formData.get("name"),
        teacherSerial: Number(formData.get("teacherSerial")),
        post: formData.get("post"),
        image: formData.get("image"),
        about: formData.get("about"),
        joined_date: formData.get("joined_date"),
        resignation: {
          resigned:
            formData.get("resignation") && formData.get("resignation") === "on"
              ? true
              : false,
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
      await updateTeacher(slug, updatedTeacher);

      redirect("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-md rounded-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center border-b-2 pb-4">
          {teacher.name} এর তথ্য আপডেট করুন
        </h1>

        <form action={handleUpdateTeacher} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              নাম
            </label>
            <input
              name="name"
              type="text"
              defaultValue={teacher.name}
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Post */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              পদ
            </label>
            <input
              name="post"
              type="text"
              defaultValue={teacher.post}
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Teacher Serial */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              শিক্ষক ক্রম
            </label>
            <input
              name="teacherSerial"
              type="number"
              defaultValue={teacher.teacherSerial}
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              ছবির লিঙ্ক
            </label>
            <input
              name="image"
              type="text"
              defaultValue={teacher.image}
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* About */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              সম্পর্কিত
            </label>
            <textarea
              name="about"
              defaultValue={teacher.about}
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
            />
          </div>

          {/* Joined Date */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              যোগদানের তারিখ
            </label>
            <input
              name="joined_date"
              type="date"
              defaultValue={teacher.joined_date}
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              ঠিকানা
            </label>
            <input
              name="address"
              type="text"
              defaultValue={teacher.address}
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Masters */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              মাস্টার্স
            </label>
            <input
              name="masters"
              type="text"
              defaultValue={teacher.masters}
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Degree */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              ডিগ্রি
            </label>
            <input
              name="degree"
              type="text"
              defaultValue={teacher.degree}
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              ইমেইল
            </label>
            <input
              name="email"
              type="email"
              defaultValue={teacher.email}
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              ফোন নম্বর
            </label>
            <input
              name="phone"
              type="text"
              defaultValue={teacher.number}
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Socials */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              সোশ্যাল লিঙ্কসমূহ
            </label>
            <div className="space-y-2">
              {teacher.socials.map((social, index) => (
                <div key={index}>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    {social.name}
                  </label>
                  <input
                    name={`social_${index}`}
                    type="text"
                    defaultValue={social.link}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Resignation */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              ইস্তফা
            </label>
            <div className="flex items-center space-x-4">
              <input
                name="resignation"
                type="checkbox"
                defaultChecked={teacher.resignation.resigned}
                className="mr-2"
              />
              <span className="text-sm text-gray-600">ইস্তফা দিয়েছেন</span>
              <input
                name="resignation_date"
                type="date"
                defaultValue={teacher.resignation.resignation_date}
                placeholder="ইস্তফার তারিখ"
                className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-lg font-semibold text-lg shadow-md hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              আপডেট করুন
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateSingleTeacherPage;
