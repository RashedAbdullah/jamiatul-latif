import SubTitle from "@/components/sub-title";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getNumberValue, getTotalMarks } from "@/utils/get-student-value";
import { getEngToBnNumber } from "@/utils/number-converter";
import { Fragment } from "react";

const ResultTable = ({ results }) => {
  const sortedResults = results
    .map((student) => ({
      ...student,
      totalMarks: getTotalMarks(student.marks),
    }))
    .sort((a, b) => b.totalMarks - a.totalMarks);

  return (
    <div>
      <Table className="bg-slate-300">
        <TableHeader>
          <TableRow className="bg-slate-600">
            <TableHead className="text-center border text-white">
              ক্র.
            </TableHead>
            <TableHead className="text-center border text-white">নাম</TableHead>
            <TableHead className="text-center border text-white">
              দাখিলা
            </TableHead>
            {results[0]?.marks.map((mark) => (
              <Fragment key={mark.book.book}>
                <TableHead className="w-full border py-2 text-center text-white">
                  {mark.book.book}
                </TableHead>
              </Fragment>
            ))}
            <TableHead className="text-center border text-white">
              মোট
            </TableHead>
            <TableHead className="text-center border text-white">গড়</TableHead>
            <TableHead className="text-center border text-white">মান</TableHead>
            <TableHead className="text-center border text-white">
              সিরিয়াল
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedResults.map((student, ind) => {
            return (
              <TableRow key={student.dakhila} className="hover:bg-gray-100">
                <TableCell className="w-8 border-x font-NotoSerifBengali">
                  {getEngToBnNumber(ind + 1)}
                </TableCell>
                <TableCell
                  className={`w-full border-r ${
                    student.totalMarks === 0 && "text-red-500"
                  }`}
                >
                  {student.studentId.name}
                </TableCell>
                <TableCell className="w-8 border-x font-NotoSerifBengali">
                  {getEngToBnNumber(student.studentId.dakhila)}
                </TableCell>
                {student.marks.map((mark) => (
                  <Fragment key={mark.book}>
                    <TableCell
                      className={`w-full border-r font-NotoSerifBengali ${
                        mark.mark < 40 && mark.mark !== 0 && "text-red-500"
                      } text-center`}
                    >
                      {mark.mark === 0 ? "অনু." : getEngToBnNumber(mark.mark)}
                    </TableCell>
                  </Fragment>
                ))}
                <TableCell className="w-full text-center border-r font-NotoSerifBengali">
                  {student.totalMarks === 0
                    ? "অনু."
                    : getEngToBnNumber(student.totalMarks)}
                </TableCell>
                <TableCell className="w-full text-center border-r font-NotoSerifBengali">
                  {student.totalMarks === 0
                    ? "অনু."
                    : getEngToBnNumber(
                        student.totalMarks / student.marks.length
                      )}
                </TableCell>
                <TableCell className="w-full text-center border-r font-NotoSerifBengali">
                  {student.totalMarks === 0
                    ? "অনু."
                    : getNumberValue(student.marks)}
                </TableCell>
                <TableCell className="w-full text-center border-r font-NotoSerifBengali">
                  {student.totalMarks === 0
                    ? "অনু."
                    : getEngToBnNumber(ind + 1)}{" "}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default ResultTable;
