import SelectAcademicYear from "@/components/students/select-academic-year";
import SelectClass from "@/components/students/select-class";

const ResultsNavbar = ({ singleClass = false, year }) => {
  return (
    <div className="bg-slate-800 py-3">
      <div className="container flex justify-center gap-5">
        <SelectAcademicYear navlink={"results"} />
        {singleClass && <SelectClass navlink={"results"} year={year} />}
      </div>
    </div>
  );
};

export default ResultsNavbar;
