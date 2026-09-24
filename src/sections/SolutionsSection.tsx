import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { translations, Language } from '../translations';
import { TrendingUp, Monitor, Cpu, Bot, ArrowRight, CheckCircle2, Layers, Image as ImageIcon } from 'lucide-react';
import { getUnitImages, UnitImages } from '../lib/siteSettings';

export const SolutionsSection = ({ lang }: { lang: Language }) => {
  const t = translations[lang].solutions;
  const [unitImages, setUnitImages] = useState<UnitImages>({});

  useEffect(() => {
    const unsubscribe = getUnitImages(setUnitImages);
    return () => {
      if (typeof unsubscribe === 'function') unsubscribe();
    };
  }, []);

  const unitIcons: Record<string, React.ReactNode> = {
    'trending-up': <TrendingUp className="w-5 h-5 text-[#16C7FF]" />,
    monitor: <Monitor className="w-5 h-5 text-[#168BFF]" />,
    cpu: <Cpu className="w-5 h-5 text-[#7047FF]" />,
    bot: <Bot className="w-5 h-5 text-[#16C7FF]" />
  };

  const scrollToDiagnostic = () => {
    const el = document.getElementById('diagnostico');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="solucoes" className="py-28 md:py-36 bg-[#070A12] relative overflow-hidden border-t border-white/[0.08]">
      {/* Background Radial Lights */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-[#7047FF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[300px] bg-[#16C7FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10162A] border border-white/[0.1] text-[11px] font-mono font-bold text-[#16C7FF] uppercase tracking-widest mb-4 shadow-sm"
          >
            <Layers className="w-3.5 h-3.5 text-[#16C7FF]" />
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
            className="text-base sm:text-lg text-[#8992A5] leading-relaxed max-w-2xl font-sans"
          >
            {t.sub}
          </motion.p>
        </div>

        {/* 4 Unit Cards Equal-Sized 4-Column Horizontal Line Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {t.units.map((unit, index) => {
            const customImg = unitImages[unit.id as keyof UnitImages];

            return (
              <motion.div
                key={unit.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 sm:p-7 rounded-[2rem] bg-gradient-to-br from-[#0C1020] via-[#0A0D16] to-[#060810] border border-white/[0.09] hover:border-[#16C7FF]/40 transition-all duration-500 shadow-2xl overflow-hidden relative group flex flex-col justify-between h-full"
              >
                {/* Top Specular Edge Highlight */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    {/* Header: Icon + Unit Label + Tag */}
                    <div className="flex items-center justify-between mb-5 pb-3.5 border-b border-white/[0.08]">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#121826] border border-white/[0.08] flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 group-hover:bg-[#168BFF]/10 group-hover:border-[#168BFF]/20 transition-all duration-300">
                          {unitIcons[unit.icon]}
                        </div>
                        <span className="text-[11px] text-[#8992A5] tracking-[0.15em] font-mono font-bold uppercase">
                          UNIDADE 0{index + 1}
                        </span>
                      </div>

                      <span className="text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#168BFF]/10 text-[#168BFF] border border-[#168BFF]/20 uppercase backdrop-blur-md shrink-0">
                        {unit.tag}
                      </span>
                    </div>

                    {/* Custom Admin Image Banner (If uploaded) */}
                    {customImg && (
                      <div className="mb-5 rounded-xl overflow-hidden border border-white/10 bg-[#070A12] relative group/img shadow-md">
                        <img
                          src={customImg}
                          alt={unit.title}
                          className="w-full h-36 object-cover rounded-xl group-hover/img:scale-105 transition-transform duration-500 block"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 rounded-xl border border-white/10 pointer-events-none" />
                      </div>
                    )}

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white mb-2.5 tracking-tight group-hover:text-[#16C7FF] transition-colors leading-[1.2]">
                      {unit.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#8992A5] leading-relaxed mb-5 font-sans min-h-[44px]">
                      {unit.desc}
                    </p>

                    {/* Service Tags */}
                    <div className="pt-3.5 border-t border-white/[0.06] mb-6">
                      <div className="flex flex-wrap gap-1.5">
                        {unit.services.map((service) => (
                          <span
                            key={service}
                            className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/[0.03] text-zinc-300 border border-white/[0.06] group-hover:border-white/[0.12] hover:bg-white/[0.07] transition-colors cursor-default backdrop-blur-sm whitespace-nowrap"
                          >
                            <CheckCircle2 className="w-3 h-3 text-[#168BFF] shrink-0" />
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={scrollToDiagnostic}
                    className="inline-flex items-center justify-between w-full px-4 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-bold tracking-wide text-white group-hover:border-[#168BFF]/40 transition-all cursor-pointer backdrop-blur-md shadow-sm mt-auto"
                  >
                    <span>{unit.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#168BFF] group-hover:translate-x-1 transition-transform ml-2 shrink-0" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};


