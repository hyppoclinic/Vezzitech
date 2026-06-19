import React, { useState } from 'react';
import { translations, Language } from '../translations';
import { Menu, X, Globe, Calendar, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export const Header = ({ lang, setLang }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[lang];

  const scrollToSection = (id: string) => {
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
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 cursor-pointer text-left z-50">
          <span className="text-[22px] font-semibold tracking-tight text-white font-sans italic">Vezzitech</span>
        </button>
        
        {/* Nav list - Desktop */}
        <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-wider text-gray-400">
          <button 
            onClick={() => scrollToSection('servicos')} 
            className="hover:text-[#33BC65] transition cursor-pointer text-[#33BC65]/90">
            {t.nav.services}
          </button>
          <button 
            onClick={() => scrollToSection('google')} 
            className="hover:text-[#33BC65] transition cursor-pointer">
            {t.nav.ecosystem}
          </button>
          <button 
            onClick={() => scrollToSection('consultoria')} 
            className="hover:text-[#33BC65] transition cursor-pointer flex items-center gap-1.5 text-[#33BC65]/95 font-bold hover:scale-105 duration-200">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#33BC65]" />
            <span>{lang === 'pt' ? 'Mapeamento IA' : 'AI Map'}</span>
          </button>
          <button 
            onClick={() => scrollToSection('metricas')} 
            className="hover:text-[#33BC65] transition cursor-pointer">
            {t.nav.method}
          </button>
          <button 
            onClick={() => scrollToSection('blog')} 
            className="hover:text-[#33BC65] transition cursor-pointer">
            {t.nav.blog}
          </button>
        </div>
        
        {/* Actions - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          
          {/* Language selector - Desktop */}
          <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-full p-1 h-9">
            <button 
              onClick={() => setLang('pt')}
              className={`px-3 py-1.5 text-[10px] font-bold uppercase rounded-full transition-all cursor-pointer ${lang === 'pt' ? 'bg-[#33BC65] text-black font-semibold' : 'text-gray-400 hover:text-white'}`}>
              BR
            </button>
            <button 
              onClick={() => setLang('en')}
              className={`px-3 py-1.5 text-[10px] font-bold uppercase rounded-full transition-all cursor-pointer ${lang === 'en' ? 'bg-[#33BC65] text-black font-semibold' : 'text-gray-400 hover:text-white'}`}>
              EN
            </button>
          </div>
 
          <button 
            onClick={() => scrollToSection('consultoria')} 
            className="gradient-orange px-6 py-2.5 rounded-xl text-black text-xs font-bold uppercase tracking-widest shadow-lg shadow-[#33BC65]/10 hover:scale-[1.03] active:scale-95 transition cursor-pointer">
            {t.nav.cta}
          </button>
        </div>
 
        {/* Mobile Hamburger Trigger */}
        <div className="flex md:hidden items-center gap-3.5 z-[60] relative">
          {/* Mobile Language selector inside trigger bar */}
          <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-full p-1 h-9">
            <button 
              onClick={() => setLang('pt')}
              className={`px-3 py-1.5 text-[10px] font-bold rounded-full transition-all ${lang === 'pt' ? 'bg-[#33BC65] text-black' : 'text-gray-400'}`}>
              BR
            </button>
            <button 
              onClick={() => setLang('en')}
              className={`px-3 py-1.5 text-[10px] font-bold rounded-full transition-all ${lang === 'en' ? 'bg-[#33BC65] text-black' : 'text-gray-400'}`}>
              EN
            </button>
          </div>
 
          <button 
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
                  onClick={() => scrollToSection('servicos')} 
                  className="py-2.5 text-left border-b border-white/5 hover:text-white transition flex justify-between items-center cursor-pointer">
                  <span>{t.nav.services}</span>
                  <span className="text-[10px] font-mono opacity-40">// 01</span>
                </button>
                <button 
                  onClick={() => scrollToSection('google')} 
                  className="py-2.5 text-left border-b border-white/5 hover:text-white transition flex justify-between items-center cursor-pointer">
                  <span>{t.nav.ecosystem}</span>
                  <span className="text-[10px] font-mono opacity-40">// 02</span>
                </button>
                <button 
                  onClick={() => scrollToSection('consultoria')} 
                  className="py-2.5 text-left border-b border-white/5 hover:text-white transition flex justify-between items-center cursor-pointer text-[#33BC65]">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#33BC65]" />
                    {lang === 'pt' ? 'Mapeamento IA' : 'AI Strategic Map'}
                  </span>
                  <span className="text-[10px] font-mono opacity-40">// 03</span>
                </button>
                <button 
                  onClick={() => scrollToSection('metricas')} 
                  className="py-2.5 text-left border-b border-white/5 hover:text-white transition flex justify-between items-center cursor-pointer">
                  <span>{t.nav.method}</span>
                  <span className="text-[10px] font-mono opacity-40">// 04</span>
                </button>
                <button 
                  onClick={() => scrollToSection('blog')} 
                  className="py-2.5 text-left border-b border-white/5 hover:text-white transition flex justify-between items-center cursor-pointer">
                  <span>{t.nav.blog}</span>
                  <span className="text-[10px] font-mono opacity-40">// 05</span>
                </button>
              </div>

              {/* Mobile CTA */}
              <button 
                onClick={() => scrollToSection('consultoria')}
                className="gradient-orange py-4 rounded-xl text-black text-xs font-bold uppercase tracking-widest shadow-xl shadow-[#33BC65]/10 flex items-center justify-center gap-2 cursor-pointer mt-2 w-full">
                <Calendar className="w-4 h-4" />
                {t.nav.cta}
              </button>

              {/* Duplicate Language selector inside mobile drawer without flags and perfectly styled as capsule */}
              <div className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-full p-1 mt-4 max-w-[200px] mx-auto w-full">
                <button 
                  onClick={() => setLang('pt')}
                  className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all ${lang === 'pt' ? 'bg-[#33BC65] text-black' : 'text-gray-400 hover:text-white'}`}>
                  BR
                </button>
                <button 
                  onClick={() => setLang('en')}
                  className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all ${lang === 'en' ? 'bg-[#33BC65] text-black' : 'text-gray-400 hover:text-white'}`}>
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
