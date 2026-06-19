import React from 'react';

export const VezzitechLogo = ({ className = "h-8" }: { className?: string }) => (
  <svg viewBox="0 0 200 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="30" fontFamily="sans-serif" fontSize="28" fontWeight="bold" fill="white">
      VEZZI<tspan fill="#33BC65">TECH</tspan>
    </text>
  </svg>
);
