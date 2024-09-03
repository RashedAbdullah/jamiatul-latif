import SelectAcademicYear from "@/components/students/select-academic-year";

const StudentsNavbar = () => {
  return (
    <div className="bg-slate-800 py-3">
      <div className="container flex justify-center">
        <SelectAcademicYear navlink={"students"}/>
      </div>
    </div>
  );
};

export default StudentsNavbar;
