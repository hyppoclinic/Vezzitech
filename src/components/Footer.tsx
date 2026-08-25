import { translations, Language } from '../translations';
import { Mail, MapPin, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Footer = ({ lang }: { lang: Language }) => {
  const t = translations[lang].footer;
  const currentYear = new Date().getFullYear();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/?scroll=${id}`;
    }
  };

  return (
    <footer className="bg-[#080808] border-t border-white/[0.08] pt-20 pb-12 text-[#9A9A9A] font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Col 1: Brand & Positioning (5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <Logo className="h-10 md:h-12 w-auto" />
            </div>

            <p className="text-sm text-[#9A9A9A] max-w-sm leading-relaxed mb-8">
              {t.description}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#111111] border border-white/[0.08] text-xs text-zinc-300 font-mono">
              <ShieldCheck className="w-4 h-4 text-[#0066FF]" />
              <span>{t.securityBadge}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white mb-6">
              {t.navTitle}
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => scrollTo('servicos')} className="hover:text-white transition-colors cursor-pointer">
                  {lang === 'pt' ? 'Serviços' : 'Services'}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('entregas')} className="hover:text-white transition-colors cursor-pointer">
                  {lang === 'pt' ? 'Entregas' : 'Deliverables'}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('depoimentos')} className="hover:text-white transition-colors cursor-pointer">
                  {lang === 'pt' ? 'Depoimentos' : 'Reviews'}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('faq')} className="hover:text-white transition-colors cursor-pointer">
                  {lang === 'pt' ? 'Perguntas Frequentes' : 'FAQ'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white mb-6">
              {t.servicesTitle}
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => scrollTo('servicos')} className="hover:text-white transition-colors cursor-pointer text-left">
                  {lang === 'pt' ? 'Sistemas Internos' : 'Internal Tools'}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('servicos')} className="hover:text-white transition-colors cursor-pointer text-left">
                  {lang === 'pt' ? 'SaaS & MVPs' : 'SaaS & MVPs'}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('servicos')} className="hover:text-white transition-colors cursor-pointer text-left">
                  {lang === 'pt' ? 'Plataformas Web' : 'Web Platforms'}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('servicos')} className="hover:text-white transition-colors cursor-pointer text-left">
                  {lang === 'pt' ? 'Aplicativos Mobile' : 'Mobile Apps'}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('servicos')} className="hover:text-white transition-colors cursor-pointer text-left">
                  {lang === 'pt' ? 'Integrações de API' : 'API Integrations'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Contact (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white mb-6">
              {t.contactTitle}
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href={`mailto:${t.email}`}
                  className="flex items-center gap-2.5 hover:text-white transition-colors text-zinc-300"
                >
                  <Mail className="w-4 h-4 text-[#0066FF]" />
                  <span>{t.email}</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5544998266950"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-white transition-colors text-zinc-300 group"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#0066FF] group-hover:scale-110 transition-transform" />
                  <span>{t.phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-zinc-400 text-xs leading-relaxed">
                <MapPin className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                <span>{t.location}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9A9A9A]">
          <div>
            {t.rights.replace('{year}', currentYear.toString())}
          </div>
          <div className="flex items-center gap-6">
            <span className="text-zinc-500">Engenharia de Software Sob Demanda</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
