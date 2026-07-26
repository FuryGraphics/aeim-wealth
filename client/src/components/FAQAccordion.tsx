import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "./Reveal";

export interface FAQItem {
  q: string;
  a: string;
}

export default function FAQAccordion({
  items,
  title = "FAQ",
  subtitle,
  dark = false,
}: {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  dark?: boolean;
}) {
  return (
    <section className={dark ? "bg-[#0B1B2B]" : "bg-white"}>
      <div className="container py-16 lg:py-24">
        <Reveal className="text-center mb-12">
          <p className={`text-xs uppercase tracking-[0.2em] mb-3 ${dark ? "text-[#C9A84C]" : "text-[#C9A84C]"}`}>
            {title}
          </p>
          <h2 className={`font-serif text-3xl lg:text-4xl font-bold gold-underline-center inline-block ${dark ? "text-white" : "text-[#0B1B2B]"}`}>
            Common Questions
          </h2>
          {subtitle && (
            <p className={`mt-6 max-w-2xl mx-auto text-base ${dark ? "text-white/70" : "text-[#5A6A7A]"}`}>
              {subtitle}
            </p>
          )}
        </Reveal>

        <Reveal className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {items.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className={`rounded-lg border px-6 ${
                  dark
                    ? "border-[#C9A84C]/20 bg-[#112438]"
                    : "border-gray-200 bg-[#F5F5F0]"
                }`}
              >
                <AccordionTrigger className={`text-left font-serif text-lg font-semibold hover:no-underline ${dark ? "text-white" : "text-[#0B1B2B]"}`}>
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className={`text-base leading-relaxed ${dark ? "text-white/70" : "text-[#5A6A7A]"}`}>
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
