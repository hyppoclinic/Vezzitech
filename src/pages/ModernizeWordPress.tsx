import { motion } from 'motion/react';
import { Check, Zap, Globe, Shield, Sparkles, ArrowRight, BarChart3, Search } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Language } from '../translations';
import { useState } from 'react';

interface ModernizeWordPressProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export function ModernizeWordPress({ lang, setLang }: ModernizeWordPressProps) {
  const whatsappNumber = "+5544998266950";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=Olá! Gostaria de saber mais sobre a modernização do meu site WordPress para Node.js.`;

  const features = [
    {
      title: "Velocidade Extrema (Node.js)",
      desc: "Sites até 10x mais rápidos que o WordPress tradicional. Performance que o Google ama.",
      icon: <Zap className="w-6 h-6 text-emerald-500" />
    },
    {
      title: "Infraestrutura Google",
      desc: "Hospedagem em servidores Google Cloud com escalabilidade automática e segurança militar.",
      icon: <Globe className="w-6 h-6 text-emerald-500" />
    },
    {
      title: "Otimização AEO/SEO",
      desc: "Preparado para a era da IA. Seu conteúdo lido com perfeição por buscadores e agentes de IA.",
      icon: <Search className="w-6 h-6 text-emerald-500" />
    },
    {
      title: "Segurança de Elite",
      desc: "Diga adeus às vulnerabilidades de plugins do WordPress. Código limpo e protegido.",
      icon: <Shield className="w-6 h-6 text-emerald-500" />
    }
  ];

  const steps = [
    { title: "Diagnóstico", desc: "Analisamos seu site WordPress atual e identificamos gargalos." },
    { title: "Migração Tech", desc: "Convertendo seu conteúdo e design para React + Vite + Node.js." },
    { title: "Otimização Google", desc: "Configuração de meta-tags avançadas e Core Web Vitals." },
    { title: "Deployment", desc: "Lançamento em infraestrutura global Google Cloud." }
  ];

  return (
    <div className="bg-[#030303] min-h-screen text-gray-200 antialiased selection:bg-emerald-500/30 selection:text-white font-sans overflow-x-hidden">
      <Header lang={lang} setLang={setLang} />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-8"
              >
                <Zap className="w-3 h-3" />
                <span>Modernização WordPress p/ Node.js</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-8 leading-[1.1]"
              >
                Seu WordPress lento agora é passado. <br />
                <span className="text-emerald-500 italic">Node.js é o futuro.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
              >
                Migre seu site para a infraestrutura do Google. Performance superior, segurança inabalável e otimização total para SEO e Answer Engine Optimization (AEO).
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-full transition-all flex items-center justify-center gap-2 group shadow-lg shadow-emerald-500/20"
                >
                  Falar com Especialista
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <div className="text-sm text-gray-500 flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  Hospedagem Google inclusa
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-24 border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-medium text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Price Section */}
        <section className="py-24 bg-white/[0.01] border-y border-white/5 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto rounded-[40px] bg-emerald-500 p-12 md:p-20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 blur-[100px] rounded-full -mr-32 -mt-32" />
              
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 tracking-tight">
                    Oferta Especial de Modernização
                  </h2>
                  <p className="text-emerald-950/80 text-lg mb-8 font-medium">
                    Transformamos sua presença digital por um valor acessível. Site pronto para 2026.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {['Design Responsivo', 'SEO Premium', 'Setup Google Cloud', 'Otimização de Velocidade'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-emerald-950 font-semibold">
                        <Check className="w-5 h-5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-black/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 text-center">
                  <div className="text-emerald-950 font-bold text-sm uppercase tracking-widest mb-2">Preço Fixo</div>
                  <div className="text-6xl md:text-7xl font-bold text-black mb-2 tracking-tighter">
                    R$599
                  </div>
                  <div className="text-emerald-950 font-semibold text-lg mb-8 italic">
                    em até 10x sem juros
                  </div>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-5 bg-black text-white font-bold rounded-2xl hover:scale-[1.02] transition-transform shadow-xl"
                  >
                    Garantir Vaga no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">Como funciona a transição</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Modernizamos seu site sem que você perca nada do seu conteúdo atual.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {steps.map((step, i) => (
                <div key={i} className="relative p-6 group">
                  <div className="text-6xl font-black text-white/[0.03] absolute top-0 left-0 -mt-4 group-hover:text-emerald-500/5 transition-colors">0{i+1}</div>
                  <div className="relative z-10">
                    <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                    <p className="text-gray-500 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-24 border-t border-white/5 bg-gradient-to-b from-transparent to-white/[0.02]">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="p-8 rounded-3xl border border-white/5 bg-black/40">
                  <h3 className="text-xl font-bold text-gray-500 mb-6 flex items-center gap-2">
                    WordPress Comum
                  </h3>
                  <ul className="space-y-4">
                    {['Lento (PHP)', 'Hospedagem Instável', 'Vulnerável a Invasões', 'SEO Dependente de Plugins', 'Custo de Manutenção Alto'].map((t, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-500 text-sm line-through decoration-emerald-500/40">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 rounded-3xl border border-emerald-500/20 bg-emerald-500/5 ring-1 ring-emerald-500/20">
                  <h3 className="text-xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
                    Node.js + Google Cloud
                  </h3>
                  <ul className="space-y-4">
                    {['Instantâneo (React/Node)', 'Escalabilidade Google', 'Arquitetura Serverless Segura', 'AEO Nativo p/ Search Generative', 'Zero Manutenção de Servidor'].map((t, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-200 text-sm font-medium">
                        <Check className="w-4 h-4 text-emerald-500" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer lang={lang} />

      {/* Floating WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 p-4 bg-emerald-500 text-black rounded-full shadow-2xl shadow-emerald-500/20 hover:scale-110 transition-transform flex items-center gap-2 font-bold group"
      >
        <Sparkles className="w-6 h-6 group-hover:animate-pulse" />
        <span className="hidden md:inline">Falar com Especialista</span>
      </a>
    </div>
  );
}
