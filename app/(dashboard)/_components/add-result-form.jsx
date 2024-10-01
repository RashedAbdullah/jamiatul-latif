"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getEngToBnNumber } from "@/utils/number-converter";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

const AddResultForm = ({ students = [], exams = [], createResult }) => {
  const router = useRouter();
  const [examId, setExamId] = useState("");

  // State for table head inputs (books)
  const [headers, setHeaders] = useState([{ bookName: "" }]);

  // State for student results, initialized with empty marks and books
  const [results, setResults] = useState(
    students.map((student) => ({
      studentId: student.id,
      examNameId: examId, // Initially set to the empty examId
      yearId: student.academicYearId._id,
      classId: student.classNameId._id,
      marks: [{ book: "", mark: 0 }],
    }))
  );

  // Update the results state with the examId whenever it changes
  useEffect(() => {
    setResults((prevResults) =>
      prevResults.map((result) => ({
        ...result,
        examNameId: examId, // Update examId for each student result
      }))
    );
  }, [examId]);

  // Add a new subject/book column
  const handleAddHeader = () => {
    setHeaders([...headers, { bookName: "" }]);
    setResults((prevResults) =>
      prevResults.map((result) => ({
        ...result,
        marks: [...result.marks, { book: "", mark: "" }],
      }))
    );
  };

  // Update the input for the student's marks and book names
  const handleInputChange = (studentId, index, field, value) => {
    setResults((prevResults) =>
      prevResults.map((result) =>
        result.studentId === studentId
          ? {
              ...result,
              marks: result.marks.map((mark, i) =>
                i === index
                  ? {
                      ...mark,
                      [field]: field === "mark" ? Number(value) : value,
                    }
                  : mark
              ),
            }
          : result
      )
    );
  };

  // Update the header inputs (book names)
  const handleHeaderInputChange = (index, value) => {
    setHeaders((prevHeaders) =>
      prevHeaders.map((header, i) =>
        i === index ? { ...header, bookName: value } : header
      )
    );

    // Update book names in the results state for all students
    setResults((prevResults) =>
      prevResults.map((result) => ({
        ...result,
        marks: result.marks.map((mark, i) =>
          i === index ? { ...mark, book: value } : mark
        ),
      }))
    );
  };

  // Submit the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createResult(results.map((result) => result));
      router.push(
        `/results/${
          students[0].academicYearId.academicYear
        }/${students[0].classNameId.class.replace(/ /g, "-")}`
      );
    
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-10">
      <div className="flex justify-center gap-5 items-center">
        {/* Select Exam */}
        <div className="flex justify-center py-2">
          <Select required onValueChange={(value) => setExamId(value)}>
            <SelectTrigger className="w-[300px]">
              <SelectValue placeholder="পরীক্ষা সিলেক্ট করুন" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>পরীক্ষা সিলেক্ট করুন</SelectLabel>
                {exams.map((exam) => (
                  <SelectItem key={exam.id} value={exam.id}>
                    {exam.examName}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        {/* Button to add new book columns */}
        <div className="text-center my-4">
          <Button type="button" onClick={handleAddHeader}>
            সাব্জেক্ট ও মার্ক এড করুন
          </Button>
        </div>
      </div>

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
            {headers.map((header, index) => (
              <TableHead key={index} className="text-center border">
                <input
                  type="text"
                  placeholder="বইয়ের নাম"
                  value={header.bookName}
                  onChange={(e) =>
                    handleHeaderInputChange(index, e.target.value)
                  }
                  className="w-full min-w-32 px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-slate-800 focus:outline-none"
                />
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student, ind) => (
            <TableRow key={student.dakhila} className="hover:bg-gray-100">
              <TableCell className="w-8 border-x font-NotoSerifBengali">
                {getEngToBnNumber(ind + 1)}
              </TableCell>
              <TableCell className="w-full border-r">{student.name}</TableCell>
              <TableCell className="w-8 border-x">
                {getEngToBnNumber(student.dakhila)}
              </TableCell>
              {results
                .find((result) => result.studentId === student.id)
                .marks.map((mark, index) => (
                  <TableCell key={index} className="w-32">
                    <input
                      type="text"
                      placeholder="বইয়ের নাম"
                      value={mark.book}
                      onChange={(e) =>
                        handleInputChange(
                          student.id,
                          index,
                          "book",
                          e.target.value
                        )
                      }
                      className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-slate-800 focus:outline-none mb-2"
                    />
                    <input
                      type="text"
                      placeholder="মার্কস"
                      value={mark.mark}
                      onChange={(e) =>
                        handleInputChange(
                          student.id,
                          index,
                          "mark",
                          e.target.value
                        )
                      }
                      className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-slate-800 focus:outline-none"
                    />
                  </TableCell>
                ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="text-center py-5">
        <Button type="submit" className="px-20">
          রেজাল্ট সাবমিট করুন
        </Button>
      </div>
    </form>
  );
};

export default AddResultForm;
