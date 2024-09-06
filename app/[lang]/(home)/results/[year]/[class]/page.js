import { getStudentsByClass } from "@/actions";
import PageTitle from "@/components/page-title";
import SubTitle from "@/components/sub-title";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getNumberValue } from "@/utils/get-student-value";
import { getEngToBnNumber } from "@/utils/number-converter";
import { Fragment } from "react";

const ExamPage = async ({ params: { year: academicYear, class: byClass } }) => {
  const studentsByClass = await getStudentsByClass(byClass);

  const selectYear = (year) => {
    if (year === "2024-25") return "২০২৪-২৫";
    else if (year === "2023-24") return "২০২৩-২৪";
    else if (year === "2022-23") return "২০২২-২৩";
    else if (year === "2021-22") return "২০২১-২২";
    else if (year === "2020-21") return "২০২০-২১";
    else return "২০২৩-২৪";
  };

  // Step 1: Calculate total number for each student and store it in a new property
  studentsByClass.students.forEach((student) => {
    student.total = student.results[0].numbers.reduce(
      (acc, curr) => acc + curr.number,
      0
    );
  });

  // Step 2: Determine the rank of each student based on their total
  studentsByClass.students.forEach((student, index, arr) => {
    let rank = 1;
    arr.forEach((otherStudent) => {
      if (otherStudent.total > student.total) {
        rank++;
      }
    });
    student.rank = rank;
  });

  return (
    <div className="container">
      <PageTitle>পরীক্ষার ফলাফল ( {selectYear(academicYear)} )</PageTitle>
      <div key={studentsByClass.className}>
        <div>
          <div>
            <SubTitle>{studentsByClass.className}</SubTitle>
            <SubTitle> প্রথম সাময়ীক পরীক্ষা</SubTitle>
            <Table className="bg-slate-300">
              <TableHeader>
                <TableRow className="bg-slate-600">
                  <TableHead className="text-center border text-white">
                    ক্র.
                  </TableHead>
                  <TableHead className="text-center border text-white">
                    নাম
                  </TableHead>
                  <TableHead className="text-center border text-white">
                    দাখিলা
                  </TableHead>
                  {studentsByClass.students[0].results[0].numbers.map(
                    (result) => (
                      <Fragment key={result.book}>
                        <TableHead className="w-full border py-2 text-white">
                          {result.book}
                        </TableHead>
                      </Fragment>
                    )
                  )}
                  <TableHead className="text-center border text-white">
                    মোট
                  </TableHead>
                  <TableHead className="text-center border text-white">
                    গড়
                  </TableHead>
                  <TableHead className="text-center border text-white">
                    মান
                  </TableHead>
                  <TableHead className="text-center border text-white">
                    সিরিয়াল
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {studentsByClass.students.map((student, ind) => (
                  <TableRow key={student.dakhila} className="hover:bg-gray-100">
                    <TableCell className="w-8 border-x font-NotoSerifBengali">
                      {getEngToBnNumber(ind + 1)}
                    </TableCell>
                    <TableCell className="w-full border-r">
                      {student.name}
                    </TableCell>
                    <TableCell className="w-8 border-x font-NotoSerifBengali">
                      {getEngToBnNumber(student.dakhila)}
                    </TableCell>
                    {student.results[0].numbers.map((result) => (
                      <Fragment key={result.book}>
                        <TableCell
                          className={`w-full border-r font-NotoSerifBengali ${
                            result.number < 40 && "text-red-500"
                          } text-center`}
                        >
                          {getEngToBnNumber(result.number)}
                        </TableCell>
                      </Fragment>
                    ))}
                    <TableCell className="w-full text-center border-r font-NotoSerifBengali">
                      {getEngToBnNumber(student.total)}
                    </TableCell>
                    <TableCell className="w-full text-center border-r font-NotoSerifBengali">
                      {getEngToBnNumber(
                        student.total / student.results[0].numbers.length
                      )}
                    </TableCell>
                    <TableCell className="w-full text-center border-r font-NotoSerifBengali">
                      {/* Student Ranking */}
                      {getNumberValue(student.results[0].numbers)}
                    </TableCell>
                    <TableCell className="w-full text-center border-r font-NotoSerifBengali">
                      {/* Student Ranking */}
                      {getEngToBnNumber(student.rank)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamPage;
