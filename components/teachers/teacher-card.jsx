import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  GraduationCap,
  BookOpen,
  Mail,
  Phone,
  MessageSquare,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import TeacherSchemaScript from "@/meta/teacher-meta";
import Link from "next/link";

const TeacherCard = ({ teacher }) => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="h-4 w-4" />,
      url: teacher.socials?.facebook,
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-4 w-4" />,
      url: teacher.socials?.twitter,
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-4 w-4" />,
      url: teacher.socials?.instagram,
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-4 w-4" />,
      url: teacher.socials?.linkedin,
    },
    {
      name: "YouTube",
      icon: <Youtube className="h-4 w-4" />,
      url: teacher.socials?.youtube,
    },
  ].filter((link) => link.url); // Only show active links

  return (
    <Card className="w-full max-w-2xl overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-xl">
      <TeacherSchemaScript teacher={teacher} />

      {/* **Top Section (Avatar + Basic Info)** */}
      <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-6 flex flex-col items-center text-center">
        <Avatar className="h-24 w-24 border-4 border-white shadow-md mb-4">
          <AvatarImage
            src={teacher.image}
            alt={teacher.name}
            className="object-cover"
          />
          <AvatarFallback className="bg-white text-primary font-bold text-xl">
            {teacher.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>

        <h2 className="text-2xl font-bold text-gray-900">{teacher.name}</h2>
        <Badge className="mt-2 bg-primary/10 text-primary hover:bg-primary/20">
          {teacher.post}
        </Badge>

        {/* **Social Links (Beautifully Styled!)** */}
        {socialLinks.length > 0 && (
          <div className="mt-4 flex gap-2">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-200 hover:bg-gray-50"
              >
                {social.icon}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* **Main Content (2-Column Layout)** */}
      <div className="grid md:grid-cols-2 gap-6 p-6">
        {/* **Left Column (Education & Subjects)** */}
        <div className="space-y-4">
          <div>
            <div className="flex items-center gap-2 text-gray-700 mb-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">শিক্ষাগত যোগ্যতা</h3>
            </div>
            <p className="text-gray-800 pl-7">
              {teacher.degree || "দাওরায়ে হাদীস (মাস্টার্স)"}
            </p>
          </div>

          <Separator className="my-2" />

          <div>
            <div className="flex items-center gap-2 text-gray-700 mb-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">পাঠদান বিষয়</h3>
            </div>
            <div className="flex flex-wrap gap-2 pl-7">
              {(
                teacher.subjects?.split(",") || ["হাদীস", "তাফসীর", "ফিকহ"]
              ).map((subject, i) => (
                <Badge
                  key={i}
                  variant="outline"
                  className="text-primary border-primary/30"
                >
                  {subject.trim()}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* **Right Column (Bio & Contact)** */}
        <div className="space-y-4">
          <div>
            <div className="flex items-center gap-2 text-gray-700 mb-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">বিবরণ</h3>
            </div>
            <p className="text-gray-800 pl-7">
              {teacher.about ||
                "দীর্ঘদিন ধরে ইসলামী শিক্ষাদানে নিবেদিতপ্রাণ শিক্ষক। ছাত্রদেরকে সঠিক ইসলামী জ্ঞান প্রদানে আন্তরিক।"}
            </p>
          </div>

          <Separator className="my-2" />

          <div>
            <div className="flex items-center gap-2 text-gray-700 mb-2">
              <Phone className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">যোগাযোগ</h3>
            </div>
            <div className="space-y-2 pl-7">
              {teacher.phone && (
                <p className="text-gray-800 flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  {teacher.phone}
                </p>
              )}
              {teacher.email && (
                <p className="text-gray-800 flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  {teacher.email}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* **Footer (Call-to-Action Button)** */}
      <CardFooter className="bg-gray-50 px-6 py-4 border-t flex justify-center">
        <Link href={`/teachers/${teacher.id}`}>
          <Button className="bg-primary hover:bg-primary/90 text-white shadow-md">
            সম্পূর্ণ প্রোফাইল দেখুন
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default TeacherCard;
