import { Play, LineChart, Code, Target, ArrowRight } from 'lucide-react';
import { translations, Language } from '../translations';

interface ProcessProps {
  lang: Language;
}

export const Process = ({ lang }: ProcessProps) => {
  const t = translations[lang];

  const icons = [
    <Target key="1" className="w-5 h-5 text-[#12DCEF]" />,
    <Code key="2" className="w-5 h-5 text-[#33BC65]" />,
    <Play key="3" className="w-5 h-5 text-[#12DCEF]" />,
    <LineChart key="4" className="w-5 h-5 text-[#33BC65]" />
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5 relative">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-emerald-600/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-3xl mb-16">
            <div className="text-[#33BC65] font-mono text-xs mb-3 font-semibold tracking-widest uppercase">// {t.processSection.tag}</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.15] tracking-tight text-white font-heading">
                {lang === 'pt' ? (
                  <>
                    Como estruturamos sua jornada.
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#33BC65] via-emerald-200 to-cyan-300 mt-1 font-normal">
                      Passo a passo, da análise estratégica ao deploy.
                    </span>
                  </>
                ) : (
                  <>
                    How we structure your journey.
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#33BC65] via-emerald-200 to-cyan-300 mt-1 font-normal">
                      Step by step, from strategic analysis to deploy.
                    </span>
                  </>
                )}
            </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
            {t.processSection.items.map((step, index) => (
                <div key={step.title} className="bg-glass border-glass p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between h-80 group hover:border-[#33BC65]/30 transition-all duration-300">
                    {/* Elegant Ambient Glow Background Blur Inside the Card */}
                    <div className="absolute -right-20 -bottom-20 w-44 h-44 bg-[#33BC65]/5 group-hover:bg-[#33BC65]/15 rounded-full blur-[50px] pointer-events-none transition-all duration-500"></div>
                    <div className="absolute -left-20 -top-20 w-44 h-44 bg-[#12DCEF]/5 group-hover:bg-[#12DCEF]/15 rounded-full blur-[50px] pointer-events-none transition-all duration-500"></div>
                    
                    <div className="flex justify-between items-start mb-6 relative z-10">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/10 flex items-center justify-center">
                            {icons[index]}
                        </div>
                        <span className="text-xs font-mono font-bold text-gray-500 group-hover:text-[#33BC65] transition-colors font-mono">PASSO // {step.num}</span>
                    </div>

                    <div className="relative z-10">
                        <h3 className="text-lg font-bold text-white mb-2 leading-snug tracking-tight font-heading">{step.title}</h3>
                        <p className="text-gray-400 text-xs leading-relaxed">{step.desc}</p>
                    </div>

                    {index < 3 && (
                        <div className="hidden lg:block absolute top-10 -right-2 translate-x-1/2 z-10 text-white/20">
                            <ArrowRight className="w-5" />
                        </div>
                    )}
                </div>
            ))}
        </div>
    </section>
  );
};
