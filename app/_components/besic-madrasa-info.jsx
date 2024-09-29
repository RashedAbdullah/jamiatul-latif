import AnimateNumbers from "./animate-numbers";

const BesicMadrashaInfo = () => {
  return (
    <div className="lg:flex justify-between">
      <div className="p-4">
        <h3 className="text-4xl font-NotoSerifBengali">
          <AnimateNumbers number={114} />+
        </h3>
        <h3>বর্তমান শিক্ষার্থী</h3>
      </div>
      <div className="lg:border-r-2 border-b-2"></div>
      <div className="p-4">
        <h3 className="text-4xl font-NotoSerifBengali">
          <AnimateNumbers number={12} />+
        </h3>
        <h3>অভিজ্ঞ শিক্ষকবৃন্দ</h3>
      </div>
      <div className="lg:border-r-2 border-b-2"></div>
      <div className="p-4">
        <h3 className="text-4xl font-NotoSerifBengali">
          <AnimateNumbers number={3} />+
        </h3>
        <h3>স্টাপ ও কর্মচারি সংখ্যা</h3>
      </div>
      <div className="lg:border-r-2 border-b-2"></div>
      <div className="p-4">
        <h3 className="text-4xl font-NotoSerifBengali">
          <AnimateNumbers number={3} />+
        </h3>
        <h3>প্রতিষ্ঠার পর থেকে অভিজ্ঞতার বছর</h3>
      </div>
    </div>
  );
};

export default BesicMadrashaInfo;