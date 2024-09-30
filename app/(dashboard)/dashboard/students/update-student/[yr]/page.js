import { getClasses } from "@/actions/classes";
import { getStudentsByYear } from "@/actions/students";
import { getSingleYearByYear } from "@/actions/year";
import PageTitle from "@/components/page-title";
import SubTitle from "@/components/sub-title";
import { Button } from "@/components/ui/button";
import { getEngToBnNumber } from "@/utils/number-converter";
import Link from "next/link";
import React from "react";

const UpdateStudent = async ({ params: { yr } }) => {
  const academicYear = decodeURIComponent(yr);
  const yearByYear = await getSingleYearByYear(academicYear);
  const classes = await getClasses();
  const studentsForYear = await getStudentsByYear(yearByYear.id);
  return (
    <div className="mx-5">
      <PageTitle>
        শিক্ষাবর্ষ <span className="font-NotoSerifBengali">{academicYear}</span>
      </PageTitle>

      {await Promise.all(
        classes.map((cls) => {
          const studentsInClass = studentsForYear.filter((student) => {
            return (
              student.classNameId._id.toString() === cls.id &&
              student.academicYearId._id.toString() === yearByYear.id
            );
          });

          return (
            <div key={cls.id}>
              <SubTitle>{cls.class}</SubTitle>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-3 gap-4">
                {studentsInClass.length > 0 ? (
                  studentsInClass.map((student, ind) => (
                    <ul
                      key={student.id}
                      className="hover:bg-slate-200 grid grid-cols-12 items-center align-middle py-1 bg-white px-3 rounded-lg"
                    >
                      <li className="grid grid-cols-8 col-span-4">
                        <p className="col-span-2 font-NotoSerifBengali">
                          {getEngToBnNumber(ind + 1)} |
                        </p>
                        <p className="col-span-5"> {student.name}</p>
                      </li>
                      <li className="col-span-4">
                        <Link
                          href={`/dashboard/students/update-student/${
                            student.academicYearId.academicYear
                          }/${student.classNameId.class.replace(" ", "-")}/${
                            student.id
                          }`}
                        >
                          <Button>তথ্য আপডেট করুন</Button>
                        </Link>
                      </li>
                      <li className="col-span-4">
                        <Link
                          href={`/dashboard/results/update-result/${student.id}`}
                        >
                          <Button>ফলাফল আপডেট করুন</Button>
                        </Link>
                      </li>
                    </ul>
                  ))
                ) : (
                  <p>কোন ছাত্র খুজেঁ পাওয়া যায় নি।</p>
                )}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default UpdateStudent;
