import { getEngToBnNumber } from "@/utils/number-converter";

const FatwaCard = ({ fatwa }) => {
  return (
    <article className="bg-white p-5 mt-2 shadow">
      <header className="md:flex items-center gap-3">
        <h2 className="text-lg font-semibold">{fatwa.questionerId.name}</h2>
        <span className="hidden md:inline" aria-hidden="true">
          -
        </span>
        <address className="text-sm italic">
          {fatwa.questionerId.address}
        </address>
      </header>

      <section>
        <h3 className="text-xl">
          {getEngToBnNumber(fatwa.fatwa_no)} নং. প্রশ্ন
        </h3>
        <p>{fatwa.questionerId.question}</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mt-4">উত্তর:</h3>
        <p>{fatwa.answer}</p>
        <footer className="italic mt-3 text-sm">
          <p>{fatwa.references}</p>
        </footer>
      </section>
    </article>
  );
};

export default FatwaCard;
