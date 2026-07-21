import { motion } from 'motion/react';
import { translations, Language } from '../translations';

export const TechStackNew = ({ lang }: { lang: Language }) => {
  const t = translations[lang].techStack;

  return (
    <section className="py-32 bg-[#030303] border-t border-white/[0.05] relative" id="tecnologia">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-heading font-medium text-white mb-16 tracking-tight"
        >
          {t.heading}
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-3">
          {t.modules.map((mod, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03, duration: 0.4 }}
              className="px-6 py-3 rounded-full bg-white/[0.03] border border-white/[0.08] text-gray-300 font-medium hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all cursor-default relative overflow-hidden"
            >
              <span className="relative z-10 text-sm">{mod}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
