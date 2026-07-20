import { translations, Language } from '../translations';
import { Linkedin, Instagram, Mail } from 'lucide-react';

export const Footer = ({ lang }: { lang: Language }) => {
  const t = translations[lang].footerSection;

  return (
    <footer className="bg-[#030303] border-t border-white/[0.05] py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <img src="/logo.26.png" alt="Vezzitech" className="h-8" />
          </div>
          <p className="text-gray-400 text-sm max-w-sm leading-relaxed mb-8">
            {lang === 'pt' 
              ? 'Transformamos desafios de negócio em soluções de software de alta performance para empresas B2B.' 
              : 'We transform business challenges into high-performance software solutions for B2B companies.'}
          </p>
          <div className="flex items-center gap-4 text-gray-500">
            <a href="#" className="hover:text-emerald-400 transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="hover:text-emerald-400 transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="mailto:contato@vezzitech.com" className="hover:text-emerald-400 transition-colors"><Mail className="w-5 h-5" /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6 tracking-tight">{t.platform}</h4>
          <ul className="space-y-4">
            <li><a href="#plataforma" className="text-gray-400 hover:text-white transition-colors text-sm">{t.solutions}</a></li>
            <li><a href="#processo" className="text-gray-400 hover:text-white transition-colors text-sm">{t.process}</a></li>
            <li><a href="#tecnologia" className="text-gray-400 hover:text-white transition-colors text-sm">{t.tech}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6 tracking-tight">{t.company}</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{t.about}</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{t.careers}</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{t.contact}</a></li>
          </ul>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          {t.rights.replace('{year}', new Date().getFullYear().toString())}
        </p>
        <div className="flex gap-6 text-sm text-gray-500">
          <a href="#" className="hover:text-white transition-colors">{t.privacy}</a>
          <a href="#" className="hover:text-white transition-colors">{t.terms}</a>
        </div>
      </div>
    </footer>
  );
};
