import { motion } from 'motion/react';
import { translations, Language } from '../translations';

export const MetricsNew = ({ lang }: { lang: Language }) => {
  const t = translations[lang].metrics;

  return (
    <section className="py-24 bg-[#030303] relative overflow-hidden border-t border-white/[0.05]">
      <div className="absolute inset-0 bg-noise opacity-[0.015] pointer-events-none mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-sm font-medium uppercase tracking-widest text-center text-emerald-500 mb-16">
          {t.heading}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex flex-col items-center text-center relative overflow-hidden group hover:bg-white/[0.04] transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/0 to-emerald-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-5xl font-heading font-semibold text-white tracking-tighter mb-2 text-gradient pr-1">
                {item.value}
              </div>
              <div className="text-gray-400 font-medium text-sm">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
