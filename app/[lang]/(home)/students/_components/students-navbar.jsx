import SelectAcademicYear from "@/components/students/select-academic-year";
import SelectClass from "@/components/students/select-class";

const StudentsNavbar = ({ singleClass = false, year }) => {
  return (
    <div className="bg-slate-800 py-3">
      <div className="container flex justify-center gap-5">
        <SelectAcademicYear navlink={"students"} />
        {singleClass && <SelectClass navlink={"students"} year={year} />}
      </div>
    </div>
  );
};

export default StudentsNavbar;
