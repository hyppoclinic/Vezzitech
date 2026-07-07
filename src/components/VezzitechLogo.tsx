import React from 'react';

export const VezzitechLogo = ({ className = "", iconSize }: { className?: string; iconSize?: number }) => (
  <span className={`inline-flex items-center ${className}`}>
    <span className="font-bold tracking-tight text-white font-sans italic">
      Vezzitech
    </span>
  </span>
);

