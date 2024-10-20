import Link from "next/link";
import { getTeachers } from "@/actions/teachers";

const UpdateTeacherPage = async () => {
  const teachers = await getTeachers();

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-3xl font-bold mb-6 text-center">শিক্ষকগণের তথ্য আপডেট করুন</h1>

      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">শিক্ষকের নাম</th>
            <th className="py-2 px-4 border-b">পদ</th>
            <th className="py-2 px-4 border-b">আপডেট</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <tr key={teacher._id}>
              <td className="py-2 px-4 border-b border-r">{teacher.name}</td>
              <td className="py-2 px-4 border-b border-r">{teacher.post}</td>
              <td className="py-2 px-4 border-b">
                <Link
                  href={`/dashboard/update-teacher/${teacher.id}`}
                  className="text-blue-500 hover:underline"
                >
                  তথ্য আপডেট করুন
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UpdateTeacherPage;
