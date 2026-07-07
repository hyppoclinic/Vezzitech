import React from 'react';
import { Check, ArrowRight, Zap, Flame, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { translations, Language } from '../translations';
import { BlurFade } from '../components/ui/blur-fade';
import { BorderBeam } from '../components/ui/border-beam';

interface PricingProps {
  lang: Language;
}

export const Pricing = ({ lang }: PricingProps) => {
  const t = translations[lang];
  const p = t.pricingSection;

  const scrollToScheduling = (planName: string) => {
    const el = document.getElementById('consultoria');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    // Pre-fill or focus the purpose input if possible or guide the prospect
    const purposeSelect = document.querySelector('select[name="purpose"]') as HTMLSelectElement;
    if (purposeSelect) {
      purposeSelect.value = "SEO & AEO"; // Trigger a value for quick scheduling
      const event = new Event('change', { bubbles: true });
      purposeSelect.dispatchEvent(event);
    }
  };

  return (
    <section id="planos" aria-label="Planos de Assinatura" className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-[#070707] via-[#0c0d0e] to-[#070707] border-t border-white/5">
      {/* Background Glow effects */}
      <div className="absolute top-[30%] left-[10%] w-96 h-96 bg-[#33BC65]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-[#12DCEF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <BlurFade delay={0.1} inView>
            <span className="text-[#33BC65] font-mono text-xs font-bold uppercase tracking-[0.2em]">
              {p.tag}
            </span>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mt-3 mb-6 font-heading">
              {p.heading}
            </h2>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              {p.sub}
            </p>
          </BlurFade>
        </div>


        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {p.plans.map((plan, i) => {
            const isPopular = plan.id === 'professional';
            const isEnterprise = plan.id === 'enterprise';

            return (
              <BlurFade key={plan.id} delay={0.4 + i * 0.1} inView>
                <div 
                  className={`h-full rounded-3xl p-8 relative flex flex-col justify-between transition-all duration-300 group ${
                    isPopular 
                      ? 'bg-zinc-950/90 border-[#33BC65] border-2 shadow-[0_0_30px_rgba(51,188,101,0.15)] md:-translate-y-4' 
                      : 'bg-[#0c0d0e]/80 border border-white/5 hover:border-white/10 hover:bg-zinc-950/40'
                  }`}
                >
                  {/* Glowing light borders for premium accentuation */}
                  {isPopular && (
                    <BorderBeam size={300} duration={10} delay={i * 2} colorFrom="#33BC65" colorTo="#12DCEF" />
                  )}

                  {/* Card top badges & metadata */}
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest">
                        0{i+1} / PLANS
                      </span>
                      {plan.badge && (
                        <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-bold font-mono tracking-wider uppercase ${
                          isPopular 
                            ? 'bg-[#33BC65] text-black' 
                            : 'bg-white/5 text-gray-400 border border-white/10'
                        }`}>
                          {plan.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-2 font-heading">
                      {plan.name}
                    </h3>
                    
                    <p className="text-xs text-gray-400 min-h-[40px] leading-relaxed mb-6">
                      {plan.desc}
                    </p>

                    {/* Price Tag */}
                    <div className="flex items-baseline gap-1 mb-8">
                      <span className="text-3xl md:text-4xl font-extrabold text-white font-heading">
                        {plan.price}
                      </span>
                      <span className="text-xs font-mono text-gray-400 uppercase">
                        {plan.period}
                      </span>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-white/5 my-6" />

                    {/* Features list */}
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-gray-300">
                          <Check className="w-4 h-4 text-[#33BC65] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Call To Action Button */}
                  <button
                    type="button"
                    onClick={() => scrollToScheduling(plan.name)}
                    className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${
                      isPopular 
                        ? 'bg-[#33BC65] text-black hover:bg-[#12DCEF]' 
                        : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20'
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </BlurFade>
            );
          })}
        </div>

        {/* Bottom operational footnote */}
        <div className="mt-16 text-center">
          <BlurFade delay={0.7} inView>
            <p className="text-xs text-gray-400 font-mono flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#33BC65]" />
              {lang === 'pt' 
                ? 'Sem fidelidade compulsória. Pause, cancele ou altere seu plano a qualquer momento.' 
                : 'No lock-in contracts. Pause, cancel, or switch plans at any time.'}
            </p>
          </BlurFade>
        </div>

      </div>
    </section>
  );
};
