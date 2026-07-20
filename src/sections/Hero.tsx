import { motion } from 'motion/react';
import { translations, Language } from '../translations';
import { ShimmerButton } from '../components/ui/shimmer-button';
import { ChevronRight } from 'lucide-react';

export const Hero = ({ lang }: { lang: Language }) => {
  const t = translations[lang].hero;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-20 px-6 bg-[#030303]">
      {/* Premium Background Gradients & Grid */}
      <div className="absolute inset-0 bg-noise opacity-[0.015] pointer-events-none mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]"></div>
      
      {/* Radial fade for the grid */}
      <div className="absolute inset-0 bg-[#030303] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]"></div>

      {/* Main Emerald Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80vw] max-w-[800px] h-[300px] bg-emerald-500/15 rounded-[100%] blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-medium text-gray-300 mb-8 backdrop-blur-md shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          {t.badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-semibold tracking-tighter text-white mb-8 leading-[1.05] max-w-4xl"
        >
          {t.headline.split('.').map((part, i, arr) => (
            <span key={i}>
              {part}
              {i < arr.length - 1 && <span className="text-emerald-500">.</span>}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-sans"
        >
          {t.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <button className="group relative w-full sm:w-auto inline-flex h-12 items-center justify-center overflow-hidden rounded-lg bg-emerald-500 px-8 font-medium text-white shadow-[0_0_40px_-10px_rgba(16,185,129,0.4)] hover:shadow-[0_0_60px_-15px_rgba(16,185,129,0.5)] transition-all duration-300">
            <span className="relative z-10 flex items-center gap-2">
              {t.ctaPrimary}
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
              <div className="relative h-full w-8 bg-white/20" />
            </div>
          </button>
          
          <button className="w-full sm:w-auto px-8 h-12 rounded-lg bg-white/[0.03] border border-white/[0.08] text-white font-medium hover:bg-white/[0.08] transition-colors backdrop-blur-md">
            {t.ctaSecondary}
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-white/[0.08] w-full max-w-3xl flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium text-gray-500"
        >
          {t.indicators.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
