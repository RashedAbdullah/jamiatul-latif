import React from "react";
import StudentsNavbar from "./_components/students-navbar";

const StudentsLayout = ({ children }) => {
  return (
    <>
      <StudentsNavbar />
      {children}
    </>
  );
};

export default StudentsLayout;
