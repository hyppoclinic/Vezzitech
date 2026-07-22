import { motion } from 'motion/react';

const googleEcosystemNames = [
  "Google Cloud",
  "Google AI Studio",
  "Gemini 2.5",
  "Firebase",
  "Vertex AI",
  "Google Workspace",
  "Cloud Run"
];

export const LogosTicker = () => {
  const repeatedItems = [
    ...googleEcosystemNames,
    ...googleEcosystemNames,
    ...googleEcosystemNames,
    ...googleEcosystemNames
  ];

  return (
    <section className="w-full py-12 bg-[#030303] border-t border-b border-white/[0.05] overflow-hidden flex flex-col items-center relative">
      <div className="flex items-center gap-2 mb-6 text-center">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
          TECNOLOGIAS DO ECOSSISTEMA GOOGLE
        </p>
      </div>
      
      <div className="relative w-full max-w-7xl mx-auto flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex animate-marquee whitespace-nowrap py-2">
          {repeatedItems.map((name, i) => (
            <div key={i} className="mx-8 flex items-center justify-center">
              <span className="text-lg md:text-xl font-heading font-bold text-zinc-500 hover:text-zinc-300 transition-colors duration-300 tracking-tight cursor-default">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
