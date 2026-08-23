import { motion } from 'motion/react';
import { translations, Language } from '../translations';
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection = ({ lang }: { lang: Language }) => {
  const t = translations[lang].testimonials;

  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-[#0A0A0A] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#141414] border border-white/[0.08] text-[11px] font-mono font-bold text-[#FFD000] uppercase tracking-widest mb-4"
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

          {/* Google 5.0 Rating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-5 rounded-2xl bg-[#0F0F0F] border border-white/[0.08] flex items-center gap-4 shrink-0 shadow-lg"
          >
            <div className="w-12 h-12 rounded-xl bg-[#141414] border border-white/[0.08] flex items-center justify-center text-[#FFD000] shrink-0 font-heading font-black text-lg">
              {t.googleBadge.score}
            </div>
            <div>
              <div className="flex items-center gap-1 text-[#FFD000] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FFD000]" />
                ))}
              </div>
              <div className="text-xs font-bold text-white">
                {t.googleBadge.platform}
              </div>
              <div className="text-[11px] text-[#9A9A9A]">
                {t.googleBadge.reviewCount}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-[#0F0F0F] border border-white/[0.07] hover:border-[#FFD000]/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-[#FFD000]/40 mb-6" />
                <p className="text-sm sm:text-base text-zinc-200 leading-relaxed italic mb-8 font-sans">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-white/[0.06]">
                <div className="font-heading font-bold text-white text-base">
                  {item.author}
                </div>
                <div className="text-xs text-[#9A9A9A] mb-2">
                  {item.role} · <span className="text-zinc-300 font-medium">{item.company}</span>
                </div>
                <div className="inline-block px-2 py-0.5 rounded bg-[#161616] text-[10px] font-mono text-[#FFD000]">
                  {item.projectType}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
