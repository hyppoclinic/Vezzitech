import { Target, Zap, TrendingUp, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { translations, Language } from '../translations';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

interface ValuePropositionProps {
  lang: Language;
}

export const ValueProposition = ({ lang }: ValuePropositionProps) => {
  const t = translations[lang];

  const icons = [
    <ShieldCheck key="1" className="w-5 h-5 text-[#33BC65]" />, 
    <TrendingUp key="2" className="w-5 h-5 text-[#12DCEF]" />, 
    <Zap key="3" className="w-5 h-5 text-[#33BC65]" />, 
    <Target key="4" className="w-5 h-5 text-[#12DCEF]" />, 
  ];

  return (
    <section id="diferenciais" aria-label="Por que a Vezzitech" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-emerald-600/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            <div className="max-w-2xl">
                <div className="text-[#33BC65] font-mono text-xs mb-3 font-semibold tracking-widest uppercase">{t.valueProp.tag}</div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.15] tracking-tight text-white font-heading mb-6">
                    {t.valueProp.heading}
                </h2>
            </div>

            <div className="w-full">
                <Accordion className="w-full space-y-4">
                  {t.valueProp.items.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border border-white/10 bg-white/[0.02] rounded-2xl px-6 py-2 overflow-hidden data-[state=open]:bg-white/[0.04] transition-colors">
                      <AccordionTrigger className="hover:no-underline text-white text-lg md:text-xl font-heading tracking-tight hover:text-[#33BC65] transition-colors py-4">
                        <div className="flex items-center gap-4 text-left">
                          <div className="w-10 h-10 flex shrink-0 items-center justify-center rounded-xl bg-[#33BC65]/10 border border-[#33BC65]/10 shadow-md">
                              {icons[index]}
                          </div>
                          <span>{item.title}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-400 text-base leading-relaxed pl-14 pb-6 pt-2">
                        {item.desc}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
            </div>
        </div>
    </section>
  );
};
