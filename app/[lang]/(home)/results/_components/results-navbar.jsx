import SelectAcademicYear from "@/components/students/select-academic-year";
import SelectClass from "./selectClass";

const ResultsNavbar = () => {
  return (
    <div className="bg-slate-800 py-3">
      <div className="container flex justify-center gap-10">
        <SelectAcademicYear navlink={"results"} />
        <SelectClass />
      </div>
    </div>
  );
};

export default ResultsNavbar;
