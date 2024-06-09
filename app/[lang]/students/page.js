import PageTitle from "@/components/page-title";
import StudentsCard from "@/components/students/students-card";
import SubTitle from "@/components/sub-title";

const StudentsPage = () => {
  return (
    <div>
      <PageTitle>ছাত্রদের তথ্য বিবরণ</PageTitle>
      <div className="container">
        <SubTitle>ছানাবিয়া ২য় বর্ষ</SubTitle>
        <div className="grid grid-cols-4 py-3">
          <StudentsCard />
        </div>
      </div>
    </div>
  );
};

export default StudentsPage;
