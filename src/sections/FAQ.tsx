import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { translations, Language } from '../translations';

interface FAQProps {
  lang: Language;
}

export const FAQ = ({ lang }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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
        <div className="text-[#33BC65] font-mono text-xs mb-3 font-semibold uppercase tracking-widest flex items-center gap-1.5 justify-center">
            <HelpCircle className="w-4 h-4 animate-pulse" />
            <span>METODOLOGIA ATIVA & SEGURANÇA</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.15] tracking-tight text-white font-heading">
                {lang === 'pt' ? (
                  <>
                    Esclareça suas dúvidas
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-100 to-emerald-200 mt-1 font-normal">
                      sobre o nosso processo consultivo.
                    </span>
                  </>
                ) : (
                  <>
                    Answering enterprise FAQs
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-100 to-emerald-200 mt-1 font-normal">
                      about our technical processes.
                    </span>
                  </>
                )}
        </h2>
      </div>

      <div className="space-y-4">
        {t.faqSection.items.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className="bg-glass border-glass rounded-2xl overflow-hidden transition-all duration-300">
              <button 
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-white/[0.02] transition">
                <span id={`faq-question-${index}`} className="text-white font-semibold text-base md:text-lg font-heading">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-[#33BC65] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div 
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-56 border-t border-white/5 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <p className="p-6 text-gray-400 text-sm md:text-base leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
