import { motion } from 'motion/react';
import { translations, Language } from '../translations';
import { Briefcase, Zap, Cpu, LineChart } from 'lucide-react';

export const MindsetSection = ({ lang }: { lang: Language }) => {
  const t = translations[lang].mindset;

  const cardIcons: Record<string, React.ReactNode> = {
    briefcase: <Briefcase className="w-6 h-6 text-[#16C7FF]" />,
    zap: <Zap className="w-6 h-6 text-[#168BFF]" />,
    cpu: <Cpu className="w-6 h-6 text-[#7047FF]" />,
    'line-chart': <LineChart className="w-6 h-6 text-[#16C7FF]" />
  };

  return (
    <section className="py-28 bg-[#070A12] relative overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3.5 py-1.5 rounded-full bg-[#10162A] border border-white/[0.08] text-[11px] font-mono font-bold text-[#16C7FF] uppercase tracking-widest mb-4"
          >
            {t.kicker}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight mb-4"
          >
            {t.heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#8992A5] leading-relaxed"
          >
            {t.sub}
          </motion.p>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="p-7 rounded-2xl bg-[#10162A] border border-white/[0.08] hover:border-[#168BFF]/40 transition-all duration-300 group hover:-translate-y-1 relative"
            >
              <div className="w-12 h-12 rounded-xl bg-[#070A12] border border-white/[0.1] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {cardIcons[card.icon]}
              </div>

              <h3 className="text-xl font-heading font-bold text-white mb-3">
                {card.title}
              </h3>

              <p className="text-sm text-[#8992A5] leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
