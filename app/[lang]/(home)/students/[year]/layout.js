import React from "react";
import StudentsNavbar from "../_components/students-navbar";

const StudentsByClassLayout = ({ children, params: { year, lang } }) => {
  const yr = decodeURIComponent(year);

  return (
    <div>
      <StudentsNavbar singleClass={true} year={yr} />
      {children}
    </div>
  );
};

export default StudentsByClassLayout;
