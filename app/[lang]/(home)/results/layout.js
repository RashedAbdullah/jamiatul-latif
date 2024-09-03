import React from "react";
import ResultsNavbar from "./_components/results-navbar";

const ResultsLayout = ({ children, params: { lang } }) => {
  return (
    <>
      <ResultsNavbar />
      {children}
    </>
  );
};

export default ResultsLayout;
