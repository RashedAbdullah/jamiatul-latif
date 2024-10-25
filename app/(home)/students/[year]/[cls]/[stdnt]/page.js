import { getResultByStudentId } from "@/actions/result";
import { getStudentBYDakhila } from "@/actions/students";
import SubTitle from "@/components/sub-title";
import { getNumberValue } from "@/utils/get-student-value";
import { getEngToBnNumber } from "@/utils/number-converter";
import Image from "next/image";

const SingleStudentPage = async ({ params: { stdnt } }) => {
  const studebtByDakhila = await getStudentBYDakhila(stdnt);
  const result = await getResultByStudentId(studebtByDakhila.id);
  console.log(studebtByDakhila);

  // Calculate total and average marks
  const totalMarks = result.marks.reduce((total, mark) => total + mark.mark, 0);
  const averageMarks = (totalMarks / result.marks.length).toFixed(2);

  return (
    <div className="container my-5">
      <div className="lg:grid lg:grid-cols-12 gap-4">
        {/* Student Information Section */}
        <div className="col-span-3 lg:mt-16">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col items-center">
              {studebtByDakhila.image ? (
                <Image
                  src={studebtByDakhila.image}
                  alt={studebtByDakhila.name}
                  className="w-32 h-32 rounded-full mb-4"
                  width={128}
                  height={128}
                />
              ) : (
                <div className="w-32 h-32 bg-gray-300 rounded-full mb-4 flex items-center justify-center">
                  <span className="text-gray-500">ছবি নেই</span>
                </div>
              )}
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {studebtByDakhila.name}
              </h2>
              <h3 className="text-md text-gray-600 mb-2">
                পিতা: {studebtByDakhila.father}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-2 text-gray-700">
                <p>
                  <span className="font-semibold">শ্রেণী:</span>{" "}
                  {studebtByDakhila.classNameId.class}
                </p>
                <p>
                  <span className="font-semibold">দাখিলা:</span>{" "}
                  {studebtByDakhila.dakhila}
                </p>
                <p>
                  <span className="font-semibold">ঠিকানা:</span>{" "}
                  {studebtByDakhila.address}
                </p>
                <p>
                  <span className="font-semibold">যোগাযোগ:</span>{" "}
                  {studebtByDakhila.contact}
                </p>
                <p>
                  <span className="font-semibold">শিক্ষাবর্ষ:</span>{" "}
                  {studebtByDakhila.academicYearId.academicYear}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Result Table Section */}
        <div
          id="tableOfResult"
          className="col-span-9 bg-white rounded-lg shadow-lg p-6"
        >
          <SubTitle>নাম্বারপত্র</SubTitle>

          {/* Display Exam Name */}
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            পরীক্ষা: {result.examNameId.examName}
          </h3>

          {/* Display Academic Year and Class */}
          <h4 className="text-md font-semibold text-gray-600 mb-4">
            শিক্ষাবর্ষ: {result.yearId.academicYear} ইং | শ্রেণী:{" "}
            {result.classId.class}
          </h4>

          {/* Result Table */}
          <table className="min-w-full border border-gray-300 mb-4">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2 text-left">বিষয়</th>
                <th className="border border-gray-300 p-2 text-left">নম্বর</th>
              </tr>
            </thead>
            <tbody>
              {result.marks.map((mark) => (
                <tr key={mark._id} className="border-b border-gray-300">
                  <td className="border border-gray-300 p-2">{mark.book}</td>
                  <td className="border border-gray-300 p-2">
                    {getEngToBnNumber(mark.mark)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Display Total and Average Marks */}
          <div className="mt-4">
            <h4 className="text-md font-semibold text-gray-800">
              মোট নম্বর: {getEngToBnNumber(totalMarks)}
            </h4>
            <h4 className="text-md font-semibold text-gray-800">
              গড় নম্বর: {averageMarks}
            </h4>
            <h4 className="text-md font-semibold text-gray-800">
              গড় নম্বর: {getNumberValue(result?.marks)}
            </h4>
          </div>

          {/* Overall Comments Section */}
          <SubTitle>সামগ্রিক মতামত</SubTitle>
          <p className="text-center">
            {studebtByDakhila?.report || "মতামত নেই"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleStudentPage;
