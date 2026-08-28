import { motion } from 'motion/react';
import { translations, Language } from '../translations';
import { ArrowRight, Sparkles, Layers } from 'lucide-react';

export const Hero = ({ lang }: { lang: Language }) => {
  const t = translations[lang].hero;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden bg-[#070A12]">
      {/* Background massive elegant gradient instead of terminal grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#168BFF]/5 via-transparent to-[#7047FF]/5 opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 -right-1/4 w-[1000px] h-[600px] bg-[#168BFF]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 -left-1/4 w-[800px] h-[500px] bg-[#7047FF]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Main Hero Copy */}
        <div className="flex flex-col items-center">
          {/* Kicker Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono font-bold text-[#69B4FF] uppercase tracking-widest mb-6 backdrop-blur-md"
          >
            <Sparkles className="w-3 h-3 text-[#168BFF]" />
            <span>{t.kicker}</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[3.5rem] leading-[1.05] sm:text-6xl md:text-7xl lg:text-[6rem] font-heading font-semibold text-white tracking-tighter mb-6"
          >
            <span className="block">{t.titleLine1} </span>
            <span className="block text-[#168BFF]">
              {t.titleHighlight}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-[#8992A5] max-w-2xl font-sans leading-relaxed mb-10"
          >
            {t.subtitle}
          </motion.p>

          {/* Primary & Secondary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mb-10"
          >
            <button
              onClick={() => scrollToSection('oferta')}
              className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-white hover:bg-gray-100 active:scale-95 pl-6 pr-2 text-[15px] font-semibold text-[#070A12] tracking-wide transition-all duration-200 cursor-pointer shadow-lg shadow-white/5"
            >
              <span>{t.ctaPrimary}</span>
              <div className="w-10 h-10 rounded-full bg-[#168BFF] flex items-center justify-center shadow-md">
                 <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </button>

            <button
              onClick={() => scrollToSection('solucoes')}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-transparent hover:bg-white/[0.03] border border-white/[0.12] active:scale-95 px-7 text-[15px] font-semibold text-white transition-all duration-200 cursor-pointer group"
            >
              <Layers className="w-4 h-4 text-[#8992A5] group-hover:text-white transition-colors" />
              <span>{t.ctaSecondary}</span>
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
