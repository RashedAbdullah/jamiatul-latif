import PageTitle from "@/components/page-title";
import SelectAcademicYear from "@/components/students/select-academic-year";
import StudentsCard from "@/components/students/students-card";
import SubTitle from "@/components/sub-title";

const StudentsPage = ({ params: { year = "2023-24" } }) => {
  return (
    <div className="container">
      <PageTitle>ছাত্রদের তথ্য বিবরণ ( {year} )</PageTitle>
      <SelectAcademicYear />
      <SubTitle>ছানাবিয়া ২য় বর্ষ</SubTitle>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 py-3 gap-4">
        <StudentsCard />
        <StudentsCard />
        <StudentsCard />
        <StudentsCard />
        <StudentsCard />
        <StudentsCard />
        <StudentsCard />
        <StudentsCard />
      </div>
      <SubTitle>ছানাবিয়া ১ম বর্ষ</SubTitle>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 py-3 gap-4">
        <StudentsCard />
        <StudentsCard />
        <StudentsCard />
        <StudentsCard />
        <StudentsCard />
        <StudentsCard />
        <StudentsCard />
        <StudentsCard />
      </div>
    </div>
  );
};

export default StudentsPage;
