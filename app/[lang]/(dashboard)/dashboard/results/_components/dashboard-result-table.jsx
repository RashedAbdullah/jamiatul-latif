import { getStudentsByClass } from "@/actions";
import SubTitle from "@/components/sub-title";
import { Input } from "@/components/ui/input";

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

const DashboardResultTable = async ({ id }) => {
  const results = await getStudentsByClass(id);

  return (
    <div>
      <div key={results.className}>
        <SubTitle>{results.className}</SubTitle>
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow className="bg-slate-100">
              <TableHead className="text-center border">ক্র.</TableHead>
              <TableHead className="text-center border">নাম</TableHead>
              <TableHead className="text-center border">দাখিলা</TableHead>
              {results.students[0].results[0].numbers.map((result) => (
                <Fragment key={result.book}>
                  <TableHead className="border py-2">{result.book}</TableHead>
                </Fragment>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {results.students.map((student, ind) => (
              <TableRow key={student.dakhila}>
                <TableCell className="w-8 border-x font-NotoSerifBengali">
                  {getEngToBnNumber(ind + 1)}
                </TableCell>
                <TableCell className="border-r lg:min-w-52">
                  {student.name}
                </TableCell>
                <TableCell className="w-8 border-x font-NotoSerifBengali">
                  {getEngToBnNumber(student.dakhila)}
                </TableCell>
                {student.results[0].numbers.map((result) => (
                  <Fragment key={result.book}>
                    <TableCell
                      className={` border-r font-NotoSerifBengali ${
                        result.number < 40 && "text-red-500"
                      } text-center`}
                    >
                      <Input type="number" defaultValue={result.number}></Input>
                    </TableCell>
                  </Fragment>
                ))}
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
    </div>
  );
};

export default DashboardResultTable;
