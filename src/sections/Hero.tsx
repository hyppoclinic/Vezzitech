import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { translations, Language } from '../translations';
import { ArrowUpRight, ChevronRight, Zap, TrendingUp, Cpu, Bot, BarChart3, ShieldCheck, Activity, Terminal, Sparkles, Layers } from 'lucide-react';

export const Hero = ({ lang }: { lang: Language }) => {
  const t = translations[lang].hero;
  const [activeTab, setActiveTab] = useState<'architecture' | 'telemetry'>('architecture');
  const [selectedNode, setSelectedNode] = useState<number | null>(null);

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

  const telemetryData = [
    { label: "ROAS Integrado", value: "4.8x", delta: "+182%", status: "OPTIMIZED", color: "text-[#16C7FF]" },
    { label: "LTV / CAC Ratio", value: "5.2:1", delta: "+44%", status: "HEALTHY", color: "text-[#168BFF]" },
    { label: "Lead-to-SQL Sync", value: "< 1.2s", delta: "Real-time", status: "LIVE", color: "text-[#7047FF]" },
    { label: "Conversion Latency", value: "18ms", delta: "-65%", status: "ULTRA FAST", color: "text-[#16C7FF]" }
  ];

  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden bg-[#070A12] bg-laser-lines">
      {/* Dynamic Radial Ambient Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-r from-[#16C7FF]/12 via-[#168BFF]/18 to-[#7047FF]/18 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      {/* Decorative Blueprint Corner Lines */}
      <div className="absolute top-24 left-10 text-[10px] font-mono text-[#8992A5]/30 hidden xl:block select-none pointer-events-none">
        [SYS_ORIGIN: 23°25'S 51°55'W] // VEZZITECH_ENGINE_V4
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Copy (Left Column) */}
          <div className="lg:col-span-7">
            {/* Kicker Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#10162A] border border-white/[0.12] text-[11px] font-mono font-bold text-[#16C7FF] uppercase tracking-widest mb-6 shadow-lg shadow-[#16C7FF]/5 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-performance-gradient animate-pulse" />
              <span>{t.kicker}</span>
              <span className="text-[#8992A5]/40">|</span>
              <span className="text-white/60 text-[10px]">VERIFIED ARCHITECTURE</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[36px] leading-[1.06] xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white tracking-tight mb-6"
            >
              <span className="block">{t.titleLine1} </span>
              <span className="block text-performance-gradient drop-shadow-[0_0_35px_rgba(22,199,255,0.25)]">
                {t.titleHighlight}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-[#8992A5] max-w-2xl font-sans leading-relaxed mb-9"
            >
              {t.subtitle}
            </motion.p>

            {/* Primary & Secondary CTAs */}
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
                className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-[#10162A] hover:bg-[#141C36] border border-white/[0.12] hover:border-white/[0.25] active:scale-95 px-7 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] cursor-pointer group shadow-sm"
              >
                <Layers className="w-4 h-4 text-[#168BFF] group-hover:rotate-12 transition-transform" />
                <span>{t.ctaSecondary}</span>
              </button>
            </motion.div>

            {/* Microtext badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#10162A]/70 border border-white/[0.08] text-xs font-mono font-medium text-[#8992A5]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#16C7FF]" />
              <span>{t.microtext}</span>
            </motion.div>
          </div>

          {/* Interactive Growth Command Console (Right Column) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative p-6 sm:p-7 rounded-2xl bg-[#0B0E1B]/95 border border-white/[0.12] shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl corner-crosshairs"
            >
              {/* Console Header & Mode Selector */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] font-mono text-zinc-400 pl-2 font-bold flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#16C7FF]" />
                    VEZZITECH OS
                  </span>
                </div>

                {/* Tab Controls */}
                <div className="flex items-center gap-1 bg-[#070A12] p-1 rounded-lg border border-white/[0.08]">
                  <button
                    onClick={() => setActiveTab('architecture')}
                    className={`px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase transition-all cursor-pointer ${
                      activeTab === 'architecture'
                        ? 'bg-[#168BFF] text-white shadow'
                        : 'text-[#8992A5] hover:text-white'
                    }`}
                  >
                    Nódulos
                  </button>
                  <button
                    onClick={() => setActiveTab('telemetry')}
                    className={`px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase transition-all cursor-pointer ${
                      activeTab === 'telemetry'
                        ? 'bg-[#16C7FF] text-black shadow'
                        : 'text-[#8992A5] hover:text-white'
                    }`}
                  >
                    Telemetria
                  </button>
                </div>
              </div>

              {/* Tab 1: System Nodes Flow */}
              {activeTab === 'architecture' && (
                <div className="space-y-2.5">
                  {t.systemNodes.map((node, index) => {
                    const isGrowth = index === t.systemNodes.length - 1;
                    const isSelected = selectedNode === index;
                    return (
                      <motion.div
                        key={node.label}
                        onClick={() => setSelectedNode(isSelected ? null : index)}
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.06 }}
                        className={`group relative flex items-center justify-between p-3.5 rounded-xl transition-all border cursor-pointer select-none ${
                          isGrowth
                            ? 'bg-gradient-to-r from-[#16C7FF]/20 via-[#168BFF]/20 to-[#7047FF]/20 border-[#16C7FF]/50 shadow-[0_0_20px_rgba(22,199,255,0.25)]'
                            : isSelected
                            ? 'bg-[#141C36] border-[#16C7FF]/60 shadow-lg'
                            : 'bg-[#070A12]/80 hover:bg-[#10162A] border-white/[0.06] hover:border-white/[0.18]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
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
                            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#16C7FF]/25 text-[#16C7FF] border border-[#16C7FF]/40 uppercase tracking-wider">
                              ESTÁGIO FINAL
                            </span>
                          ) : (
                            <div className="flex items-center gap-1.5 text-xs font-mono text-[#8992A5] group-hover:text-white transition-colors">
                              <span className="text-[10px] font-bold text-[#16C7FF]">SYNCED</span>
                              <ChevronRight className="w-4 h-4 text-[#8992A5] group-hover:translate-x-0.5 transition-transform" />
                            </div>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}

              {/* Tab 2: Live Telemetry Metrics */}
              {activeTab === 'telemetry' && (
                <div className="space-y-3 py-1">
                  <div className="p-3 rounded-xl bg-[#070A12] border border-white/[0.08] flex items-center justify-between">
                    <span className="text-xs font-mono text-zinc-300 flex items-center gap-2">
                      <Activity className="w-4 h-4 text-[#16C7FF] animate-pulse" />
                      SIMULAÇÃO DE PERFORMANCE EM TEMPO REAL
                    </span>
                    <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30">
                      LIVE 99.9%
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {telemetryData.map((item) => (
                      <div key={item.label} className="p-3.5 rounded-xl bg-[#070A12]/90 border border-white/[0.08]">
                        <div className="text-[10px] font-mono text-[#8992A5] uppercase tracking-wider mb-1">
                          {item.label}
                        </div>
                        <div className={`text-xl font-heading font-extrabold ${item.color} tracking-tight`}>
                          {item.value}
                        </div>
                        <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/[0.06] text-[10px] font-mono">
                          <span className="text-emerald-400 font-bold">{item.delta}</span>
                          <span className="text-zinc-500">{item.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Sparkline Graphic SVG */}
                  <div className="p-3 rounded-xl bg-[#070A12] border border-white/[0.08]">
                    <div className="flex justify-between items-center text-[10px] font-mono text-[#8992A5] mb-2">
                      <span>Curva de Retorno sobre Investimento (ROI)</span>
                      <span className="text-[#16C7FF]">Escala Contínua</span>
                    </div>
                    <svg className="w-full h-12 stroke-[#16C7FF] fill-none" viewBox="0 0 300 40">
                      <path
                        d="M0,35 Q40,30 80,25 T160,15 T240,8 T300,2"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M0,35 Q40,30 80,25 T160,15 T240,8 T300,2 L300,40 L0,40 Z"
                        fill="url(#sparkline-grad)"
                        opacity="0.25"
                      />
                      <defs>
                        <linearGradient id="sparkline-grad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#16C7FF" />
                          <stop offset="100%" stopColor="#070A12" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              )}

              {/* Console Footer Info */}
              <div className="mt-5 pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#8992A5]">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#16C7FF] animate-ping" />
                  <span className="text-zinc-300 font-bold">Arquitetura Unificada Vezzitech</span>
                </span>
                <span className="text-[#16C7FF] font-bold">100% Conectado</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};


