import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Language } from './translations';

import { Hero } from './sections/Hero';
import { OfferSection } from './sections/OfferSection';
import { ProblemSection } from './sections/ProblemSection';
import { EngineeringSection } from './sections/EngineeringSection';
import { SolutionsSection } from './sections/SolutionsSection';
import { ManifestoSection } from './sections/ManifestoSection';
import { CasesSection } from './sections/CasesSection';
import { MindsetSection } from './sections/MindsetSection';
import { InsightsSection } from './sections/InsightsSection';
import { DiagnosticSection } from './sections/DiagnosticSection';
import { WhatsAppIcon } from './components/WhatsAppIcon';

export default function App() {
  const [lang, setLang] = useState<Language>('pt');

  const whatsappNumber = "+5544998266950";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=Olá! Gostaria de conversar com a equipe da Vezzitech sobre a Engenharia de Crescimento para minha empresa.`;

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  }, [lang]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const scrollTarget = urlParams.get('scroll');
    if (scrollTarget) {
      setTimeout(() => {
        const el = document.getElementById(scrollTarget);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 350);
    }
  }, []);

  return (
    <div className="bg-[#070A12] min-h-screen text-[#8992A5] antialiased selection:bg-[#168BFF]/30 selection:text-white font-sans overflow-x-hidden">
      {/* 1. Header */}
      <Header lang={lang} setLang={setLang} />
      
      <main className="w-full">
        {/* 2. Hero */}
        <Hero lang={lang} />

        {/* 2.5. Oferta Principal (Tráfego Pago + Site + Google Meu Negócio - R$ 799/mês) */}
        <OfferSection lang={lang} />

        {/* 3. O Problema (Gargalos) */}
        <ProblemSection lang={lang} />

        {/* 4. Engenharia de Crescimento (Metodologia) */}
        <EngineeringSection lang={lang} />

        {/* 5. Ecossistema Vezzitech (4 Unidades) */}
        <SolutionsSection lang={lang} />

        {/* 7. Manifesto Vezzitech */}
        <ManifestoSection lang={lang} />

        {/* 8. Cases & Impacto */}
        <CasesSection lang={lang} />

        {/* 9. Nossa Forma de Pensar (4 Pilares) */}
        <MindsetSection lang={lang} />

        {/* 10. Insights & Inteligência */}
        <InsightsSection lang={lang} />

        {/* 11. Diagnóstico Estratégico */}
        <DiagnosticSection lang={lang} />
      </main>

      {/* 12. Footer */}
      <Footer lang={lang} />

      {/* 13. Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-12 h-12 md:w-auto md:h-13 md:px-6 md:py-3.5 bg-performance-gradient hover:opacity-95 text-white rounded-full shadow-performance-glow hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2.5 font-heading font-black text-xs uppercase tracking-wider group cursor-pointer"
        aria-label="Falar no WhatsApp"
      >
        <WhatsAppIcon className="w-5 h-5 text-white shrink-0" />
        <span className="hidden md:inline">Falar no WhatsApp</span>
      </a>
    </div>
  );
}

