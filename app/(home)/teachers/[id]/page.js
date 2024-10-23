import { getSingleTeacher } from "@/actions/teachers";
import TeacherSchemaScript from "@/meta/teacher-meta";
import { FaFacebook, FaTwitter, FaTelegram } from "react-icons/fa";

export const generateMetadata = async ({ params: { id } }) => {
  const teacher = await getSingleTeacher(id);
  return {
    title: `${teacher.name} | শিক্ষক পরিচিতি | জামিয়াতুল লতিফ রূপগঞ্জ`,
    description: teacher.about || "শিক্ষক সম্পর্কে আরও জানুন।",
    openGraph: {
      title: `${teacher.name} | শিক্ষক পরিচিতি | জামিয়াতুল লতিফ রূপগঞ্জ`,
      description: teacher.about || "শিক্ষক সম্পর্কে আরও জানুন।",
      type: "profile",
      profile: {
        firstName: teacher.name.split(" ")[0],
        lastName: teacher.name.split(" ")[1] || "",
        gender: "male", // Update based on actual data if available
      },
      images: [
        {
          url:
            teacher.image ||
            "https://i.ibb.co.com/VtvbmpP/imgbin-computer-icons-teacher-professor-education-lecturer-png.png",
          alt: `${teacher.name} - ছবি`,
        },
      ],
    },
  };
};

const SingleTeacherPage = async ({ params: { id } }) => {
  const teacher = await getSingleTeacher(id);

  return (
    <div className="container mx-auto py-10">
      <TeacherSchemaScript teacher={teacher} />
      <div className="bg-white shadow-lg rounded-lg lg:grid lg:grid-cols-2 lg:gap-4 p-6">
        {/* Left Section: Image and About */}
        <div className="lg:border-r lg:pr-2">
          <div className="flex justify-center items-center mb-4">
            <div
              className={`md:h-[500px] md:w-[500px] h-[400px] w-[400px] bg-cover bg-no-repeat bg-center flex justify-center items-end`}
              style={{
                backgroundImage: teacher.image
                  ? `url(${teacher.image})`
                  : "url(https://i.ibb.co.com/VtvbmpP/imgbin-computer-icons-teacher-professor-education-lecturer-png.png)",
              }}
              aria-label={teacher.name} // Added accessibility label
            >
              <div className="bg-black bg-opacity-50 text-white p-2 rounded">
                {teacher.name}
              </div>
            </div>
          </div>
          <div className="hidden lg:block text-center">
            <h2 className="text-2xl font-bold my-5">শিক্ষক সম্পর্কে</h2>
            <p className="mx-10">{teacher.about}</p>
          </div>
        </div>

        {/* Right Section: Teacher Info */}
        <div className="p-6 flex flex-col justify-center items-center">
          <div className="text-center py-6">
            <h2 className="font-semibold md:text-3xl">{teacher.name}</h2>
            <p className="text-lg">{teacher.post}</p>
          </div>
          <div className="border-b border-slate-800 w-full mb-4"></div>
          <div className="grid grid-cols-10 gap-2 w-full">
            <div className="col-span-3 font-semibold">ঠিকানা:</div>
            <div className="col-span-7">{teacher.address}</div>
            <div className="col-span-3 font-semibold">ফারেগ:</div>
            <div className="col-span-7">{teacher.masters}</div>
            {teacher.degree && (
              <>
                <div className="col-span-3 font-semibold">তাখাস্সুস:</div>
                <div className="col-span-7">{teacher.degree}</div>
              </>
            )}
            <div className="col-span-3 font-semibold">ইমেইল:</div>
            <div className="col-span-7">{teacher.email}</div>
            <div className="col-span-3 font-semibold">মোবাইল:</div>
            <div className="col-span-7">{teacher.number}</div>
          </div>
          <div className="border-b border-slate-800 w-full my-4"></div>

          {/* Social Media Links */}
          <div className="flex justify-center gap-5 text-2xl text-slate-800">
            {teacher.socials.map((link, ind) => (
              <div key={ind}>
                <a
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${link.name}`}
                >
                  {link.name === "facebook" ? (
                    <FaFacebook />
                  ) : link.name === "twitter" ? (
                    <FaTwitter />
                  ) : (
                    <FaTelegram />
                  )}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTeacherPage;
