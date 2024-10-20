import SelectAcademicYear from "@/components/students/select-academic-year";
import SelectClass from "@/components/students/select-class";

const StudentsNavbar = ({ singleClass = false, year, navlink }) => {
  return (
    <div className="bg-slate-800 py-3">
      <div className="container flex justify-center gap-5">
        <SelectAcademicYear navlink={navlink} />
        {singleClass && <SelectClass navlink={navlink} year={year} />}
      </div>
    </div>
  );
};

export default StudentsNavbar;
