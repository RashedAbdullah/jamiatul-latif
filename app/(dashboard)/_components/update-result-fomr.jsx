"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import DashInput from "./dash-input";
import { useRouter } from "next/navigation";

const UpdateResultForm = ({ exams = [], student, onUpdateResult }) => {
  const router = useRouter();
  // State to manage marks input
  const [marks, setMarks] = useState(student.marks);

  // Handle changes in marks input, converting to number
  const handleMarksChange = (index, newMark) => {
    const updatedMarks = [...marks];
    updatedMarks[index] = { ...updatedMarks[index], mark: Number(newMark) }; // Convert to number
    setMarks(updatedMarks);
  };

  // Handle changes in selected exam
  const [selectedExam, setSelectedExam] = useState(student.examNameId._id);
  const handleExamChange = (e) => {
    setSelectedExam(e.target.value);
  };

  // Handle form submission
  const handleStudentResult = async (e) => {
    e.preventDefault();

    try {
      // Remove _id from marks and create new marks array
      const sanitizedMarks = marks.map(({ book, mark }) => ({
        book,
        mark,
      }));

      const formData = {
        studentId: student.studentId._id,
        examNameId: selectedExam,
        yearId: student.yearId._id,
        classId: student.classId._id,
        marks: sanitizedMarks, // Exclude _id from marks
      };

      // Submit the form data (example code, adjust based on your API)
      await onUpdateResult(student.id, formData);

      router.push(`/results/২০২৪-২০২৫`);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <form
      onSubmit={handleStudentResult}
      className="w-full grid grid-cols-2 gap-10"
    >
      {/* Exam Select */}
      <div className="mt-5">
        <label htmlFor="examId" className="block text-lg font-medium mb-2">
          পরীক্ষা সিলেক্ট করুন
        </label>
        <select
          required
          name="examId"
          id="examId"
          value={selectedExam} // Use value to manage selected exam
          onChange={handleExamChange} // Handle exam selection change
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-slate-800 focus:outline-none"
        >
          <option value="" disabled>
            পরীক্ষা সিলেক্ট করুন
          </option>
          {exams.map((exam) => (
            <option key={exam.id} value={exam.id}>
              {exam.examName}
            </option>
          ))}
        </select>
      </div>

      {/* Name of student */}
      <DashInput
        dsble={true}
        req={true}
        dValue={student.studentId.name}
        name="name"
        title={"শিক্ষার্থীর নাম"}
        type="text"
      />

      {/* Marks Input for each subject */}
      {marks.map((mark, index) => (
        <div key={index} className="mt-5">
          <label
            htmlFor={`mark_${index}`}
            className="block text-lg font-medium mb-2"
          >
            {mark.book}
          </label>
          <input
            value={mark.mark} // Use value to bind the state
            onChange={(e) => handleMarksChange(index, e.target.value)} // Handle mark changes and convert to number
            required={true}
            type="number"
            placeholder={`${mark.book} . . .`}
            name={`mark_${index}`}
            id={`mark_${index}`}
            className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-slate-800 focus:outline-none`}
          />
        </div>
      ))}

      {/* Submit Button */}
      <div className="text-center col-span-2">
        <Button
          type="submit"
          className="w-full py-3 rounded-lg bg-slate-900 text-white transition-all"
        >
          তথ্য সাবমিট করুন
        </Button>
      </div>
    </form>
  );
};

export default UpdateResultForm;
