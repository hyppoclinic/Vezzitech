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

const Dashboard = lazy(() => import('./components/Dashboard').then(m => ({ default: m.Dashboard })));
const Login = lazy(() => import('./components/Login').then(m => ({ default: m.Login })));

const LoadingFallback = () => (
  <div className="min-h-screen bg-[#030303] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  const [lang, setLang] = useState<Language>('pt');
  const [route, setRoute] = useState(window.location.pathname);

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
    </div>
  );
}
