import React from 'react';

export const VezzitechLogo = ({ className = "" }: { className?: string }) => (
  <span className={`inline-flex items-center ${className}`}>
    {/* Substitua o 'src' abaixo pelo caminho do seu logo em PNG (ex: /logo.png na pasta public) */}
    <img 
      src="/logo.png" 
      alt="Vezzitech Logo" 
      className="h-5 md:h-6 w-auto object-contain"
    />
  </span>
);


