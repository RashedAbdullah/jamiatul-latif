import { getExams } from "@/actions/exam";
import { getResultByStudentId, updateResult } from "@/actions/result";
import UpdateResultForm from "@/app/(dashboard)/_components/update-result-fomr";
import SubTitle from "@/components/sub-title";

const AddOrUpadeResultPage = async ({ params: { id } }) => {
  const exams = await getExams();
  const resultByStudentId = await getResultByStudentId(id);

  const updateResults = async (id, updatedData) => {
    "use server";

    await updateResult(id, updatedData);
  };

  return (
    <div className="min-h-screen flex justify-center mt-5 container">
      <div className="w-full p-8 max-w-4xl bg-white shadow-lg rounded-lg transform transition duration-700 ease-in-out opacity-0 translate-y-6 animate-fade-in">
        <SubTitle>ফলাফল সম্পাদনা করুন</SubTitle>
        <UpdateResultForm
          onUpdateResult={updateResults}
          exams={exams}
          student={JSON.parse(JSON.stringify(resultByStudentId))}
        />
      </div>
    </div>
  );
};

export default AddOrUpadeResultPage;
