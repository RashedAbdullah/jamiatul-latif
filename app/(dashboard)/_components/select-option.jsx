"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export default function AddingResultForm({ years }) {
  const [yearId, setYearId] = useState("");
  const [classId, getClassId] = useState("");
  const [studentId, setStudentId] = useState("");

  return (
    <form action="">
      {/* Academic year */}
      <Select onValueChange={(e) => setYearId(e)}>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder={"শিক্ষার্ষ সিলেক্ট করুন"} value />
        </SelectTrigger>
        <SelectContent>
          {years?.map((year) => (
            <SelectGroup key={year.id}>
              <SelectItem className="font-NotoSerifBengali" value={year.id}>
                {year.academicYear}
              </SelectItem>
            </SelectGroup>
          ))}
        </SelectContent>
      </Select>
    </form>
  );
}
