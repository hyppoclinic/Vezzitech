import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { translations, Language } from '../translations';
import { Menu, X, Globe, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Header = ({ lang, setLang }: { lang: Language, setLang: (l: Language) => void }) => {
  const t = translations[lang].nav;
  const brand = translations[lang].brand;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const whatsappNumber = "+5544998266950";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=Olá! Gostaria de conversar com a equipe da Vezzitech sobre a Engenharia de Crescimento para minha empresa.`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/?scroll=${id}`;
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-[#0B0B0D]/85 backdrop-blur-md border-b border-white/[0.05] shadow-lg' : 'py-5 bg-transparent'}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer group" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Logo className="h-8 md:h-10 w-auto" />
          </div>

          {/* Pill Navigation (Desktop LG+) */}
          <nav className={`hidden lg:flex items-center gap-1 p-1.5 rounded-full border transition-all duration-300 ${
            isScrolled 
              ? 'bg-[#10162A]/90 backdrop-blur-md border-white/[0.08] shadow-lg' 
              : 'bg-white/[0.03] backdrop-blur-sm border-white/[0.06]'
          }`}>
            <button 
              onClick={() => scrollTo('oferta')} 
              className={`relative px-3.5 py-1.5 text-[13px] font-semibold tracking-wide rounded-full transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap flex-shrink-0 ${isScrolled ? 'bg-[#1765FF]/20 text-[#69B4FF] hover:bg-[#1765FF]/30' : 'text-[#69B4FF] bg-[#1765FF]/10 hover:bg-[#1765FF]/20'}`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#1765FF] animate-pulse shrink-0" />
              <span className="whitespace-nowrap">{t.offer}</span>
            </button>
            <button 
              onClick={() => scrollTo('solucoes')} 
              className="relative px-3.5 py-1.5 text-[13px] font-medium tracking-wide text-zinc-300 hover:text-white hover:bg-white/[0.06] rounded-full transition-all cursor-pointer whitespace-nowrap flex-shrink-0"
            >
              {t.solutions}
            </button>
            <button 
              onClick={() => scrollTo('engenharia')} 
              className="relative px-3.5 py-1.5 text-[13px] font-medium tracking-wide text-zinc-300 hover:text-white hover:bg-white/[0.06] rounded-full transition-all cursor-pointer whitespace-nowrap flex-shrink-0"
            >
              {t.engineering}
            </button>
            <button 
              onClick={() => scrollTo('cases')} 
              className="relative px-3.5 py-1.5 text-[13px] font-medium tracking-wide text-zinc-300 hover:text-white hover:bg-white/[0.06] rounded-full transition-all cursor-pointer whitespace-nowrap flex-shrink-0"
            >
              {t.cases}
            </button>
            <button 
              onClick={() => scrollTo('sobre')} 
              className="relative px-3.5 py-1.5 text-[13px] font-medium tracking-wide text-zinc-300 hover:text-white hover:bg-white/[0.06] rounded-full transition-all cursor-pointer whitespace-nowrap flex-shrink-0"
            >
              {t.about}
            </button>
          </nav>

          {/* Right Side: Lang switcher + WhatsApp + CTA + Mobile trigger */}
          <div className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
            <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-[#10162A] border border-white/[0.08] flex-shrink-0">
              <Globe className="w-3.5 h-3.5 text-[#8992A5] shrink-0" />
              <select 
                value={lang} 
                onChange={(e) => setLang(e.target.value as Language)}
                className="bg-transparent text-xs font-semibold text-white outline-none cursor-pointer"
                aria-label="Language selector"
              >
                <option value="pt" className="bg-[#10162A] text-white">PT</option>
                <option value="en" className="bg-[#10162A] text-white">EN</option>
              </select>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:flex items-center gap-1.5 text-xs font-semibold text-[#8992A5] hover:text-white px-2.5 py-2 transition-colors group whitespace-nowrap flex-shrink-0"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-[#168BFF] group-hover:scale-110 transition-transform shrink-0" />
              <span>WhatsApp</span>
            </a>

            <button 
              onClick={() => scrollTo('diagnostico')} 
              className="hidden sm:inline-flex h-9 md:h-10 items-center justify-center gap-1.5 sm:gap-2 rounded-full bg-performance-gradient hover:opacity-95 px-4 sm:px-5 text-xs font-extrabold text-white tracking-wider transition-all duration-200 shadow-performance-glow hover:scale-[1.02] active:scale-95 cursor-pointer whitespace-nowrap flex-shrink-0"
            >
              <span className="whitespace-nowrap">{t.ctaPrimary}</span>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            </button>

            {/* Mobile / Tablet Menu Button */}
            <button 
              className="lg:hidden text-white p-2 rounded-lg bg-[#10162A] border border-white/[0.08] hover:bg-[#151D38] transition-colors flex-shrink-0"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Open menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#070A12] pt-24 px-6 flex flex-col lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-2 text-sm font-semibold text-white">
              <button onClick={() => scrollTo('oferta')} className="text-left py-3.5 border-b border-white/[0.06] flex items-center justify-between text-[#69B4FF] font-bold">
                {t.offer} <ArrowUpRight className="w-4 h-4 text-[#168BFF]" />
              </button>
              <button onClick={() => scrollTo('solucoes')} className="text-left py-3.5 border-b border-white/[0.06] flex items-center justify-between text-zinc-300">
                {t.solutions} <ArrowUpRight className="w-4 h-4 text-[#168BFF]" />
              </button>
              <button onClick={() => scrollTo('engenharia')} className="text-left py-3.5 border-b border-white/[0.06] flex items-center justify-between text-zinc-300">
                {t.engineering} <ArrowUpRight className="w-4 h-4 text-[#168BFF]" />
              </button>
              <button onClick={() => scrollTo('cases')} className="text-left py-3.5 border-b border-white/[0.06] flex items-center justify-between text-zinc-300">
                {t.cases} <ArrowUpRight className="w-4 h-4 text-[#168BFF]" />
              </button>
              <button onClick={() => scrollTo('insights')} className="text-left py-3.5 border-b border-white/[0.06] flex items-center justify-between text-zinc-300">
                {t.insights} <ArrowUpRight className="w-4 h-4 text-[#168BFF]" />
              </button>
              <button onClick={() => scrollTo('sobre')} className="text-left py-3.5 border-b border-white/[0.06] flex items-center justify-between text-zinc-300">
                {t.about} <ArrowUpRight className="w-4 h-4 text-[#168BFF]" />
              </button>
            </div>

            <div className="mt-8 flex flex-col gap-4 pb-12">
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#10162A] border border-white/[0.08]">
                <Globe className="w-4 h-4 text-[#8992A5]" />
                <select 
                  value={lang} 
                  onChange={(e) => setLang(e.target.value as Language)}
                  className="bg-transparent text-sm font-semibold text-white outline-none w-full"
                >
                  <option value="pt" className="bg-[#10162A]">Português (Brasil)</option>
                  <option value="en" className="bg-[#10162A]">English</option>
                </select>
              </div>

              <button 
                onClick={() => scrollTo('diagnostico')} 
                className="w-full py-4 bg-performance-gradient text-white font-extrabold text-sm uppercase tracking-wider rounded-full shadow-performance-glow flex items-center justify-center gap-2"
              >
                <span>{t.ctaPrimary}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[#10162A] border border-white/[0.1] text-white font-bold text-xs uppercase tracking-wider rounded-full flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#168BFF]" />
                <span>{t.whatsapp}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

