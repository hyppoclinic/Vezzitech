import logoImg from '../assets/logo_1.png';

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

export const Logo = ({ className = "h-10 md:h-12 w-auto", onClick }: LogoProps) => {
  return (
    <img 
      src={logoImg} 
      alt="Vezzitech" 
      className={`${className} object-contain cursor-pointer`}
      onClick={onClick}
      loading="eager"
      decoding="async"
    />
  );
};

