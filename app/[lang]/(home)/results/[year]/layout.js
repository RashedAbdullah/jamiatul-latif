import ResultsNavbar from "../_components/results-navbar";

const ResultsByYearLayout = ({ children, params: { lang, year } }) => {
  const academicYear = decodeURIComponent(year);

  return (
    <>
      <ResultsNavbar singleClass={true} year={academicYear} />
      {children}
    </>
  );
};

export default ResultsByYearLayout;
