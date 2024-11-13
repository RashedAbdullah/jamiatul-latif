import { getDepartments } from "@/actions/departments";
import DepartmentAccordion from "@/components/department/department-accordion";
import PageTitle from "@/components/page-title";

export const metadata = {
  title: "বিভাগ সমূহ",
  description: "জামিয়াতুল লতিফ রূপগঞ্জ মাদরাসার বিভাগসমূহ",
};

const Departments = async () => {
  const departments = await getDepartments();
  return (
    <div className="container mb-10 min-h-screen">
      <div>
        <PageTitle>বিভাগসমূহ</PageTitle>
        <main className="flex items-center justify-center">
          <DepartmentAccordion items={departments} />
        </main>
      </div>
    </div>
  );
};

export default Departments;
