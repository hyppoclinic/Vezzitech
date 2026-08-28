import { motion } from 'motion/react';
import { translations, Language } from '../translations';
import { Target, Layout, MapPin, CheckCircle2, ArrowRight, Shield, Zap, Sparkles, Star } from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

export const OfferSection = ({ lang }: { lang: Language }) => {
  const t = translations[lang].offer;
  const whatsappNumber = "+5544998266950";
  const whatsappMessage = encodeURIComponent("Olá! Tenho interesse no pacote Tráfego Pago + Criação de Site + Google Meu Negócio por R$ 799,00/mês. Gostaria de mais detalhes!");
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${whatsappMessage}`;

  const scrollToDiagnostic = () => {
    const el = document.getElementById('diagnostico');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'target':
        return <Target className="w-6 h-6 text-[#69B4FF]" />;
      case 'layout':
        return <Layout className="w-6 h-6 text-[#69B4FF]" />;
      case 'map-pin':
        return <MapPin className="w-6 h-6 text-[#69B4FF]" />;
      default:
        return <Zap className="w-6 h-6 text-[#69B4FF]" />;
    }
  };

  return (
    <section id="oferta" className="py-24 md:py-36 bg-[#0B0B0D] relative overflow-hidden border-t border-white/[0.08]">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-r from-[#1765FF]/20 via-[#69B4FF]/15 to-[#1765FF]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1765FF]/10 border border-[#1765FF]/30 text-[11px] font-mono font-bold text-[#69B4FF] uppercase tracking-widest mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#69B4FF]" />
            <span>{t.kicker}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight mb-6"
          >
            {t.heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#8D96A8] leading-relaxed font-sans"
          >
            {t.sub}
          </motion.p>
        </div>

        {/* Hero Offer Banner & Grid */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2rem] bg-[#111318] border border-[#1765FF]/20 shadow-[0_25px_80px_rgba(23,101,255,0.15)] relative overflow-hidden p-8 sm:p-12 mb-12"
        >
          {/* Subtle Top Glowing Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#1765FF] to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Price Highlight Card */}
            <div className="lg:col-span-5 bg-[#161A22] border border-white/[0.05] rounded-[1.5rem] p-8 text-center relative overflow-hidden shadow-xl">
              
              <div className="inline-block px-3 py-1 rounded-full bg-[#1765FF]/20 text-[#69B4FF] text-[11px] font-mono font-bold uppercase tracking-widest mb-4 border border-[#1765FF]/30">
                {t.badge}
              </div>

              <div className="my-4">
                <span className="block text-xs font-mono uppercase text-[#8D96A8] tracking-widest font-semibold mb-2">
                  {t.priceTag}
                </span>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-white tracking-tight">
                    {t.priceValue}
                  </span>
                  <span className="text-base sm:text-lg font-mono text-[#69B4FF] font-bold">
                    {t.pricePeriod}
                  </span>
                </div>
              </div>

              <p className="text-xs text-[#8D96A8] leading-relaxed mb-6 font-sans">
                Acelerador completo de presença digital e aquisição com setup simplificado.
              </p>

              {/* Action Buttons */}
              <div className="space-y-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-full bg-[#1765FF] hover:bg-[#1765FF]/90 text-white font-extrabold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(23,101,255,0.4)] transition-all flex items-center justify-center gap-2 group cursor-pointer hover:scale-[1.02] active:scale-95"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>{t.ctaPrimary}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <button
                  onClick={scrollToDiagnostic}
                  className="w-full py-3 px-6 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-white font-semibold text-xs tracking-wider transition-colors cursor-pointer"
                >
                  Solicitar Diagnóstico Personalizado
                </button>
              </div>

              {/* Guarantees Badges */}
              <div className="mt-6 pt-6 border-t border-white/[0.08] flex items-center justify-center gap-2 text-[11px] text-[#8D96A8] font-mono">
                <Shield className="w-3.5 h-3.5 text-[#69B4FF]" />
                <span>Sem Contrato Abusivo • Suporte Direto</span>
              </div>
            </div>

            {/* Right Column: 3 Major Deliverables */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-lg font-heading font-bold text-white mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-[#69B4FF]" />
                <span>{t.featuresTitle}</span>
              </h3>

              <div className="space-y-4">
                {t.features.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#161A22]/80 border border-white/[0.08] hover:border-[#1765FF]/40 transition-all group flex items-start gap-4"
                  >
                    <div className="p-3 rounded-xl bg-[#1765FF]/10 border border-[#1765FF]/20 shrink-0 group-hover:scale-105 transition-transform">
                      {getFeatureIcon(item.icon)}
                    </div>
                    <div>
                      <h4 className="text-base font-heading font-bold text-white group-hover:text-[#69B4FF] transition-colors mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#8D96A8] leading-relaxed font-sans">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

        {/* Trust Badges Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {t.trustBadges.map((badge, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[#111318] border border-white/[0.06] text-center flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4 text-[#69B4FF] shrink-0" />
              <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                {badge}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
