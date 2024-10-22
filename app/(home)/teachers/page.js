import { getTeachers } from "@/actions/teachers";
import PageTitle from "@/components/page-title";
import TeacherCard from "@/components/teachers/teacher-card";

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
    <div className="text-primary container mx-auto p-4">
      <PageTitle>শিক্ষক পরিচিতি</PageTitle>
      <p className="mb-5 text-lg text-gray-600 text-center">
        আমাদের নিবেদিত শিক্ষকদের সাথে পরিচিত হোন, যারা শিক্ষার আলো ছড়াচ্ছেন।
      </p>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mb-5">
        {teachers
          .sort((a, b) => a.teacherSerial - b.teacherSerial)
          .map(
            (teacher) =>
              !teacher.resignation.resigned && (
                <TeacherCard key={teacher.id} teacher={teacher} />
              )
          )}
      </div>
    </div>
  );
};

export default TeachersPage;
