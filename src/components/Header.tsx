import React, { useState } from 'react';
import { translations, Language } from '../translations';
import { Menu, X, Globe, Calendar, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { VezzitechLogo } from './VezzitechLogo';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export const Header = ({ lang, setLang }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[lang];

  const scrollToSection = (id: string) => {
    if (window.location.pathname !== '/') {
      window.location.href = `/?scroll=${id}`;
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[100] border-b border-white/10 bg-[#070707]/90 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between w-full">
        
        {/* Brand logo */}
        <button 
          type="button"
          onClick={() => {
            if (window.location.pathname !== '/') {
              window.location.href = '/';
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }} 
          className="flex items-center gap-2 cursor-pointer text-left z-50 group"
          aria-label="Vezzitech Home"
        >
          <VezzitechLogo className="text-[22px]" />
        </button>
        
        {/* Nav list - Desktop */}
        <div className="hidden md:flex gap-6 lg:gap-8 text-xs font-bold uppercase tracking-wider text-gray-400">
          <button 
            type="button"
            onClick={() => scrollToSection('verticais')} 
            className="hover:text-[#33BC65] transition cursor-pointer">
            {t.nav.services}
          </button>
          <button 
            type="button"
            onClick={() => scrollToSection('processo')} 
            className="hover:text-[#33BC65] transition cursor-pointer">
            {t.nav.ecosystem}
          </button>
          <button 
            type="button"
            onClick={() => scrollToSection('planos')} 
            className="hover:text-[#33BC65] transition cursor-pointer">
            {t.nav.plans}
          </button>
          <button 
            type="button"
            onClick={() => scrollToSection('diferenciais')} 
            className="hover:text-[#33BC65] transition cursor-pointer">
            {t.nav.clients}
          </button>
          <button 
            type="button"
            onClick={() => scrollToSection('blog')} 
            className="hover:text-[#33BC65] transition cursor-pointer">
            {t.nav.blog}
          </button>
          <button 
            type="button"
            onClick={() => scrollToSection('consultoria')} 
            className="hover:text-[#33BC65] transition cursor-pointer flex items-center gap-1 text-[#33BC65] font-bold">
            <Sparkles className="w-3 h-3 animate-pulse text-[#33BC65]" />
            <span>{lang === 'pt' ? 'Mapeamento' : 'AI Map'}</span>
          </button>
        </div>
        
        {/* Actions - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          
          {/* Language selector - Desktop */}
          <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-full p-1 h-9">
            <button 
              type="button"
              onClick={() => setLang('pt')}
              className={`px-3 py-1.5 text-[10px] font-bold uppercase rounded-full transition-all cursor-pointer ${lang === 'pt' ? 'bg-[#33BC65] text-black font-semibold' : 'text-gray-400 hover:text-white'}`}
              aria-label="Mudar idioma para Português">
              BR
            </button>
            <button 
              type="button"
              onClick={() => setLang('en')}
              className={`px-3 py-1.5 text-[10px] font-bold uppercase rounded-full transition-all cursor-pointer ${lang === 'en' ? 'bg-[#33BC65] text-black font-semibold' : 'text-gray-400 hover:text-white'}`}
              aria-label="Change language to English">
              EN
            </button>
          </div>
 
          <button 
            type="button"
            onClick={() => window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0kCxWH9YNz5VRbo1Fe-VURvK9FOgYkNpUoCNBk9a_q2ywucr3S5r0zzTewhmAmePmi0V09CZjw', '_blank')}
            className="gradient-orange px-6 py-2.5 rounded-xl text-black text-xs font-bold uppercase tracking-widest shadow-lg shadow-[#33BC65]/10 hover:scale-[1.03] active:scale-95 transition cursor-pointer">
            {t.nav.cta}
          </button>
        </div>
 
        {/* Mobile Hamburger Trigger */}
        <div className="flex md:hidden items-center gap-3.5 z-[60] relative">
          {/* Mobile Language selector inside trigger bar */}
          <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-full p-1 h-9">
            <button 
              type="button"
              onClick={() => setLang('pt')}
              className={`px-3 py-1.5 text-[10px] font-bold rounded-full transition-all ${lang === 'pt' ? 'bg-[#33BC65] text-black' : 'text-gray-400'}`}
              aria-label="Idioma Português">
              BR
            </button>
            <button 
              type="button"
              onClick={() => setLang('en')}
              className={`px-3 py-1.5 text-[10px] font-bold rounded-full transition-all ${lang === 'en' ? 'bg-[#33BC65] text-black' : 'text-gray-400'}`}
              aria-label="Language English">
              EN
            </button>
          </div>
 
          <button 
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white hover:text-[#33BC65] transition-colors focus:outline-none cursor-pointer z-50 mr-0.5"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>
 
      {/* Mobile Drawer Slide-out Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden absolute top-20 left-0 w-full border-b border-white/10 bg-[#070707]/95 backdrop-blur-xl z-[90] max-h-[calc(100vh-80px)] overflow-y-auto"
          >
            <div className="max-w-7xl mx-auto px-6 pt-4 pb-8 flex flex-col gap-6 w-full">
              
              {/* Divider lines / items */}
              <div className="flex flex-col gap-4 text-sm font-bold uppercase tracking-widest text-[#33BC65]/90 w-full">
                <button 
                  type="button"
                  onClick={() => { scrollToSection('verticais'); setIsOpen(false); }} 
                  className="py-2.5 text-left border-b border-white/5 hover:text-white transition flex justify-between items-center cursor-pointer text-gray-300">
                  <span>{t.nav.services}</span>
                  <span className="text-[10px] font-mono opacity-40">// 01</span>
                </button>
                <button 
                  type="button"
                  onClick={() => { scrollToSection('processo'); setIsOpen(false); }} 
                  className="py-2.5 text-left border-b border-white/5 hover:text-white transition flex justify-between items-center cursor-pointer text-gray-300">
                  <span>{t.nav.ecosystem}</span>
                  <span className="text-[10px] font-mono opacity-40">// 02</span>
                </button>
                <button 
                  type="button"
                  onClick={() => { scrollToSection('planos'); setIsOpen(false); }} 
                  className="py-2.5 text-left border-b border-white/5 text-[#33BC65] hover:text-white transition flex justify-between items-center cursor-pointer">
                  <span>{t.nav.plans}</span>
                  <span className="text-[10px] font-mono opacity-40">// 03</span>
                </button>
                <button 
                  type="button"
                  onClick={() => { scrollToSection('diferenciais'); setIsOpen(false); }} 
                  className="py-2.5 text-left border-b border-white/5 hover:text-white transition flex justify-between items-center cursor-pointer text-gray-300">
                  <span>{t.nav.clients}</span>
                  <span className="text-[10px] font-mono opacity-40">// 04</span>
                </button>
                <button 
                  type="button"
                  onClick={() => { scrollToSection('blog'); setIsOpen(false); }} 
                  className="py-2.5 text-left border-b border-white/5 hover:text-white transition flex justify-between items-center cursor-pointer text-gray-300">
                  <span>{t.nav.blog}</span>
                  <span className="text-[10px] font-mono opacity-40">// 05</span>
                </button>
                <button 
                  type="button"
                  onClick={() => { scrollToSection('consultoria'); setIsOpen(false); }} 
                  className="py-2.5 text-left border-b border-white/5 hover:text-white transition flex justify-between items-center cursor-pointer text-[#33BC65]">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#33BC65]" />
                    {lang === 'pt' ? 'Mapeamento' : 'AI Map'}
                  </span>
                  <span className="text-[10px] font-mono opacity-40">// 06</span>
                </button>
              </div>

              {/* Mobile CTA */}
              <button 
                type="button"
                onClick={() => window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0kCxWH9YNz5VRbo1Fe-VURvK9FOgYkNpUoCNBk9a_q2ywucr3S5r0zzTewhmAmePmi0V09CZjw', '_blank')}
                className="gradient-orange py-4 rounded-xl text-black text-xs font-bold uppercase tracking-widest shadow-xl shadow-[#33BC65]/10 flex items-center justify-center gap-2 cursor-pointer mt-2 w-full">
                <Calendar className="w-4 h-4" />
                {t.nav.cta}
              </button>

              {/* Duplicate Language selector inside mobile drawer without flags and perfectly styled as capsule */}
              <div className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-full p-1 mt-4 max-w-[200px] mx-auto w-full">
                <button 
                  type="button"
                  onClick={() => setLang('pt')}
                  className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all ${lang === 'pt' ? 'bg-[#33BC65] text-black' : 'text-gray-400 hover:text-white'}`}
                  aria-label="Selecionar Português">
                  BR
                </button>
                <button 
                  type="button"
                  onClick={() => setLang('en')}
                  className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all ${lang === 'en' ? 'bg-[#33BC65] text-black' : 'text-gray-400 hover:text-white'}`}
                  aria-label="Select English">
                  EN
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
