import { getSingleTeacher } from "@/actions";
import AboutTeacher from "@/components/teachers/about-teacher";
import TeachersSocialLinks from "@/components/teachers/social-links";
import TeacherAvatar from "@/components/teachers/teacher-avatar";
import TeacherCard from "@/components/teachers/teacher-card";
import TeacherInfo from "@/components/teachers/teacher-info";
import { Facebook } from "lucide-react";

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const SingleTeacherPage = async ({ params: { id, lang } }) => {
  const teacher = await getSingleTeacher(id);
  return (
    <div className="container">
      <div className="bg-white shadow lg:grid grid-cols-2 gap-4 p-6 mt-10 rounded-lg">
        <div className="lg:border-r lg:pr-2">
          <div className="flex justify-center items-center align-middle">
            <div
              className={`h-[500px] w-[500px] bg-cover bg-no-repeat bg-center flex justify-center items-end`}
              style={{ backgroundImage: `url(${teacher.image})` }}
            ></div>
          </div>
          <div className="lg:block hidden">
            <h2 className="text-center text-2xl font-bold my-5">
              শিক্ষক সম্পর্কে
            </h2>
            <div className="mx-10">
              <p>{teacher.about}</p>
            </div>
          </div>
        </div>
        <div className="p-6 flex justify-center items-center align-middle">
          <div className="flex flex-col justify-center items-center align-middle md:gap-10 gap-4 w-full h-full">
            <div className="text-center py-6 w-full">
              <h2 className="font-semibold md:text-3xl">{teacher.name}</h2>
              <p>{teacher.post}</p>
            </div>
            <div className="border-b border-slate-800 w-full"></div>
            <div className="py-6 grid grid-cols-10 gap-2 w-full">
              <div className="col-span-3">
                <p>ঠিকানা: </p>
              </div>
              <div className="col-span-7">
                <p>{teacher.address}</p>
              </div>
              <div className="col-span-3">
                <p>ফারেগ: </p>
              </div>
              <div className="col-span-7">
                <p>{teacher.masters}</p>
              </div>
              <div className="col-span-3">
                <p>তাখাস্সুস: </p>
              </div>
              <div className="col-span-7">
                <p>{teacher.degree}</p>
              </div>
              <div className="col-span-3">
                <p>ইমেইল: </p>
              </div>
              <div className="col-span-7">
                <p>{teacher.email}</p>
              </div>
              <div className="col-span-3">
                <p>মোবাইল: </p>
              </div>
              <div className="col-span-7">
                <p>{teacher.number}</p>
              </div>
            </div>
            <div className="border-b border-slate-800 w-full"></div>
            <div className="flex justify-center align-middle items-center gap-5 text-2xl mt-6 text-slate-800 w-full">
              {teacher.socials.map((link, ind) => (
                <div key={ind}>
                  <a href={link.link} target="_blnk">
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
    </div>
  );
};

export default SingleTeacherPage;
