import { motion } from 'motion/react';
import { translations, Language } from '../translations';
import { Target, Globe, TrendingUp, BarChart3, Megaphone, Code2, Bot, ArrowRight, AlertTriangle, CheckCircle2 } from 'lucide-react';

export const ProblemSection = ({ lang }: { lang: Language }) => {
  const t = translations[lang].problem;

  const iconMap: Record<string, React.ReactNode> = {
    target: <Target className="w-5 h-5 text-[#69B4FF]" />,
    globe: <Globe className="w-5 h-5 text-[#168BFF]" />,
    'trending-up': <TrendingUp className="w-5 h-5 text-[#7047FF]" />,
    'bar-chart': <BarChart3 className="w-5 h-5 text-[#69B4FF]" />,
    megaphone: <Megaphone className="w-5 h-5 text-[#69B4FF]" />,
    code: <Code2 className="w-5 h-5 text-[#168BFF]" />,
    bot: <Bot className="w-5 h-5 text-[#7047FF]" />
  };

  return (
    <section id="problema" className="py-24 md:py-32 bg-[#070A12] relative overflow-hidden border-t border-white/[0.08]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#168BFF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10162A] border border-white/[0.1] text-[11px] font-mono font-bold text-[#16C7FF] uppercase tracking-widest mb-4 shadow-sm"
          >
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
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
            <span className="block text-[#8992A5] font-normal text-xl sm:text-2xl md:text-3xl mt-2 font-sans">
              {t.subheading}
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-3 text-base sm:text-lg text-[#8992A5] mt-6 leading-relaxed"
          >
            {t.copy.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </motion.div>
        </div>

        {/* 4 Diagnostic Bottleneck Nodes */}
        <div className="relative max-w-5xl mx-auto mt-12">
          <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-2 gap-4 md:gap-6 pb-6 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 relative z-10">
            {t.nodes.map((node, index) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="w-[85vw] sm:w-[350px] shrink-0 md:w-auto md:shrink snap-center p-7 rounded-[1.5rem] bg-[#0B0E1B]/50 border border-white/[0.05] hover:border-[#16C7FF]/30 transition-all duration-300 group hover:-translate-y-1 shadow-lg relative overflow-hidden backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#10162A] border border-white/[0.12] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform group-hover:border-[#16C7FF]/50 shadow-inner">
                    {iconMap[node.icon]}
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-white mb-1.5 flex items-center gap-2">
                      {node.title}
                    </h3>
                    <p className="text-sm text-[#8992A5] leading-relaxed font-sans">
                      {node.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Central Growth Resolution Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-10 p-7 sm:p-8 rounded-[2rem] bg-gradient-to-r from-[#10162A] via-[#141C36] to-[#10162A] border border-[#16C7FF]/20 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-performance-gradient" />
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-left space-y-1">
                <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#16C7FF]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16C7FF]" />
                  A Solução Vezzitech
                </span>
                <h4 className="text-xl sm:text-2xl font-heading font-bold text-white">
                  {t.highlight}
                </h4>
              </div>
              <button
                onClick={() => {
                  const el = document.getElementById('engenharia');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-performance-gradient text-white text-xs font-extrabold uppercase tracking-wider hover:opacity-95 transition-all cursor-pointer shrink-0 shadow-performance-glow hover:scale-105 active:scale-95"
              >
                <span>Nossa Metodologia</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

