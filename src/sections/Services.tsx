/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { Megaphone, RefreshCw, Sparkles, Layers, ChevronLeft, ChevronRight } from 'lucide-react';
import { translations, Language } from '../translations';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceItem {
  num: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface ServicesProps {
  lang: Language;
}

export const ServiceCard = ({ item }: { item: ServiceItem }) => (
  <div className="bg-glass border-glass p-8 rounded-3xl hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between group h-80 relative overflow-hidden select-none">
    {/* Refined double blur ambient glows matching reference card design */}
    <div className="absolute -right-20 -bottom-20 w-44 h-44 bg-[#33BC65]/5 group-hover:bg-[#33BC65]/15 rounded-full blur-[50px] pointer-events-none transition-all duration-500"></div>
    <div className="absolute -left-20 -top-20 w-44 h-44 bg-[#12DCEF]/5 group-hover:bg-[#12DCEF]/15 rounded-full blur-[50px] pointer-events-none transition-all duration-500"></div>
    
    <div className="flex justify-between items-start mb-6 relative z-10">
      <span className="text-[#33BC65] font-mono text-xs tracking-widest font-semibold">// {item.num}</span>
      <div className="text-[#33BC65] bg-[#33BC65]/10 p-2.5 rounded-xl border border-[#33BC65]/10 group-hover:scale-105 transition-transform shadow">
        {item.icon}
      </div>
    </div>
    <div className="relative z-10">
      <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-[#33BC65] transition-colors font-heading">{item.title}</h3>
      <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{item.desc}</p>
    </div>
  </div>
);

export const Services = ({ lang }: ServicesProps) => {
  const t = translations[lang];
  const [index, setIndex] = useState(0);

  const icons = [
    <Megaphone key="1" className="w-5 h-5 text-[#12DCEF]" />,
    <RefreshCw key="2" className="w-5 h-5 text-[#12DCEF]" />,
    <Sparkles key="3" className="w-5 h-5 text-[#33BC65]" />,
    <Layers key="4" className="w-5 h-5 text-[#33BC65]" />
  ];

  const items = t.servicesSection.items.map((item, idx) => ({
    num: item.num,
    title: item.title,
    desc: item.desc,
    icon: icons[idx]
  }));

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <section id="servicos" className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[300px] bg-emerald-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Title block structured like the Hero text layout style */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div className="max-w-2xl text-left">
          <div className="text-[#33BC65] font-mono text-xs mb-3 font-semibold tracking-widest uppercase">// {t.servicesSection.tag}</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.15] mb-4 tracking-tight text-white font-heading">
            {lang === 'pt' ? (
              <>
                Soluções completas e
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#33BC65] via-emerald-200 to-cyan-300 font-normal mt-1">
                  totalmente integradas à sua operação.
                </span>
              </>
            ) : (
              <>
                Complete solutions and
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#33BC65] via-emerald-200 to-cyan-300 font-normal mt-1">
                  fully integrated into your operation.
                </span>
              </>
            )}
          </h2>
        </div>

        {/* Premium Carousel Buttons right next to alignment */}
        <div className="flex gap-3">
          <button 
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-white/10 hover:border-white/25 bg-white/5 flex items-center justify-center text-white transition hover:scale-105 cursor-pointer"
            aria-label="Previous service"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-white/10 hover:border-white/25 bg-white/5 flex items-center justify-center text-white transition hover:scale-105 cursor-pointer"
            aria-label="Next service"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Slider Display Window */}
      <div className="w-full">
        {/* For Desktop/Tablet: we show a sliding layout with Framer Motion track */}
        <div className="hidden md:block">
          <motion.div 
            className="flex gap-6"
            animate={{ x: `-${index * 25}%` }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            style={{ width: `${items.length * 33.33}%` }}
          >
            {items.map((item, idx) => (
              <div key={item.num} className="w-full max-w-[400px] shrink-0">
                <ServiceCard item={item} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* For Small Mobile: we render a clean fade-in single card viewer */}
        <div className="block md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ServiceCard item={items[index]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Active Dots indicators layout */}
        <div className="flex justify-center md:justify-start gap-2 mt-8 px-1">
          {items.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setIndex(idx)}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${index === idx ? 'w-8 bg-[#33BC65]' : 'w-2 bg-white/10 hover:bg-white/20'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
