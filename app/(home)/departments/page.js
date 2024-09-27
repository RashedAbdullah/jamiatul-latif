import DepartmentAccordion from "@/components/department/department-accordion";
import PageTitle from "@/components/page-title";

const items = [
  {
    title: "ইসলামিক ফিকহ এন্ড রিসার্চ সেন্টার",
    content: "কুরআন সুন্নাহর আলোকে যাবতীয় সামাজিক জিজ্ঞাসার সমাধান",
  },
  {
    title: "কিতাব বিভাগ",
    content: "কুরআন সুন্নাহর আলোকে যাবতীয় সামাজিক জিজ্ঞাসার সমাধান",
  },
  {
    title: "হিফজুল কুরআন বিভাগ",
    content: "কুরআন সুন্নাহর আলোকে যাবতীয় সামাজিক জিজ্ঞাসার সমাধান",
  },
];

const Departments = () => {
  return (
    <div className="container mb-10">
      <div>
        <PageTitle>বিভাগসমূহ</PageTitle>
        <main className="flex items-center justify-center">
          <DepartmentAccordion items={items} />
        </main>
      </div>
    </div>
  );
};

export default Departments;
