import { MapPin } from 'lucide-react';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { translations, Language } from '../translations';
import { VezzitechLogo } from './VezzitechLogo';

interface FooterProps {
  lang: Language;
}

export const Footer = ({ lang }: FooterProps) => {
  const t = translations[lang];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-white/10 py-16 px-6 mt-16 relative overflow-hidden">
      <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 mb-12 relative z-10">
        <div className="md:col-span-4 space-y-6">
          <div className="flex items-center gap-2">
            <VezzitechLogo className="text-[22px]" />
          </div>
          <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-sm">
            {t.footerSection.desc}
          </p>
          <div className="flex gap-4">
            <a 
              href="https://linkedin.com/company/vezzitech" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-500 hover:bg-blue-500/10 hover:border-blue-500/30 transition"
              aria-label="LinkedIn da Vezzitech"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a 
              href="https://instagram.com/vezzitech" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-pink-500 hover:bg-pink-500/10 hover:border-pink-500/30 transition"
              aria-label="Instagram da Vezzitech"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
            <a 
              href="https://twitter.com/vezzitech" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-sky-400 hover:bg-sky-400/10 hover:border-sky-400/30 transition"
              aria-label="Twitter da Vezzitech"
            >
              <FaTwitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xs font-bold text-[#33BC65] font-mono tracking-wider uppercase mb-4">{t.footerSection.navTitle}</h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-sans font-semibold">
              <li><button type="button" onClick={() => scrollToSection('verticais')} className="hover:text-white transition cursor-pointer" aria-label={`Ir para ${t.nav.services}`}>{t.nav.services}</button></li>
              <li><button type="button" onClick={() => scrollToSection('processo')} className="hover:text-white transition cursor-pointer" aria-label={`Ir para ${t.nav.ecosystem}`}>{t.nav.ecosystem}</button></li>
              <li><button type="button" onClick={() => scrollToSection('planos')} className="hover:text-white transition cursor-pointer" aria-label={`Ir para ${t.nav.plans}`}>{t.nav.plans}</button></li>
              <li><button type="button" onClick={() => scrollToSection('diferenciais')} className="hover:text-white transition cursor-pointer" aria-label={`Ir para ${t.nav.clients}`}>{t.nav.clients}</button></li>
              <li><button type="button" onClick={() => scrollToSection('blog')} className="hover:text-white transition cursor-pointer" aria-label={`Ir para ${t.nav.blog}`}>{t.nav.blog}</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-[#33BC65] font-mono tracking-wider uppercase mb-4">{t.footerSection.specTitle}</h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-sans font-semibold flex flex-col items-start">
              <li>
                <button 
                  type="button" 
                  onClick={() => scrollToSection('planos')} 
                  className="hover:text-white transition text-left cursor-pointer"
                >
                  {lang === 'pt' ? 'Sites Premium de Alta Performance' : 'Premium High-Performance Websites'}
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  onClick={() => scrollToSection('processo')} 
                  className="hover:text-white transition text-left cursor-pointer"
                >
                  {lang === 'pt' ? 'SEO Estratégico & Otimização AEO' : 'Strategic SEO & AEO Optimization'}
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  onClick={() => scrollToSection('planos')} 
                  className="hover:text-white transition text-left cursor-pointer"
                >
                  {lang === 'pt' ? 'Tráfego Pago & Google Ads' : 'Paid Traffic & Google Ads'}
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  onClick={() => scrollToSection('consultoria')} 
                  className="hover:text-white transition text-left cursor-pointer"
                >
                  {lang === 'pt' ? 'Agentes de IA & Automação' : 'AI Agents & Automation'}
                </button>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="text-xs font-bold text-[#33BC65] font-mono tracking-wider uppercase mb-4">{t.footerSection.locationTitle}</h4>
            <div className="flex gap-2 text-xs text-gray-400 items-start">
              <MapPin className="w-4 text-[#33BC65] shrink-0 mt-0.5" />
              <p className="leading-relaxed whitespace-pre-line font-sans font-semibold">
                {t.footerSection.location}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-400 font-mono tracking-widest uppercase relative z-10">
        <span>SÃO PAULO / BRASIL</span>
        <span>&copy; {new Date().getFullYear()} {t.footerSection.rights}</span>
        <div className="flex gap-6 font-bold">
          <a href="#" className="hover:text-white transition">{t.footerSection.privacy}</a>
          <a href="#" className="hover:text-white transition">{t.footerSection.terms}</a>
        </div>
      </div>
    </footer>
  );
};
