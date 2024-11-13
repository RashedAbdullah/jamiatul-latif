import { getFuturePlans } from "@/actions/future-plan";
import DepartmentAccordion from "@/components/department/department-accordion";
import PageTitle from "@/components/page-title";

export const metadata = {
  title: "ভবিষ্যৎ পরিকল্পনা",
  description: "জামিয়াতুল লতিফ রূপগঞ্জ মাদরাসার ভবিষ্যৎ পরিকল্পনা",
};


const FuturePlansPage =async () => {
  const futurePlans = await getFuturePlans()
  return (
    <div className="container mb-10 min-h-screen">
      <div>
        <PageTitle>ভবিষ্যৎ পরিকল্পনা</PageTitle>
        <main className="flex items-center justify-center">
          <DepartmentAccordion items={futurePlans} />
        </main>
      </div>
    </div>
  );
};

export default FuturePlansPage;
