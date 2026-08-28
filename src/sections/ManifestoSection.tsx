import { motion } from 'motion/react';
import { Compass, Cpu, TrendingUp, ArrowUpRight, CheckCircle2, Sparkles, Layers, ShieldAlert } from 'lucide-react';
import { translations, Language } from '../translations';
import { BorderBeam } from '../components/ui/border-beam';
import { BlurFade } from '../components/ui/blur-fade';
import { Logo } from '../components/Logo';

export const ManifestoSection = ({ lang }: { lang: Language }) => {
  const t = translations[lang].manifesto;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'strategy':
        return <Compass className="w-5 h-5 text-[#69B4FF]" />;
      case 'tech':
        return <Cpu className="w-5 h-5 text-[#7047FF]" />;
      case 'marketing':
        return <TrendingUp className="w-5 h-5 text-[#00E599]" />;
      default:
        return <Layers className="w-5 h-5 text-[#168BFF]" />;
    }
  };

  const getPillarGlow = (id: string) => {
    switch (id) {
      case 'strategy':
        return {
          glowColor: 'bg-[#168BFF]',
          border: 'border-white/[0.08] group-hover:border-[#168BFF]/40',
          ambientLight: 'from-[#168BFF]/10 to-transparent',
          tagStyle: 'bg-[#168BFF]/10 text-[#69B4FF] border-[#168BFF]/30 backdrop-blur-md',
          iconBg: 'bg-[#168BFF]/10 text-[#69B4FF] border-[#168BFF]/25',
          accentGradient: 'from-[#168BFF]/20 via-transparent to-transparent'
        };
      case 'tech':
        return {
          glowColor: 'bg-[#7047FF]',
          border: 'border-white/[0.08] group-hover:border-[#7047FF]/40',
          ambientLight: 'from-[#7047FF]/10 to-transparent',
          tagStyle: 'bg-[#7047FF]/10 text-[#A78BFA] border-[#7047FF]/30 backdrop-blur-md',
          iconBg: 'bg-[#7047FF]/10 text-[#A78BFA] border-[#7047FF]/25',
          accentGradient: 'from-[#7047FF]/20 via-transparent to-transparent'
        };
      case 'marketing':
        return {
          glowColor: 'bg-[#00E599]',
          border: 'border-white/[0.08] group-hover:border-[#00E599]/40',
          ambientLight: 'from-[#00E599]/10 to-transparent',
          tagStyle: 'bg-[#00E599]/10 text-[#00E599] border-[#00E599]/30 backdrop-blur-md',
          iconBg: 'bg-[#00E599]/10 text-[#00E599] border-[#00E599]/25',
          accentGradient: 'from-[#00E599]/20 via-transparent to-transparent'
        };
      default:
        return {
          glowColor: 'bg-white',
          border: 'border-white/[0.08] group-hover:border-white/20',
          ambientLight: 'from-white/5 to-transparent',
          tagStyle: 'bg-white/10 text-white border-white/20 backdrop-blur-md',
          iconBg: 'bg-white/10 text-white border-white/20',
          accentGradient: 'from-white/10 via-transparent to-transparent'
        };
    }
  };

  return (
    <section id="sobre" className="py-24 md:py-32 bg-[#05070A] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#168BFF]/10 via-[#05070A]/90 to-[#05070A] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#7047FF]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <BlurFade delay={0.1} inView>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-bold text-[#69B4FF] uppercase tracking-[0.2em] mb-6 backdrop-blur-md shadow-inner">
              <span className="w-2 h-2 rounded-full bg-[#168BFF] animate-pulse" />
              <span>{t.badge}</span>
            </div>
          </BlurFade>

          <BlurFade delay={0.2} inView>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6 font-heading">
              {t.title}
            </h2>
          </BlurFade>

          <BlurFade delay={0.3} inView>
            <p className="text-base sm:text-lg text-[#8992A5] leading-relaxed max-w-2xl mx-auto">
              {t.sub}
            </p>
          </BlurFade>
        </div>

        {/* The 3 Core Paradox Cards (Trinity Cards with Premium Blur & Glassmorphism) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {t.lines.map((item, idx) => {
            const style = getPillarGlow(item.id);
            return (
              <BlurFade key={item.id} delay={0.2 + idx * 0.15} inView>
                <div className={`relative h-full flex flex-col justify-between rounded-3xl bg-gradient-to-b from-[#10172A]/70 via-[#0B101E]/75 to-[#060810]/90 backdrop-blur-2xl border p-7 sm:p-8 transition-all duration-300 group hover:-translate-y-1.5 overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_16px_36px_rgba(0,0,0,0.45)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_24px_48px_rgba(0,0,0,0.6)] ${style.border}`}>
                  
                  {/* Frosted Top Specular Highlight */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

                  {/* Ambient blurred glow orbs behind the glass */}
                  <div className={`absolute -top-12 -right-12 w-36 h-36 rounded-full blur-[48px] opacity-20 group-hover:opacity-45 transition-all duration-500 pointer-events-none ${style.glowColor}`} />
                  <div className={`absolute -bottom-10 -left-10 w-28 h-28 rounded-full blur-[40px] opacity-10 group-hover:opacity-30 transition-all duration-500 pointer-events-none ${style.glowColor}`} />

                  {/* Header: Icon + Tag */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center backdrop-blur-md border shadow-inner transition-all duration-300 group-hover:scale-105 ${style.iconBg}`}>
                        {getPillarIcon(item.id)}
                      </div>
                      <span className={`text-[11px] font-bold px-3 py-1 rounded-full border tracking-wide uppercase shadow-sm ${style.tagStyle}`}>
                        {item.tag}
                      </span>
                    </div>

                    {/* Statement & The Pitfall */}
                    <div className="mb-6">
                      <span className="text-xs font-bold text-[#8992A5] uppercase tracking-wider block mb-1.5">
                        {item.pillar}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                        {item.statement}
                      </h3>
                      <div className="inline-flex items-center gap-1.5 mt-3 px-3 py-1.5 rounded-xl bg-red-500/[0.08] backdrop-blur-md border border-red-500/25 text-red-300 text-xs font-semibold shadow-inner">
                        <ShieldAlert className="w-3.5 h-3.5 text-red-400 shrink-0" />
                        <span>{item.pitfall}</span>
                      </div>
                    </div>
                  </div>

                  {/* The Resolution / Vezzitech Approach */}
                  <div className="relative z-10 pt-6 border-t border-white/[0.08] mt-4 bg-white/[0.01] -mx-7 -mb-7 sm:-mx-8 sm:-mb-8 p-6 sm:p-7 rounded-b-3xl backdrop-blur-sm">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#00E599] shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-medium">
                        {item.resolution}
                      </p>
                    </div>
                  </div>

                </div>
              </BlurFade>
            );
          })}
        </div>

        {/* Central Convergence / Nexus Hero Block */}
        <BlurFade delay={0.5} inView>
          <div className="relative rounded-[2.5rem] bg-gradient-to-b from-[#0E1528]/80 via-[#090D18]/85 to-[#05070E]/95 backdrop-blur-2xl border border-white/[0.09] p-8 sm:p-12 md:p-16 overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_24px_60px_rgba(0,0,0,0.6)]">
            
            {/* Frosted Top Specular Highlight */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

            <BorderBeam size={450} duration={14} delay={0} colorFrom="#168BFF" colorTo="#7047FF" />
            
            {/* Ambient inner glow */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#168BFF]/12 blur-[130px] pointer-events-none rounded-full" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#7047FF]/12 blur-[130px] pointer-events-none rounded-full" />

            <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1765FF]/10 border border-[#1765FF]/25 text-xs font-bold text-[#69B4FF] tracking-wide mb-6">
                <Sparkles className="w-3.5 h-3.5 text-[#168BFF]" />
                <span>{t.nexus.badge}</span>
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#8992A5] tracking-tight leading-tight mb-6 font-heading">
                {t.nexus.title}
              </h3>

              <p className="text-sm sm:text-base md:text-lg text-[#8992A5] leading-relaxed max-w-2xl mb-10">
                {t.nexus.description}
              </p>

              {/* Visual Formula / Growth Equation */}
              <div className="w-full mb-10 overflow-x-auto pb-2">
                <div className="inline-flex items-center justify-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-2xl bg-[#080B14]/80 border border-white/[0.06] backdrop-blur-md min-w-max mx-auto shadow-inner">
                  {t.nexus.equation.map((eq, i) => (
                    <div key={i} className="flex items-center gap-2 sm:gap-3">
                      {eq.isOperator ? (
                        <span className="text-base sm:text-xl font-black text-[#69B4FF] px-1 select-none">
                          {eq.label}
                        </span>
                      ) : (
                        <div className={`px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl border text-left transition-all ${
                          eq.isHighlight
                            ? 'bg-gradient-to-r from-[#168BFF]/20 to-[#7047FF]/20 border-[#168BFF]/40 shadow-lg shadow-[#168BFF]/10'
                            : 'bg-white/[0.03] border-white/[0.08]'
                        }`}>
                          <div className={`text-xs sm:text-sm font-bold tracking-tight ${
                            eq.isHighlight ? 'text-[#69B4FF]' : 'text-white'
                          }`}>
                            {eq.label}
                          </div>
                          <div className="text-[10px] sm:text-[11px] text-[#8992A5] font-medium">
                            {eq.desc}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button & Subtitle */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => scrollTo('diagnostico')}
                  className="w-full sm:w-auto inline-flex h-12 sm:h-14 items-center justify-center gap-2.5 rounded-full bg-performance-gradient hover:opacity-95 px-8 text-sm sm:text-base font-extrabold text-white tracking-wide transition-all duration-200 shadow-performance-glow hover:scale-[1.02] active:scale-95 cursor-pointer"
                >
                  <span>{t.nexus.ctaText}</span>
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
              <span className="text-xs text-[#8992A5] mt-3 font-medium">
                {t.nexus.ctaSub}
              </span>

            </div>
          </div>
        </BlurFade>

        {/* Bottom Signature */}
        <BlurFade delay={0.7} inView>
          <div className="mt-16 pt-10 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <Logo className="h-7 w-auto" />
              <span className="text-xs font-semibold text-[#8992A5] border-l border-white/10 pl-3">
                {t.brandText}
              </span>
            </div>
            <p className="text-xs text-[#8992A5]/70">
              {t.sub}
            </p>
          </div>
        </BlurFade>

      </div>
    </section>
  );
};

