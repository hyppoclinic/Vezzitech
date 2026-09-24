import { motion } from 'motion/react';
import { translations, Language } from '../translations';
import { ArrowUpRight, TrendingUp, Instagram, User, CheckCircle2 } from 'lucide-react';

export const CasesSection = ({ lang }: { lang: Language }) => {
  const t = translations[lang].cases;

  if (!t.items || t.items.length === 0) {
    return null;
  }

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
          /* Single Featured Editorial Case Study Card */
          <div className="max-w-5xl mx-auto">
            {t.items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative rounded-[2.5rem] bg-gradient-to-b from-[#10172A]/80 via-[#0B101E]/85 to-[#060810]/95 backdrop-blur-2xl border border-white/[0.09] p-8 sm:p-12 overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_24px_60px_rgba(0,0,0,0.5)] group hover:border-[#168BFF]/35 transition-all duration-300"
              >
                {/* Frosted Top Specular Highlight */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

                {/* Ambient glow in background of card */}
                <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#168BFF]/12 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#00E599]/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative z-10 flex flex-col gap-8">
                  
                  {/* Top Bar: Badges & Social verification */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-[11px] font-bold text-[#69B4FF] bg-[#168BFF]/10 px-3.5 py-1.5 rounded-full border border-[#168BFF]/25 uppercase tracking-widest backdrop-blur-md">
                        {item.badge}
                      </span>
                      {item.clientContact && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-300 bg-white/[0.04] px-3.5 py-1.5 rounded-full border border-white/[0.08]">
                          <User className="w-3.5 h-3.5 text-[#168BFF]" />
                          <span>Cliente: <strong className="text-white">{item.clientContact}</strong></span>
                        </span>
                      )}
                    </div>

                    {item.instagram && (
                      <a
                        href={item.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/15 via-pink-600/15 to-rose-600/15 hover:from-purple-600/25 hover:to-pink-600/25 border border-pink-500/30 text-white text-xs font-bold transition-all shadow-sm hover:scale-105"
                      >
                        <Instagram className="w-4 h-4 text-pink-400" />
                        <span>{item.instagram.replace(/^https?:\/\/(www\.)?/, '')}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-pink-300" />
                      </a>
                    )}
                  </div>

                  {/* Editorial Grid (2 Columns: Story vs Impact Callout) */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
                    
                    {/* Left Column (7/12): Narrative Story */}
                    <div className="lg:col-span-7 flex flex-col justify-between gap-6">
                      <div>
                        <span className="text-xs font-bold text-[#8992A5] uppercase tracking-wider block mb-2">
                          {item.segment}
                        </span>
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight mb-6">
                          {item.client}
                        </h3>

                        <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans mb-8">
                          {item.narrative || item.solution}
                        </p>

                        {/* Implementation Checklist */}
                        <div className="space-y-3 mb-8">
                          <span className="text-xs font-bold text-[#8992A5] uppercase tracking-wider block">
                            Ações Estratégicas:
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            <div className="flex items-center gap-2.5 text-xs text-zinc-200 bg-white/[0.02] border border-white/[0.06] p-3 rounded-xl">
                              <CheckCircle2 className="w-4 h-4 text-[#00E599] shrink-0" />
                              <span>Tráfego Geolocalizado (Meta Ads)</span>
                            </div>
                            <div className="flex items-center gap-2.5 text-xs text-zinc-200 bg-white/[0.02] border border-white/[0.06] p-3 rounded-xl">
                              <CheckCircle2 className="w-4 h-4 text-[#00E599] shrink-0" />
                              <span>Vitrine Digital no Instagram</span>
                            </div>
                            <div className="flex items-center gap-2.5 text-xs text-zinc-200 bg-white/[0.02] border border-white/[0.06] p-3 rounded-xl sm:col-span-2">
                              <CheckCircle2 className="w-4 h-4 text-[#00E599] shrink-0" />
                              <span>Atendimento & Encomendas via WhatsApp</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {item.tech.map((techItem) => (
                          <span key={techItem} className="text-[11px] font-medium bg-white/[0.03] text-zinc-400 px-3 py-1 rounded-full border border-white/[0.06]">
                            {techItem}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right Column (5/12): Hero Impact Spotlight Card */}
                    <div className="lg:col-span-5 flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-[#00E599]/10 via-[#168BFF]/10 to-[#0A0E1A]/80 border border-[#00E599]/30 relative overflow-hidden backdrop-blur-xl shadow-2xl">
                      
                      {/* Ambient spotlight glow inside stat card */}
                      <div className="absolute top-0 right-0 w-48 h-48 bg-[#00E599]/15 rounded-full blur-[60px] pointer-events-none" />

                      <div className="relative z-10">
                        <span className="text-[11px] font-bold text-[#00E599] uppercase tracking-widest block mb-4">
                          Resultado de Performance
                        </span>

                        <div className="mb-6">
                          <div className="text-5xl sm:text-6xl lg:text-7xl font-heading font-black text-[#00E599] tracking-tight leading-none mb-3">
                            +30%
                          </div>
                          <p className="text-sm font-bold text-white leading-snug">
                            Crescimento direto nas vendas de assados ao final de semana.
                          </p>
                        </div>

                        <div className="space-y-3 pt-6 border-t border-white/[0.1] mb-8">
                          {item.metrics.slice(1).map((metric, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 text-xs font-semibold text-zinc-300">
                              <TrendingUp className="w-4 h-4 text-[#00E599] shrink-0 mt-0.5" />
                              <span>{metric}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA inside spotlight card */}
                      <button
                        onClick={scrollToDiagnostic}
                        className="relative z-10 w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-performance-gradient hover:opacity-95 text-xs font-extrabold text-white tracking-wider transition-all duration-200 shadow-performance-glow hover:scale-[1.02] cursor-pointer"
                      >
                        <span>{t.ctaText}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>

                    </div>

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
                        <span>{item.instagram.replace(/^https?:\/\/(www\.)?/, '')}</span>
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

