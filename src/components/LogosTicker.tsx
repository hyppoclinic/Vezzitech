import React from 'react';

const googleEcosystemNames = [
  "Google Cloud Partner",
  "React & Vite Engine",
  "Meta Ads API",
  "Google Ads Regional",
  "Google AI Studio & Gemini",
  "WhatsApp Business API",
  "Answer Engine Optimization (AEO)",
  "Cloud Run Serverless"
];

export const LogosTicker = () => {
  const repeatedItems = [
    ...googleEcosystemNames,
    ...googleEcosystemNames,
    ...googleEcosystemNames
  ];

  return (
    <section className="w-full py-10 bg-[#000000] border-t border-b border-slate-900 overflow-hidden flex flex-col items-center relative">
      <div className="flex items-center gap-2 mb-4 text-center">
        <span className="w-2 h-2 rounded-full bg-[#00E676] shadow-[0_0_8px_#00E676]"></span>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
          TECNOLOGIAS & INFRAESTRUTURA DE ALTA PERFORMANCE
        </p>
      </div>
      
      <div className="relative w-full max-w-7xl mx-auto flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex animate-marquee whitespace-nowrap py-2">
          {repeatedItems.map((name, i) => (
            <div key={i} className="mx-6 flex items-center justify-center">
              <span className="text-sm md:text-base font-heading font-semibold text-slate-500 hover:text-[#00E676] transition-colors duration-300 tracking-tight cursor-default">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
