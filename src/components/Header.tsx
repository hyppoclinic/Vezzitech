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
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled 
            ? 'bg-[#070A12]/92 backdrop-blur-md border-white/[0.08] py-3.5 shadow-[0_4px_30px_rgba(22,139,255,0.08)]' 
            : 'bg-transparent border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Logo className="h-9 md:h-11 w-auto" />
            <span className="hidden xl:inline-block text-[11px] font-semibold text-[#8992A5] border-l border-white/10 pl-3">
              {brand.descriptor}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <button 
              onClick={() => scrollTo('solucoes')} 
              className="relative py-1 text-xs font-semibold tracking-wider text-[#8992A5] hover:text-white transition-colors cursor-pointer after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#168BFF] after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
            >
              {t.solutions}
            </button>
            <button 
              onClick={() => scrollTo('engenharia')} 
              className="relative py-1 text-xs font-semibold tracking-wider text-[#8992A5] hover:text-white transition-colors cursor-pointer after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#168BFF] after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
            >
              {t.engineering}
            </button>
            <button 
              onClick={() => scrollTo('cases')} 
              className="relative py-1 text-xs font-semibold tracking-wider text-[#8992A5] hover:text-white transition-colors cursor-pointer after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#168BFF] after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
            >
              {t.cases}
            </button>
            <button 
              onClick={() => scrollTo('insights')} 
              className="relative py-1 text-xs font-semibold tracking-wider text-[#8992A5] hover:text-white transition-colors cursor-pointer after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#168BFF] after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
            >
              {t.insights}
            </button>
            <button 
              onClick={() => scrollTo('sobre')} 
              className="relative py-1 text-xs font-semibold tracking-wider text-[#8992A5] hover:text-white transition-colors cursor-pointer after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#168BFF] after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
            >
              {t.about}
            </button>
          </nav>

          {/* Desktop Right Side: Lang switcher + Performance CTA */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#10162A] border border-white/[0.08]">
              <Globe className="w-3.5 h-3.5 text-[#8992A5]" />
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
              className="hidden lg:flex items-center gap-1.5 text-xs font-semibold text-[#8992A5] hover:text-white px-2.5 py-2 transition-colors group"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-[#168BFF] group-hover:scale-110 transition-transform" />
              <span>WhatsApp</span>
            </a>

            <button 
              onClick={() => scrollTo('diagnostico')} 
              className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-performance-gradient hover:opacity-95 px-5 text-xs font-extrabold text-white tracking-wider transition-all duration-200 shadow-performance-glow hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              <span>{t.ctaPrimary}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white p-2 rounded-lg bg-[#10162A] border border-white/[0.08]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Open menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
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

