import SelectAcademicYear from "@/components/students/select-academic-year";
import SelectClass from "@/components/students/select-class";

const ResultsNavbar = ({ singleClass = false, year }) => {
  return (
    <div className="bg-slate-800 py-3">
      <div className="container flex flex-col md:flex-row justify-center md:gap-5 gap-2">
        {/* Mobile-friendly layout */}
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <SelectAcademicYear navlink={"results"} />
          {singleClass && <SelectClass navlink={"results"} year={year} />}
        </div>
      </div>
    </div>
  );
};

export default ResultsNavbar;
