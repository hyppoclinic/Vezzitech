import { useState } from 'react';
import logoImg from '../assets/logo_26.png';

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

export const Logo = ({ className = "h-10 md:h-12 w-auto", onClick }: LogoProps) => {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div 
        onClick={onClick}
        className="flex items-center gap-2.5 cursor-pointer select-none py-1"
        aria-label="Vezzitech"
      >
        {/* Vector stylized symbol as bulletproof fallback */}
        <svg className="h-8 md:h-9 w-auto aspect-square" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M15 25L50 85L85 25H62L50 55L38 25H15Z" 
            fill="#FFD000" 
          />
          <path 
            d="M50 85L85 25L75 25L50 70L25 25L15 25L50 85Z" 
            fill="#FFD000" 
          />
        </svg>
        <span className="font-heading font-black tracking-tight text-xl md:text-2xl text-white">
          vezzi<span className="text-[#FFD000]">tech</span>
        </span>
      </div>
    );
  }

  return (
    <img 
      src={logoImg} 
      alt="Vezzitech" 
      className={`${className} object-contain cursor-pointer`}
      onClick={onClick}
      onError={() => setImgError(true)}
      loading="eager"
      decoding="async"
    />
  );
};
