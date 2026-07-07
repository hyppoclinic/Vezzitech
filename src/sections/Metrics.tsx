import React, { useState } from 'react';
import { TrendingUp, Users, ArrowUpRight, Award, DollarSign, Calculator, ArrowRight, Activity, Percent } from 'lucide-react';
import { translations, Language } from '../translations';

interface MetricsProps {
  lang: Language;
}

export const Metrics = ({ lang }: MetricsProps) => {
  const t = translations[lang];
  const [traffic, setTraffic] = useState<number>(10000);
  const [conversion, setConversion] = useState<number>(1.0);
  const [ticket, setTicket] = useState<number>(2000);

  // Growth formulas based on actual marketing statistics:
  // 1. High Speed (<1s) boosts traffic-to-lead conversion by ~40%
  // 2. 24/7 AI conversational agent captures ~1.8x more leads by qualifying instantly
  // Combined multiplier is conservatively set at 2.2x current conversion rate (capped at 8.0%)
  const projectedConversion = Math.min(conversion * 2.2, 8.0);
  const currentLeads = Math.round(traffic * (conversion / 100));
  const projectedLeads = Math.round(traffic * (projectedConversion / 100));
  const additionalLeads = projectedLeads - currentLeads;
  
  // Assuming a conservative 15% close rate from lead to paying customer for B2B/high-ticket
  const estimatedCloseRate = 0.15;
  const currentRevenue = Math.round(currentLeads * estimatedCloseRate * ticket);
  const projectedRevenue = Math.round(projectedLeads * estimatedCloseRate * ticket);
  const monthlyGain = projectedRevenue - currentRevenue;

  const icons = [
    <TrendingUp key="1" className="w-4 h-4 text-[#12DCEF]" />,
    <ArrowUpRight key="2" className="w-4 h-4 text-[#33BC65]" />,
    <Users key="3" className="w-4 h-4 text-[#12DCEF]" />
  ];

  return (
    <section id="metricas" aria-label="Métricas de Sucesso e ROI" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5 relative">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-emerald-600/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4">
                <div className="text-[#33BC65] font-mono text-xs mb-3 font-semibold uppercase tracking-widest">{t.metricsSection.tag}</div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.15] tracking-tight text-white mb-6 font-heading">
                    {lang === 'pt' ? (
                      <>
                        Impacto real
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-100 to-emerald-200 mt-1 font-normal">
                          comprovado em números.
                        </span>
                      </>
                    ) : (
                      <>
                        Real impact
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-100 to-emerald-200 mt-1 font-normal">
                          proven in numbers.
                        </span>
                      </>
                    )}
                </h2>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
                    {t.metricsSection.sub}
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[#33BC65] text-xs font-bold uppercase tracking-wider">
                    <Award className="w-4 h-4 text-[#12DCEF]" /> {t.metricsSection.badge}
                </div>
            </div>

            <div className="lg:col-span-8 grid md:grid-cols-3 gap-6">
                {t.metricsSection.items.map((stat, i) => (
                    <div key={i} className="bg-glass border-glass p-6 md:p-8 rounded-3xl hover:bg-white/5 transition flex flex-col justify-between min-h-[200px] md:min-h-[240px] group hover:border-[#33BC65]/30">
                        <div className="flex justify-between items-start mb-6">
                            <span className="text-gray-500 text-xs font-mono font-bold uppercase">METRIC // 0{i + 1}</span>
                            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-[#33BC65] flex items-center justify-center">
                                {icons[i]}
                            </div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2 leading-none uppercase tracking-tight font-heading group-hover:text-[#33BC65] transition-colors">{stat.value}</div>
                            <h4 className="text-white font-semibold text-sm mb-2 font-heading">{stat.label}</h4>
                            <p className="text-gray-400 text-xs leading-relaxed">{stat.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* CMO Elite ROI Growth Calculator Upgrade */}
        <div className="mt-20 border border-white/10 rounded-[2.5rem] bg-[#0c0d0e]/60 p-8 md:p-12 relative overflow-hidden backdrop-blur-md shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#33BC65]/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#12DCEF]/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Inputs side */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <div className="flex items-center gap-2 text-[#33BC65] text-xs font-mono font-bold uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4 text-[#12DCEF]" /> {lang === 'pt' ? 'SIMULADOR DE RETORNO (ROI)' : 'ROI GROWTH CALCULATOR'}
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight font-heading">
                  {lang === 'pt' ? 'Simule seu ganho de faturamento com IA e velocidade' : 'Calculate your revenue increase with AI & speed'}
                </h3>
                <p className="text-gray-400 text-xs mt-1">
                  {lang === 'pt' ? 'Ajuste os parâmetros reais do seu negócio para ver o potencial de escala.' : 'Adjust parameters to see the immediate scalability of your model.'}
                </p>
              </div>

              {/* Sliders container */}
              <div className="space-y-6">
                {/* Slider 1: Traffic */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono text-gray-300">
                    <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5 text-[#12DCEF]" /> {lang === 'pt' ? 'Tráfego Mensal do Site' : 'Monthly Traffic'}</span>
                    <span className="text-white font-bold">{traffic.toLocaleString()} {lang === 'pt' ? 'visitas/mês' : 'visits/mo'}</span>
                  </div>
                  <input 
                    type="range" 
                    min="1000" 
                    max="100000" 
                    step="1000"
                    value={traffic}
                    onChange={(e) => setTraffic(Number(e.target.value))}
                    className="w-full accent-[#33BC65] bg-white/5 rounded-lg h-1 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                    <span>1k</span>
                    <span>50k</span>
                    <span>100k</span>
                  </div>
                </div>

                {/* Slider 2: Conversion rate */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono text-gray-300">
                    <span className="flex items-center gap-1"><Percent className="w-3.5 h-3.5 text-[#33BC65]" /> {lang === 'pt' ? 'Taxa de Conversão Atual' : 'Current Conversion Rate'}</span>
                    <span className="text-white font-bold">{conversion.toFixed(1)}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="0.2" 
                    max="5.0" 
                    step="0.1"
                    value={conversion}
                    onChange={(e) => setConversion(Number(e.target.value))}
                    className="w-full accent-[#33BC65] bg-white/5 rounded-lg h-1 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                    <span>0.2%</span>
                    <span>2.5%</span>
                    <span>5.0%</span>
                  </div>
                </div>

                {/* Slider 3: Ticket price */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono text-gray-300">
                    <span className="flex items-center gap-1"><DollarSign className="w-3.5 h-3.5 text-[#12DCEF]" /> {lang === 'pt' ? 'Ticket Médio de Clientes' : 'Average Client Value'}</span>
                    <span className="text-[#33BC65] font-bold">R$ {ticket.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min="100" 
                    max="15000" 
                    step="100"
                    value={ticket}
                    onChange={(e) => setTicket(Number(e.target.value))}
                    className="w-full accent-[#33BC65] bg-white/5 rounded-lg h-1 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                    <span>R$ 100</span>
                    <span>R$ 7.5k</span>
                    <span>R$ 15k</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Output Dashboard side */}
            <div className="lg:col-span-6 flex flex-col justify-between bg-black/40 border border-white/5 rounded-2xl p-6 md:p-8 space-y-6 relative">
              <div className="space-y-4">
                <div className="text-[10px] bg-[#12DCEF]/10 border border-[#12DCEF]/20 text-[#12DCEF] px-2.5 py-0.5 rounded font-mono uppercase tracking-wider w-max">
                  {lang === 'pt' ? 'Projeção Comparativa' : 'Comparative Projection'}
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="border-r border-white/5 pr-4">
                    <p className="text-[10px] font-mono text-gray-500 uppercase">{lang === 'pt' ? 'Cenário Atual' : 'Current Scenario'}</p>
                    <p className="text-lg font-bold text-gray-300">{currentLeads} <span className="text-xs font-normal text-gray-500">{lang === 'pt' ? 'leads/mês' : 'leads/mo'}</span></p>
                    <p className="text-[10px] text-gray-500 mt-1 font-mono">
                      {lang === 'pt' ? 'Faturamento Est:' : 'Est. Revenue:'} <span className="text-white">R$ {currentRevenue.toLocaleString()}</span>
                    </p>
                  </div>

                  <div className="pl-4">
                    <p className="text-[10px] font-mono text-[#33BC65] uppercase">{lang === 'pt' ? 'Stack Vezzitech' : 'Vezzitech Upgrade'}</p>
                    <p className="text-lg font-bold text-[#33BC65]">{projectedLeads} <span className="text-xs font-normal text-emerald-600">{lang === 'pt' ? 'leads/mês' : 'leads/mo'}</span></p>
                    <p className="text-[10px] text-emerald-500 mt-1 font-mono">
                      {lang === 'pt' ? 'Faturamento Est:' : 'Est. Revenue:'} <span className="text-white">R$ {projectedRevenue.toLocaleString()}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Final High-Converting Revenue Boost Banner */}
              <div className="p-5 rounded-xl bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent border border-emerald-500/10 relative overflow-hidden">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#33BC65]/10 text-[#33BC65] flex items-center justify-center shrink-0 border border-[#33BC65]/20">
                    <Activity className="w-5 h-5 animate-pulse text-[#12DCEF]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">{lang === 'pt' ? 'AUMENTO MENSAL DE RECEITA' : 'MONTHLY REVENUE GAIN'}</p>
                    <h4 className="text-2xl md:text-3xl font-black text-white font-heading tracking-tight mt-0.5">
                      + R$ {monthlyGain.toLocaleString()} <span className="text-xs text-gray-400 font-normal">/ {lang === 'pt' ? 'mês' : 'mo'}</span>
                    </h4>
                  </div>
                </div>
              </div>

              {/* Bottom conversion trigger button */}
              <a 
                href="#consultoria"
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-white text-black font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-emerald-400 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl"
              >
                <span>{lang === 'pt' ? 'Exportar Projeção para Reunião no Meet' : 'Export Projection to Google Meet Call'}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
    </section>
  );
};
