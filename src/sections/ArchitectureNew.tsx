import { motion } from 'motion/react';
import { translations, Language } from '../translations';
import { ArrowDown } from 'lucide-react';

export const ArchitectureNew = ({ lang }: { lang: Language }) => {
  const t = translations[lang].architecture;

  return (
    <section className="py-32 bg-[#030303] relative overflow-hidden border-t border-white/[0.05]" id="processo">
      <div className="absolute inset-0 bg-noise opacity-[0.015] pointer-events-none mix-blend-overlay"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium text-white mb-6 tracking-tight"
          >
            {t.heading}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 font-sans"
          >
            {t.sub}
          </motion.p>
        </div>

        <div className="relative">
          {/* Animated central line */}
          <div className="absolute left-[23px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-emerald-500/30 to-transparent md:-translate-x-1/2"></div>
          
          <div className="space-y-16">
            {t.steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`pl-16 md:pl-0 flex-1 md:w-1/2 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                  <h4 className="text-2xl font-medium text-white mb-3 tracking-tight">{step.title}</h4>
                  <p className="text-gray-400 text-base leading-relaxed">{step.desc}</p>
                </div>
                
                <div className="absolute left-0 md:relative md:left-auto w-12 h-12 rounded-full bg-[#0A0A0A] border border-emerald-500/30 flex items-center justify-center shrink-0 z-10 shadow-[0_0_30px_rgba(16,185,129,0.15)] group hover:border-emerald-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all">
                  <ArrowDown className="w-5 h-5 text-emerald-400 group-hover:translate-y-1 transition-transform" />
                </div>
                
                <div className="hidden md:block flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
