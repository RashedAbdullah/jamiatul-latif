import PageTitle from "@/components/page-title";
import SubTitle from "@/components/sub-title";
import ResultTable from "./_components/result-table";
import { getStudents } from "@/actions";

const ResultsPage = async ({ params: { year = "2024-25" } }) => {
  const students = await getStudents();

  const selectYear = (year) => {
    if (year === "2024-25") return "২০২৪-২৫";
    else if (year === "2023-24") return "২০২৩-২৪";
    else if (year === "2022-23") return "২০২২-২৩";
    else if (year === "2021-22") return "২০২১-২২";
    else if (year === "2020-21") return "২০২০-২১";
    else return "২০২৩-২৪";
  };
  return (
    <div>
      <PageTitle>পরীক্ষার ফলাফল ( {selectYear(year)} )</PageTitle>
      <SubTitle>প্রথম সাময়ীক পরীক্ষা</SubTitle>
      <div className="container mt-20">
        <ResultTable results={students} />
      </div>
    </div>
  );
};

export default ResultsPage;
