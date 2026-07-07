import { Play, LineChart, Code, Target, Rocket } from 'lucide-react';
import { translations, Language } from '../translations';

interface ProcessProps {
  lang: Language;
}

export const Process = ({ lang }: ProcessProps) => {
  const t = translations[lang];

  const icons = [
    <Target key="1" strokeWidth={1.5} className="w-6 h-6 text-[#33BC65]" />,
    <Code key="2" strokeWidth={1.5} className="w-6 h-6 text-[#33BC65]" />,
    <Rocket key="3" strokeWidth={1.5} className="w-6 h-6 text-[#33BC65]" />,
    <LineChart key="4" strokeWidth={1.5} className="w-6 h-6 text-[#33BC65]" />
  ];

  return (
    <section id="processo" aria-label="Como Funcionamos" className="py-16 md:py-24 px-6 max-w-7xl mx-auto border-t border-white/5 relative">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-emerald-600/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-3xl mb-20 text-center mx-auto">
            <div className="text-[#33BC65] font-mono text-xs mb-3 font-semibold tracking-widest uppercase">{t.processSection.tag}</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.15] tracking-tight text-white font-heading">
                {t.processSection.heading}
            </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#33BC65]/0 via-[#33BC65]/20 to-[#33BC65]/0 -translate-x-1/2"></div>
            
            <div className="space-y-12 md:space-y-24">
                {t.processSection.items.map((step, index) => (
                    <div key={step.title} className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                        
                        {/* Timeline node */}
                        <div className="absolute left-[39px] md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#070707] border-2 border-[#33BC65] flex items-center justify-center shadow-[0_0_20px_rgba(51,188,101,0.3)] z-10">
                            {icons[index]}
                        </div>

                        {/* Content block */}
                        <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${index % 2 !== 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 text-left'}`}>
                            <div className="bg-white/[0.02] border border-white/10 p-5 sm:p-8 rounded-3xl relative overflow-hidden group hover:border-[#33BC65]/30 transition-all duration-300">
                                <div className="absolute -right-20 -bottom-20 w-44 h-44 bg-[#33BC65]/5 group-hover:bg-[#33BC65]/15 rounded-full blur-[50px] pointer-events-none transition-all duration-500"></div>
                                <span className="text-[10px] font-mono font-bold text-[#33BC65] tracking-widest uppercase mb-4 block">Fase 0{step.num}</span>
                                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight font-heading">{step.title}</h3>
                                <p className="text-gray-400 text-base leading-relaxed">{step.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};
