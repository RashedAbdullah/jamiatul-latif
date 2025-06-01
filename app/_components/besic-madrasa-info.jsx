import { getInfo } from "@/actions/info";
import AnimateNumbers from "./animate-numbers";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Users, BookOpen, Award } from "lucide-react";


const iconMap = {
  students: <Users className="w-6 h-6 text-emerald-600" />,
  teachers: <GraduationCap className="w-6 h-6 text-amber-600" />,
  courses: <BookOpen className="w-6 h-6 text-blue-600" />,
  awards: <Award className="w-6 h-6 text-rose-600" />,
};

const BesicMadrashaInfo = async () => {
  let infos = [];
  let error = null;

  try {
    infos = await getInfo();
  } catch (err) {
    console.error("Error fetching info:", err.message);
    error = "তথ্য লোড করা সম্ভব হচ্ছে না। অনুগ্রহ করে পরে আবার চেষ্টা করুন।";
  }

  if (error) {
    return (
      <Card className="bg-rose-50 border-rose-200">
        <CardContent className="p-4 text-rose-600 text-center">
          {error}
        </CardContent>
      </Card>
    );
  }

  if (!infos || infos.length === 0) {
    return (
      <Card className="bg-gray-50 border-gray-200">
        <CardContent className="p-4 text-gray-500 text-center">
          কোন তথ্য পাওয়া যায়নি।
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {infos.map((info) => (
        <div
          key={info._id}
         
        >
          <Card className="h-full border-0 shadow-sm hover:shadow-md transition-shadow bg-gradient-to-br from-white to-gray-50/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium text-gray-600">
                {info.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-end justify-between">
              <div>
                <div className="text-4xl font-bold text-gray-800 font-NotoSerifBengali">
                  <AnimateNumbers number={info.count} />+
                </div>
              </div>
              <div className="p-3 rounded-full bg-gray-100">
                {iconMap[info.icon] || iconMap.students}
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default BesicMadrashaInfo;