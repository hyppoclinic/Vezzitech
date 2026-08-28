import { motion } from 'motion/react';
import { translations, Language } from '../translations';
import { ArrowUpRight, BookOpen, Clock } from 'lucide-react';

export const InsightsSection = ({ lang }: { lang: Language }) => {
  const t = translations[lang].insights;

  return (
    <section id="insights" className="py-28 bg-[#070A12] relative overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3.5 py-1.5 rounded-full bg-[#10162A] border border-white/[0.08] text-[11px] font-mono font-bold text-[#16C7FF] uppercase tracking-widest mb-4"
          >
            {t.kicker}
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
            className="text-base sm:text-lg text-[#8992A5] leading-relaxed"
          >
            {t.sub}
          </motion.p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-7 rounded-[1.5rem] bg-[#0B0E1B]/50 backdrop-blur-sm border border-white/[0.05] hover:border-[#168BFF]/30 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11px] font-bold text-[#168BFF] bg-[#168BFF]/10 px-3 py-1 rounded-full border border-[#168BFF]/20 uppercase tracking-widest">
                    {article.category}
                  </span>
                  <span className="text-xs text-[#8992A5] flex items-center gap-1.5 font-medium tracking-wide">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-[#168BFF] transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-sm text-[#8992A5] leading-relaxed mb-6 font-sans">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-5 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-400 font-medium">
                <span>{article.date}</span>
                <span className="inline-flex items-center gap-1 text-[#168BFF] font-bold group-hover:translate-x-1 transition-transform">
                  Ler artigo <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
