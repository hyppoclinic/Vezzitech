import React from 'react';
import { ArrowRight, Sparkles, Shield, Cpu, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { translations, Language } from '../translations';
import { BlurFade } from '../components/ui/blur-fade';
import { ShimmerButton } from '../components/ui/shimmer-button';
import { Meteors } from '../components/ui/meteors';

interface HeroProps {
  lang: Language;
}

export const Hero = ({ lang }: HeroProps) => {
  const t = translations[lang];

  return (
    <section className="relative pt-40 pb-24 px-6 overflow-hidden bg-[#070707]">
      <Meteors number={25} />
      {/* Absolute Ambient Background Lights & Vector Grid Aesthetics */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#33BC65]/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/[0.03] rounded-full blur-[180px] pointer-events-none"></div>

      {/* Decorative Blueprint Vector Line Matrix (Inspired by Arounda) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <svg className="absolute w-full h-full opacity-[0.06] sm:opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="grid-fade" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#fff" stopOpacity="1" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
            <mask id="grid-mask">
              <rect width="100%" height="100%" fill="url(#grid-fade)" />
            </mask>
          </defs>
          
          <g mask="url(#grid-mask)">
            {/* Horizontal Blueprint Lines */}
            <line x1="0" y1="20%" x2="100%" y2="20%" stroke="#FFFFFF" strokeWidth="0.5" />
            <line x1="0" y1="40%" x2="100%" y2="40%" stroke="#FFFFFF" strokeWidth="0.5" />
            <line x1="0" y1="60%" x2="100%" y2="60%" stroke="#FFFFFF" strokeWidth="0.5" />
            <line x1="0" y1="80%" x2="100%" y2="80%" stroke="#FFFFFF" strokeWidth="0.5" />
            
            {/* Vertical Blueprint Lines */}
            <line x1="15%" y1="0" x2="15%" y2="100%" stroke="#FFFFFF" strokeWidth="0.5" />
            <line x1="30%" y1="0" x2="30%" y2="100%" stroke="#FFFFFF" strokeWidth="0.5" />
            <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#FFFFFF" strokeWidth="0.5" />
            <line x1="70%" y1="0" x2="70%" y2="100%" stroke="#FFFFFF" strokeWidth="0.5" />
            <line x1="85%" y1="0" x2="85%" y2="100%" stroke="#FFFFFF" strokeWidth="0.5" />
            
            {/* Fine Diagonal Tech-Grid Intersects */}
            <line x1="0" y1="0" x2="100%" y2="100%" stroke="#33BC65" strokeWidth="0.5" strokeOpacity="0.3" />
            <line x1="100%" y1="0" x2="0" y2="100%" stroke="#33BC65" strokeWidth="0.5" strokeOpacity="0.3" />
            
            {/* Fine detail geometric diamonds */}
            <polygon points="50%,20% 70%,40% 50%,60% 30%,40%" fill="none" stroke="#FFFFFF" strokeWidth="0.5" strokeDasharray="3 6" />
            <polygon points="50%,40% 85%,60% 50%,80% 15%,60%" fill="none" stroke="#FFFFFF" strokeWidth="0.5" strokeDasharray="4 8" />
          </g>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center relative z-10">
        
        {/* Strategical Badge - Centered */}
        <BlurFade delay={0.1} inView>
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[#33BC65] text-[10px] font-bold tracking-widest uppercase mb-8 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#33BC65]"></span>
            </span>
            {t.hero.badge}
          </div>
        </BlurFade>

        {/* Arounda-Inspired Headline with Symmetric Center Alignment & Soft Capitalization Reading Flow */}
        <BlurFade delay={0.2} inView>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold leading-[1.12] mb-6 tracking-tight text-white font-heading max-w-3xl">
            {lang === 'pt' ? (
              <>
                Aceleramos sua empresa.
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-100 to-emerald-200 font-normal">
                  Com inteligência artificial em escala corporativa.
                </span>
              </>
            ) : (
              <>
                Accelerate your enterprise.
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-100 to-emerald-200 font-normal">
                  With artificial intelligence at corporate scale.
                </span>
              </>
            )}
          </h1>
        </BlurFade>

        {/* Softened Sub-headline */}
        <BlurFade delay={0.3} inView>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-10 max-w-2xl leading-relaxed font-normal">
            {t.hero.subheadline}
          </p>
        </BlurFade>

        {/* Center-aligned Interactive Core CTAs */}
        <BlurFade delay={0.4} inView>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#consultoria" className="inline-block">
              <ShimmerButton className="shadow-2xl hover:scale-105 transition-transform" shimmerColor="#12DCEF" background="#ffffff" borderRadius="0.75rem">
                <span className="text-black font-semibold flex items-center gap-2 text-sm px-2">
                  {t.hero.ctaPrimary}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </ShimmerButton>
            </a>
            <a 
              href="#google" 
              className="px-8 py-3.5 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold rounded-xl transition duration-300 text-sm flex items-center justify-center">
              {t.hero.ctaSecondary}
            </a>
          </div>
        </BlurFade>

      </div>

      {/* Trust Banner Marquee Slider (Elegant, fluid, modern, overflow-safe) */}
      <BlurFade delay={0.5} inView>
        <div className="relative w-full bg-[#0d0d0e]/40 backdrop-blur-md border-y border-white/[0.06] text-[#e4e4e7] py-6 mt-24 overflow-hidden select-none group/marquee">
          {/* Soft edge ambient mask gradient for a premium touch */}
          <div className="absolute inset-y-0 left-0 w-12 md:w-36 bg-gradient-to-r from-[#070708] via-[#070708]/60 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-12 md:w-36 bg-gradient-to-l from-[#070708] via-[#070708]/60 to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex w-max min-w-full hover:[animation-play-state:paused] transition-all cursor-grab active:cursor-grabbing">
            {/* Track 1 */}
            <div className="flex gap-16 shrink-0 animate-marquee whitespace-nowrap min-w-full justify-around pr-16 items-center">
              {t.ticker.map((item, idx) => (
                <div key={idx} className="flex items-center gap-8 text-[10px] md:text-[11px] font-normal tracking-[0.25em] uppercase shrink-0 transition-colors duration-300 hover:text-white">
                  <span>{item}</span>
                  <span className="text-[#33BC65]/40 font-bold font-mono text-xs select-none">//</span>
                </div>
              ))}
            </div>
            {/* Track 2 (Clone for perfect seamless infinite animation) */}
            <div className="flex gap-16 shrink-0 animate-marquee whitespace-nowrap min-w-full justify-around pr-16 items-center" aria-hidden="true">
              {t.ticker.map((item, idx) => (
                <div key={`dup-${idx}`} className="flex items-center gap-8 text-[10px] md:text-[11px] font-normal tracking-[0.25em] uppercase shrink-0 transition-colors duration-300 hover:text-white">
                  <span>{item}</span>
                  <span className="text-[#33BC65]/40 font-bold font-mono text-xs select-none">//</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </BlurFade>
    </section>
  );
};

