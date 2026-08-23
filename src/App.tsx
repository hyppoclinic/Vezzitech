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
import { MessageSquare } from 'lucide-react';

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
        className="fixed bottom-6 right-6 z-50 px-5 py-3.5 bg-[#0066FF] hover:bg-[#0052CC] text-white rounded-full shadow-blue-btn hover:scale-105 transition-all flex items-center gap-2.5 font-heading font-black text-xs uppercase tracking-wider group cursor-pointer"
        aria-label="Falar no WhatsApp"
      >
        <MessageSquare className="w-4 h-4 fill-white text-white" />
        <span>Falar no WhatsApp</span>
      </a>
    </div>
  );
}
