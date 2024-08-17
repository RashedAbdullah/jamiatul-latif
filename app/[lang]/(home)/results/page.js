import PageTitle from "@/components/page-title";
import SubTitle from "@/components/sub-title";
import ResultTable from "./_components/result-table";

const ResultsPage = () => {
  return (
    <div>
      <PageTitle>পরীক্ষার ফলাফল</PageTitle>
      <SubTitle>প্রথম সাময়ীক পরীক্ষা</SubTitle>
      <div className="container mt-20">
        <ResultTable />
      </div>
    </div>
  );
};

export default ResultsPage;
