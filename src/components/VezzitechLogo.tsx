import React from 'react';

export const VezzitechLogo = ({ className = "" }: { className?: string }) => (
  <span className={`inline-flex items-center gap-2 font-heading select-none ${className}`}>
    {/* Geometric High-Performance Tech SVG Icon */}
    <svg 
      className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ease-out" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M12 2L2 22H6L12 10L18 22H22L12 2Z" 
        fill="url(#logo-grad-1)" 
      />
      <path 
        d="M12 10L9 16H15L12 10Z" 
        fill="url(#logo-grad-2)" 
        opacity="0.95"
      />
      <circle cx="12" cy="10" r="1.5" fill="#12DCEF" />
      <defs>
        <linearGradient id="logo-grad-1" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#33BC65" />
          <stop offset="100%" stopColor="#12DCEF" />
        </linearGradient>
        <linearGradient id="logo-grad-2" x1="9" y1="10" x2="15" y2="16" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#12DCEF" />
          <stop offset="100%" stopColor="#33BC65" />
        </linearGradient>
      </defs>
    </svg>
    
    {/* Styled Brand Name Text */}
    <span className="font-extrabold tracking-tight flex items-center leading-none">
      <span className="text-white">Vezzi</span>
      <span className="bg-gradient-to-r from-[#33BC65] to-[#12DCEF] bg-clip-text text-transparent font-black ml-0.5">
        tech
      </span>
    </span>
  </span>
);



