import { motion } from 'motion/react';
import { translations, Language } from '../translations';
import { ArrowUpRight, ChevronRight, Zap, TrendingUp, Cpu, Bot, BarChart3, ShieldCheck } from 'lucide-react';

export const Hero = ({ lang }: { lang: Language }) => {
  const t = translations[lang].hero;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const nodeIcons = [
    <Zap className="w-4 h-4 text-[#16C7FF]" key="strategy" />,
    <TrendingUp className="w-4 h-4 text-[#168BFF]" key="marketing" />,
    <Cpu className="w-4 h-4 text-[#7047FF]" key="technology" />,
    <Bot className="w-4 h-4 text-[#16C7FF]" key="automation" />,
    <BarChart3 className="w-4 h-4 text-[#168BFF]" key="data" />,
    <ShieldCheck className="w-4 h-4 text-[#7047FF]" key="growth" />
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-[#070A12]">
      {/* Background Radial Lights & Grid */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#16C7FF]/10 via-[#168BFF]/15 to-[#7047FF]/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy (Left Column) */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#10162A] border border-white/[0.08] text-[11px] font-mono font-bold text-[#16C7FF] uppercase tracking-widest mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-performance-gradient animate-pulse" />
              <span>{t.kicker}</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[34px] leading-[1.08] xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white tracking-tight mb-6"
            >
              <span className="block">{t.titleLine1} </span>
              <span className="block text-performance-gradient">
                {t.titleHighlight}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-[#8992A5] max-w-2xl font-sans leading-relaxed mb-8"
            >
              {t.subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10"
            >
              <button
                onClick={() => scrollToSection('diagnostico')}
                className="inline-flex h-13 items-center justify-center gap-2.5 rounded-full bg-performance-gradient hover:opacity-95 active:scale-95 px-8 text-sm font-extrabold text-white tracking-wider transition-all duration-200 shadow-performance-glow hover:scale-[1.02] cursor-pointer"
              >
                <span>{t.ctaPrimary}</span>
                <ArrowUpRight className="w-4.5 h-4.5" />
              </button>

              <button
                onClick={() => scrollToSection('solucoes')}
                className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-[#10162A] hover:bg-[#141C36] border border-white/[0.1] hover:border-white/[0.2] active:scale-95 px-7 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] cursor-pointer group"
              >
                <span>{t.ctaSecondary}</span>
              </button>
            </motion.div>

            {/* Microtext */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-block px-4 py-2 rounded-xl bg-[#10162A]/60 border border-white/[0.06] text-xs font-mono font-medium text-[#8992A5]"
            >
              <span className="text-[#16C7FF]">★</span> {t.microtext}
            </motion.div>
          </div>

          {/* Visual System Architecture Diagram (Right Column) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative p-6 sm:p-8 rounded-2xl bg-[#10162A]/90 border border-white/[0.08] shadow-2xl backdrop-blur-md"
            >
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#16C7FF]" />
                  <div className="w-3 h-3 rounded-full bg-[#168BFF]" />
                  <div className="w-3 h-3 rounded-full bg-[#7047FF]" />
                </div>
                <span className="text-[11px] font-mono uppercase text-[#8992A5] tracking-widest">
                  Vezzitech Engine v4.0
                </span>
              </div>

              {/* Node Flow Diagram */}
              <div className="space-y-3 relative">
                {t.systemNodes.map((node, index) => {
                  const isGrowth = index === t.systemNodes.length - 1;
                  return (
                    <motion.div
                      key={node.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
                      className={`group relative flex items-center justify-between p-3.5 rounded-xl transition-all border ${
                        isGrowth
                          ? 'bg-gradient-to-r from-[#16C7FF]/20 via-[#168BFF]/20 to-[#7047FF]/20 border-[#16C7FF]/40 shadow-[0_0_20px_rgba(22,199,255,0.2)]'
                          : 'bg-[#070A12]/80 hover:bg-[#0F162A] border-white/[0.06] hover:border-white/[0.15]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          isGrowth ? 'bg-performance-gradient text-white' : 'bg-[#10162A] border border-white/10'
                        }`}>
                          {nodeIcons[index]}
                        </div>
                        <div>
                          <div className={`text-xs font-mono font-extrabold tracking-wider ${
                            isGrowth ? 'text-white' : 'text-zinc-200'
                          }`}>
                            {node.label}
                          </div>
                          <div className="text-[11px] text-[#8992A5]">
                            {node.sub}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {isGrowth ? (
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#16C7FF]/20 text-[#16C7FF] border border-[#16C7FF]/30 uppercase">
                            Target
                          </span>
                        ) : (
                          <ChevronRight className="w-4 h-4 text-[#8992A5] group-hover:translate-x-0.5 transition-transform" />
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Connected Glow Line */}
              <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#8992A5]">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#16C7FF]" />
                  Integrated Growth System
                </span>
                <span className="text-[#16C7FF] font-bold">100% Synced</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

