import { motion } from 'motion/react';
import { translations, Language } from '../translations';
import { Check } from 'lucide-react';
import { BorderBeam } from '../components/ui/border-beam';

export const PricingNew = ({ lang }: { lang: Language }) => {
  const t = translations[lang].pricing;

  return (
    <section className="py-32 bg-[#050505] border-t border-white/5 relative" id="pricing">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-heading font-semibold text-center text-white mb-20 tracking-tight">
          {t.heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative p-8 rounded-3xl border flex flex-col h-full bg-[#0A0A0A] ${
                plan.badge 
                  ? 'border-emerald-500/50 shadow-[0_0_40px_rgba(16,185,129,0.1)]' 
                  : 'border-white/10'
              }`}
            >
              {plan.badge && (
                <>
                  <BorderBeam size={200} duration={12} delay={9} colorFrom="#10B981" colorTo="#047857" />
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-black text-xs font-bold px-4 py-1 rounded-full tracking-widest z-10">
                    {plan.badge}
                  </div>
                </>
              )}
              
              <div className="mb-8 text-center pt-4">
                <h3 className="text-2xl font-semibold text-white mb-3">{plan.name}</h3>
                <p className="text-gray-400 text-sm h-10">{plan.desc}</p>
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-4 rounded-xl text-sm font-semibold transition-all mt-auto ${
                plan.badge 
                  ? 'bg-emerald-500 hover:bg-emerald-600 text-black' 
                  : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
              }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
