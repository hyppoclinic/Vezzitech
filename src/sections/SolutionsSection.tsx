import { motion } from 'motion/react';
import { translations, Language } from '../translations';
import { TrendingUp, Monitor, Cpu, Bot, ArrowRight, CheckCircle2, Sparkles, Layers } from 'lucide-react';

export const SolutionsSection = ({ lang }: { lang: Language }) => {
  const t = translations[lang].solutions;

  const unitIcons: Record<string, React.ReactNode> = {
    'trending-up': <TrendingUp className="w-5 h-5 text-[#16C7FF]" />,
    monitor: <Monitor className="w-5 h-5 text-[#168BFF]" />,
    cpu: <Cpu className="w-5 h-5 text-[#7047FF]" />,
    bot: <Bot className="w-5 h-5 text-[#16C7FF]" />
  };

  const scrollToDiagnostic = () => {
    const el = document.getElementById('diagnostico');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="solucoes" className="py-28 md:py-36 bg-[#070A12] relative overflow-hidden border-t border-white/[0.08]">
      {/* Background Radial Lights */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-[#7047FF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[300px] bg-[#16C7FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10162A] border border-white/[0.1] text-[11px] font-mono font-bold text-[#16C7FF] uppercase tracking-widest mb-4 shadow-sm"
          >
            <Layers className="w-3.5 h-3.5 text-[#16C7FF]" />
            <span>{t.kicker}</span>
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
            className="text-base sm:text-lg text-[#8992A5] leading-relaxed max-w-2xl font-sans"
          >
            {t.sub}
          </motion.p>
        </div>

        {/* 4 Unit Cards Bento Grid Composition */}
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-2 gap-4 md:gap-8 pb-6 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
          {t.units.map((unit, index) => {
            const isFeatured = index === 0 || index === 2;
            return (
              <motion.div
                key={unit.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`w-[85vw] sm:w-[380px] shrink-0 md:w-auto md:shrink snap-center p-8 rounded-[2rem] bg-[#0A0D14]/80 backdrop-blur-sm border transition-all duration-500 flex flex-col justify-between group hover:-translate-y-1 relative shadow-2xl ${
                  isFeatured
                    ? 'border-white/[0.08] hover:border-[#16C7FF]/30 bg-gradient-to-br from-[#0B0E1B] via-[#0A0D14] to-[#0B0E1B]'
                    : 'border-white/[0.05] hover:border-[#168BFF]/30'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-8 pb-5 border-b border-white/[0.05]">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-[1rem] bg-[#121826] border border-white/[0.08] flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 group-hover:bg-[#168BFF]/10 group-hover:border-[#168BFF]/20 transition-all duration-300">
                        {unitIcons[unit.icon]}
                      </div>
                      <span className="text-xs text-[#8992A5] tracking-[0.2em] font-semibold uppercase">
                        UNIDADE 0{index + 1}
                      </span>
                    </div>

                    <span className="text-[11px] font-bold tracking-wider px-3.5 py-1.5 rounded-full bg-[#168BFF]/10 text-[#168BFF] border border-[#168BFF]/20 uppercase">
                      {unit.tag}
                    </span>
                  </div>

                  <h3 className="text-3xl font-heading font-extrabold text-white mb-4 tracking-tight group-hover:text-[#168BFF] transition-colors">
                    {unit.title}
                  </h3>

                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#69B4FF] mb-6 bg-[#168BFF]/10 px-3.5 py-1.5 rounded-full border border-[#168BFF]/20">
                    <Sparkles className="w-4 h-4" />
                    <span>{unit.highlight}</span>
                  </div>

                  <p className="text-base text-[#8992A5] leading-relaxed mb-8 font-sans">
                    {unit.desc}
                  </p>

                  {/* Service Tags */}
                  <div className="pt-6 border-t border-white/[0.05] mb-8">
                    <div className="text-[11px] text-[#5C667B] uppercase tracking-widest mb-4 font-bold">
                      Principais Capacidades
                    </div>
                    <div className="flex flex-wrap gap-2.5">
                      {unit.services.map((service) => (
                        <span
                          key={service}
                          className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-full bg-white/[0.03] text-zinc-300 border border-white/[0.05] group-hover:border-white/[0.1] hover:bg-white/[0.06] transition-colors cursor-default"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#168BFF]" />
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={scrollToDiagnostic}
                  className="inline-flex items-center justify-between w-full p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.05] text-[13px] font-bold tracking-wide text-white group-hover:border-[#168BFF]/30 transition-all cursor-pointer"
                >
                  <span>{unit.cta}</span>
                  <ArrowRight className="w-4 h-4 text-[#168BFF] group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

