import { motion } from 'motion/react';
import { translations, Language } from '../translations';
import { ArrowUpRight, TrendingUp, Instagram, User, CheckCircle2 } from 'lucide-react';

export const CasesSection = ({ lang }: { lang: Language }) => {
  const t = translations[lang].cases;

  const scrollToDiagnostic = () => {
    const el = document.getElementById('diagnostico');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const isSingleCase = t.items.length === 1;

  return (
    <section id="cases" className="py-24 md:py-32 bg-[#05070A] relative overflow-hidden border-t border-white/[0.06]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#168BFF]/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10162A] border border-white/[0.08] text-[11px] font-bold text-[#69B4FF] uppercase tracking-widest mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-[#00E599] animate-pulse" />
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
            className="text-base sm:text-lg text-[#8992A5] leading-relaxed max-w-2xl mx-auto"
          >
            {t.sub}
          </motion.p>
        </div>

        {/* Cases Display */}
        {isSingleCase ? (
          /* Single Featured Case Glass Card Layout */
          <div className="max-w-4xl mx-auto">
            {t.items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative rounded-3xl bg-gradient-to-b from-[#10172A]/80 via-[#0B101E]/85 to-[#060810]/95 backdrop-blur-2xl border border-white/[0.09] p-8 sm:p-12 overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_24px_48px_rgba(0,0,0,0.5)] group hover:border-[#168BFF]/40 transition-all duration-300"
              >
                {/* Specular Highlight */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

                {/* Ambient glow in background of card */}
                <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#168BFF]/15 rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#00E599]/10 rounded-full blur-[80px] pointer-events-none" />

                <div className="relative z-10 flex flex-col gap-8">
                  {/* Top Header info */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-[11px] font-bold text-[#69B4FF] bg-[#168BFF]/10 px-3.5 py-1.5 rounded-full border border-[#168BFF]/25 uppercase tracking-widest backdrop-blur-md">
                        {item.badge}
                      </span>
                      {item.clientContact && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-300 bg-white/[0.04] px-3 py-1.5 rounded-full border border-white/[0.08]">
                          <User className="w-3.5 h-3.5 text-[#168BFF]" />
                          <span>Cliente: {item.clientContact}</span>
                        </span>
                      )}
                    </div>

                    {item.instagram && (
                      <a
                        href={item.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30 border border-purple-500/30 text-white text-xs font-bold transition-all shadow-sm hover:scale-105"
                      >
                        <Instagram className="w-4 h-4 text-pink-400" />
                        <span>instagram.com/boinabrasagtba</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-pink-300" />
                      </a>
                    )}
                  </div>

                  {/* Main Title & Segment */}
                  <div>
                    <span className="text-xs font-bold text-[#8992A5] uppercase tracking-wider block mb-1">
                      {item.segment}
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
                      {item.client}
                    </h3>
                  </div>

                  {/* Desafio e Solução */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl bg-red-500/[0.04] border border-red-500/15 backdrop-blur-md">
                      <span className="text-[11px] uppercase text-red-400 font-bold block mb-2 tracking-wider">
                        Desafio
                      </span>
                      <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                        {item.problem}
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-[#168BFF]/[0.04] border border-[#168BFF]/20 backdrop-blur-md">
                      <span className="text-[11px] uppercase text-[#69B4FF] font-bold block mb-2 tracking-wider">
                        Solução Implementada
                      </span>
                      <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                        {item.solution}
                      </p>
                    </div>
                  </div>

                  {/* Highlight Metrics Box */}
                  <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#00E599]/10 via-[#168BFF]/10 to-transparent border border-[#00E599]/25 backdrop-blur-md">
                    <span className="text-xs text-[#00E599] uppercase tracking-wider block font-bold mb-4">
                      Resultados Alcançados
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {item.metrics.map((metric, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-black/30 border border-white/[0.06]">
                          <TrendingUp className="w-5 h-5 text-[#00E599] shrink-0 mt-0.5" />
                          <span className="text-sm font-bold text-white leading-snug">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech / Pillars Badges & Action */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 border-t border-white/[0.08]">
                    <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                      {item.tech.map((techItem) => (
                        <span key={techItem} className="text-xs font-medium bg-white/[0.04] text-zinc-300 px-3 py-1.5 rounded-full border border-white/[0.08]">
                          {techItem}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={scrollToDiagnostic}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-performance-gradient hover:opacity-95 text-xs font-extrabold text-white tracking-wider transition-all duration-200 shadow-performance-glow hover:scale-[1.02] cursor-pointer shrink-0"
                    >
                      <span>{t.ctaText}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Grid Layout for Multiple Cases */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-[2rem] bg-[#0B0E1B]/50 backdrop-blur-sm border border-white/[0.05] hover:border-[#168BFF]/30 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-bold text-[#168BFF] bg-[#168BFF]/10 px-3 py-1 rounded-full border border-[#168BFF]/20 uppercase tracking-widest">
                      {item.badge}
                    </span>
                    <span className="text-xs text-[#8992A5] font-medium tracking-wide">
                      {item.segment}
                    </span>
                  </div>

                  <h3 className="text-2xl font-heading font-bold text-white mb-2">
                    {item.client}
                  </h3>
                  {item.clientContact && (
                    <span className="text-xs text-zinc-400 block mb-6 font-medium">
                      Cliente: {item.clientContact}
                    </span>
                  )}

                  {/* Problema */}
                  <div className="mb-5">
                    <span className="text-[11px] uppercase text-red-400 font-bold block mb-1.5 tracking-wider">
                      Desafio
                    </span>
                    <p className="text-sm text-[#8992A5] leading-relaxed font-sans">
                      {item.problem}
                    </p>
                  </div>

                  {/* Solução */}
                  <div className="mb-8">
                    <span className="text-[11px] uppercase text-[#16C7FF] font-bold block mb-1.5 tracking-wider">
                      Solução Implementada
                    </span>
                    <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                      {item.solution}
                    </p>
                  </div>

                  {/* Metric Badges */}
                  <div className="p-5 rounded-[1.5rem] bg-[#070A12]/50 border border-white/[0.06] mb-6 space-y-3">
                    <span className="text-[10px] text-[#168BFF] uppercase tracking-wider block font-bold">
                      Resultados Alcançados
                    </span>
                    {item.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-sm font-bold text-white">
                        <TrendingUp className="w-4 h-4 text-[#00E599] shrink-0" />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>

                  {/* Instagram link if present */}
                  {item.instagram && (
                    <div className="mb-6">
                      <a
                        href={item.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs text-pink-400 hover:text-pink-300 font-bold transition-colors"
                      >
                        <Instagram className="w-4 h-4" />
                        <span>instagram.com/boinabrasagtba</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-1.5">
                      {item.tech.map((techItem) => (
                        <span key={techItem} className="text-[11px] font-medium bg-[#10162A] text-[#8992A5] px-2.5 py-1 rounded-full border border-white/[0.06]">
                          {techItem}
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
        )}

      </div>
    </section>
  );
};

