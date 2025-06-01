import { getSingleTeacher } from "@/actions/teachers";
import TeacherSchemaScript from "@/meta/teacher-meta";
import {
  FaFacebook,
  FaTwitter,
  FaTelegram,
  FaGraduationCap,
  FaHome,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
        gender: "male",
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
    <div className="container mx-auto py-8 px-4">
      <TeacherSchemaScript teacher={teacher} />

      <div className="max-w-6xl mx-auto">
        <Card className="overflow-hidden">
          <div className="md:flex">
            {/* Left Section: Image */}
            <div className="md:w-1/3 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-6 flex flex-col items-center">
              <Avatar className="h-64 w-64 md:h-80 md:w-80 border-4 border-white dark:border-gray-800 shadow-lg">
                <AvatarImage
                  src={
                    teacher.image ||
                    "https://i.ibb.co.com/VtvbmpP/imgbin-computer-icons-teacher-professor-education-lecturer-png.png"
                  }
                  alt={teacher.name}
                  className="object-cover"
                />
                <AvatarFallback className="text-4xl">
                  {teacher.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <div className="mt-6 text-center">
                <h1 className="text-2xl font-bold">{teacher.name}</h1>
                <Badge variant="secondary" className="mt-2 text-lg">
                  {teacher.post}
                </Badge>

                {/* Social Media Links */}
                {teacher.socials.length > 0 && (
                  <div className="flex justify-center gap-4 mt-6">
                    {teacher.socials.map((link, ind) => (
                      <Button
                        key={ind}
                        variant="outline"
                        size="icon"
                        asChild
                        className="h-10 w-10"
                      >
                        <a
                          href={link.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit ${link.name}`}
                        >
                          {link.name === "facebook" ? (
                            <FaFacebook className="h-5 w-5" />
                          ) : link.name === "twitter" ? (
                            <FaTwitter className="h-5 w-5" />
                          ) : (
                            <FaTelegram className="h-5 w-5" />
                          )}
                        </a>
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Section: Details */}
            <div className="md:w-2/3 p-6">
              <CardHeader>
                <CardTitle className="text-3xl">শিক্ষক পরিচিতি</CardTitle>
                <CardDescription className="text-lg">
                  {teacher.about ||
                    "প্রাতিষ্ঠানিক শিক্ষক সম্পর্কে বিস্তারিত তথ্য"}
                </CardDescription>
              </CardHeader>

              <Separator className="my-4" />

              <CardContent>
                <div className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      ব্যক্তিগত তথ্য
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <FaHome className="h-5 w-5 mt-1 text-primary" />
                        <div>
                          <p className="font-medium text-gray-500 dark:text-gray-400">
                            ঠিকানা
                          </p>
                          <p>{teacher.address || "উপলব্ধ নয়"}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <FaGraduationCap className="h-5 w-5 mt-1 text-primary" />
                        <div>
                          <p className="font-medium text-gray-500 dark:text-gray-400">
                            ফারেগ
                          </p>
                          <p>{teacher.masters || "উপলব্ধ নয়"}</p>
                        </div>
                      </div>

                      {teacher.degree && (
                        <div className="flex items-start gap-3">
                          <FaGraduationCap className="h-5 w-5 mt-1 text-primary" />
                          <div>
                            <p className="font-medium text-gray-500 dark:text-gray-400">
                              তাখাস্সুস
                            </p>
                            <p>{teacher.degree}</p>
                          </div>
                        </div>
                      )}

                      <div className="flex items-start gap-3">
                        <FaEnvelope className="h-5 w-5 mt-1 text-primary" />
                        <div>
                          <p className="font-medium text-gray-500 dark:text-gray-400">
                            ইমেইল
                          </p>
                          <p>{teacher.email || "উপলব্ধ নয়"}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <FaPhone className="h-5 w-5 mt-1 text-primary" />
                        <div>
                          <p className="font-medium text-gray-500 dark:text-gray-400">
                            মোবাইল
                          </p>
                          <p>{teacher.number || "উপলব্ধ নয়"}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* About Section */}
                  {teacher.about && (
                    <div>
                      <h3 className="text-xl font-semibold mb-4">
                        শিক্ষক সম্পর্কে
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {teacher.about}
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>

              <CardFooter className="flex justify-end">
                <Button variant="outline" asChild>
                  <a href="/teachers">অন্যান্য শিক্ষক</a>
                </Button>
              </CardFooter>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SingleTeacherPage;
