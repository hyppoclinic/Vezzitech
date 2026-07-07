import { Target, Zap, TrendingUp, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { translations, Language } from '../translations';

interface ValuePropositionProps {
  lang: Language;
}

export const ValueProposition = ({ lang }: ValuePropositionProps) => {
  const t = translations[lang];

  const icons = [
    <ShieldCheck key="1" className="w-5 h-5 text-[#33BC65]" />, 
    <TrendingUp key="2" className="w-5 h-5 text-[#12DCEF]" />, 
    <Zap key="3" className="w-5 h-5 text-[#33BC65]" />, 
    <Target key="4" className="w-5 h-5 text-[#12DCEF]" />, 
  ];

  return (
    <section id="diferenciais" aria-label="Por que a Vezzitech" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-emerald-600/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-3xl mb-16">
            <div className="text-[#33BC65] font-mono text-xs mb-3 font-semibold tracking-widest uppercase">{t.valueProp.tag}</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.15] tracking-tight text-white font-heading">
                {lang === 'pt' ? (
                  <>
                    Nosso foco é acelerar seu negócio.
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-100 to-emerald-200 mt-1 font-normal">
                      Com inovação, segurança e previsibilidade técnica.
                    </span>
                  </>
                ) : (
                  <>
                    Focusing on accelerating your venture.
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-100 to-emerald-200 mt-1 font-normal">
                      With innovation, security, and predictability.
                    </span>
                  </>
                )}
            </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            {t.valueProp.items.map((item, index) => (
                <div key={item.title} className="bg-glass border-glass p-6 md:p-8 rounded-3xl hover:bg-white/[0.04] transition duration-300 relative group overflow-hidden flex flex-col justify-between min-h-[200px] md:min-h-[220px]">
                    {/* Elegant Neon Blur Ambient Lights inside cards */}
                    <div className="absolute -right-16 -bottom-16 w-36 h-36 bg-[#33BC65]/5 group-hover:bg-[#33BC65]/15 rounded-full blur-[45px] pointer-events-none transition-all duration-500"></div>
                    <div className="absolute -left-16 -top-16 w-36 h-36 bg-[#12DCEF]/5 group-hover:bg-[#12DCEF]/15 rounded-full blur-[45px] pointer-events-none transition-all duration-500"></div>
                    
                    <div className="flex justify-between items-start mb-6 relative z-10">
                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#33BC65]/10 border border-[#33BC65]/10 shadow-md">
                            {icons[index]}
                        </div>
                        <span className="text-[10px] bg-white/5 border border-white/5 px-2 py-0.5 rounded text-gray-400 font-mono tracking-wider font-bold">PILAR // {item.num}</span>
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#33BC65] transition-colors flex items-center gap-1.5 font-heading">
                            {item.title} <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                        </h3>
                        <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  );
};
