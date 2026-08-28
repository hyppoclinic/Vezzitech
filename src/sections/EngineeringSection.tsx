import { motion } from 'motion/react';
import { translations, Language } from '../translations';
import { Search, Compass, Wrench, Target, Zap, Activity, TrendingUp, ArrowRight } from 'lucide-react';

export const EngineeringSection = ({ lang }: { lang: Language }) => {
  const t = translations[lang].methodology;

  const stepIcons = [
    <Search className="w-5 h-5 text-[#69B4FF]" key="1" />,
    <Compass className="w-5 h-5 text-[#168BFF]" key="2" />,
    <Wrench className="w-5 h-5 text-[#7047FF]" key="3" />,
    <Target className="w-5 h-5 text-[#69B4FF]" key="4" />,
    <Zap className="w-5 h-5 text-[#168BFF]" key="5" />,
    <Activity className="w-5 h-5 text-[#7047FF]" key="6" />,
    <TrendingUp className="w-5 h-5 text-[#69B4FF]" key="7" />
  ];

  return (
    <section id="engenharia" className="py-28 bg-[#070A12] relative overflow-hidden border-t border-white/[0.06]">
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

        {/* 7 Step Grid Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="p-8 rounded-[1.5rem] bg-[#0B0E1B]/50 backdrop-blur-sm border border-white/[0.05] hover:border-[#168BFF]/30 transition-all duration-300 group hover:-translate-y-1 shadow-lg relative"
            >
              <div className="flex flex-col mb-4">
                <span className="text-4xl font-heading font-black text-white/5 group-hover:text-white/10 transition-colors absolute top-6 right-6">
                  {step.number}
                </span>
                <div className="w-12 h-12 rounded-xl bg-[#10162A] border border-white/[0.1] flex items-center justify-center mb-6 shadow-inner">
                  {stepIcons[index]}
                </div>
              </div>

              <h3 className="text-xl font-heading font-bold text-white mb-3">
                {step.title}
              </h3>

              <p className="text-sm text-[#8992A5] leading-relaxed font-sans">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing Phrase Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 p-8 rounded-2xl bg-[#10162A] border border-white/[0.08] text-center"
        >
          <p className="text-lg sm:text-xl font-heading font-extrabold text-white tracking-wide">
            <span className="text-[#16C7FF]">Estratégia</span> antes da execução. &nbsp;
            <span className="text-[#168BFF]">Tecnologia</span> antes da escala. &nbsp;
            <span className="text-[#7047FF]">Dados</span> antes da decisão.
          </p>

          <div className="mt-6">
            <button
              onClick={() => {
                const el = document.getElementById('diagnostico');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#16C7FF] hover:text-white transition-colors cursor-pointer"
            >
              <span>Solicitar Diagnóstico Estratégico</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
