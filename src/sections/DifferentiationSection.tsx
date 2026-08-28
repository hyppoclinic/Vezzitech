import { motion } from 'motion/react';
import { translations, Language } from '../translations';
import { Check, X, Minus, Terminal, Award } from 'lucide-react';

export const DifferentiationSection = ({ lang }: { lang: Language }) => {
  const t = translations[lang].differentiation;

  return (
    <section className="py-28 md:py-36 bg-[#070A12] relative overflow-hidden border-t border-white/[0.08] bg-laser-lines">
      {/* Background Radial Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#168BFF]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10162A] border border-white/[0.1] text-[11px] font-mono font-bold text-[#16C7FF] uppercase tracking-widest mb-4 shadow-sm"
          >
            <Award className="w-3.5 h-3.5 text-[#16C7FF]" />
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

        {/* High-End Terminal Benchmark Matrix Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-[#0B0E1B] border border-white/[0.12] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.7)] corner-crosshairs relative"
        >
          {/* Terminal Bar */}
          <div className="px-6 py-3 bg-[#070A12] border-b border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[11px] font-mono text-zinc-400 pl-2 font-bold flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#16C7FF]" />
                BENCHMARK_MATRIX // MARKET_COMPARE
              </span>
            </div>
            <span className="text-[10px] font-mono text-[#16C7FF] font-bold bg-[#16C7FF]/10 px-2 py-0.5 rounded border border-[#16C7FF]/20 uppercase">
              MATRIZ DE DIFERENCIAÇÃO
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-white/[0.08] bg-[#070A12]/90">
                  <th className="py-5 px-6 text-xs font-mono uppercase text-[#8992A5] tracking-widest w-1/4">
                    {t.table.headers[0]}
                  </th>
                  <th className="py-5 px-6 text-xs font-mono uppercase text-zinc-400 tracking-widest w-1/4">
                    {t.table.headers[1]}
                  </th>
                  <th className="py-5 px-6 text-xs font-mono uppercase text-zinc-400 tracking-widest w-1/4">
                    {t.table.headers[2]}
                  </th>
                  <th className="py-5 px-6 text-xs font-mono font-extrabold uppercase text-[#16C7FF] tracking-widest w-1/4 bg-[#168BFF]/15 border-l border-[#16C7FF]/30">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#16C7FF] animate-pulse" />
                      {t.table.headers[3]}
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-sm font-sans">
                {t.table.rows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="py-5 px-6 font-semibold text-white group-hover:text-[#16C7FF] transition-colors">
                      {row.dimension}
                    </td>
                    <td className="py-5 px-6 text-[#8992A5]">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-red-400/90 shrink-0" />
                        <span>{row.agency}</span>
                      </div>
                    </td>
                    <td className="py-5 px-6 text-[#8992A5]">
                      <div className="flex items-center gap-2">
                        <Minus className="w-4 h-4 text-amber-400/90 shrink-0" />
                        <span>{row.softwareHouse}</span>
                      </div>
                    </td>
                    <td className="py-5 px-6 font-bold text-white bg-[#168BFF]/10 border-l border-[#16C7FF]/30">
                      <div className="flex items-center gap-2">
                        <Check className="w-4.5 h-4.5 text-[#16C7FF] shrink-0 stroke-[3]" />
                        <span className="text-white">{row.vezzitech}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Quote Footer Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 p-6 rounded-2xl bg-[#0B0E1B] border border-white/[0.08] text-center shadow-lg relative"
        >
          <p className="text-sm font-mono text-zinc-300 leading-relaxed italic">
            "{t.quote}"
          </p>
        </motion.div>

      </div>
    </section>
  );
};

