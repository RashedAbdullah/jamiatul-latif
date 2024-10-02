import { getSingleYearByYear } from "@/actions/year";
// You need to implement this function to fetch results
import SubTitle from "@/components/sub-title";
import ResultTable from "../../_components/result-table";
import {  getResultsByYearAndClass } from "@/actions/result";
import { getExams } from "@/actions/exam";
import { getSingleClassByClss } from "@/actions/classes";

const ExamsByClassPage = async ({ params: { year, class: byClass } }) => {
  const yr = decodeURIComponent(year);
  const cls = decodeURIComponent(byClass);
  const exams = await getExams();
  const singleYear = await getSingleYearByYear(yr);
  const singleClass = await getSingleClassByClss(cls.replace(/-/g, " "));
  const resultsByClass = await getResultsByYearAndClass(
    singleYear.id,
    singleClass.id
  );

  return (
    <div className="container">
      <SubTitle>
        {cls.replace(/-/g, " ")} ({yr} শিক্ষাবর্ষ)
      </SubTitle>
      {exams.map((exam) => {
        const filteredResults = resultsByClass.filter(
          (result) => result.examNameId.examName === exam.examName
        );

        return (
          <div key={exam.id}>
            <SubTitle>{exam.examName}</SubTitle>
            <ResultTable results={filteredResults} />
          </div>
        );
      })}
    </div>
  );
};

export default ExamsByClassPage;
