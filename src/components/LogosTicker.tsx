import { motion } from 'motion/react';

const logos = [
  "Acme Corp", "Quantum", "Echo Valley", "Nexus", "Nebula", "Vertex", "Acme Corp", "Quantum", "Echo Valley"
];

export const LogosTicker = () => {
  return (
    <div className="w-full py-12 bg-[#030303] border-t border-white/[0.05] overflow-hidden flex flex-col items-center">
      <p className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-8 text-center">
        Empresas que confiam na nossa engenharia
      </p>
      
      <div className="relative w-full max-w-7xl mx-auto flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <div className="flex animate-marquee whitespace-nowrap">
          {logos.map((logo, i) => (
            <div key={i} className="mx-12 flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-300">
              <span className="text-xl font-heading font-bold text-white tracking-tight">{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
