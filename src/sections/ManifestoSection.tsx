import { motion } from 'motion/react';
import { translations, Language } from '../translations';

export const ManifestoSection = ({ lang }: { lang: Language }) => {
  const t = translations[lang].manifesto;

  return (
    <section id="sobre" className="py-32 bg-[#070A12] relative overflow-hidden border-t border-white/[0.06]">
      {/* Subtle Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#168BFF]/5 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block px-3.5 py-1.5 rounded-full bg-[#10162A] border border-white/[0.08] text-[11px] font-mono font-bold text-[#7047FF] uppercase tracking-widest mb-12"
        >
          MANIFESTO VEZZITECH
        </motion.div>

        <div className="space-y-6 sm:space-y-8">
          {t.lines.map((line, idx) => (
            <motion.h2
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight ${
                line.highlight
                  ? 'text-performance-gradient text-3xl sm:text-5xl md:text-6xl lg:text-7xl pt-4'
                  : 'text-white/80'
              }`}
            >
              {line.text}
            </motion.h2>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 pt-12 border-t border-white/[0.08] flex flex-col items-center justify-center gap-3"
        >
          <span className="text-xl sm:text-2xl font-heading font-black tracking-widest text-white">
            {t.brandText}
          </span>
          <p className="text-xs font-mono text-[#8992A5]">
            {t.sub}
          </p>
        </motion.div>

      </div>
    </section>
  );
};
