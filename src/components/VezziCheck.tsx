import React from 'react';

interface VezziCheckProps {
  className?: string;
  size?: number;
}

export const VezziCheck = ({ className = "", size = 20 }: VezziCheckProps) => {
  return (
    <div 
      className={`inline-flex items-center justify-center rounded-lg bg-[#00E676]/10 border border-[#00E676]/30 text-[#00E676] shadow-[0_0_15px_rgba(0,230,118,0.15)] shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        className="w-3/4 h-3/4"
        stroke="currentColor" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        {/* Stylized sharp V checkmark matching Vezzitech branding */}
        <polyline points="4 12.5 9.5 18 20 5.5" stroke="#00E676" />
      </svg>
    </div>
  );
};
