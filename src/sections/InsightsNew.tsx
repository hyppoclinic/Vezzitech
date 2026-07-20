import { motion } from 'motion/react';
import { translations, Language } from '../translations';
import { Clock, ArrowUpRight } from 'lucide-react';

export const InsightsNew = ({ lang }: { lang: Language }) => {
  const t = translations[lang].insights;

  return (
    <section className="py-32 bg-[#030303] border-t border-white/[0.05] relative">
      <div className="absolute inset-0 bg-noise opacity-[0.015] pointer-events-none mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-heading font-semibold text-white mb-16 tracking-tight">
          {t.heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-6 border border-white/[0.08]">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-60"></div>
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4 text-xs font-medium">
                <span className="text-emerald-400 uppercase tracking-wider">{item.category}</span>
                <span className="text-gray-500 flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {item.time}</span>
              </div>
              <h3 className="text-2xl font-semibold text-white group-hover:text-emerald-400 transition-colors line-clamp-2 leading-snug">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
