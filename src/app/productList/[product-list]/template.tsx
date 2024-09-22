import { DisplayText } from "~/app/_components/text/DisplayText";
import { CustomButton } from "~/components/custom/CustomButton";
import { api } from "~/trpc/server";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Checkbox } from "~/components/ui/checkbox";

type templateProps = {
  children: React.ReactNode;
};

export default async function Template(props: templateProps) {
  const data = await api.categories.categoriesList();

  return (
    <div className="pt-32 md:px-24 flex gap-x-4 divide-x-2 divide-green-950/50 h-[90vh]">
      <div className="flex flex-col gap-y-2 w-[20vw]">
        <DisplayText className="text-4xl text-green-950">Filter</DisplayText>
        <Accordion type={"multiple"}>
          <AccordionItem value="item-1">
            <AccordionTrigger>Categories</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-y-2">
              {data.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex gap-x-4 hover:bg-green-200 transition-colors duration-100 p-2 rounded-sm"
                  >
                    <Checkbox id={`item-${index}`} />
                    <label
                      htmlFor={`item-${index}`}
                      key={index}
                      className="w-full"
                    >
                      {item.name}
                    </label>
                  </div>
                );
              })}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div>{props.children}</div>
    </div>
  );
}
