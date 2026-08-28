import { motion } from 'motion/react';
import { translations, Language } from '../translations';
import { TrendingUp, Monitor, Cpu, Bot, ArrowRight, CheckCircle2 } from 'lucide-react';

export const SolutionsSection = ({ lang }: { lang: Language }) => {
  const t = translations[lang].solutions;

  const unitIcons: Record<string, React.ReactNode> = {
    'trending-up': <TrendingUp className="w-6 h-6 text-[#16C7FF]" />,
    monitor: <Monitor className="w-6 h-6 text-[#168BFF]" />,
    cpu: <Cpu className="w-6 h-6 text-[#7047FF]" />,
    bot: <Bot className="w-6 h-6 text-[#16C7FF]" />
  };

  const scrollToDiagnostic = () => {
    const el = document.getElementById('diagnostico');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="solucoes" className="py-28 bg-[#070A12] relative overflow-hidden border-t border-white/[0.06]">
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

        {/* 4 Unit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.units.map((unit, index) => (
            <motion.div
              key={unit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-[#10162A] border border-white/[0.08] hover:border-[#168BFF]/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#070A12] border border-white/[0.1] flex items-center justify-center">
                    {unitIcons[unit.icon]}
                  </div>
                  <span className="text-xs font-mono font-extrabold tracking-widest px-3 py-1 rounded-full bg-performance-gradient text-white">
                    {unit.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-heading font-bold text-white mb-2">
                  {unit.title}
                </h3>

                <p className="text-xs font-mono text-[#16C7FF] mb-4 font-semibold">
                  {unit.highlight}
                </p>

                <p className="text-sm text-[#8992A5] leading-relaxed mb-6">
                  {unit.desc}
                </p>

                {/* Service Tags */}
                <div className="pt-4 border-t border-white/[0.08] mb-8">
                  <div className="text-[11px] font-mono text-[#8992A5] uppercase tracking-wider mb-3">
                    Capacidades & Tecnologias:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {unit.services.map((service) => (
                      <span
                        key={service}
                        className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-md bg-[#070A12] text-zinc-300 border border-white/[0.06]"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#168BFF]" />
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={scrollToDiagnostic}
                className="inline-flex items-center justify-between w-full p-4 rounded-xl bg-[#070A12] hover:bg-[#141C36] border border-white/[0.08] text-sm font-bold text-white group-hover:border-[#168BFF]/40 transition-all cursor-pointer"
              >
                <span>{unit.cta}</span>
                <ArrowRight className="w-4 h-4 text-[#16C7FF] group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
