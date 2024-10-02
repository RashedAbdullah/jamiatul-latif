import { getCurriculums } from "@/actions";
import CurriculumAccordion from "@/components/curriculums/curriculum-accordion";
import CurriculumsInfo from "@/components/curriculums/curriculums-info";
import PageTitle from "@/components/page-title";

export const metadata = {
  title: "শিক্ষা কারিকুলাম",
  description: "জামিয়াতুল লতিফ রূপগঞ্জ মাদরাসার শিক্ষা কারিকুলাম",
};

const CurriculumsPage = async () => {
  const curriculums = await getCurriculums();
  return (
    <div className="container mb-10">
      <div>
        <PageTitle>পাঠ্যসূচী</PageTitle>
        <CurriculumsInfo />
        <main className="flex items-center justify-center">
          <CurriculumAccordion items={curriculums} />
        </main>
      </div>
    </div>
  );
};

export default CurriculumsPage;
