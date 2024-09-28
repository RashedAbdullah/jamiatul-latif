import { getSingleClassByClss } from "@/actions/classes";
import { getStudentsByYearAndClass } from "@/actions/students";
import { getSingleYearByYear } from "@/actions/year";
import SubTitle from "@/components/sub-title";
import { Button } from "@/components/ui/button";
import { getEngToBnNumber } from "@/utils/number-converter";
import Link from "next/link";
import React from "react";

const DashStudentByClass = async ({ params: { cls, yr } }) => {
  const year = decodeURIComponent(yr);
  const yearByYear = await getSingleYearByYear(year);
  const clsName = decodeURIComponent(cls.replace(/-/g, " "));
  const classByClss = await getSingleClassByClss(clsName);
  const studentsByClas = await getStudentsByYearAndClass(
    classByClss.id,
    yearByYear.id
  );

  console.log(studentsByClas[0]);

  return (
    <div className="container">
      <SubTitle>
        {classByClss.class} ({year})
      </SubTitle>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 py-3 gap-4">
        {studentsByClas.length > 0 ? (
          studentsByClas.map((student, ind) => (
            <ul
              key={student.id}
              className="flex justify-between items-center py-1 bg-white px-3 rounded-lg"
            >
              <li className="grid grid-cols-8">
                <p className="col-span-2 font-NotoSerifBengali">
                  {getEngToBnNumber(ind + 1)} |
                </p>
                <p className="col-span-5"> {student.name}</p>
              </li>
              <div>
                <Link
                  // href={""}
                  href={`/dashboard/students/update-student/${
                    student.academicYearId.academicYear
                  }/${student.classNameId.class.replace(" ", "-")}/${
                    student.id
                  }`}
                >
                  <Button>আপডেট করুন</Button>
                </Link>
              </div>
            </ul>
          ))
        ) : (
          <p>কোন ছাত্র খুজেঁ পাওয়া যায় নি।</p>
        )}
      </div>
    </div>
  );
};

export default DashStudentByClass;
