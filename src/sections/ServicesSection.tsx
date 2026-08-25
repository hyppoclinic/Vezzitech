import { motion } from 'motion/react';
import { translations, Language } from '../translations';
import { 
  Globe, 
  LayoutDashboard, 
  Rocket, 
  Smartphone, 
  Cpu, 
  Code, 
  ArrowUpRight,
  Megaphone,
  Monitor
} from 'lucide-react';

const iconMap: Record<string, typeof Globe> = {
  globe: Globe,
  'layout-dashboard': LayoutDashboard,
  rocket: Rocket,
  smartphone: Smartphone,
  cpu: Cpu,
  code: Code,
  megaphone: Megaphone,
  monitor: Monitor,
};

export const ServicesSection = ({ lang }: { lang: Language }) => {
  const t = translations[lang].services;

  const scrollToContact = () => {
    const el = document.getElementById('contato');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="servicos" className="py-24 md:py-32 bg-[#0A0A0A] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#141414] border border-white/[0.08] text-[11px] font-mono font-bold text-[#38BDF8] uppercase tracking-widest mb-4"
          >
            {t.kicker}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white tracking-tight mb-4"
          >
            {t.heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#9A9A9A] font-sans leading-relaxed"
          >
            {t.sub}
          </motion.p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((item, index) => {
            const Icon = iconMap[item.icon] || Code;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative flex flex-col justify-between p-8 rounded-2xl bg-[#0F0F0F] border border-white/[0.07] hover:border-[#0066FF]/40 transition-all duration-300 shadow-lg hover:shadow-blue-glow/10"
              >
                <div>
                  {/* Top Bar: Outline Icon with Premium Gradient and Glow */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#141414] to-[#1A1A1A] border border-white/[0.08] flex items-center justify-center text-[#0066FF] group-hover:text-[#38BDF8] group-hover:border-[#0066FF]/40 group-hover:bg-gradient-to-br group-hover:from-[#0066FF]/[0.12] group-hover:to-[#38BDF8]/[0.04] group-hover:shadow-[0_0_25px_rgba(0,102,255,0.25)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 mb-6">
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-heading font-bold text-white mb-2 tracking-tight group-hover:text-white transition-colors">
                    {item.title}
                  </h3>

                  {/* Highlight sentence in italic/blue */}
                  <p className="text-xs sm:text-sm font-medium italic text-[#38BDF8] mb-3 leading-snug">
                    "{item.highlight}"
                  </p>

                  {/* Body description */}
                  <p className="text-sm text-[#9A9A9A] leading-relaxed mb-6 font-sans">
                    {item.desc}
                  </p>
                </div>

                {/* Footer: Tags & Action */}
                <div className="pt-5 border-t border-white/[0.06]">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-0.5 rounded bg-[#161616] border border-white/[0.06] text-[10px] font-mono font-medium text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={scrollToContact}
                    className="inline-flex items-center gap-1 text-xs font-bold text-white group-hover:text-[#38BDF8] transition-colors cursor-pointer"
                  >
                    <span>{lang === 'pt' ? 'Construir este projeto' : 'Build this software'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
