/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, lazy, Suspense } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Language } from './translations';

import { Hero } from './sections/Hero';
import { LogosTicker } from './components/LogosTicker';
import { ValueProp } from './sections/ValueProp';
import { ArchitectureNew } from './sections/ArchitectureNew';
import { SegmentsNew } from './sections/SegmentsNew';
import { MetricsNew } from './sections/MetricsNew';
import { TechStackNew } from './sections/TechStackNew';
import { InsightsNew } from './sections/InsightsNew';
import { FAQNew } from './sections/FAQNew';
import { CTANew } from './sections/CTANew';
import { Sparkles } from 'lucide-react';

const Dashboard = lazy(() => import('./components/Dashboard').then(m => ({ default: m.Dashboard })));
const Login = lazy(() => import('./components/Login').then(m => ({ default: m.Login })));
const ModernizeWordPress = lazy(() => import('./pages/ModernizeWordPress').then(m => ({ default: m.ModernizeWordPress })));

const LoadingFallback = () => (
  <div className="min-h-screen bg-[#030303] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  const [lang, setLang] = useState<Language>('pt');
  const [route, setRoute] = useState(window.location.pathname);

  const whatsappNumber = "+5544998266950";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=Olá! Gostaria de falar com um especialista sobre as soluções da Vezzitech.`;

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  }, [lang]);

  useEffect(() => {
    setRoute(window.location.pathname);

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
    return (
      <Suspense fallback={<LoadingFallback />}>
        <Login />
      </Suspense>
    );
  }

  if (route === '/dashboard') {
    return (
      <Suspense fallback={<LoadingFallback />}>
        <Dashboard />
      </Suspense>
    );
  }

  if (route === '/modernizar-wordpress') {
    return (
      <Suspense fallback={<LoadingFallback />}>
        <ModernizeWordPress lang={lang} setLang={setLang} />
      </Suspense>
    );
  }

  return (
    <div className="bg-[#030303] min-h-screen text-gray-200 antialiased selection:bg-emerald-500/30 selection:text-white font-sans overflow-x-hidden">
      <Header lang={lang} setLang={setLang} />
      
      <main className="w-full">
        <Hero lang={lang} />
        <LogosTicker />
        <ValueProp lang={lang} />
        <SegmentsNew lang={lang} />
        <ArchitectureNew lang={lang} />
        <MetricsNew lang={lang} />
        <TechStackNew lang={lang} />
        <InsightsNew lang={lang} />
        <FAQNew lang={lang} />
        <CTANew lang={lang} />
      </main>

      <Footer lang={lang} />

      {/* Floating AI Agent WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 p-4 bg-emerald-500 text-black rounded-full shadow-2xl shadow-emerald-500/20 hover:scale-110 transition-transform flex items-center gap-2 font-bold group"
      >
        <Sparkles className="w-5 h-5 group-hover:animate-pulse" />
        <span className="hidden md:inline">Falar com IA</span>
      </a>
    </div>
  );
}
