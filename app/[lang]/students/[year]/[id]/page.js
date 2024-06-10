import StudentOverView from "@/components/students/student-overview";
import StudentResultTable from "@/components/students/student-table";
import StudentsCard from "@/components/students/students-card";
import SubTitle from "@/components/sub-title";

const SingleStudentPage = () => {
  return (
    <div className="container my-5">
      <div className="lg:grid lg:grid-cols-12 gap-4">
        <div className="col-span-3 lg:mt-16">
          <StudentsCard />
        </div>
        <div id="tableOfResult" className="col-span-9">
          <SubTitle>নাম্বারপত্র</SubTitle>
          <StudentResultTable />
          <SubTitle>সামগ্রিক মতামত</SubTitle>
          <StudentOverView />
        </div>
      </div>
    </div>
  );
};

export default SingleStudentPage;
