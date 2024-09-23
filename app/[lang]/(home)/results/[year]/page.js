import { getStudents } from "@/actions";
import PageTitle from "@/components/page-title";
import ResultTable from "../_components/result-table";

const ResultsByYearPage = async ({ params: { year: academicYear } }) => {
  const students = await getStudents();
  const selectYear = (year) => {
    if (year === "2024-25") return "২০২৪-২৫";
    else if (year === "2023-24") return "২০২৩-২৪";
    else if (year === "2022-23") return "২০২২-২৩";
    else if (year === "2021-22") return "২০২১-২২";
    else if (year === "2020-21") return "২০২০-২১";
    else return "২০২৩-২৪";
  };

  const resultsByYear = students.filter((year) => {
    return year.academicYear == academicYear;
  });

  return (
    <div className="container">
      <PageTitle>পরীক্ষার ফলাফল ( {selectYear(academicYear)} )</PageTitle>
      {resultsByYear.length ? (
        <div className="container mt-20">
          <ResultTable results={resultsByYear} />
        </div>
      ) : (
        <div className="text-center p-20">
          <h2 className="text-2xl text-gray-500">
            {selectYear(academicYear)} শিক্ষাবর্ষের কোন ফলাফল খুঁজে পাওয়া যায়
            নি।
          </h2>
        </div>
      )}
    </div>
  );
};

export default ResultsByYearPage;