import { TrendingUp, Users, ArrowUpRight, Award } from 'lucide-react';
import { translations, Language } from '../translations';

interface MetricsProps {
  lang: Language;
}

export const Metrics = ({ lang }: MetricsProps) => {
  const t = translations[lang];

  const icons = [
    <TrendingUp key="1" className="w-4 h-4 text-[#12DCEF]" />,
    <ArrowUpRight key="2" className="w-4 h-4 text-[#33BC65]" />,
    <Users key="3" className="w-4 h-4 text-[#12DCEF]" />
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5 relative">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-emerald-600/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4">
                <div className="text-[#33BC65] font-mono text-xs mb-3 font-semibold uppercase tracking-widest">{t.metricsSection.tag}</div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.15] tracking-tight text-white mb-6 font-heading">
                    {lang === 'pt' ? (
                      <>
                        Impacto real
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-100 to-emerald-200 mt-1 font-normal">
                          comprovado em números.
                        </span>
                      </>
                    ) : (
                      <>
                        Real impact
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-100 to-emerald-200 mt-1 font-normal">
                          proven in numbers.
                        </span>
                      </>
                    )}
                </h2>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
                    {t.metricsSection.sub}
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[#33BC65] text-xs font-bold uppercase tracking-wider">
                    <Award className="w-4 h-4 text-[#12DCEF]" /> {t.metricsSection.badge}
                </div>
            </div>

            <div className="lg:col-span-8 grid md:grid-cols-3 gap-6">
                {t.metricsSection.items.map((stat, i) => (
                    <div key={i} className="bg-glass border-glass p-8 rounded-3xl hover:bg-white/5 transition flex flex-col justify-between h-64 group hover:border-[#33BC65]/30">
                        <div className="flex justify-between items-start mb-6">
                            <span className="text-gray-500 text-xs font-mono font-bold uppercase">METRIC // 0{i + 1}</span>
                            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-[#33BC65] flex items-center justify-center">
                                {icons[i]}
                            </div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2 leading-none uppercase tracking-tight font-heading group-hover:text-[#33BC65] transition-colors">{stat.value}</div>
                            <h4 className="text-white font-semibold text-sm mb-2 font-heading">{stat.label}</h4>
                            <p className="text-gray-400 text-xs leading-relaxed">{stat.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};
