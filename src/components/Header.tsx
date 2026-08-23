import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { translations, Language } from '../translations';
import { Menu, X, Globe, ArrowUpRight, MessageSquare } from 'lucide-react';

export const Header = ({ lang, setLang }: { lang: Language, setLang: (l: Language) => void }) => {
  const t = translations[lang].nav;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const whatsappNumber = "+5544998266950";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=Olá! Gostaria de entender como a Vezzitech pode desenvolver meu projeto de software sob demanda.`;

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
            ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-white/[0.08] py-3.5 shadow-2xl' 
            : 'bg-transparent border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img src="/logo_26.png" alt="Vezzitech" className="h-10 md:h-12 w-auto object-contain" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            <button 
              onClick={() => scrollTo('servicos')} 
              className="text-xs font-semibold uppercase tracking-wider text-[#9A9A9A] hover:text-white transition-colors cursor-pointer"
            >
              {t.services}
            </button>
            <button 
              onClick={() => scrollTo('entregas')} 
              className="text-xs font-semibold uppercase tracking-wider text-[#9A9A9A] hover:text-white transition-colors cursor-pointer"
            >
              {t.deliverables}
            </button>
            <button 
              onClick={() => scrollTo('depoimentos')} 
              className="text-xs font-semibold uppercase tracking-wider text-[#9A9A9A] hover:text-white transition-colors cursor-pointer"
            >
              {t.testimonials}
            </button>
            <button 
              onClick={() => scrollTo('faq')} 
              className="text-xs font-semibold uppercase tracking-wider text-[#9A9A9A] hover:text-white transition-colors cursor-pointer"
            >
              {t.faq}
            </button>
            <button 
              onClick={() => scrollTo('contato')} 
              className="text-xs font-semibold uppercase tracking-wider text-[#9A9A9A] hover:text-white transition-colors cursor-pointer"
            >
              {t.contact}
            </button>
          </nav>

          {/* Desktop Right Side: Lang switcher + Yellow Pill CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#141414] border border-white/[0.08]">
              <Globe className="w-3.5 h-3.5 text-[#9A9A9A]" />
              <select 
                value={lang} 
                onChange={(e) => setLang(e.target.value as Language)}
                className="bg-transparent text-xs font-semibold text-white outline-none cursor-pointer"
                aria-label="Language selector"
              >
                <option value="pt" className="bg-[#111111] text-white">PT</option>
                <option value="en" className="bg-[#111111] text-white">EN</option>
              </select>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1.5 text-xs font-semibold text-[#9A9A9A] hover:text-white px-3 py-2 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#FFD000]" />
              <span>WhatsApp</span>
            </a>

            <button 
              onClick={() => scrollTo('contato')} 
              className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[#FFD000] hover:bg-[#F5C200] px-5 text-xs font-extrabold text-black uppercase tracking-wider transition-all duration-200 shadow-yellow-btn hover:scale-[1.02] cursor-pointer"
            >
              <span>{t.cta}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2 rounded-lg bg-[#141414] border border-white/[0.08]"
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
            className="fixed inset-0 z-40 bg-[#0A0A0A] pt-24 px-6 flex flex-col md:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-4 text-sm font-semibold text-white">
              <button onClick={() => scrollTo('servicos')} className="text-left py-3 border-b border-white/[0.06] flex items-center justify-between text-zinc-300">
                {t.services} <ArrowUpRight className="w-4 h-4 text-[#FFD000]" />
              </button>
              <button onClick={() => scrollTo('entregas')} className="text-left py-3 border-b border-white/[0.06] flex items-center justify-between text-zinc-300">
                {t.deliverables} <ArrowUpRight className="w-4 h-4 text-[#FFD000]" />
              </button>
              <button onClick={() => scrollTo('depoimentos')} className="text-left py-3 border-b border-white/[0.06] flex items-center justify-between text-zinc-300">
                {t.testimonials} <ArrowUpRight className="w-4 h-4 text-[#FFD000]" />
              </button>
              <button onClick={() => scrollTo('faq')} className="text-left py-3 border-b border-white/[0.06] flex items-center justify-between text-zinc-300">
                {t.faq} <ArrowUpRight className="w-4 h-4 text-[#FFD000]" />
              </button>
              <button onClick={() => scrollTo('contato')} className="text-left py-3 border-b border-white/[0.06] flex items-center justify-between text-zinc-300">
                {t.contact} <ArrowUpRight className="w-4 h-4 text-[#FFD000]" />
              </button>
            </div>

            <div className="mt-8 flex flex-col gap-4 pb-12">
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#141414] border border-white/[0.08]">
                <Globe className="w-4 h-4 text-[#9A9A9A]" />
                <select 
                  value={lang} 
                  onChange={(e) => setLang(e.target.value as Language)}
                  className="bg-transparent text-sm font-semibold text-white outline-none w-full"
                >
                  <option value="pt" className="bg-[#111111]">Português (Brasil)</option>
                  <option value="en" className="bg-[#111111]">English</option>
                </select>
              </div>

              <button 
                onClick={() => scrollTo('contato')} 
                className="w-full py-3.5 bg-[#FFD000] text-black font-extrabold text-sm uppercase tracking-wider rounded-full shadow-yellow-btn flex items-center justify-center gap-2"
              >
                <span>{t.cta}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[#141414] border border-white/[0.1] text-white font-bold text-xs uppercase tracking-wider rounded-full flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#FFD000]" />
                <span>{t.whatsapp}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
