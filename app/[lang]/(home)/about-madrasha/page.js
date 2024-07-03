import PageTitle from "@/components/page-title";

const AboutPage = () => {
  return (
    <div className="container mb-10">
      <PageTitle>প্রতিষ্ঠান পরিচিতি</PageTitle>
      <div>
        <ul className="flex  flex-col gap-2">
          <li className="grid grid-cols-12 p-2 bg-white">
            <p className="col-span-1 font-semibold">নাম:</p>
            <p className="col-span-10">জামিয়াতুল লতিফ</p>
          </li>
          <li className="grid grid-cols-12 p-2 bg-white">
            <p className="col-span-1 font-semibold">অবস্থান:</p>
            <p className="col-span-10">
              নারায়নগঞ্জ জেলার রূপগঞ্জ উপজেলার বরাব বাজারের পশ্চিম পাশে অবস্থিত
            </p>
          </li>
          <li className="grid grid-cols-12 p-2 bg-white">
            <p className="col-span-1 font-semibold">প্রতিষ্ঠাতা:</p>
            <p className="col-span-10">মুফতী ইব্রাহীম নোমানী হাফি:</p>
          </li>
          <li className="grid grid-cols-12 p-2 bg-white">
            <p className="col-span-1 font-semibold">পরিচালক:</p>
            <p className="col-span-10">মুফতী ইব্রাহীম নোমানী হাফি:</p>
          </li>
          <li className="grid grid-cols-12 p-2 bg-white">
            <p className="col-span-1 font-semibold">ছাত্র:</p>
            <p className="col-span-10">১২০ প্রায়</p>
          </li>
          <li className="grid grid-cols-12 p-2 bg-white">
            <p className="col-span-1 font-semibold">শিক্ষক ও কর্মচারী:</p>
            <p className="col-span-10">১৫ প্রায়</p>
          </li>
          <li className="grid grid-cols-12 p-2 bg-white">
            <p className="col-span-1 font-semibold">প্রেক্ষাপট:</p>
            <p className="col-span-10">
              পাঠ্যসূচি নির্বাচনের ক্ষেত্রে <strong>জামিয়াতুল লতিফ</strong>{" "}
              সবসময় আকাবিরে ওলামায়ে দেওবন্দের অনুসারী। কদীম নেসাবকে সামনে রেখে
              তার যাবতীয় মাহাসিন ও সৌন্দর্যের পুরোটা ছাত্রদের সামনে তুলে ধরার
              প্রতি বদ্ধপরিকর। হ্যাঁ, জামিয়াতুল লতিফ অবশ্যই আধুনিকতাকে স্বাগত
              জানায়। তবে তা কখনও বাধহীন না। একজন ছাত্র যেন যাবতীয় ইলমি ইসতিদাদের
              পাশাপাশি আরবী ও বাংলা ভাষার প্রতি পুরোপুরি যত্নশীল থাকে, তা লক্ষ
              রাখা হয়।
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
