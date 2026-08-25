import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Language } from './translations';

import { Hero } from './sections/Hero';
import { ServicesSection } from './sections/ServicesSection';
import { DeliverablesSection } from './sections/DeliverablesSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { FAQSection } from './sections/FAQSection';
import { ContactSection } from './sections/ContactSection';
import { WhatsAppIcon } from './components/WhatsAppIcon';

export default function App() {
  const [lang, setLang] = useState<Language>('pt');

  const whatsappNumber = "+5544998266950";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=Olá! Gostaria de falar com a equipe da Vezzitech sobre o desenvolvimento de um software sob demanda.`;

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
    <div className="bg-[#0A0A0A] min-h-screen text-[#9A9A9A] antialiased selection:bg-[#0066FF]/30 selection:text-white font-sans overflow-x-hidden">
      {/* 1. Header Fixo */}
      <Header lang={lang} setLang={setLang} />
      
      <main className="w-full">
        {/* 2. Hero */}
        <Hero lang={lang} />

        {/* 3. Serviços */}
        <ServicesSection lang={lang} />

        {/* 4. Entregas */}
        <DeliverablesSection lang={lang} />

        {/* 5. Depoimentos / Prova */}
        <TestimonialsSection lang={lang} />

        {/* 6. FAQ */}
        <FAQSection lang={lang} />

        {/* 7. Formulário de Contato */}
        <ContactSection lang={lang} />
      </main>

      {/* 8. Footer */}
      <Footer lang={lang} />

      {/* 9. Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-12 h-12 md:w-auto md:h-13 md:px-6 md:py-3.5 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-[0_4px_24px_rgba(37,211,102,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2.5 font-heading font-black text-xs uppercase tracking-wider group cursor-pointer"
        aria-label="Falar no WhatsApp"
      >
        <WhatsAppIcon className="w-5 h-5 text-white shrink-0" />
        <span className="hidden md:inline">Falar no WhatsApp</span>
      </a>
    </div>
  );
}
