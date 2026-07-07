import { ShoppingCart, HeartPulse, Factory, Landmark, GraduationCap, Sprout, ArrowUpRight } from 'lucide-react';
import { translations, Language } from '../translations';

interface VerticalsProps {
  lang: Language;
}

const icons: Record<string, React.ReactNode> = {
  varejo: <ShoppingCart className="w-6 h-6 text-[#33BC65]" />,
  saude: <HeartPulse className="w-6 h-6 text-[#33BC65]" />,
  industria: <Factory className="w-6 h-6 text-[#33BC65]" />,
  financas: <Landmark className="w-6 h-6 text-[#33BC65]" />,
  educacao: <GraduationCap className="w-6 h-6 text-[#33BC65]" />,
  agro: <Sprout className="w-6 h-6 text-[#33BC65]" />,
};

export const Verticals = ({ lang }: VerticalsProps) => {
  const t = translations[lang];

  return (
    <section id="verticais" aria-label="Setores de Atuação" className="py-24 px-6 border-t border-white/5 relative z-10 bg-[#0A0D10]">
      {/* Subtle background glow */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Simple & Impactful Header styling matched with other sections */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="text-[#33BC65] font-mono text-xs mb-3 font-semibold tracking-widest uppercase">
            {t.verticalsSection.tag}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.15] tracking-tight text-white font-heading">
            {lang === 'pt' ? (
              <>
                Tecnologia Google
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#33BC65] via-emerald-200 to-cyan-300 mt-1 font-normal">
                  sob medida para o seu setor.
                </span>
              </>
            ) : (
              <>
                Google Technology
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#33BC65] via-emerald-200 to-cyan-300 mt-1 font-normal">
                  tailored for your industry.
                </span>
              </>
            )}
          </h2>
          <p className="text-gray-400 text-base md:text-lg font-light font-sans leading-relaxed mt-6 max-w-2xl">
            {t.verticalsSection.sub}
          </p>
        </div>

        {/* 3x2 Grid: Spacious, scannable, and extremely clean */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.verticalsSection.items.map((item, index) => (
            <div
              key={item.id}
              className="bg-zinc-950/20 border border-white/10 rounded-3xl p-6 md:p-8 hover:border-emerald-500/30 hover:bg-white/[0.03] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Corner accent glow on hover */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div>
                {/* Header of the Card */}
                <div className="flex items-center justify-between mb-8">
                  <div className="bg-[#33BC65]/10 p-3.5 rounded-2xl border border-emerald-500/20">
                    {icons[item.id]}
                  </div>
                  <span className="text-[10px] font-mono text-gray-600 font-bold tracking-widest">
                    0{index + 1}
                  </span>
                </div>

                {/* Vertical Title */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#33BC65] transition-colors">
                  {item.title}
                </h3>

                {/* Vertical Description - Simpler copy designed for business owners */}
                <p className="text-sm text-gray-400 leading-relaxed font-sans mb-6">
                  {item.desc}
                </p>
              </div>

              {/* Native Google Tech Badge */}
              <div className="border-t border-white/5 pt-4 mt-auto flex items-center justify-between text-[11px] font-mono text-gray-500">
                <span>Google Cloud + AI</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-[#33BC65] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
