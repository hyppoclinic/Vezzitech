import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { translations, Language } from '../translations';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export const FAQSection = ({ lang }: { lang: Language }) => {
  const t = translations[lang].faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#0A0A0A] relative border-t border-white/[0.06]">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#141414] border border-white/[0.08] text-[11px] font-mono font-bold text-[#38BDF8] uppercase tracking-widest mb-4"
          >
            {t.kicker}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white tracking-tight mb-4"
          >
            {t.heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#9A9A9A] font-sans leading-relaxed"
          >
            {t.sub}
          </motion.p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {t.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'bg-[#0F0F0F] border-[#0066FF]/40 shadow-lg' 
                    : 'bg-[#0F0F0F]/60 border-white/[0.07] hover:border-white/[0.15]'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-heading font-bold text-white tracking-tight">
                    {item.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-[#0066FF] text-white' : 'bg-[#141414] border border-white/[0.08] text-[#9A9A9A]'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-7 sm:px-7 sm:pb-8 pt-0 border-t border-white/[0.04]">
                        <p className="text-sm sm:text-base text-[#9A9A9A] leading-relaxed font-sans mt-4">
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
