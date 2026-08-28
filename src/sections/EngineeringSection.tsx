import { motion } from 'motion/react';
import { translations, Language } from '../translations';
import { Search, Compass, Wrench, Target, Zap, Activity, ArrowRight } from 'lucide-react';

export const EngineeringSection = ({ lang }: { lang: Language }) => {
  const t = translations[lang].methodology;

  const stepIcons = [
    <Search className="w-5 h-5 text-[#16C7FF]" key="1" />,
    <Compass className="w-5 h-5 text-[#168BFF]" key="2" />,
    <Wrench className="w-5 h-5 text-[#7047FF]" key="3" />,
    <Target className="w-5 h-5 text-[#16C7FF]" key="4" />,
    <Zap className="w-5 h-5 text-[#168BFF]" key="5" />,
    <Activity className="w-5 h-5 text-[#7047FF]" key="6" />
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

        {/* 6 Step Grid Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="p-7 rounded-2xl bg-[#10162A] border border-white/[0.08] hover:border-[#168BFF]/40 transition-all duration-300 group hover:-translate-y-1 relative"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#070A12] border border-white/[0.1] flex items-center justify-center">
                  {stepIcons[index]}
                </div>
                <span className="text-xs font-mono font-bold text-[#16C7FF] bg-[#16C7FF]/10 px-2.5 py-1 rounded-md border border-[#16C7FF]/20">
                  {step.code}
                </span>
              </div>

              <span className="text-3xl font-heading font-black text-white/10 group-hover:text-white/20 transition-colors block mb-2">
                {step.number}
              </span>

              <h3 className="text-xl font-heading font-bold text-white mb-2">
                {step.title}
              </h3>

              <p className="text-sm text-[#8992A5] leading-relaxed">
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
