import { getSingleClassByClss } from "@/actions/classes";
import { getExams } from "@/actions/exam";
import { createResult } from "@/actions/result";
import { getStudentsByYearAndClass } from "@/actions/students";
import { getSingleYearByYear } from "@/actions/year";
import AddResultForm from "@/app/(dashboard)/_components/add-result-form";

const AddResultByClassPage = async ({ params: { cls, yr } }) => {
  const year = decodeURIComponent(yr);
  const clsName = decodeURIComponent(cls.replace(/-/g, " "));

  const exams = await getExams();

  const yearByYear = await getSingleYearByYear(year);
  const classByClss = await getSingleClassByClss(clsName);
  const studentsByClas = await getStudentsByYearAndClass(
    classByClss.id,
    yearByYear.id
  );

  const handleResultCreation = async (resultData) => {
    "use server";
    await createResult(resultData);
  };

  return (
    <div>
      {studentsByClas.length ? (
        <AddResultForm
          students={studentsByClas}
          exams={exams}
          createResult={handleResultCreation}
        />
      ) : (
        <div className="text-center py-20">
          <h3 className="text-3xl text-gray-400 py-3">
            দুঃখিত,{" "}
            <span className="text-red-400 font-NotoSerifBengali">{year}</span>{" "}
            শিক্ষাবর্ষের <span className="text-red-400">{clsName}</span> জামাতে
            কোন ছাত্র খুঁজে পাওয়া যায় নি।
          </h3>
          <p className="text-gray-500">
            অনুগ্রহ করে ছাত্র-তথ্য সংযুক্ত করে তারপর রেজাল্ট যুক্ত করুন।
          </p>
        </div>
      )}
    </div>
  );
};

export default AddResultByClassPage;
