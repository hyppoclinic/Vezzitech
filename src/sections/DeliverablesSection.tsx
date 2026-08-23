import { motion } from 'motion/react';
import { translations, Language } from '../translations';
import { Check } from 'lucide-react';

export const DeliverablesSection = ({ lang }: { lang: Language }) => {
  const t = translations[lang].deliverables;

  return (
    <section id="entregas" className="py-24 md:py-32 bg-[#0A0A0A] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#141414] border border-white/[0.08] text-[11px] font-mono font-bold text-[#FFD000] uppercase tracking-widest mb-4"
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

        {/* 5 Deliverables Grid (2 rows: 3 on top, 2 on bottom spanning nicely) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`p-8 rounded-2xl bg-[#0F0F0F] border border-white/[0.07] hover:border-[#FFD000]/30 transition-all duration-300 flex flex-col justify-between ${
                index >= 3 ? 'lg:col-span-1 md:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl sm:text-4xl font-mono font-black text-[#FFD000]/90">
                    {item.number}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#141414] border border-white/[0.08] flex items-center justify-center text-[#FFD000]">
                    <Check className="w-4 h-4" strokeWidth={2.5} />
                  </div>
                </div>

                <h3 className="text-xl font-heading font-bold text-white mb-3 tracking-tight">
                  {item.title}
                </h3>

                <p className="text-sm text-[#9A9A9A] leading-relaxed mb-6 font-sans">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] text-xs font-mono font-medium text-zinc-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFD000]" />
                <span>{item.details}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
