"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { faqData } from "@/data/faq-data";
import { useState } from "react";

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <div className="bg-[#100d9d] text-white py-16">
      <div className="container mx-auto max-w-[834px]">
        <h2 className="text-center text-2xl font-bold mb-8">
          PERGUNTAS FREQUENTES
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-full flex flex-col gap-y-3"
          onValueChange={(value) => setOpenItem(value)}
        >
          {faqData.map(({ question, answer, value }) => (
            <AccordionItem
              key={value}
              value={value}
              className={`border-b h-[80px] bg-white/10 transition-all duration-300 ${
                openItem === value ? "bg-white/15 h-[100px]" : ""
              }`}
            >
              <AccordionTrigger
                isOpen={openItem === value}
                onToggle={() => setOpenItem(openItem === value ? null : value)}
                className={` px-5 flex justify-between items-center `}
              >
                {question}
              </AccordionTrigger>
              <AccordionContent className="px-5">{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
