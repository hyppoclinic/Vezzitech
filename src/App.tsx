/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './sections/Hero';
import { Services } from './sections/Services';
import { ValueProposition } from './sections/ValueProposition';
import { Process } from './sections/Process';
import { Pricing } from './sections/Pricing';
import { Metrics } from './sections/Metrics';
import { Verticals } from './sections/Verticals';
import { Blog } from './sections/Blog';
import { BlogPage } from './pages/BlogPage';
import { FAQ } from './sections/FAQ';
import { Scheduling } from './sections/Scheduling';
import { Footer } from './components/Footer';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';
import { BlogPostPage } from './pages/BlogPostPage';
import { Language, translations } from './translations';
import { BlurFade } from './components/ui/blur-fade';
import { ShimmerButton } from './components/ui/shimmer-button';
import { BorderBeam } from './components/ui/border-beam';

export default function App() {
  const [lang, setLang] = useState<Language>('pt');
  const [route, setRoute] = useState(window.location.pathname);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  useEffect(() => {
    setRoute(window.location.pathname);
    if (window.location.pathname.startsWith('/blog/')) {
        setSelectedSlug(window.location.pathname.split('/blog/')[1]);
    }

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

  if (route === '/login') {
    return <Login />;
  }

  if (route === '/dashboard') {
    return <Dashboard />;
  }

  if (route === '/blog') {
    return <BlogPage lang={lang} setLang={setLang} onSelectPost={setSelectedSlug} />;
  }

  const BlogPostView = () => (
      <div className="fixed inset-0 z-50 overflow-y-auto bg-[#070707]">
          <div className="min-h-screen py-12 px-6">
              <button 
                onClick={() => {
                  setSelectedSlug(null);
                  window.history.pushState({}, '', '/');
                }}
                className="mb-8 flex items-center text-gray-400 hover:text-white"
              >
                  Voltar
              </button>
              {selectedSlug && <BlogPostPage slug={selectedSlug} lang={lang} />}
          </div>
      </div>
  );

  const t = translations[lang];

  const scrollToScheduling = () => {
    const el = document.getElementById('consultoria');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#070707] min-h-screen text-gray-200 antialiased selection:bg-[#33BC65]/30 selection:text-white">
      {selectedSlug && <BlogPostView />}
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
        
        {/* Market Verticals / Industries (Immediate relevance right under Hero) */}
        <Verticals lang={lang} />
        
        {/* Our Services */}
        <Services lang={lang} />
        
        {/* Operational steps */}
        <Process lang={lang} />
        
        {/* Simplified Subscription Plans (Recurring site, content, SEO, Google Ads) */}
        <Pricing lang={lang} />
        
        {/* Pillars of differentiation (Credibility & Trust reinforcement) */}
        <ValueProposition lang={lang} />
        
        {/* Success proof metrics */}
        <Metrics lang={lang} />
        
        {/* Deep knowledge articles */}
        <Blog lang={lang} onSelectPost={setSelectedSlug} />
        
        {/* Frequently Asked Questions */}
        <FAQ lang={lang} />
        
        {/* Instant Meet scheduling forms */}
        <Scheduling lang={lang} />

        {/* Bottom high-performing Conversion Banner */}
        <section id="conversao" aria-label="Chamada para Ação" className="py-24 px-6 text-center max-w-4xl mx-auto border-t border-white/5 relative">
          <BlurFade delay={0.2} inView>
            <div className="absolute inset-0 bg-[#33BC65]/5 rounded-[2.5rem] blur-xl pointer-events-none"></div>
            <div className="bg-glass border-glass p-12 md:p-16 rounded-[2.5rem] relative z-10 overflow-hidden group hover:border-[#33BC65]/20 duration-300">
              <BorderBeam size={250} duration={12} delay={9} colorFrom="#33BC65" colorTo="#12DCEF" />
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
              
              <div className="flex justify-center">
                <ShimmerButton 
                  onClick={scrollToScheduling}
                  className="shadow-2xl hover:scale-105 transition-transform" 
                  shimmerColor="#12DCEF" 
                  background="#33BC65" 
                  borderRadius="0.75rem"
                >
                  <span className="text-black font-bold text-sm uppercase tracking-wider px-4">
                    {t.conversionBanner.cta}
                  </span>
                </ShimmerButton>
              </div>
            </div>
          </BlurFade>
        </section>
      </main>

      {/* Corporate Foot note */}
      <Footer lang={lang} />
    </div>
  );
}
