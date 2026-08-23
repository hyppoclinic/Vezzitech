import { motion } from 'motion/react';
import { translations, Language } from '../translations';
import { ArrowUpRight, MessageSquare, Star, CheckCircle2, Clock } from 'lucide-react';

export const Hero = ({ lang }: { lang: Language }) => {
  const t = translations[lang].hero;

  const whatsappNumber = "+5544998266950";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=Olá! Gostaria de conversar sobre um projeto de software com a equipe da Vezzitech.`;

  const scrollToContact = () => {
    const el = document.getElementById('contato');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-[#0A0A0A]">
      {/* Subtle Background Radial / Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#FFD000]/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          
          {/* Micro-badge / Kicker */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#141414] border border-white/[0.08] text-[11px] font-mono font-bold text-[#FFD000] uppercase tracking-widest mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD000] animate-pulse" />
            {t.kicker}
          </motion.div>

          {/* 3-Line Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-black text-white tracking-tight leading-[1.03] mb-6"
          >
            <span className="block">{t.titleLine1}</span>
            <span className="block text-[#FFD000] drop-shadow-[0_0_35px_rgba(255,208,0,0.25)]">
              {t.titleHighlight}
            </span>
            <span className="block text-white">{t.titleLine3}</span>
          </motion.h1>

          {/* Short Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-[#9A9A9A] max-w-2xl font-sans leading-relaxed mb-10"
          >
            {t.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16"
          >
            <button
              onClick={scrollToContact}
              className="inline-flex h-13 items-center justify-center gap-2.5 rounded-full bg-[#FFD000] hover:bg-[#F5C200] px-8 text-sm font-extrabold text-black uppercase tracking-wider transition-all duration-200 shadow-yellow-btn hover:scale-[1.02] cursor-pointer"
            >
              <span>{t.ctaPrimary}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-[#111111] hover:bg-[#181818] border border-white/[0.1] hover:border-white/[0.2] px-7 text-sm font-semibold text-white transition-all duration-200 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#FFD000]" />
              <span>{t.ctaSecondary}</span>
            </a>
          </motion.div>

          {/* Social Proof Line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8"
          >
            {/* Google Rating */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#141414] border border-white/[0.08] flex items-center justify-center text-[#FFD000] shrink-0">
                <Star className="w-5 h-5 fill-[#FFD000]" />
              </div>
              <div>
                <div className="text-sm font-bold text-white font-heading">
                  {t.socialProof.rating}
                </div>
                <div className="text-xs text-[#9A9A9A]">
                  {t.socialProof.ratingSub}
                </div>
              </div>
            </div>

            {/* Delivered Projects */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#141414] border border-white/[0.08] flex items-center justify-center text-[#FFD000] shrink-0">
                <CheckCircle2 className="w-5 h-5 text-[#FFD000]" />
              </div>
              <div>
                <div className="text-sm font-bold text-white font-heading">
                  {t.socialProof.projects}
                </div>
                <div className="text-xs text-[#9A9A9A]">
                  {t.socialProof.projectsSub}
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#141414] border border-white/[0.08] flex items-center justify-center text-[#FFD000] shrink-0">
                <Clock className="w-5 h-5 text-[#FFD000]" />
              </div>
              <div>
                <div className="text-sm font-bold text-white font-heading">
                  {t.socialProof.responseTime}
                </div>
                <div className="text-xs text-[#9A9A9A]">
                  {t.socialProof.responseTimeSub}
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
