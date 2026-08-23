import { useState } from 'react';
import logoImg from '../assets/logo.png';

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
        <img 
          src="/logo.png" 
          alt="Vezzitech" 
          className={`${className} object-contain`}
          onError={() => {}}
        />
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
