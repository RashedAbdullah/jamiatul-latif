import { getTeachers } from "@/actions/teachers";
import TeacherCard from "@/components/teachers/teacher-card";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";
import { getEngToBnNumber } from "@/utils/number-converter";

export const metadata = {
  title: "শিক্ষক পরিচিতি | জামিয়াতুল লতিফ রূপগঞ্জ",
  description:
    "আমাদের নিবেদিত শিক্ষকদের সাথে পরিচিত হোন, যারা শিক্ষার আলো ছড়াচ্ছেন।",
  openGraph: {
    title: "শিক্ষক পরিচিতি | জামিয়াতুল লতিফ রূপগঞ্জ",
    description:
      "আমাদের নিবেদিত শিক্ষকদের সাথে পরিচিত হোন, যারা শিক্ষার আলো ছড়াচ্ছেন।",
    type: "website",
    url: "https://www.jamiatullatif.com/teachers",
    images: [
      {
        url: "https://i.ibb.co/0FZ9bnp/default-avatar.png",
        alt: "শিক্ষক পরিচিতি",
      },
    ],
  },
};

const TeachersPage = async () => {
  const teachers = await getTeachers();

  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero Section */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <Badge
          variant="outline"
          className="mb-4 py-2 px-4 bg-primary/10 text-primary hover:bg-primary/20"
        >
          <GraduationCap className="w-4 h-4 mr-2" />
          আমাদের শিক্ষকবৃন্দ
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
          জামিয়ার শিক্ষকমণ্ডলী
        </h1>
        <div className="w-20 h-1 bg-primary mx-auto my-6 rounded-full" />
        <p className="text-lg text-gray-600 leading-relaxed">
          যাদের অক্লান্ত পরিশ্রম ও গভীর জ্ঞানের আলোকে গড়ে উঠছে আগামীর নেতৃত্ব।
          আমাদের শিক্ষকবৃন্দের ত্যাগ ও নিষ্ঠাই আমাদের গর্ব।
        </p>
      </div>

      {/* Teachers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
        {teachers
          .sort((a, b) => a.teacherSerial - b.teacherSerial)
          .map(
            (teacher) =>
              !teacher.resignation.resigned && (
                <TeacherCard key={teacher.id} teacher={teacher} />
              )
          )}
      </div>

      {/* Stats Section */}
      <Card className="mt-16 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
        <CardHeader>
          <h2 className="text-2xl font-bold text-center text-gray-900">
            আমাদের শিক্ষকবৃন্দের পরিসংখ্যান
          </h2>
        </CardHeader>
        <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-4xl font-bold text-primary">
              {getEngToBnNumber(
                teachers.filter((t) => !t.resignation.resigned).length
              )}
              +
            </p>
            <p className="text-gray-600">বর্তমান শিক্ষক</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary">৮+</p>
            <p className="text-gray-600">বিভাগীয় প্রধান</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary">৫+</p>
            <p className="text-gray-600">বছরের অভিজ্ঞতা</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary">১০০%</p>
            <p className="text-gray-600">দক্ষতা ও নিষ্ঠা</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeachersPage;
