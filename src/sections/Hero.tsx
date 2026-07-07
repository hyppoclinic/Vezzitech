import React, { useState } from 'react';
import { ArrowRight, Sparkles, Shield, Cpu, Zap, Search, MessageSquare, Calendar, ChevronRight, CheckCircle2, PenTool, Target, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { translations, Language } from '../translations';
import { BlurFade } from '../components/ui/blur-fade';
import { ShimmerButton } from '../components/ui/shimmer-button';
import { Meteors } from '../components/ui/meteors';

interface HeroProps {
  lang: Language;
}

export const Hero = ({ lang }: HeroProps) => {
  const t = translations[lang];
  const [activeNode, setActiveNode] = useState<number>(0);

  const pipelineNodes = [
    {
      icon: <Zap className="w-5 h-5" />,
      titlePt: "Site Premium",
      titleEn: "Premium Website",
      subtitlePt: "Incluso no Plano",
      subtitleEn: "Included in Plan",
      descPt: "Desenvolvimento do seu site ou landing page proprietária de altíssima velocidade para reter e converter visitantes.",
      descEn: "Custom high-speed website or landing page development built to retain and convert visitors.",
    },
    {
      icon: <PenTool className="w-5 h-5" />,
      titlePt: "Conteúdo de Elite",
      titleEn: "Elite Content",
      subtitlePt: "Escala & Persuasão",
      subtitleEn: "Scale & Persuasion",
      descPt: "Artigos de blog focados em SEO, copywriting de alta persuasão para redes sociais, criativos de anúncios e design profissional.",
      descEn: "SEO-focused blog articles, highly persuasive social media copy, ad creatives, and professional design.",
    },
    {
      icon: <Search className="w-5 h-5" />,
      titlePt: "SEO & AEO Preditivo",
      titleEn: "Predictive SEO & AEO",
      subtitlePt: "Domínio de Buscas",
      subtitleEn: "Search Dominance",
      descPt: "Otimização completa para ranquear no Google orgânico tradicional e ser citado como resposta pelo ChatGPT, Gemini e Perplexity.",
      descEn: "Full optimization to rank #1 on organic Google and be cited directly by ChatGPT, Gemini, and Perplexity response engines.",
    },
    {
      icon: <Target className="w-5 h-5" />,
      titlePt: "Google Ads Semanal",
      titleEn: "Weekly Google Ads",
      subtitlePt: "Tráfego Qualificado",
      subtitleEn: "Qualified Traffic",
      descPt: "Estruturação técnica de campanhas, refinamento constante de palavras-chave e otimização semanal para aquisição imediata de leads.",
      descEn: "Technical campaign structuring, constant keyword refinement, and weekly optimization for immediate lead acquisition.",
    }
  ];

  return (
    <section id="inicio" aria-label="Introdução e Funil" className="relative pt-40 pb-24 px-6 overflow-hidden bg-[#070707]">
      <Meteors number={25} />
      {/* Absolute Ambient Background Lights & Vector Grid Aesthetics */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#33BC65]/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/[0.03] rounded-full blur-[180px] pointer-events-none"></div>

      {/* Decorative Blueprint Vector Line Matrix (Inspired by Arounda) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <svg className="absolute w-full h-full opacity-[0.06] sm:opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="grid-fade" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#fff" stopOpacity="1" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
            <mask id="grid-mask">
              <rect width="100%" height="100%" fill="url(#grid-fade)" />
            </mask>
          </defs>
          
          <g mask="url(#grid-mask)">
            {/* Horizontal Blueprint Lines */}
            <line x1="0" y1="20%" x2="100%" y2="20%" stroke="#FFFFFF" strokeWidth="0.5" />
            <line x1="0" y1="40%" x2="100%" y2="40%" stroke="#FFFFFF" strokeWidth="0.5" />
            <line x1="0" y1="60%" x2="100%" y2="60%" stroke="#FFFFFF" strokeWidth="0.5" />
            <line x1="0" y1="80%" x2="100%" y2="80%" stroke="#FFFFFF" strokeWidth="0.5" />
            
            {/* Vertical Blueprint Lines */}
            <line x1="15%" y1="0" x2="15%" y2="100%" stroke="#FFFFFF" strokeWidth="0.5" />
            <line x1="30%" y1="0" x2="30%" y2="100%" stroke="#FFFFFF" strokeWidth="0.5" />
            <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#FFFFFF" strokeWidth="0.5" />
            <line x1="70%" y1="0" x2="70%" y2="100%" stroke="#FFFFFF" strokeWidth="0.5" />
            <line x1="85%" y1="0" x2="85%" y2="100%" stroke="#FFFFFF" strokeWidth="0.5" />
            
            {/* Fine Diagonal Tech-Grid Intersects */}
            <line x1="0" y1="0" x2="100%" y2="100%" stroke="#33BC65" strokeWidth="0.5" strokeOpacity="0.3" />
            <line x1="100%" y1="0" x2="0" y2="100%" stroke="#33BC65" strokeWidth="0.5" strokeOpacity="0.3" />
            
            {/* Fine detail geometric diamonds */}
            <polygon points="50%,20% 70%,40% 50%,60% 30%,40%" fill="none" stroke="#FFFFFF" strokeWidth="0.5" strokeDasharray="3 6" />
            <polygon points="50%,40% 85%,60% 50%,80% 15%,60%" fill="none" stroke="#FFFFFF" strokeWidth="0.5" strokeDasharray="4 8" />
          </g>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center relative z-10">
        
        {/* Strategical Badge - Centered */}
        <BlurFade delay={0.1} inView>
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[#33BC65] text-[10px] font-bold tracking-widest uppercase mb-8 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#33BC65]"></span>
            </span>
            {t.hero.badge}
          </div>
        </BlurFade>

        {/* Arounda-Inspired Headline with Symmetric Center Alignment & Soft Capitalization Reading Flow */}
        <BlurFade delay={0.2} inView>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold leading-[1.12] mb-6 tracking-tight text-white font-heading max-w-3xl">
            {t.hero.headline}
          </h1>
        </BlurFade>

        {/* Softened Sub-headline */}
        <BlurFade delay={0.3} inView>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-10 max-w-2xl leading-relaxed font-normal">
            {t.hero.subheadline}
          </p>
        </BlurFade>

        {/* Center-aligned Interactive Core CTAs */}
        <BlurFade delay={0.4} inView>
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#consultoria" className="inline-block">
                <ShimmerButton className="shadow-2xl hover:scale-105 transition-transform" shimmerColor="#12DCEF" background="#ffffff" borderRadius="0.75rem">
                  <span className="text-black font-semibold flex items-center gap-2 text-sm px-2">
                    {t.hero.ctaPrimary}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </ShimmerButton>
              </a>
              <a 
                href="#planos" 
                className="px-8 py-3.5 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold rounded-xl transition duration-300 text-sm flex items-center justify-center">
                {t.hero.ctaSecondary}
              </a>
            </div>
            <p className="text-gray-400 text-xs tracking-wide font-mono">
              {t.hero.microcopy}
            </p>
          </div>
        </BlurFade>

        {/* Funnel Section - Clean & Elegant */}
        <BlurFade delay={0.45} inView>
          <div className="mt-32 w-full max-w-5xl mx-auto relative z-20">
            <div className="text-center mb-12 md:mb-16">
              <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight font-heading">
                {lang === 'pt' ? 'Como orquestramos seu funil de aquisição' : 'How we orchestrate your acquisition funnel'}
              </h3>
            </div>

            {/* Clean Tabs */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
              {pipelineNodes.map((node, i) => {
                const isActive = activeNode === i;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveNode(i)}
                    className={`flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? 'bg-[#33BC65]/10 text-[#33BC65] border border-[#33BC65]/20' 
                        : 'bg-transparent text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <span className={`${isActive ? 'text-[#33BC65]' : 'text-gray-400'}`}>
                      {React.cloneElement(node.icon as React.ReactElement<any>, { className: "w-4 h-4" })}
                    </span>
                    {lang === 'pt' ? node.titlePt : node.titleEn}
                  </button>
                );
              })}
            </div>

            {/* Clean Content Area */}
            <div className="bg-[#0b0c0d]/80 backdrop-blur-md border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#33BC65]/5 rounded-full blur-[100px] pointer-events-none" />
              
              <div className="relative z-10">
                {/* Node 0 */}
                {activeNode === 0 && (
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <h4 className="text-2xl md:text-3xl font-bold text-white leading-tight font-heading mb-6">
                        {lang === 'pt' ? 'Velocidade como vantagem competitiva.' : 'Speed as a competitive advantage.'}
                      </h4>
                      <p className="text-gray-400 text-base leading-relaxed mb-8">
                        {lang === 'pt' ? pipelineNodes[0].descPt : pipelineNodes[0].descEn}
                      </p>
                      <div className="space-y-5">
                        <div className="flex items-center gap-4">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#33BC65]" />
                          <span className="text-sm text-gray-300 font-medium">TTFB (Time to First Byte) &lt; 80ms</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#33BC65]" />
                          <span className="text-sm text-gray-300 font-medium">Largest Contentful Paint &lt; 0.4s</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#33BC65]" />
                          <span className="text-sm text-gray-300 font-medium">Cumulative Layout Shift: 0.0</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-56 h-56 rounded-full border border-[#33BC65]/20 flex flex-col items-center justify-center bg-gradient-to-b from-[#33BC65]/5 to-transparent relative shadow-[0_0_50px_rgba(51,188,101,0.1)]">
                        <div className="absolute inset-2 rounded-full border border-[#33BC65]/10 border-t-[#33BC65]/50 animate-spin-slow" />
                        <span className="text-6xl font-bold text-white font-heading tracking-tighter">100</span>
                        <span className="text-xs uppercase tracking-[0.2em] text-[#33BC65] mt-2 font-semibold">Performance</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Node 1 */}
                {activeNode === 1 && (
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <h4 className="text-2xl md:text-3xl font-bold text-white leading-tight font-heading mb-6">
                        {lang === 'pt' ? 'Nutrição e autoridade em escala.' : 'Nurturing and authority at scale.'}
                      </h4>
                      <p className="text-gray-400 text-base leading-relaxed mb-8">
                        {lang === 'pt' ? pipelineNodes[1].descPt : pipelineNodes[1].descEn}
                      </p>
                      <div className="space-y-5">
                        <div className="flex items-center gap-4">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#33BC65]" />
                          <span className="text-sm text-gray-300 font-medium">{lang === 'pt' ? 'Artigos técnicos e otimizados para SEO' : 'Technical and SEO-optimized articles'}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#33BC65]" />
                          <span className="text-sm text-gray-300 font-medium">{lang === 'pt' ? 'Copywriting persuasivo' : 'Persuasive copywriting'}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#33BC65]" />
                          <span className="text-sm text-gray-300 font-medium">{lang === 'pt' ? 'Design de criativos de alta conversão' : 'High-conversion ad creative design'}</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#0e0f10] rounded-2xl p-8 border border-white/5 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#33BC65]/5 to-transparent" />
                      <div className="relative z-10">
                        <div className="mb-6">
                          <span className="text-xs font-bold text-[#33BC65] uppercase tracking-widest bg-[#33BC65]/10 px-3 py-1.5 rounded-full">Blog / SEO</span>
                        </div>
                        <h5 className="text-xl font-bold text-white mb-4 leading-tight">
                          {lang === 'pt' ? 'Como otimizar a infraestrutura de TI para o faturamento corporativo' : 'How to optimize IT infrastructure for corporate sales'}
                        </h5>
                        <p className="text-sm text-gray-400 leading-relaxed mb-8">
                          {lang === 'pt' 
                            ? 'Empresas líderes de mercado utilizam arquiteturas sem gargalos para garantir carregamentos em menos de 1 segundo. Descubra as táticas...' 
                            : 'Market-leading companies leverage bottleneck-free architectures to ensure load times under 1 second. Discover the tactics...'}
                        </p>
                        <div className="h-1.5 w-1/3 bg-white/10 rounded-full" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Node 2 */}
                {activeNode === 2 && (
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <h4 className="text-2xl md:text-3xl font-bold text-white leading-tight font-heading mb-6">
                        {lang === 'pt' ? 'Domínio orgânico absoluto.' : 'Absolute organic dominance.'}
                      </h4>
                      <p className="text-gray-400 text-base leading-relaxed mb-8">
                        {lang === 'pt' ? pipelineNodes[2].descPt : pipelineNodes[2].descEn}
                      </p>
                    </div>
                    <div className="space-y-6">
                      <div className="bg-[#0e0f10] rounded-2xl p-6 md:p-8 border border-white/5">
                        <div className="flex items-center gap-3 mb-4 text-gray-400 text-sm font-medium">
                          <Search className="w-5 h-5 text-[#33BC65]" />
                          <span>Google Search</span>
                        </div>
                        <h5 className="text-white font-medium text-lg leading-tight mb-2">Vezzitech - Seu Site Premium</h5>
                        <p className="text-sm text-gray-400">Acelere sua empresa com nossa assinatura unificada de elite...</p>
                      </div>
                      
                      <div className="bg-[#0e0f10] rounded-2xl p-6 md:p-8 border border-[#33BC65]/20 bg-gradient-to-br from-[#33BC65]/10 to-transparent">
                        <div className="flex items-center gap-3 mb-4 text-gray-400 text-sm font-medium">
                          <Sparkles className="w-5 h-5 text-[#33BC65]" />
                          <span className="text-[#33BC65]">ChatGPT / Gemini</span>
                        </div>
                        <p className="text-sm text-gray-300 italic leading-relaxed">
                          "...o modelo da <span className="text-[#33BC65] font-semibold">Vezzitech</span> é altamente recomendado por unificar site premium de alta velocidade e produção recorrente..."
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Node 3 */}
                {activeNode === 3 && (
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <h4 className="text-2xl md:text-3xl font-bold text-white leading-tight font-heading mb-6">
                        {lang === 'pt' ? 'Tráfego pago estruturado de forma cirúrgica.' : 'Surgically structured paid traffic.'}
                      </h4>
                      <p className="text-gray-400 text-base leading-relaxed mb-8">
                        {lang === 'pt' ? pipelineNodes[3].descPt : pipelineNodes[3].descEn}
                      </p>
                      <a 
                        href="#planos"
                        className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-black font-semibold text-sm rounded-full hover:bg-gray-100 transition-colors"
                      >
                        {lang === 'pt' ? 'Ver Planos de Assinatura' : 'View Subscription Plans'} <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                    
                    <div className="bg-[#0e0f10] rounded-2xl p-8 border border-white/5">
                      <div className="flex items-center gap-2 mb-8 text-[#33BC65] font-semibold text-sm tracking-wide uppercase">
                        <Target className="w-4 h-4" />
                        {lang === 'pt' ? 'Google Ads' : 'Google Ads'}
                      </div>
                      
                      <div className="grid grid-cols-3 gap-6 mb-10">
                        <div>
                          <div className="text-3xl font-bold text-white mb-1">45.2k</div>
                          <div className="text-xs text-gray-400 uppercase tracking-wider">{lang === 'pt' ? 'Impressões' : 'Impressions'}</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-white mb-1">3.8k</div>
                          <div className="text-xs text-gray-400 uppercase tracking-wider">{lang === 'pt' ? 'Cliques' : 'Clicks'}</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-[#33BC65] mb-1">8.4%</div>
                          <div className="text-xs text-gray-400 uppercase tracking-wider">CTR</div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 rounded-xl bg-[#33BC65]/10 border border-[#33BC65]/20 text-sm">
                          <span className="text-white font-medium">{lang === 'pt' ? 'Lead: Imobiliária B2B' : 'Lead: B2B Real Estate'}</span>
                          <span className="text-[#33BC65] font-medium">CPL R$ 24,50</span>
                        </div>
                        <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 text-sm">
                          <span className="text-gray-400 font-medium">{lang === 'pt' ? 'Lead: Sócio Logística' : 'Lead: Logistics Partner'}</span>
                          <span className="text-gray-400 font-medium">CPL R$ 29,80</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </BlurFade>

      </div>

      {/* Trust Banner Marquee Slider (Elegant, fluid, modern, overflow-safe) */}
      <BlurFade delay={0.5} inView>
        <div className="relative w-full bg-[#0d0d0e]/40 backdrop-blur-md border-y border-white/[0.06] text-[#e4e4e7] py-6 mt-24 overflow-hidden select-none group/marquee">
          {/* Soft edge ambient mask gradient for a premium touch */}
          <div className="absolute inset-y-0 left-0 w-12 md:w-36 bg-gradient-to-r from-[#070708] via-[#070708]/60 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-12 md:w-36 bg-gradient-to-l from-[#070708] via-[#070708]/60 to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex w-max min-w-full hover:[animation-play-state:paused] transition-all cursor-grab active:cursor-grabbing">
            {/* Track 1 */}
            <div className="flex gap-16 shrink-0 animate-marquee whitespace-nowrap min-w-full justify-around pr-16 items-center">
              {t.ticker.map((item, idx) => (
                <div key={idx} className="flex items-center gap-8 text-[10px] md:text-[11px] font-normal tracking-[0.25em] uppercase shrink-0 transition-colors duration-300 hover:text-white">
                  <span>{item}</span>
                  <span className="text-[#33BC65]/40 font-bold font-mono text-xs select-none">//</span>
                </div>
              ))}
            </div>
            {/* Track 2 (Clone for perfect seamless infinite animation) */}
            <div className="flex gap-16 shrink-0 animate-marquee whitespace-nowrap min-w-full justify-around pr-16 items-center" aria-hidden="true">
              {t.ticker.map((item, idx) => (
                <div key={`dup-${idx}`} className="flex items-center gap-8 text-[10px] md:text-[11px] font-normal tracking-[0.25em] uppercase shrink-0 transition-colors duration-300 hover:text-white">
                  <span>{item}</span>
                  <span className="text-[#33BC65]/40 font-bold font-mono text-xs select-none">//</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </BlurFade>
    </section>
  );
};

