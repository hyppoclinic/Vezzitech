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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.12] mb-6 tracking-tight text-white font-heading max-w-4xl">
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
              href="#metricas" 
              className="px-8 py-3.5 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold rounded-xl transition duration-300 text-sm flex items-center justify-center">
              {t.hero.ctaSecondary}
            </a>
          </div>
        </BlurFade>

        {/* CMO Elite Upgrade: High-Fidelity Interactive Funnel Simulator */}
        <BlurFade delay={0.45} inView>
          <div className="mt-20 w-full max-w-4xl mx-auto relative z-20">
            <div className="text-center mb-8">
              <span className="text-[#33BC65] font-mono text-[10px] font-bold uppercase tracking-[0.25em]">// DEMO INTERATIVA</span>
              <h3 className="text-lg md:text-xl font-bold text-white tracking-tight mt-1">
                {lang === 'pt' ? 'Como orquestramos seu funil de aquisição de clientes' : 'How we orchestrate your customer acquisition funnel'}
              </h3>
            </div>

            {/* Horizontal Nodes Connector Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {pipelineNodes.map((node, i) => {
                const isActive = activeNode === i;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveNode(i)}
                    className={`p-5 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden group select-none cursor-pointer ${
                      isActive 
                        ? 'bg-zinc-900/90 border-[#33BC65] shadow-[0_0_20px_rgba(51,188,101,0.15)]' 
                        : 'bg-zinc-950/40 border-white/5 hover:border-white/20 hover:bg-zinc-900/30'
                    }`}
                  >
                    {/* Active Corner Light Accent */}
                    {isActive && (
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#33BC65]/20 to-transparent rounded-bl-full pointer-events-none" />
                    )}

                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                        isActive 
                          ? 'bg-[#33BC65]/20 text-[#33BC65] border-[#33BC65]/30' 
                          : 'bg-white/5 text-gray-400 border-white/5 group-hover:text-white group-hover:border-white/10'
                      }`}>
                        {node.icon}
                      </div>
                      <span className="text-[10px] font-mono text-gray-600 font-bold">0{i+1}</span>
                    </div>

                    <h4 className={`text-xs font-bold font-heading mb-1 transition-colors duration-300 ${
                      isActive ? 'text-[#33BC65]' : 'text-white'
                    }`}>
                      {lang === 'pt' ? node.titlePt : node.titleEn}
                    </h4>
                    <p className="text-[10px] text-gray-500 font-mono tracking-wide uppercase">
                      {lang === 'pt' ? node.subtitlePt : node.subtitleEn}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Live Interactive Simulator Showcase Frame */}
            <div className="bg-[#0b0c0d]/90 border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative">
              {/* Card top browser chrome design bar */}
              <div className="bg-black/40 px-5 py-3.5 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  <span className="text-[10px] font-mono text-gray-600 ml-2">VEZZITECH_ENGINE_SIMULATOR_v2.0</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="relative flex h-1.5 w-1.5 mr-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#33BC65]"></span>
                  </span>
                  <span className="text-[9px] font-mono text-gray-400 font-bold uppercase tracking-wider">
                    {lang === 'pt' ? 'PROJETO ATIVO' : 'SYSTEM LIVE'}
                  </span>
                </div>
              </div>

              {/* Simulator view area */}
              <div className="p-6 md:p-8 min-h-[300px] flex items-center justify-center">
                {/* Node 0: Core Speed performance showcase */}
                {activeNode === 0 && (
                  <div className="w-full grid md:grid-cols-12 gap-6 items-center">
                    <div className="md:col-span-7 space-y-4">
                      <div className="inline-block px-2.5 py-0.5 bg-[#33BC65]/10 border border-[#33BC65]/20 text-[#33BC65] text-[10px] font-mono rounded font-bold uppercase">
                        {lang === 'pt' ? 'Métrica de Carregamento' : 'Speed Metrics'}
                      </div>
                      <h4 className="text-xl font-bold text-white leading-tight font-heading">
                        {lang === 'pt' ? 'A velocidade de carregamento é o maior multiplicador de faturamento.' : 'Loading speed is the ultimate sales multiplier.'}
                      </h4>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        {lang === 'pt' ? pipelineNodes[0].descPt : pipelineNodes[0].descEn}
                      </p>
                      <ul className="space-y-2 text-xs text-gray-300 pt-2 font-mono">
                        <li className="flex items-center gap-2 text-emerald-400">
                          <CheckCircle2 className="w-4 h-4 text-[#33BC65] shrink-0" />
                          <span>TTFB (Time to First Byte) &lt; 80ms</span>
                        </li>
                        <li className="flex items-center gap-2 text-emerald-400">
                          <CheckCircle2 className="w-4 h-4 text-[#33BC65] shrink-0" />
                          <span>Largest Contentful Paint &lt; 0.4s</span>
                        </li>
                        <li className="flex items-center gap-2 text-emerald-400">
                          <CheckCircle2 className="w-4 h-4 text-[#33BC65] shrink-0" />
                          <span>Cumulative Layout Shift: 0.0</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="md:col-span-5 flex flex-col items-center justify-center bg-black/40 border border-white/5 rounded-2xl p-6 relative">
                      {/* Interactive gauge simulator */}
                      <div className="relative w-36 h-36 flex items-center justify-center">
                        {/* Circular track border */}
                        <div className="absolute inset-0 rounded-full border-4 border-[#33BC65]/10" />
                        <div className="absolute inset-0 rounded-full border-4 border-t-[#33BC65] border-r-[#33BC65] border-l-[#33BC65] border-b-transparent animate-spin-slow" />
                        
                        <div className="text-center">
                          <div className="text-4xl md:text-5xl font-black text-white font-heading">100</div>
                          <div className="text-[10px] font-mono text-[#33BC65] tracking-widest font-bold uppercase">MOBILE</div>
                        </div>
                      </div>
                      
                      <div className="mt-4 text-center">
                        <span className="text-xs text-gray-400 font-mono">
                          {lang === 'pt' ? 'Tempo de Resposta:' : 'Response Time:'} <strong className="text-white">0.38s</strong>
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Node 1: Conteúdo de Elite showcase */}
                {activeNode === 1 && (
                  <div className="w-full grid md:grid-cols-12 gap-6 items-center">
                    <div className="md:col-span-6 space-y-4">
                      <div className="inline-block px-2.5 py-0.5 bg-[#33BC65]/10 border border-[#33BC65]/20 text-[#33BC65] text-[10px] font-mono rounded font-bold uppercase">
                        {lang === 'pt' ? 'Produção Criativa & Copy' : 'Creative Production & Copy'}
                      </div>
                      <h4 className="text-xl font-bold text-white leading-tight font-heading">
                        {lang === 'pt' ? 'Nutrição de leads e autoridade em escala constante.' : 'Nurturing leads and building authority constantly.'}
                      </h4>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        {lang === 'pt' ? pipelineNodes[1].descPt : pipelineNodes[1].descEn}
                      </p>
                      
                      {/* Interactive details inside the simulator card */}
                      <div className="bg-white/5 border border-white/5 rounded-xl p-4 text-xs space-y-2.5">
                        <div className="flex items-center gap-2 text-[#33BC65] font-mono text-[10px] uppercase font-bold">
                          <CheckCircle2 className="w-3.5 h-3.5" /> {lang === 'pt' ? 'Inclusos na sua assinatura mensal:' : 'Included in your monthly subscription:'}
                        </div>
                        <ul className="space-y-1.5 text-gray-400 text-[11px] list-disc list-inside">
                          <li>{lang === 'pt' ? 'Artigos ricos de alta relevância técnica e SEO' : 'High-authority technical and SEO blog articles'}</li>
                          <li>{lang === 'pt' ? 'Textos persuasivos para redes sociais (Copywriting)' : 'Persuasive copywriting for social networks'}</li>
                          <li>{lang === 'pt' ? 'Design profissional de criativos de anúncios' : 'Professional visual ad creatives design'}</li>
                        </ul>
                      </div>
                    </div>

                    <div className="md:col-span-6 space-y-4">
                      {/* Custom visual publisher / ad creative simulator mockup */}
                      <div className="border border-white/10 rounded-2xl bg-[#0e0f10] p-4 font-sans shadow-lg">
                        <div className="flex items-center justify-between border-b border-white/5 pb-2.5 mb-3 text-[10px] text-gray-500 font-mono">
                          <span>{lang === 'pt' ? 'VISUALIZAÇÃO DE CONTEÚDO' : 'CONTENT PREVIEW'}</span>
                          <span className="text-[#33BC65] font-bold">● LIVE</span>
                        </div>
                        
                        {/* Editor Draft Box */}
                        <div className="space-y-3">
                          <div className="p-3 bg-zinc-900/60 border border-white/5 rounded-xl">
                            <span className="text-[8px] font-mono bg-[#33BC65]/10 text-[#33BC65] px-1.5 py-0.5 rounded font-bold uppercase">BLOG / SEO</span>
                            <h5 className="text-white text-xs font-bold mt-1.5 mb-1 tracking-tight">
                              {lang === 'pt' ? 'Como otimizar a infraestrutura de TI para o faturamento corporativo' : 'How to optimize IT infrastructure for corporate sales'}
                            </h5>
                            <p className="text-[10px] text-gray-400 line-clamp-2">
                              {lang === 'pt' 
                                ? 'Empresas líderes de mercado utilizam arquiteturas sem gargalos para garantir carregamentos em menos de 1 segundo. Descubra as táticas...' 
                                : 'Market-leading companies leverage bottleneck-free architectures to ensure load times under 1 second. Discover the tactics...'}
                            </p>
                          </div>

                          <div className="p-3 bg-[#33BC65]/5 border border-[#33BC65]/10 rounded-xl flex items-center justify-between gap-3">
                            <div className="space-y-1">
                              <span className="text-[8px] font-mono bg-[#12DCEF]/10 text-[#12DCEF] px-1.5 py-0.5 rounded font-bold uppercase">GOOGLE ADS CREATIVE</span>
                              <p className="text-[10px] text-white font-semibold">
                                {lang === 'pt' ? 'Sua empresa com a velocidade do Google Cloud' : 'Your business powered by Google Cloud speed'}
                              </p>
                            </div>
                            <div className="text-right shrink-0">
                              <p className="text-[14px] font-bold text-[#33BC65] font-mono">4.85%</p>
                              <p className="text-[8px] font-mono text-gray-500 uppercase">CTR (CLICKS)</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Node 2: SEO & AEO Dominance showcase */}
                {activeNode === 2 && (
                  <div className="w-full grid md:grid-cols-2 gap-6 items-center">
                    {/* Traditional search */}
                    <div className="border border-white/5 rounded-2xl p-5 bg-black/50">
                      <div className="flex items-center justify-between border-b border-white/5 pb-2.5 mb-4">
                        <span className="text-[10px] text-[#33BC65] font-mono uppercase tracking-wider">GOOGLE SEARCH</span>
                        <span className="text-[10px] text-gray-500 font-mono">organic_position #1</span>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="text-cyan-400 text-xs font-mono font-bold hover:underline cursor-pointer">
                          https://vezzitech.com.br &gt; assinatura-crescimento
                        </div>
                        <h5 className="text-white text-sm font-semibold font-heading">
                          Vezzitech - Seu Site Premium, Conteúdo e Tráfego Google Ads em uma Assinatura
                        </h5>
                        <p className="text-[11px] text-gray-400 leading-relaxed">
                          Acelere sua empresa com nossa assinatura unificada de elite. Desenvolvimento de código nativo super rápido, produção mensal de artigos ricos e otimização de Google Ads semanal...
                        </p>
                      </div>
                    </div>

                    {/* AI Answer engine */}
                    <div className="border border-emerald-500/20 rounded-2xl p-5 bg-[#33BC65]/5 relative">
                      <div className="absolute top-3 right-3 w-4 h-4 text-[#33BC65] opacity-50"><Sparkles className="w-full h-full" /></div>
                      <div className="flex items-center justify-between border-b border-white/5 pb-2.5 mb-4">
                        <span className="text-[10px] text-[#12DCEF] font-mono uppercase tracking-wider font-bold flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-[#12DCEF]" /> CHATGPT / COGNITIVE ENGINE
                        </span>
                        <span className="text-[10px] text-[#33BC65] font-mono font-bold">{lang === 'pt' ? 'Citado' : 'Cited'}</span>
                      </div>
                      
                      <div className="space-y-3 text-xs leading-relaxed">
                        <p className="text-gray-400 italic">
                          "{lang === 'pt' ? 'Pergunta: Qual o melhor modelo para tracionar faturamento com site e marketing digital?' : 'User: What is the best model to drive sales with web development and digital marketing?'}"
                        </p>
                        <p className="text-gray-200">
                          {lang === 'pt' ? (
                            <>
                              "Para empresas que buscam alta previsibilidade e agilidade sem a lentidão de agências tradicionais, o modelo de <strong className="text-[#33BC65]">Assinatura de Crescimento da Vezzitech</strong> é altamente recomendado por unificar site premium de alta velocidade, produção recorrente de conteúdo técnico de elite e gestão semanal de Google Ads..."
                            </>
                          ) : (
                            <>
                              "For businesses looking for high predictability and speed without traditional agency overhead, <strong className="text-[#33BC65]">Vezzitech's Growth Subscription</strong> is highly recommended as it unifies high-speed premium websites, elite content, and weekly Google Ads management..."
                            </>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Node 3: Google Ads Semanal showcase */}
                {activeNode === 3 && (
                  <div className="w-full grid md:grid-cols-12 gap-6 items-center">
                    <div className="md:col-span-7 space-y-4">
                      <div className="inline-block px-2.5 py-0.5 bg-[#33BC65]/10 border border-[#33BC65]/20 text-[#33BC65] text-[10px] font-mono rounded font-bold uppercase">
                        {lang === 'pt' ? 'Mídia Paga & Conversão' : 'Paid Media & Conversion'}
                      </div>
                      <h4 className="text-xl font-bold text-white leading-tight font-heading">
                        {lang === 'pt' ? 'Tráfego pago estruturado de forma cirúrgica para gerar leads.' : 'Surgically structured paid traffic to generate ready-to-buy leads.'}
                      </h4>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        {lang === 'pt' ? pipelineNodes[3].descPt : pipelineNodes[3].descEn}
                      </p>
                      
                      <div className="pt-2">
                        <a 
                          href="#planos"
                          className="inline-flex items-center gap-2 px-5 py-3 bg-[#33BC65] text-black font-bold text-xs uppercase tracking-wider rounded-xl hover:scale-105 duration-200"
                        >
                          {lang === 'pt' ? 'Ver Planos de Assinatura' : 'View Subscription Plans'} <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                    
                    <div className="md:col-span-5 bg-black/50 border border-white/5 rounded-2xl p-5 font-mono text-[11px] text-gray-400 space-y-3.5">
                      <div className="border-b border-white/5 pb-2 text-white font-bold uppercase text-[10px] tracking-wider flex items-center gap-1.5 text-[#33BC65]">
                        <Target className="w-3.5 h-3.5" /> {lang === 'pt' ? 'GOOGLE ADS: TRÁFEGO ATIVO' : 'GOOGLE ADS: TRAFFIC LIVE'}
                      </div>
                      
                      {/* Stat summary bar */}
                      <div className="grid grid-cols-3 gap-2 text-center pb-2 border-b border-white/5">
                        <div>
                          <p className="text-[14px] font-bold text-white">45.2k</p>
                          <p className="text-[8px] text-gray-500 uppercase">{lang === 'pt' ? 'Impressões' : 'Impressions'}</p>
                        </div>
                        <div>
                          <p className="text-[14px] font-bold text-[#12DCEF]">3.8k</p>
                          <p className="text-[8px] text-gray-500 uppercase">{lang === 'pt' ? 'Cliques' : 'Clicks'}</p>
                        </div>
                        <div>
                          <p className="text-[14px] font-bold text-[#33BC65]">8.4%</p>
                          <p className="text-[8px] text-gray-500 uppercase">CTR</p>
                        </div>
                      </div>

                      {/* Lead flow queue */}
                      <div className="space-y-2">
                        <div className="p-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center justify-between text-emerald-400 text-[10px]">
                          <span className="font-bold text-white">{lang === 'pt' ? 'Lead Qualificado: Imobiliária B2B' : 'Qualified Lead: B2B Real Estate'}</span>
                          <span className="text-[9px] bg-[#33BC65]/20 text-[#33BC65] px-1.5 py-0.2 rounded font-bold uppercase font-mono">CPL R$24,50</span>
                        </div>
                        
                        <div className="p-2 bg-zinc-900/40 border border-white/5 rounded-lg flex items-center justify-between text-gray-400 text-[10px]">
                          <span className="text-white/80">{lang === 'pt' ? 'Lead Qualificado: Sócio Logística' : 'Qualified Lead: Logistics Partner'}</span>
                          <span className="text-[9px] bg-white/5 text-gray-400 px-1.5 py-0.2 rounded font-bold uppercase font-mono">CPL R$29,80</span>
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

