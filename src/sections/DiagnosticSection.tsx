import { useState } from 'react';
import { motion } from 'motion/react';
import { translations, Language } from '../translations';
import { Send, CheckCircle2, ArrowRight, ShieldCheck, Clock, Terminal, Sparkles, Cpu } from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

export const DiagnosticSection = ({ lang }: { lang: Language }) => {
  const t = translations[lang].ctaFinal;

  const [selectedBottleneck, setSelectedBottleneck] = useState<string>('aquisicao');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    website: ''
  });

  const whatsappNumber = "+5544998266950";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const selectedTitle = t.bottlenecks.find(b => b.id === selectedBottleneck)?.title || selectedBottleneck;

  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(
    `Olá! Solicitei um diagnóstico estratégico. Nome: ${formData.name || 'Cliente'}, Empresa: ${formData.company || 'N/A'}, Gargalo selecionado: ${selectedTitle}`
  )}`;

  return (
    <section id="diagnostico" className="py-28 md:py-36 bg-[#070A12] relative overflow-hidden border-t border-white/[0.08] bg-laser-lines">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[400px] bg-gradient-to-r from-[#16C7FF]/12 via-[#168BFF]/15 to-[#7047FF]/12 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="max-w-3xl mb-14 text-center mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10162A] border border-white/[0.1] text-[11px] font-mono font-bold text-[#16C7FF] uppercase tracking-widest mb-4 shadow-sm"
          >
            <Cpu className="w-3.5 h-3.5 text-[#16C7FF]" />
            <span>{t.kicker}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight mb-4"
          >
            {t.heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#8992A5] leading-relaxed font-sans"
          >
            {t.sub}
          </motion.p>
        </div>

        {/* Interactive Bottleneck Grid */}
        <div className="max-w-5xl mx-auto mb-10">
          <div className="text-xs font-mono text-[#8992A5] uppercase tracking-wider mb-4 font-bold flex items-center justify-between">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#16C7FF]" />
               PASSO 1 DE 2: SELECIONE O PRINCIPAL GARGALO ATUAL
            </span>
            <span className="text-[#16C7FF]">SELEÇÃO INTERATIVA</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.bottlenecks.map((b) => {
              const isSelected = selectedBottleneck === b.id;
              return (
                <motion.button
                  key={b.id}
                  type="button"
                  onClick={() => setSelectedBottleneck(b.id)}
                  className={`p-5 rounded-2xl border text-left transition-all cursor-pointer relative corner-crosshairs ${
                    isSelected
                      ? 'bg-[#0B0E1B] border-[#16C7FF] shadow-[0_0_25px_rgba(22,199,255,0.25)] scale-[1.02]'
                      : 'bg-[#0B0E1B]/60 border-white/[0.08] hover:border-white/[0.2] hover:bg-[#10162A]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-base font-heading font-bold ${isSelected ? 'text-[#16C7FF]' : 'text-white'}`}>
                      {b.title}
                    </span>
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                      isSelected ? 'bg-[#16C7FF] border-[#16C7FF] text-black' : 'border-white/20'
                    }`}>
                      {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-black" />}
                    </div>
                  </div>
                  <p className="text-xs text-[#8992A5] leading-relaxed font-sans">
                    {b.desc}
                  </p>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Diagnostic Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto rounded-2xl bg-[#0B0E1B] border border-white/[0.12] shadow-[0_25px_60px_rgba(0,0,0,0.7)] corner-crosshairs relative overflow-hidden"
        >
          {/* Terminal Bar */}
          <div className="px-6 py-3 bg-[#070A12] border-b border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[11px] font-mono text-zinc-400 pl-2 font-bold flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#16C7FF]" />
                DIAGNOSTIC_FORM // PASSO 2 DE 2
              </span>
            </div>
            <span className="text-[10px] font-mono text-[#16C7FF] font-bold bg-[#16C7FF]/10 px-2.5 py-0.5 rounded border border-[#16C7FF]/20 uppercase">
              RESPOSTA EM ATÉ 24H
            </span>
          </div>

          <div className="p-8 sm:p-10">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-performance-gradient text-white flex items-center justify-center mx-auto shadow-performance-glow">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-white">
                  Diagnóstico Solicitado com Sucesso!
                </h3>
                <p className="text-sm text-[#8992A5] max-w-md mx-auto leading-relaxed font-sans">
                  {t.form.successMessage}
                </p>

                <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-performance-gradient text-white text-xs font-extrabold uppercase tracking-wider hover:opacity-95 shadow-performance-glow transition-all"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>Acelerar pelo WhatsApp Direto</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono text-[#8992A5] underline hover:text-white"
                  >
                    Enviar novo formulário
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                  <h3 className="text-lg font-heading font-bold text-white">
                    {t.form.title}
                  </h3>
                  <span className="text-xs font-mono text-[#16C7FF] bg-[#16C7FF]/10 px-3 py-1 rounded-full border border-[#16C7FF]/20 font-bold">
                    Gargalo: {selectedTitle}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono font-medium text-zinc-300 mb-2">
                      {t.form.name} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.form.namePlaceholder}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#070A12] border border-white/[0.1] text-sm text-white focus:border-[#16C7FF] outline-none transition-colors font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-zinc-300 mb-2">
                      {t.form.company} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder={t.form.companyPlaceholder}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#070A12] border border-white/[0.1] text-sm text-white focus:border-[#16C7FF] outline-none transition-colors font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono font-medium text-zinc-300 mb-2">
                      {t.form.email} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.form.emailPlaceholder}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#070A12] border border-white/[0.1] text-sm text-white focus:border-[#16C7FF] outline-none transition-colors font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-zinc-300 mb-2">
                      {t.form.phone} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={t.form.phonePlaceholder}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#070A12] border border-white/[0.1] text-sm text-white focus:border-[#16C7FF] outline-none transition-colors font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-zinc-300 mb-2">
                    {t.form.website}
                  </label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    placeholder={t.form.websitePlaceholder}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#070A12] border border-white/[0.1] text-sm text-white focus:border-[#16C7FF] outline-none transition-colors font-sans"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-full bg-performance-gradient hover:opacity-95 text-white font-extrabold text-xs uppercase tracking-wider shadow-performance-glow transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01] active:scale-95"
                  >
                    {loading ? (
                      <span>Processando solicitação...</span>
                    ) : (
                      <>
                        <span>{t.form.submitButton}</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                <div className="pt-4 text-center border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between text-xs text-[#8992A5] gap-3 font-mono">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#16C7FF]" />
                    Sigilo Corporativo & LGPD Compliance
                  </span>
                  <a
                    href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=Olá! Gostaria de falar diretamente com um especialista da Vezzitech.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#168BFF] font-bold hover:underline flex items-center gap-1.5"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-[#168BFF]" />
                    <span>WhatsApp Direto (+55 44 99826-6950)</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
