import { getMadrashaInfo } from "@/actions/madrasha";
import PageTitle from "@/components/page-title";
import AboutSchemaScript from "@/meta/about-madrasha-meta";

export const metadata = {
  title: "জামিয়াতুল লতিফের পরিচিতি | মাদ্রাসা সম্পর্কে",
  description:
    "জামিয়াতুল লতিফের সম্পর্কে জানুন, এর অবস্থান, প্রতিষ্ঠাতা, শিক্ষক এবং এই ইসলামিক প্রতিষ্ঠানের শিক্ষা পটভূমি সম্পর্কে তথ্য পেয়ে যান।",
  keywords:
    "জামিয়াতুল লতিফ, ইসলামিক শিক্ষা, মাদ্রাসা, দেওবন্দী, ইসলামিক শিক্ষা, নারায়ণগঞ্জ মাদ্রাসা, রূপগঞ্জ ইসলামিক স্কুল",
  openGraph: {
    title: "জামিয়াতুল লতিফের পরিচিতি",
    description:
      "জামিয়াতুল লতিফ সম্পর্কে বিস্তারিত তথ্য পান, এর অবস্থান, প্রতিষ্ঠাতা এবং শিক্ষামূলক উদ্দেশ্য সম্পর্কে জানুন।",
    type: "website",
    url: "https://jamiatullatif.com/about-madrasha",
    images: ["https://i.ibb.co/0FZ9bnp/jamia-pic.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "জামিয়াতুল লতিফের পরিচিতি",
    description:
      "জামিয়াতুল লতিফ, এর প্রতিষ্ঠাতা, অবস্থান এবং ইসলামিক শিক্ষার উদ্দেশ্য সম্পর্কে জানুন।",
    images: ["https://i.ibb.co/0FZ9bnp/jamia-pic.jpg"],
  },
};

const AboutPage = async () => {
  const madrashaInfo = await getMadrashaInfo();

  return (
    <div className="container mb-10">
      <section className="my-8">
        <PageTitle>প্রতিষ্ঠান পরিচিতি</PageTitle>
        <article className="bg-gray-100 rounded-lg shadow p-6">
          <ul className="space-y-4">
            {madrashaInfo.map((about, ind) => (
              <li
                key={ind}
                className="grid grid-cols-12 gap-4 items-center border-b border-gray-300 pb-4"
              >
                <AboutSchemaScript />
                <p className="md:col-span-2 col-span-3 font-semibold text-gray-700">
                  {about.title}:
                </p>
                <p className="md:col-span-10 col-span-9 text-gray-600">
                  {about.details}
                </p>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  );
};

export default AboutPage;
