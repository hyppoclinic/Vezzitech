import { motion } from 'motion/react';
import { translations, Language } from '../translations';
import { Megaphone, Code2, Bot, BarChart3, ArrowRight } from 'lucide-react';

export const ProblemSection = ({ lang }: { lang: Language }) => {
  const t = translations[lang].problem;

  const iconMap: Record<string, React.ReactNode> = {
    megaphone: <Megaphone className="w-6 h-6 text-[#16C7FF]" />,
    code: <Code2 className="w-6 h-6 text-[#168BFF]" />,
    bot: <Bot className="w-6 h-6 text-[#7047FF]" />,
    'bar-chart': <BarChart3 className="w-6 h-6 text-[#16C7FF]" />
  };

  return (
    <section id="problema" className="py-24 bg-[#070A12] relative overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
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
            <span className="block text-[#8992A5] font-normal text-2xl sm:text-3xl mt-2">
              {t.subheading}
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-2 text-base text-[#8992A5] mt-6"
          >
            {t.copy.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </motion.div>
        </div>

        {/* 4 Connected Nodes surrounding GROWTH */}
        <div className="relative max-w-5xl mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            {t.nodes.map((node, index) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-7 rounded-2xl bg-[#10162A] border border-white/[0.08] hover:border-[#168BFF]/40 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#070A12] border border-white/[0.1] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    {iconMap[node.icon]}
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-white mb-1 flex items-center gap-2">
                      {node.title}
                      <span className="text-xs font-mono text-[#8992A5]">#0{index + 1}</span>
                    </h3>
                    <p className="text-sm text-[#8992A5] leading-relaxed">
                      {node.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Central Growth Resolution Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#16C7FF]/15 via-[#168BFF]/20 to-[#7047FF]/15 border border-[#168BFF]/40 text-center relative overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#16C7FF]">
                  A Solução Vezzitech
                </span>
                <h4 className="text-xl font-heading font-bold text-white mt-1">
                  {t.highlight}
                </h4>
              </div>
              <button
                onClick={() => {
                  const el = document.getElementById('engenharia');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-performance-gradient text-white text-xs font-extrabold uppercase tracking-wider hover:opacity-95 transition-all cursor-pointer shrink-0"
              >
                <span>Ver nossa engenharia</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
