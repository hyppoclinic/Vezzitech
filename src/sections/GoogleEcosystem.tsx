import { Cloud, BrainCircuit, Sparkles, LayoutGrid } from 'lucide-react';
import { translations, Language } from '../translations';

interface GoogleEcosystemProps {
  lang: Language;
}

export const GoogleEcosystem = ({ lang }: GoogleEcosystemProps) => {
  const t = translations[lang];

  const icons = [
    <Cloud key="1" className="w-6 h-6 text-[#12DCEF]" />,
    <BrainCircuit key="2" className="w-6 h-6 text-[#33BC65]" />,
    <Sparkles key="3" className="w-6 h-6 text-[#12DCEF]" />,
    <LayoutGrid key="4" className="w-6 h-6 text-[#33BC65]" />
  ];

  return (
    <section id="google" className="py-20 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="max-w-4xl mb-16 text-left">
            <div className="text-[#33BC65] font-mono text-xs mb-3 font-semibold uppercase tracking-widest">// COGNITIVE PLATFORMS</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.15] tracking-tight text-white font-heading">
                {lang === 'pt' ? (
                  <>
                    Ecossistema Google Cloud
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#33BC65] via-emerald-200 to-cyan-300 mt-1 font-normal">
                      totalmente orquestrado para alta performance.
                    </span>
                  </>
                ) : (
                  <>
                    Google Cloud Ecosystem
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#33BC65] via-emerald-200 to-cyan-300 mt-1 font-normal">
                      fully orchestrated for high-end performance.
                    </span>
                  </>
                )}
            </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.ecosystemSection.items.map((item, index) => (
                <div key={item.title} className="bg-glass border-glass p-8 rounded-2xl hover:bg-white/5 transition flex flex-col items-start group hover:border-[#33BC65]/30 duration-300">
                        <div className="mb-6 p-3 bg-white/5 rounded-xl border border-white/5 group-hover:bg-[#33BC65]/10 group-hover:border-[#33BC65]/25 transition-all">
                            {icons[index]}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 font-heading group-hover:text-[#33BC65] transition-colors">{item.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
            ))}
        </div>
    </section>
  );
};
