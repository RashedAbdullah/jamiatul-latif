import ResultTable from "./_components/result-table";
import { getResults } from "@/actions/result";
import { getYear } from "@/actions/year";
import { getClasses } from "@/actions/classes";
import { getExams } from "@/actions/exam";
import PageTitle from "@/components/page-title";
import SubTitle from "@/components/sub-title";
import ResultsNavbar from "./_components/results-navbar";

const ResultsPage = async () => {
  // Fetching data
  const years = await getYear();
  const classes = await getClasses();
  const exams = await getExams();
  const allResults = await getResults();

  // Render the results by filtering based on year, class, and exam
  return (
    <div>
      <ResultsNavbar />
      {years.map((yr) => {
        // Filter by academic year
        return (
          <div key={yr.id}>
            <PageTitle>শিক্ষাবর্ষ {yr.academicYear}</PageTitle>
            {classes.map((cls) => {
              // Filter by class
              return (
                <div key={cls.id}>
                  <SubTitle>{cls.class}</SubTitle>
                  {exams.map((exam) => {
                    // const filteredResults = [];
                    // Filter results by exam name, year, and class
                    const filteredResults = allResults.filter(
                      (result) =>
                        result.studentId.academicYearId.toString() === yr.id &&
                        result.studentId.classNameId.toString() === cls.id &&
                        result.examNameId.examName === exam.examName
                    );

                    // If there are filtered results, display the ResultTable
                    return (
                      <div key={exam.id}>
                        <SubTitle>{exam.examName}</SubTitle>
                        {filteredResults.length > 0 ? (
                          <div className="container">
                            <ResultTable results={filteredResults} />
                          </div>
                        ) : (
                          <p className="text-center my-10 text-gray-400">
                            দুঃখিত, কোন তথ্য পাওয়া য়ায় নি।
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ResultsPage;
