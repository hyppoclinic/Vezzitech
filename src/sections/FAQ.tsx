import { HelpCircle } from 'lucide-react';
import { translations, Language } from '../translations';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

interface FAQProps {
  lang: Language;
}

export const FAQ = ({ lang }: FAQProps) => {
  const t = translations[lang];

  return (
    <section id="faq" aria-label="Dúvidas Frequentes (FAQ)" className="py-24 px-6 max-w-4xl mx-auto border-t border-white/5 relative">
      {/* FAQ Schema for AEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": t.faqSection.items.map(item => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.a
            }
          }))
        })}
      </script>

      <div className="flex flex-col items-center justify-center text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.15] tracking-tight text-white font-heading">
                {t.faqSection.heading}
        </h2>
      </div>

      <Accordion defaultValue={["faq-0"]} className="w-full space-y-4">
        {t.faqSection.items.map((faq, index) => (
          <AccordionItem key={index} value={`faq-${index}`} className="bg-glass border border-white/10 rounded-2xl px-6 py-2 border-none">
            <AccordionTrigger className="hover:no-underline text-white font-semibold text-base md:text-lg font-heading text-left hover:text-[#33BC65] transition-colors py-4">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-gray-400 text-sm md:text-base leading-relaxed pb-6 pt-2">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
