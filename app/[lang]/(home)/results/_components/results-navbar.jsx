import SelectAcademicYear from "@/components/students/select-academic-year";
import SelectExam from "./selectExam";

const ResultsNavbar = () => {
  return (
    <div className="bg-slate-800 py-3">
      <div className="container flex justify-center gap-10">
        <SelectAcademicYear navlink={"results"} />
        <SelectExam />
      </div>
    </div>
  );
};

export default ResultsNavbar;
