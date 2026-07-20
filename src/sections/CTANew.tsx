import { motion } from 'motion/react';
import { translations, Language } from '../translations';
import { ShimmerButton } from '../components/ui/shimmer-button';
import { BorderBeam } from '../components/ui/border-beam';

export const CTANew = ({ lang }: { lang: Language }) => {
  const t = translations[lang].ctaSection;

  return (
    <section className="py-32 px-6 bg-[#030303] relative border-t border-white/[0.05]" id="cta">
      <div className="max-w-5xl mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-[2rem] bg-gradient-to-b from-[#0A0A0A] to-[#030303] border border-white/[0.08] p-12 md:p-24 text-center overflow-hidden"
        >
          <BorderBeam size={500} duration={12} delay={9} colorFrom="#10B981" colorTo="#047857" />
          
          {/* Internal Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-emerald-500/10 rounded-[100%] blur-[100px] pointer-events-none"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-semibold text-white mb-6 tracking-tighter leading-[1.05]">
              {t.heading}
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              {t.sub}
            </p>

            <div className="flex justify-center">
              <ShimmerButton 
                className="shadow-[0_0_50px_rgba(16,185,129,0.3)] hover:shadow-[0_0_80px_rgba(16,185,129,0.4)] hover:scale-[1.02] transition-all" 
                shimmerColor="#10B981" 
                background="#047857" 
                borderRadius="0.75rem"
              >
                <span className="text-white font-medium text-lg px-8 py-3 block">
                  {t.cta}
                </span>
              </ShimmerButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
