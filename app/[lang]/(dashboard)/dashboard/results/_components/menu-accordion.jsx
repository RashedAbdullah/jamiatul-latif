import { getClasses } from "@/actions/classes";
import { getStudentsByYear } from "@/actions/students";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const MenuAccordion = async ({ menu, lang = "bn" }) => {
  const classes = await getClasses();
  const studentsByYear = await getStudentsByYear()

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>{menu.dash}</AccordionTrigger>
        <AccordionContent>
          <ul>
            <li>
              {/* {results.map((className) => (
                <Link
                  className="grid grid-cols-12 hover:bg-slate-800 transition duration-300 p-2"
                  key={className.className}
                  href={`/${lang}/dashboard/results/${className.id}`}
                >
                  <div className="col-span-8">{className.className}</div>
                  <div className="col-span-2">
                    <MoveRight />
                  </div>
                </Link>
              ))} */}
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default MenuAccordion;
