import PageTitle from "@/components/page-title";
import ResultTable from "../_components/result-table";
import { getSingleYearByYear } from "@/actions/year";
import { getClasses } from "@/actions/classes";
import SubTitle from "@/components/sub-title";
import {  getResultsByYear } from "@/actions/result";
import { getExams } from "@/actions/exam";

const ResultsByYearPage = async ({ params: { year: yr } }) => {
  const year = decodeURIComponent(yr);
  const academicYear = decodeURIComponent(year);
  const yearByYear = await getSingleYearByYear(academicYear);
  const classes = await getClasses();
  const resultsByYear = await getResultsByYear(yearByYear.id);
  const exams = await getExams();

  return (
    <div className="container">
      <PageTitle>
        শিক্ষাবর্ষ <span className="font-NotoSerifBengali">{academicYear}</span>
      </PageTitle>
      {classes.map((cls) => (
        <div key={cls.id}>
          <SubTitle>{cls.class} </SubTitle>
          {exams.map((exam) => {
            const filteredResults = resultsByYear.filter(
              (result) =>
                result.studentId.classNameId.toString() === cls.id &&
                result.examNameId.examName === exam.examName
            );

            return (
              <div key={exam.id}>
                <SubTitle>{exam.examName} </SubTitle>
                {filteredResults.length ? (
                  <div className="container">
                    <ResultTable results={filteredResults} />
                  </div>
                ) : (
                  <div className="text-center p-20">
                    <h2 className="text-gray-500">
                      কোন ফলাফল খুঁজে পাওয়া যায় নি।
                    </h2>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default ResultsByYearPage;
