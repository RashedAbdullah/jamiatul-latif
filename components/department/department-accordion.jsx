import DepartmentAccordionItem from "./department-accordion-item";

const DepartmentAccordion = ({ items }) => {
  return (
    <div className="w-full mx-auto">
      {items.map((item, index) => (
        <DepartmentAccordionItem
          key={index}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
};

export default DepartmentAccordion;
