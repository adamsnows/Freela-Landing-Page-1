"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FAQSection() {
  return (
    <div className="bg-[#100d9d] text-white py-16">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-center text-2xl font-bold mb-8">
          PERGUNTAS FREQUENTES
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-full flex flex-col gap-y-3"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="bg-white/10 h-[80px] px-5">
              A inscrição para participação da Sala Business também é válida
              para o congresso?
            </AccordionTrigger>
            <AccordionContent className="bg-white/10 px-5 pb-2">
              Não, para participar do congresso nos dias 11 e 12, é necessário
              realizar outra inscrição para estas datas.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="bg-white/10 h-[80px] px-5">
              A inscrição é válida para os dois dias de congresso?
            </AccordionTrigger>
            <AccordionContent className="bg-white/10 px-5 pb-2">
              Sim, a inscrição dá direito à participação nos dois dias do
              evento.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="bg-white/10 h-[80px] px-5">
              Posso parcelar o valor da inscrição?
            </AccordionTrigger>
            <AccordionContent className="bg-white/10 px-5 pb-2">
              Sim, aceitamos parcelamento via cartão de crédito em até 3x sem
              juros.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="bg-white/10 h-[80px] px-5">
              Qual a política de cancelamento/reembolso?
            </AccordionTrigger>
            <AccordionContent className="bg-white/10 px-5 pb-2">
              Cancelamentos podem ser solicitados até 7 dias antes do evento com
              reembolso integral.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
