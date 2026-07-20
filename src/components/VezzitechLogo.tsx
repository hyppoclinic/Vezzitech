import React from 'react';

export const VezzitechLogo = ({ className = "" }: { className?: string }) => (
  <span className={`inline-flex items-center select-none ${className}`}>
    <img 
      src="/logo.26.png" 
      alt="Vezzitech" 
      className="h-7 md:h-8 w-auto object-contain"
      referrerPolicy="no-referrer"
    />
  </span>
);




