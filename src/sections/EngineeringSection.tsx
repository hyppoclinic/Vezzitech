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

        {/* 7 Step Timeline */}
        <div className="relative max-w-5xl mx-auto mt-16 md:mt-24">
          {/* Main vertical line */}
          <div className="absolute top-0 bottom-0 left-[28px] md:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#168BFF]/0 via-[#168BFF]/20 to-[#168BFF]/0" />
          
          <div className="space-y-12 md:space-y-24">
            {t.steps.map((step, index) => {
              const isEven = index % 2 !== 0; // Alternating sides
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-[28px] md:left-1/2 -translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-[#070A12] border border-[#168BFF]/30 shadow-[0_0_30px_rgba(22,139,255,0.2)] z-10 mt-6 md:mt-0">
                    <div className="w-11 h-11 rounded-full bg-[#10162A] flex items-center justify-center border border-white/[0.08] shadow-inner group-hover:scale-110 transition-transform">
                      {stepIcons[index]}
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className={`w-full pl-[80px] md:pl-0 md:w-1/2 ${
                    isEven ? 'md:pr-16 text-left md:text-right flex md:justify-end' : 'md:pl-16 text-left'
                  }`}>
                    <div className="max-w-md p-8 rounded-[1.5rem] bg-[#0B0E1B]/80 backdrop-blur-md border border-white/[0.05] hover:border-[#168BFF]/40 transition-all duration-300 shadow-2xl relative group hover:-translate-y-1">
                      
                      {/* Connecting Line (Desktop only) */}
                      <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-16 h-[2px] bg-gradient-to-r ${
                        isEven ? 'from-transparent to-[#168BFF]/20 -right-16' : 'from-[#168BFF]/20 to-transparent -left-16'
                      }`} />

                      <div className={`flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                        <span className="text-[11px] font-bold text-[#168BFF] bg-[#168BFF]/10 px-3.5 py-1.5 rounded-full border border-[#168BFF]/20 uppercase tracking-[0.2em] mb-5">
                          PASSO {step.number}
                        </span>
                        
                        <h3 className="text-2xl font-heading font-bold text-white mb-3 tracking-tight group-hover:text-[#168BFF] transition-colors">
                          {step.title}
                        </h3>
                        
                        <p className={`text-base text-[#8992A5] leading-relaxed font-sans ${isEven ? 'md:text-right' : 'text-left'}`}>
                          {step.desc}
                        </p>
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
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
