import { getStudentBYDakhila } from "@/actions/students";
import StudentsCard from "@/components/students/students-card";
import SubTitle from "@/components/sub-title";

const SingleStudentPage = async ({ params: { stdnt } }) => {
  const studebtByDakhila = await getStudentBYDakhila(stdnt);

  return (
    <div className="container my-5">
      <div className="lg:grid lg:grid-cols-12 gap-4">
        <div className="col-span-3 lg:mt-16">
          <StudentsCard student={studebtByDakhila} />
        </div>
        <div id="tableOfResult" className="col-span-9">
          <SubTitle>নাম্বারপত্র</SubTitle>

          <SubTitle>সামগ্রিক মতামত</SubTitle>

        </div>
      </div>
     
    </div>
  );
};

export default SingleStudentPage;
