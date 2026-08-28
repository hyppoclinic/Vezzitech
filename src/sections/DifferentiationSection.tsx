import { motion } from 'motion/react';
import { translations, Language } from '../translations';
import { Check, X, Minus } from 'lucide-react';

export const DifferentiationSection = ({ lang }: { lang: Language }) => {
  const t = translations[lang].differentiation;

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

        {/* High-End Comparison Matrix Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-[#10162A] border border-white/[0.08] overflow-hidden shadow-2xl"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-white/[0.08] bg-[#070A12]">
                  <th className="py-5 px-6 text-xs font-mono uppercase text-[#8992A5] tracking-widest w-1/4">
                    {t.table.headers[0]}
                  </th>
                  <th className="py-5 px-6 text-xs font-mono uppercase text-zinc-400 tracking-widest w-1/4">
                    {t.table.headers[1]}
                  </th>
                  <th className="py-5 px-6 text-xs font-mono uppercase text-zinc-400 tracking-widest w-1/4">
                    {t.table.headers[2]}
                  </th>
                  <th className="py-5 px-6 text-xs font-mono font-extrabold uppercase text-[#16C7FF] tracking-widest w-1/4 bg-[#168BFF]/10">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#16C7FF]" />
                      {t.table.headers[3]}
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-sm font-sans">
                {t.table.rows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-5 px-6 font-semibold text-white">
                      {row.dimension}
                    </td>
                    <td className="py-5 px-6 text-[#8992A5] flex items-center gap-2">
                      <X className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{row.agency}</span>
                    </td>
                    <td className="py-5 px-6 text-[#8992A5] flex items-center gap-2">
                      <Minus className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{row.softwareHouse}</span>
                    </td>
                    <td className="py-5 px-6 font-bold text-white bg-[#168BFF]/5 border-l border-[#168BFF]/20 flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16C7FF] shrink-0" />
                      <span>{row.vezzitech}</span>
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
          className="mt-8 p-6 rounded-xl bg-[#10162A]/60 border border-white/[0.06] text-center"
        >
          <p className="text-sm font-mono text-zinc-300">
            "{t.quote}"
          </p>
        </motion.div>

      </div>
    </section>
  );
};
