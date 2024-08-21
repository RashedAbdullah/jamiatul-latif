import { getStudents } from "@/actions";
import SubTitle from "@/components/sub-title";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getEngToBnNumber } from "@/utils/number-converter";
import { Fragment } from "react";

const ResultTable = async () => {
  const results = await getStudents();
  console.log(results);
  return (
    <div>
      {results.map((classes) => (
        <div key={classes.className}>
          <SubTitle>{classes.className}</SubTitle>
          <Table>
            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
            <TableHeader>
              <TableRow className="bg-slate-100">
                <TableHead className="text-center border">ক্র.</TableHead>
                <TableHead className="text-center border">নাম</TableHead>
                <TableHead className="text-center border">দাখিলা</TableHead>
                {classes.students[0].results[0].numbers.map((result) => (
                  <Fragment key={result.book}>
                    <TableHead className="w-full border py-2">{result.book}</TableHead>
                  </Fragment>
                ))}
                <TableHead className="text-center border">মোট</TableHead>
                <TableHead className="text-center border">গড়</TableHead>
                <TableHead className="text-center border">সিরিয়াল</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {classes.students.map((student, ind) => (
                <TableRow key={student.dakhila}>
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
                    {/* Total number */}
                    {getEngToBnNumber(
                      student.results[0].numbers.reduce(
                        (crr, prev) => (crr += prev.number),
                        0
                      )
                    )}
                  </TableCell>
                  <TableCell className="w-full text-center border-r font-NotoSerifBengali">
                    {getEngToBnNumber(
                      student.results[0].numbers.reduce(
                        (crr, prev) => (crr += prev.number),
                        0
                      ) / student.results[0].numbers.length
                    )}
                  </TableCell>
                  <TableCell className="w-full text-center border-r font-NotoSerifBengali">
                    {getEngToBnNumber(34)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            {/* <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">$2,500.00</TableCell>
              </TableRow>
            </TableFooter> */}
          </Table>
        </div>
      ))}
    </div>
  );
};

export default ResultTable;
