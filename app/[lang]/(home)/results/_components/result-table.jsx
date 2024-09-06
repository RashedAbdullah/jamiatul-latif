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

const ResultTable = ({ results, examNo = 0 }) => {
  return (
    <div>
      {results.map((classes) => {
        // Step 1: Calculate total number for each student and store it in a new property
        classes.students.forEach((student) => {
          student.total = student.results[Number(examNo)].numbers.reduce(
            (acc, curr) => acc + curr.number,
            0
          );
        });

        // Step 2: Determine the rank of each student based on their total
        classes.students.forEach((student, index, arr) => {
          let rank = 1;
          arr.forEach((otherStudent) => {
            if (otherStudent.total > student.total) {
              rank++;
            }
          });
          student.rank = rank;
        });

        return (
          <div key={classes.className} className="mt-10">
            <SubTitle>{classes.className}</SubTitle>
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
                  {classes.students[0].results[Number(examNo)].numbers.map(
                    (result) => (
                      <Fragment key={result.book}>
                        <TableHead className="w-full border py-2 text-center text-white">
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
                {classes.students.map((student, ind) => (
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
                    {student.results[Number(examNo)].numbers.map((result) => (
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
                        student.total /
                          student.results[Number(examNo)].numbers.length
                      )}
                    </TableCell>
                    <TableCell className="w-full text-center border-r font-NotoSerifBengali">
                      {/* Student Ranking */}
                      {getNumberValue(student.results[Number(examNo)].numbers)}
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
        );
      })}
    </div>
  );
};

export default ResultTable;
