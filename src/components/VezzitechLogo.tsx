import React from 'react';
import { BrainCircuit } from 'lucide-react';

export const VezzitechLogo = ({ className = "", iconSize = 18 }: { className?: string; iconSize?: number }) => (
  <span className={`inline-flex items-center gap-2.5 ${className}`}>
    <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 shadow-[0_0_12px_rgba(51,188,101,0.15)] shrink-0">
      <BrainCircuit className="text-[#33BC65] animate-pulse" size={iconSize} />
      <span className="absolute inset-0 bg-emerald-500/5 rounded-lg animate-ping opacity-25 pointer-events-none"></span>
    </div>
    <span className="font-semibold tracking-tight text-white font-sans italic">
      Vezzitech
    </span>
  </span>
);

