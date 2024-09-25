import ResultsNavbar from "../_components/results-navbar";

const ResultsByYearLayout = ({ children }) => {
  return (
    <>
      <ResultsNavbar singleClass={true} />
      {children}
    </>
  );
};

export default ResultsByYearLayout;
