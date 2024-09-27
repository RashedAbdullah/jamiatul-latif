"use client";

import SubTitle from "@/components/sub-title";
// import { getClasses } from "@/actions/classes";
// import { getYear } from "@/actions/year";
import AddingResultForm from "../../_components/select-option";
import { useEffect, useState } from "react";

const DashboardResultPage = ({ params }) => {
  const [classes, setClasses] = useState([]);
  const [years, setYears] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        // Assuming both getYear() and getClasses() return parsed JSON objects
        // const yearsData = await getYear();
        // const classesData = await getClasses();
        // console.log(yearsData);
        // setYears(yearsData); // Directly set the data
        // setClasses(classesData); // Directly set the data
      } catch (error) {
        console.log("first")
        console.log("Error fetching data:", error.message);
      }
    };
    getData();
  }, []);

  return (
    <div className="container">
      <SubTitle>ফলাফল যুক্ত করুন</SubTitle>
      {/* <AddingResultForm years={years} classes={classes} /> */}
    </div>
  );
};

export default DashboardResultPage;
