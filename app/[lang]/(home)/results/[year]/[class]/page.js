import { getSingleYearByYear } from "@/actions/year";
// You need to implement this function to fetch results
import SubTitle from "@/components/sub-title";
import ResultTable from "../../_components/result-table";
import { getResultsByYearAndClass } from "@/actions/result";

const ExamsByClassPage = async ({ params: { year, class: byClass } }) => {
  const yr = decodeURIComponent(year);
  const cls = decodeURIComponent(byClass);

  // Fetch the year and class details (if necessary)
  const singleYear = await getSingleYearByYear(yr);

  // Fetch results based on year and class
  const results = await getResultsByYearAndClass(yr, cls);
  console.log(results);
  return (
    <div className="container">
      <SubTitle>{cls}</SubTitle>
      <div>{/* <ResultTable results={results} /> */}</div>
    </div>
  );
};

export default ExamsByClassPage;
