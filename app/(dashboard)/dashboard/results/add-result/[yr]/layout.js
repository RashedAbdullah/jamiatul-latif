import StudentsNavbar from "@/app/(home)/students/_components/students-navbar";
import React from "react";

const DashResultByYearLayout = ({ children, params: { yr } }) => {
  return (
    <div>
      <StudentsNavbar
        singleClass={true}
        navlink={"dashboard/results/add-result"}
        year={yr}
      />
      {children}
    </div>
  );
};

export default DashResultByYearLayout;
