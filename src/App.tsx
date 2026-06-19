/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './sections/Hero';
import { Services } from './sections/Services';
import { GoogleEcosystem } from './sections/GoogleEcosystem';
import { ValueProposition } from './sections/ValueProposition';
import { Process } from './sections/Process';
import { Metrics } from './sections/Metrics';
import { Blog } from './sections/Blog';
import { FAQ } from './sections/FAQ';
import { Scheduling } from './sections/Scheduling';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';
import { Language, translations } from './translations';

export default function App() {
  const [lang, setLang] = useState<Language>('pt');
  const [route, setRoute] = useState(window.location.pathname);

  useEffect(() => {
    setRoute(window.location.pathname);
  }, []);

  if (route === '/login') {
    return <Login />;
  }

  if (route === '/dashboard') {
    return <Dashboard />;
  }

  const t = translations[lang];

  const scrollToScheduling = () => {
    const el = document.getElementById('consultoria');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#070707] min-h-screen text-gray-200 antialiased selection:bg-[#33BC65]/30 selection:text-white">
      {/* Premium Navigation Header with Language modifier */}
      <Header lang={lang} setLang={setLang} />
      
      <main className="relative overflow-x-hidden w-full">
        {/* Dynamic decorative premium visual gradients (Aesthetic Ambient Blur spots) */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#33BC65]/10 via-[#12DCEF]/5 to-transparent rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute top-[25%] -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-[#12DCEF]/8 via-[#33BC65]/8 to-transparent rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute top-[50%] -right-40 w-[700px] h-[700px] bg-[#33BC65]/8 rounded-full blur-[165px] pointer-events-none"></div>
        <div className="absolute bottom-[10%] left-1/4 w-[850px] h-[850px] bg-gradient-to-tr from-[#33BC65]/6 via-[#12DCEF]/6 to-transparent rounded-full blur-[180px] pointer-events-none"></div>

        {/* Hero Banner Section with Interactive Graph & Deployable code */}
        <Hero lang={lang} />
        
        {/* Pillars of differentiation */}
        <ValueProposition lang={lang} />
        
        {/* Our Services */}
        <Services lang={lang} />
        
        {/* Operational steps */}
        <Process lang={lang} />
        
        {/* Success proof metrics */}
        <section id="metricas">
          <Metrics lang={lang} />
        </section>
        
        {/* Integrated google suite elements */}
        <GoogleEcosystem lang={lang} />
        
        {/* Deep knowledge articles */}
        <Blog lang={lang} />
        
        {/* Frequently Asked Questions */}
        <FAQ lang={lang} />
        
        {/* Instant Meet scheduling forms */}
        <Scheduling lang={lang} />

        {/* Bottom high-performing Conversion Banner */}
        <section className="py-24 px-6 text-center max-w-4xl mx-auto border-t border-white/5 relative">
          <div className="absolute inset-0 bg-[#33BC65]/5 rounded-[2.5rem] blur-xl pointer-events-none"></div>
          <div className="bg-glass border-glass p-12 md:p-16 rounded-[2.5rem] relative z-10 overflow-hidden group hover:border-[#33BC65]/20 duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#33BC65]/10 rounded-full blur-2xl pointer-events-none"></div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight uppercase font-heading">
              {t.conversionBanner.heading.split("escala de IA")[0]}
              <span className="text-[#33BC65]">
                {lang === 'pt' ? 'escala de IA' : 'production AI'}
              </span>
              {t.conversionBanner.heading.split("escala de IA")[1]}
            </h2>
            <p className="text-gray-400 mb-10 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
              {t.conversionBanner.sub}
            </p>
            <button 
              onClick={scrollToScheduling}
              className="gradient-orange text-black px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider hover:scale-105 active:scale-95 transition shadow-lg shadow-[#33BC65]/10 cursor-pointer">
              {t.conversionBanner.cta}
            </button>
          </div>
        </section>
      </main>

      {/* Corporate Foot note and Chatbot Assistant */}
      <Footer lang={lang} />
      <Chatbot lang={lang} />
    </div>
  );
}
