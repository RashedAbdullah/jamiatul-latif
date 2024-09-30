import { getExams } from "@/actions/exam";
import { getResultByStudentId } from "@/actions/result";
import DashInput from "@/app/(dashboard)/_components/dash-input";
import SubTitle from "@/components/sub-title";
import { Button } from "@headlessui/react";
import { utf16Decode, utf8Encode } from "pdf-lib";

const AddOrUpadeResultPage = async ({ params: { id } }) => {
  const exams = await getExams();
  const resultByStudentId = await getResultByStudentId(id);

  const handleStudentResult = async (formData) => {
    "use server";

    const classId = formData.get("examId"); // Get selected exam
    const studentName = formData.get("name"); // Get student's name
    const marks = {};

    // Collect all marks for the books
    formData.forEach((value, key) => {
      if (key !== "examId" && key !== "name") {
        marks[key] = value; // Add each mark
      }
    });

    const data = {
      studentId: resultByStudentId.studentId._id,
      yearId: resultByStudentId.yearId._id,
      classId: classId,
      marks: [marks],
    };
  };

  return (
    <div className="min-h-screen flex justify-center mt-5 container">
      <div className="w-full p-8 max-w-4xl bg-white shadow-lg rounded-lg transform transition duration-700 ease-in-out opacity-0 translate-y-6 animate-fade-in">
        <SubTitle>ফলাফল যুক্ত করুন</SubTitle>
        <form
          action={handleStudentResult}
          className="w-full grid grid-cols-2 gap-10"
        >
          {/* Exam Select */}
          <div className="mt-5">
            <label htmlFor="examId" className="block text-lg font-medium mb-2">
              পরীক্ষা সিলেক্ট করুন
            </label>
            <select
              required
              name="examId"
              id="examId"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-slate-800 focus:outline-none"
            >
              <option value={resultByStudentId.examNameId._id}>
                {resultByStudentId.examNameId.examName
                  ? resultByStudentId.examNameId.examName
                  : "পরীক্ষা সিলেক্ট করুন"}
              </option>
              {exams.map((exam) => (
                <option key={exam.id} value={exam.id}>
                  {exam.examName}
                </option>
              ))}
            </select>
          </div>
          {/* Name of student */}
          <DashInput
            dsble={true}
            req={true}
            dValue={resultByStudentId.studentId.name}
            name={"name"}
            title={"শিক্ষার্থীর নাম লিখুন"}
            type={"text"}
          />
          {resultByStudentId.marks.map((mark, ind) => (
            <DashInput
              key={mark.book}
              dValue={mark.mark}
              name={`markNo${ind + 1}`}
              title={mark.book}
              type={"number"}
              req={true}
            />
          ))}

          {/* Submit Button */}
          <div className="text-center col-span-2">
            <Button
              type="submit"
              className="w-full py-3 rounded-lg bg-slate-900 text-white transition-all"
            >
              তথ্য সাবমিট করুন
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddOrUpadeResultPage;
