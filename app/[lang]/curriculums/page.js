import CurriculumAccordion from "@/components/curriculums/curriculum-accordion";
import CurriculumsInfo from "@/components/curriculums/curriculums-info";
import PageTitle from "@/components/page-title";
import { BsInfoCircleFill } from "react-icons/bs";

const items = [
  {
    title: "দারুল ইফতা",
    content: [
      {
        subject: "আল-ফিকহুল হানাফি",
        books: ["ফিকহুল বুয়ূ", "ফাতহুল ক্বদীর", "", ""],
      },
      {
        subject: "ইসলামি অর্থনীতি",
        books: ["আল-ইকতিসাদ", "আল ইকতিসাদুল ইসলামি", "", ""],
      },
      {
        subject: "উত্তারিধার ও অনান্য",
        books: ["ফিকহুল বুয়ূ", "ফাতহুল ক্বদীর", "", ""],
      },
    ],
  },
  {
    title: "ছানাবিয়া ২য় বর্ষ (শরহে বেকায়া)",
    content: [
      {
        subject: "আল-ফিকহুল হানাফি",
        books: ["ফিকহুল বুয়ূ", "ফাতহুল ক্বদীর", "", ""],
      },
      {
        subject: "ইসলামি অর্থনীতি",
        books: ["আল-ইকতিসাদ", "আল ইকতিসাদুল ইসলামি", "", ""],
      },
      {
        subject: "উত্তারিধার ও অনান্য",
        books: ["ফিকহুল বুয়ূ", "ফাতহুল ক্বদীর"],
      },
    ],
  },
  {
    title: "ছানাবিয়া ১ম বর্ষ (কাফিয়া)",
    content: [
      {
        subject: "আল-ফিকহুল হানাফি",
        books: ["ফিকহুল বুয়ূ", "ফাতহুল ক্বদীর", "", ""],
      },
      {
        subject: "ইসলামি অর্থনীতি",
        books: ["আল-ইকতিসাদ", "আল ইকতিসাদুল ইসলামি", "", ""],
      },
      {
        subject: "উত্তারিধার ও অনান্য",
        books: ["ফিকহুল বুয়ূ", "ফাতহুল ক্বদীর", "", ""],
      },
    ],
  },
  {
    title: "মুতাওয়াসসিতা ৩য় বর্ষ (হেদায়েতুন্নাহু)",
    content: [
      {
        subject: "আল-ফিকহুল হানাফি",
        books: ["ফিকহুল বুয়ূ", "ফাতহুল ক্বদীর", "", ""],
      },
      {
        subject: "ইসলামি অর্থনীতি",
        books: ["আল-ইকতিসাদ", "আল ইকতিসাদুল ইসলামি", "", ""],
      },
      {
        subject: "উত্তারিধার ও অনান্য",
        books: ["ফিকহুল বুয়ূ", "ফাতহুল ক্বদীর", "", ""],
      },
    ],
  },
  {
    title: "মুতাওয়াসসিতা ২য় বর্ষ (নাহবেমীর)",
    content: [
      {
        subject: "আল-ফিকহুল হানাফি",
        books: ["ফিকহুল বুয়ূ", "ফাতহুল ক্বদীর", "", ""],
      },
      {
        subject: "ইসলামি অর্থনীতি",
        books: ["আল-ইকতিসাদ", "আল ইকতিসাদুল ইসলামি", "", ""],
      },
      {
        subject: "উত্তারিধার ও অনান্য",
        books: ["ফিকহুল বুয়ূ", "ফাতহুল ক্বদীর", "", ""],
      },
    ],
  },
  {
    title: "মুতাওয়াসসিতা ১ম বর্ষ (মিযান / ছরফ)",
    content: [
      {
        subject: "আল-ফিকহুল হানাফি",
        books: ["ফিকহুল বুয়ূ", "ফাতহুল ক্বদীর", "", ""],
      },
      {
        subject: "ইসলামি অর্থনীতি",
        books: ["আল-ইকতিসাদ", "আল ইকতিসাদুল ইসলামি", "", ""],
      },
      {
        subject: "উত্তারিধার ও অনান্য",
        books: ["ফিকহুল বুয়ূ", "ফাতহুল ক্বদীর", "", ""],
      },
    ],
  },
  {
    title: "ইবতেদাইয়্যাহ (উর্দু ও ফার্সী)",
    content: [
      {
        subject: "আল-ফিকহুল হানাফি",
        books: ["ফিকহুল বুয়ূ", "ফাতহুল ক্বদীর", "", ""],
      },
      {
        subject: "ইসলামি অর্থনীতি",
        books: ["আল-ইকতিসাদ", "আল ইকতিসাদুল ইসলামি", "", ""],
      },
      {
        subject: "উত্তারিধার ও অনান্য",
        books: ["ফিকহুল বুয়ূ", "ফাতহুল ক্বদীর", "", ""],
      },
    ],
  },
  {
    title: "হিফজুল কুরআন",
    content: [
      {
        subject: "আল-ফিকহুল হানাফি",
        books: ["ফিকহুল বুয়ূ", "ফাতহুল ক্বদীর", "", ""],
      },
      {
        subject: "ইসলামি অর্থনীতি",
        books: ["আল-ইকতিসাদ", "আল ইকতিসাদুল ইসলামি", "", ""],
      },
      {
        subject: "উত্তারিধার ও অনান্য",
        books: ["ফিকহুল বুয়ূ", "ফাতহুল ক্বদীর", "", ""],
      },
    ],
  },
];

const CurriculumsPage = () => {
  return (
    <div className="container mb-10">
      <div>
        <PageTitle>পাঠ্যসূচী</PageTitle>
        <CurriculumsInfo />
        <main className="flex items-center justify-center">
          <CurriculumAccordion items={items} />
        </main>
      </div>
    </div>
  );
};

export default CurriculumsPage;
