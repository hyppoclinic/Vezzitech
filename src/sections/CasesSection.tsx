import { motion } from 'motion/react';
import { translations, Language } from '../translations';
import { ArrowUpRight, TrendingUp, Cpu, ShieldCheck } from 'lucide-react';

export const CasesSection = ({ lang }: { lang: Language }) => {
  const t = translations[lang].cases;

  const scrollToDiagnostic = () => {
    const el = document.getElementById('diagnostico');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="cases" className="py-28 bg-[#070A12] relative overflow-hidden border-t border-white/[0.06]">
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

        {/* Cases Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {t.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-[#10162A] border border-white/[0.08] hover:border-[#168BFF]/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#16C7FF] bg-[#16C7FF]/10 px-2.5 py-1 rounded-md border border-[#16C7FF]/20">
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono text-[#8992A5]">
                    {item.segment}
                  </span>
                </div>

                <h3 className="text-2xl font-heading font-bold text-white mb-4">
                  {item.client}
                </h3>

                {/* Problema */}
                <div className="mb-4">
                  <span className="text-xs font-mono uppercase text-red-400/90 font-bold block mb-1">
                    [ Gargalo ]
                  </span>
                  <p className="text-xs text-[#8992A5] leading-relaxed">
                    {item.problem}
                  </p>
                </div>

                {/* Solução */}
                <div className="mb-6">
                  <span className="text-xs font-mono uppercase text-[#16C7FF] font-bold block mb-1">
                    [ Engenharia Vezzitech ]
                  </span>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {item.solution}
                  </p>
                </div>

                {/* Metric Badges */}
                <div className="p-4 rounded-xl bg-[#070A12] border border-white/[0.06] mb-6 space-y-2">
                  <span className="text-[10px] font-mono text-[#168BFF] uppercase tracking-wider block font-bold">
                    Resultados Comprovados:
                  </span>
                  {item.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-bold text-white font-mono">
                      <TrendingUp className="w-3.5 h-3.5 text-[#16C7FF] shrink-0" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tech.map((t) => (
                      <span key={t} className="text-[10px] font-mono bg-[#10162A] text-[#8992A5] px-2 py-0.5 rounded border border-white/[0.06]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={scrollToDiagnostic}
                className="inline-flex items-center justify-between w-full p-3.5 rounded-xl bg-[#070A12] hover:bg-[#141C36] border border-white/[0.08] text-xs font-bold text-white group-hover:border-[#168BFF]/40 transition-all cursor-pointer"
              >
                <span>{t.ctaText}</span>
                <ArrowUpRight className="w-4 h-4 text-[#16C7FF]" />
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
