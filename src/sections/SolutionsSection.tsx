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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.units.map((unit, index) => {
            const isFeatured = index === 0 || index === 2;
            return (
              <motion.div
                key={unit.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-8 rounded-[2rem] bg-[#0B0E1B]/80 backdrop-blur-sm border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative shadow-xl ${
                  isFeatured
                    ? 'border-white/[0.14] hover:border-[#16C7FF]/50 bg-gradient-to-br from-[#0B0E1B] via-[#0F1528] to-[#0B0E1B]'
                    : 'border-white/[0.08] hover:border-[#168BFF]/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.06]">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-[#10162A] border border-white/[0.12] flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform">
                        {unitIcons[unit.icon]}
                      </div>
                      <span className="text-[10px] font-mono text-[#8992A5] tracking-widest uppercase">
                        UNIDADE 0{index + 1}
                      </span>
                    </div>

                    <span className="text-xs font-mono font-extrabold tracking-widest px-3.5 py-1 rounded-full bg-performance-gradient text-white shadow-md">
                      {unit.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-heading font-bold text-white mb-2 tracking-tight group-hover:text-[#16C7FF] transition-colors">
                    {unit.title}
                  </h3>

                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#16C7FF] mb-4 font-bold bg-[#16C7FF]/10 px-2.5 py-1 rounded border border-[#16C7FF]/20">
                    <Sparkles className="w-3 h-3 text-[#16C7FF]" />
                    <span>{unit.highlight}</span>
                  </div>

                  <p className="text-sm text-[#8992A5] leading-relaxed mb-6 font-sans">
                    {unit.desc}
                  </p>

                  {/* Service Tags */}
                  <div className="pt-4 border-t border-white/[0.08] mb-8">
                    <div className="text-[10px] font-mono text-[#8992A5] uppercase tracking-wider mb-3 font-semibold">
                      ENTREGÁVEIS & CAPACIDADES:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {unit.services.map((service) => (
                        <span
                          key={service}
                          className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-[#070A12] text-zinc-200 border border-white/[0.08] group-hover:border-white/[0.15] transition-colors"
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
                  className="inline-flex items-center justify-between w-full p-4 rounded-xl bg-[#070A12] hover:bg-[#10162A] border border-white/[0.1] text-xs font-mono font-bold uppercase tracking-wider text-white group-hover:border-[#16C7FF]/40 transition-all cursor-pointer shadow-inner"
                >
                  <span>{unit.cta}</span>
                  <ArrowRight className="w-4 h-4 text-[#16C7FF] group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

