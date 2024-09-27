import DepartmentAccordion from "@/components/department/department-accordion";
import PageTitle from "@/components/page-title";

const items = [
  {
    title: "আরবি সাহিত্য (আদব বিভাগ)",
    content: "কুরআন সুন্নাহর আলোকে যাবতীয় সামাজিক জিজ্ঞাসার সমাধান",
  },
  {
    title: "নৈশ মাদরাসা",
    content: "কুরআন সুন্নাহর আলোকে যাবতীয় সামাজিক জিজ্ঞাসার সমাধান",
  },
  {
    title: "ইসলামিক স্কুল",
    content: "কুরআন সুন্নাহর আলোকে যাবতীয় সামাজিক জিজ্ঞাসার সমাধান",
  },
];

const FuturePlansPage = () => {
  return (
    <div className="container mb-10">
      <div>
        <PageTitle>ভবিষ্যৎ পরিকল্পনা</PageTitle>
        <main className="flex items-center justify-center">
          <DepartmentAccordion items={items} />
        </main>
      </div>
    </div>
  );
};

export default FuturePlansPage;
