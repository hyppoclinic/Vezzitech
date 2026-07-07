/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { Megaphone, RefreshCw, Sparkles, Layers, ChevronLeft, ChevronRight } from 'lucide-react';
import { translations, Language } from '../translations';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

interface ServiceItem {
  num: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface ServicesProps {
  lang: Language;
}

export const Services = ({ lang }: ServicesProps) => {
  const t = translations[lang];

  const icons = [
    <Megaphone key="1" className="w-6 h-6 text-[#12DCEF]" />,
    <RefreshCw key="2" className="w-6 h-6 text-[#12DCEF]" />,
    <Sparkles key="3" className="w-6 h-6 text-[#33BC65]" />,
    <Layers key="4" className="w-6 h-6 text-[#33BC65]" />
  ];

  const items = t.servicesSection.items.map((item, idx) => ({
    num: item.num,
    title: item.title,
    desc: item.desc,
    icon: icons[idx]
  }));

  return (
    <section id="servicos" aria-label="Nossos Serviços" className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[300px] bg-emerald-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Title block structured like the Hero text layout style */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div className="max-w-2xl text-left">
          <div className="text-[#33BC65] font-mono text-xs mb-3 font-semibold tracking-widest uppercase">{t.servicesSection.tag}</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.15] mb-4 tracking-tight text-white font-heading">
            {t.servicesSection.heading}
          </h2>
        </div>
      </div>

      <div className="w-full mt-10">
        <Tabs defaultValue="service-0" orientation="vertical" className="w-full flex flex-col md:flex-row gap-8 lg:gap-12">
          <TabsList className="flex flex-col !h-auto bg-transparent items-start gap-2 border-l border-white/10 p-0 md:w-1/3 lg:w-1/4 shrink-0 !justify-start">
            {items.map((item, idx) => (
              <TabsTrigger 
                key={idx}
                value={`service-${idx}`} 
                className="w-full !h-auto !justify-start text-left font-mono py-4 px-6 !rounded-none !border-0 !border-l-2 !border-transparent data-[state=active]:!border-[#33BC65] text-gray-400 hover:text-white transition-all cursor-pointer !bg-transparent data-[state=active]:!bg-white/5 data-[state=active]:!text-[#33BC65] whitespace-normal !after:hidden"
              >
                <span className="mr-4 opacity-40 text-[10px] shrink-0">// {item.num}</span>
                <span className="text-sm font-semibold tracking-wide uppercase leading-tight">{item.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          <div className="md:w-2/3 lg:w-3/4">
            {items.map((item, idx) => (
              <TabsContent key={idx} value={`service-${idx}`} className="mt-0 focus-visible:outline-none focus-visible:ring-0">
                <Card className="bg-[#070707] border-white/10 overflow-hidden relative min-h-[300px] flex flex-col justify-center">
                  <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#33BC65]/5 rounded-full blur-[60px] pointer-events-none"></div>
                  <div className="absolute -left-20 -top-20 w-64 h-64 bg-[#12DCEF]/5 rounded-full blur-[60px] pointer-events-none"></div>
                  
                  <CardHeader className="relative z-10 space-y-6 p-8 md:p-10">
                    <div className="flex justify-between items-start">
                      <div className="bg-[#33BC65]/10 p-4 rounded-2xl border border-[#33BC65]/20">
                        {item.icon}
                      </div>
                      <span className="text-gray-500 font-mono text-sm tracking-widest">{item.num}</span>
                    </div>
                    <CardTitle className="text-3xl md:text-4xl text-white font-heading tracking-tight">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10 p-8 md:p-10 pt-0">
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light">{item.desc}</p>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};
