import StudentsNavbar from "@/app/(home)/students/_components/students-navbar";

const DashUpdateStudentLayout = ({ children, params: { yr } }) => {
  const year = decodeURIComponent(yr);
  return (
    <>
      <StudentsNavbar
        navlink="dashboard/students/update-student"
        singleClass={true}
        year={year}
      />
      {children}
    </>
  );
};

export default DashUpdateStudentLayout;
