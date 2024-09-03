import PageTitle from "@/components/page-title";

const AboutPage = () => {
  const aboutMadrasha = [
    {
      title: "নাম",
      details: "জামিয়াতুল লতিফ",
    },
    {
      title: "অবস্থান",
      details:
        "নারায়নগঞ্জ জেলার রূপগঞ্জ উপজেলার বরাব বাজারের পশ্চিম পাশে অবস্থিত",
    },
    {
      title: "প্রতিষ্ঠাতা",
      details: "মুফতী ইব্রাহীম নোমানী হাফি",
    },
    {
      title: "পরিচালক",
      details: "মুফতী ইব্রাহীম নোমানী হাফি",
    },
    {
      title: "ছাত্র সংখ্যা",
      details: "১২০+",
    },
    {
      title: "শিক্ষক ও স্টাপ",
      details: "১৫+",
    },
    {
      title: "প্রেক্ষাপট",
      details:
        "পাঠ্যসূচি নির্বাচনের ক্ষেত্রে জামিয়াতুল লতিফসবসময় আকাবিরে ওলামায়ে দেওবন্দের অনুসারী। কদীম নেসাবকে সামনে রেখে তার যাবতীয় মাহাসিন ও সৌন্দর্যের পুরোটা ছাত্রদের সামনে তুলে ধরার প্রতি বদ্ধপরিকর। হ্যাঁ, জামিয়াতুল লতিফ অবশ্যই আধুনিকতাকে স্বাগত জানায়। তবে তা কখনও বাধহীন না। একজন ছাত্র যেন যাবতীয় ইলমি ইসতিদাদের পাশাপাশি আরবী ও বাংলা ভাষার প্রতি পুরোপুরি যত্নশীল থাকে, তা লক্ষ্য রাখা হয়।",
    },
  ];
  return (
    <div className="container mb-10">
      <PageTitle>প্রতিষ্ঠান পরিচিতি</PageTitle>
      <div>
        <ul>
          {aboutMadrasha.map((about, ind) => (
            <li key={ind} className="grid grid-cols-12 p-2 bg-white">
              <p className="md:col-span-2 col-span-3 font-semibold">
                {about.title}:
              </p>
              <p className="md:col-span-10 col-span-9">{about.details}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
