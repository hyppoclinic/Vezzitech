import React from 'react';
import logoImg from '../assets/logo1-1.png';

export const VezzitechLogo = ({ className = "" }: { className?: string }) => (
  <span className={`inline-flex items-center select-none ${className}`}>
    <img 
      src={logoImg} 
      alt="Vezzitech" 
      className="h-7 md:h-8 w-auto object-contain"
      referrerPolicy="no-referrer"
    />
  </span>
);




