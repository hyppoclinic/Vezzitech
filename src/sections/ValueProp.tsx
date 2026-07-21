import { motion } from 'motion/react';
import { translations, Language } from '../translations';
import { Globe, Search, Bot, Workflow, Cpu, LineChart } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  globe: Globe,
  search: Search,
  bot: Bot,
  workflow: Workflow,
  cpu: Cpu,
  lineChart: LineChart
};

export const ValueProp = ({ lang }: { lang: Language }) => {
  const t = translations[lang].valueProp;

  return (
    <section className="py-32 bg-[#030303] border-t border-white/[0.05] relative" id="plataforma">
      <div className="absolute inset-0 bg-noise opacity-[0.015] pointer-events-none mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-emerald-500 font-medium tracking-wide text-sm uppercase mb-4"
          >
            {t.heading1}
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium text-white mb-8 tracking-tight leading-[1.1]"
          >
            {t.heading2}
          </motion.h3>

          <div className="space-y-6 text-lg md:text-xl text-gray-400 font-sans leading-relaxed">
            {t.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className={i === t.paragraphs.length - 1 ? 'text-white font-medium' : ''}
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.cards.map((card, i) => {
            const Icon = iconMap[card.icon] || Globe;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                className="group relative p-8 rounded-2xl bg-[#0A0A0A] border border-white/[0.08] hover:border-emerald-500/50 transition-all duration-500 overflow-hidden"
              >
                {/* Hover Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-emerald-500/0 rounded-full blur-[60px] group-hover:bg-emerald-500/10 transition-colors duration-500 pointer-events-none"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center mb-6 text-gray-400 group-hover:text-emerald-400 group-hover:bg-emerald-500/10 transition-all duration-300">
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  
                  <h4 className="text-xl font-medium text-white mb-3 tracking-tight">{card.title}</h4>
                  <p className="text-gray-400 leading-relaxed text-sm">{card.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
