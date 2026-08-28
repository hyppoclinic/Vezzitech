import { translations, Language } from '../translations';
import { Mail, MapPin, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Footer = ({ lang }: { lang: Language }) => {
  const t = translations[lang].footer;
  const brand = translations[lang].brand;
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
    <footer className="bg-[#070A12] border-t border-white/[0.08] pt-20 pb-12 text-[#8992A5] font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Col 1: Brand & Positioning (5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <Logo className="h-9 md:h-11 w-auto" />
            </div>

            <p className="text-xs font-mono font-bold text-[#16C7FF] mb-4">
              {brand.descriptor}
            </p>

            <p className="text-sm text-[#8992A5] max-w-sm leading-relaxed mb-8">
              {t.description}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#10162A] border border-white/[0.08] text-xs text-zinc-300 font-mono">
              <ShieldCheck className="w-4 h-4 text-[#168BFF]" />
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
                <button onClick={() => scrollTo('solucoes')} className="hover:text-white transition-colors cursor-pointer">
                  Soluções
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('engenharia')} className="hover:text-white transition-colors cursor-pointer">
                  Engenharia
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('cases')} className="hover:text-white transition-colors cursor-pointer">
                  Cases & Impacto
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('insights')} className="hover:text-white transition-colors cursor-pointer">
                  Insights
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('sobre')} className="hover:text-white transition-colors cursor-pointer">
                  Sobre a Vezzitech
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Ecosystem Units (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white mb-6">
              {t.servicesTitle}
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => scrollTo('solucoes')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Growth & Aquisição
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('solucoes')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Experience & Web
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('solucoes')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Technology & Software
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('solucoes')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Intelligence & IA
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('diagnostico')} className="hover:text-white transition-colors cursor-pointer text-left text-[#16C7FF] font-semibold">
                  Diagnóstico Gratuito
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
                  <Mail className="w-4 h-4 text-[#168BFF]" />
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
                  <WhatsAppIcon className="w-4 h-4 text-[#168BFF] group-hover:scale-110 transition-transform" />
                  <span>{t.phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-zinc-400 text-xs leading-relaxed">
                <MapPin className="w-4 h-4 text-[#168BFF] shrink-0 mt-0.5" />
                <span>{t.location}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8992A5]">
          <div>
            {t.rights.replace('{year}', currentYear.toString())}
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[#16C7FF] font-mono font-semibold">Tecnologia & Marketing de Alta Performance</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

