import { motion } from 'motion/react';
import { translations, Language } from '../translations';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export const FAQNew = ({ lang }: { lang: Language }) => {
  const t = translations[lang].faq;

  return (
    <section className="py-32 bg-[#030303] border-t border-white/[0.05] relative">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-heading font-semibold text-white mb-16 text-center tracking-tight">
          {t.heading}
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Accordion className="w-full">
            {t.items.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/[0.08] px-2">
                <AccordionTrigger className="text-left text-lg font-medium text-gray-200 hover:text-emerald-400 hover:no-underline transition-colors py-6">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 text-base leading-relaxed pb-6 pr-8">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
