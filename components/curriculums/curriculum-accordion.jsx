import AccordionItem from "./accordion-item";

const CurriculumAccordion = ({ items }) => {
  return (
    <div className="w-full mx-auto">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.className} content={item.content} />
      ))}
    </div>
  );
};

export default CurriculumAccordion;
