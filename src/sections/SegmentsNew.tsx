import { motion, AnimatePresence } from 'motion/react';
import { translations, Language } from '../translations';
import { useState } from 'react';
import { Check } from 'lucide-react';

export const SegmentsNew = ({ lang }: { lang: Language }) => {
  const t = translations[lang].segments;
  const [activeSegment, setActiveSegment] = useState(0);

  return (
    <section className="py-32 bg-[#030303] border-t border-white/[0.05]" id="solucoes">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium text-white tracking-tight leading-[1.1]">
            {t.heading}
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="w-full lg:w-1/3 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
            {t.items.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveSegment(index)}
                className={`relative px-6 py-4 rounded-xl text-left transition-all duration-300 whitespace-nowrap lg:whitespace-normal font-medium ${
                  activeSegment === index 
                    ? 'text-white' 
                    : 'text-gray-500 hover:text-gray-300 hover:bg-white/[0.02]'
                }`}
              >
                {activeSegment === index && (
                  <motion.div 
                    layoutId="active-segment-bg" 
                    className="absolute inset-0 bg-white/[0.05] border border-white/[0.1] rounded-xl"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.title}</span>
              </button>
            ))}
          </div>

          <div className="w-full lg:w-2/3">
            <div className="bg-[#0A0A0A] border border-white/[0.08] rounded-2xl p-8 md:p-12 min-h-[400px] relative overflow-hidden flex flex-col justify-center">
              {/* Decorative Blur */}
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSegment}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  <h3 className="text-3xl font-heading font-medium text-white mb-8 tracking-tight">
                    {t.items[activeSegment].title}
                  </h3>
                  
                  <ul className="space-y-5">
                    {t.items[activeSegment].benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-4 text-gray-400">
                        <div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 border border-emerald-500/30">
                          <Check className="w-3 h-3 text-emerald-400" strokeWidth={3} />
                        </div>
                        <span className="leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
