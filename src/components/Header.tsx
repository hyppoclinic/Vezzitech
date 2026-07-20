import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { translations, Language } from '../translations';
import { Menu, X, Globe, ChevronRight } from 'lucide-react';

export const Header = ({ lang, setLang }: { lang: Language, setLang: (l: Language) => void }) => {
  const t = translations[lang].nav;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled 
            ? 'bg-[#030303]/80 backdrop-blur-md border-white/10 py-4' 
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/logo.26.png" alt="Vezzitech" className="h-8" />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('plataforma')} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">{t.platform}</button>
            <button onClick={() => scrollTo('solucoes')} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">{t.solutions}</button>
            <button onClick={() => scrollTo('processo')} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">{t.process}</button>
            <button onClick={() => scrollTo('tecnologia')} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">{t.tech}</button>
            <a href="/modernizar-wordpress" className="text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors">Migrar WordPress</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
              <Globe className="w-4 h-4 text-gray-400" />
              <select 
                value={lang} 
                onChange={(e) => setLang(e.target.value as Language)}
                className="bg-transparent text-xs font-medium text-gray-300 outline-none cursor-pointer"
              >
                <option value="pt" className="bg-[#0A0A0A]">PT</option>
                <option value="en" className="bg-[#0A0A0A]">EN</option>
              </select>
            </div>
            
            <a href="/login" className="text-sm font-medium text-gray-300 hover:text-white transition-colors px-4 py-2">
              {t.login}
            </a>
            
            <button onClick={() => scrollTo('cta')} className="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-md bg-emerald-500 px-4 py-2 font-medium text-neutral-50 hover:bg-emerald-600 transition-all">
              <span className="text-sm">Começar</span>
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                <div className="relative h-full w-8 bg-white/20" />
              </div>
            </button>
          </div>

          <button 
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#030303] pt-24 px-6 flex flex-col md:hidden"
          >
            <div className="flex flex-col gap-6 text-lg font-medium text-gray-300">
              <button onClick={() => scrollTo('plataforma')} className="text-left flex items-center justify-between border-b border-white/10 pb-4">
                {t.platform} <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
              <button onClick={() => scrollTo('solucoes')} className="text-left flex items-center justify-between border-b border-white/10 pb-4">
                {t.solutions} <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
              <button onClick={() => scrollTo('processo')} className="text-left flex items-center justify-between border-b border-white/10 pb-4">
                {t.process} <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
              <button onClick={() => scrollTo('tecnologia')} className="text-left flex items-center justify-between border-b border-white/10 pb-4">
                {t.tech} <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
              <a href="/modernizar-wordpress" className="text-left flex items-center justify-between border-b border-white/10 pb-4 text-emerald-400 font-semibold">
                Migrar WordPress <ChevronRight className="w-5 h-5 text-gray-600" />
              </a>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-gray-400" />
                <select 
                  value={lang} 
                  onChange={(e) => setLang(e.target.value as Language)}
                  className="bg-transparent text-base font-medium text-gray-300 outline-none w-full border-b border-white/10 pb-4"
                >
                  <option value="pt" className="bg-[#0A0A0A]">Português</option>
                  <option value="en" className="bg-[#0A0A0A]">English</option>
                </select>
              </div>
              <a href="/login" className="w-full py-4 text-center text-gray-300 font-medium border border-white/10 rounded-xl">
                {t.login}
              </a>
              <button onClick={() => scrollTo('cta')} className="w-full py-4 bg-emerald-500 text-white font-medium rounded-xl">
                Começar
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
