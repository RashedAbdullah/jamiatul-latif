import ResultTable from "./_components/result-table";
import { getResults } from "@/actions/result";
import { getYear } from "@/actions/year";
import { getClasses } from "@/actions/classes";
import { getExams } from "@/actions/exam";
import PageTitle from "@/components/page-title";
import SubTitle from "@/components/sub-title";
import ResultsNavbar from "./_components/results-navbar";
import Head from "next/head";

const ResultsPage = async () => {
  // Fetching data
  const years = await getYear();
  const classes = await getClasses();
  const exams = await getExams();
  const allResults = await getResults();

  // Render the results by filtering based on year, class, and exam
  return (
    <>
      <Head>
        {/* SEO Metadata */}
        <title>
          Exam Results | পরীক্ষার ফলাফল | Jamitul Latif | জামিয়াতুল লতিফ
        </title>
        <meta
          name="description"
          content="View the results of different exams at Jamia Tul Latif, filtered by academic year, class, and examination."
        />
        <meta
          name="keywords"
          content="Islamic Education, Exam Results, Jamia Tul Latif, Madrasa"
        />
        <meta property="og:title" content="Exam Results | Jamia Tul Latif" />
        <meta
          property="og:description"
          content="Check your exam results for the academic year, class, and exam at Jamia Tul Latif."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.jamiatullatif.com/results"
        />
        <meta name="robots" content="index,follow" />
      </Head>

      <div>
        <ResultsNavbar />

        <section className="container mx-auto">
          {years.map((year) => (
            <article key={year.id}>
              <header>
                <PageTitle>শিক্ষাবর্ষ {year.academicYear}</PageTitle>
              </header>

              {classes.map((cls) => (
                <div key={cls.id}>
                  <SubTitle>{cls.class}</SubTitle>

                  {exams.map((exam) => {
                    // Filter results by exam name, year, and class
                    const filteredResults = allResults.filter(
                      (result) =>
                        result.studentId.academicYearId.toString() ===
                          year.id &&
                        result.studentId.classNameId.toString() === cls.id &&
                        result.examNameId.examName === exam.examName
                    );

                    return (
                      <div key={exam.id}>
                        <SubTitle>{exam.examName}</SubTitle>

                        {filteredResults.length > 0 ? (
                          <ResultTable results={filteredResults} />
                        ) : (
                          <p className="text-center my-10 text-gray-400">
                            দুঃখিত, কোন তথ্য পাওয়া য়ায় নি।
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </article>
          ))}
        </section>
      </div>
    </>
  );
};

export default ResultsPage;
