import { useState } from 'react';
import { motion } from 'motion/react';
import { translations, Language } from '../translations';
import { Send, CheckCircle2, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
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
    `Olá! Solicitei um diagnóstico estratégico. Nome: ${formData.name || 'Cliente'}, Empresa: ${formData.company || 'N/A'}, Gargalo: ${selectedTitle}`
  )}`;

  return (
    <section id="diagnostico" className="py-28 bg-[#070A12] relative overflow-hidden border-t border-white/[0.06]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-[#16C7FF]/10 via-[#168BFF]/10 to-[#7047FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="max-w-3xl mb-14 text-center mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3.5 py-1.5 rounded-full bg-[#10162A] border border-white/[0.08] text-[11px] font-mono font-bold text-[#16C7FF] uppercase tracking-widest mb-4"
          >
            {t.kicker}
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
            className="text-base sm:text-lg text-[#8992A5] leading-relaxed"
          >
            {t.sub}
          </motion.p>
        </div>

        {/* Interactive Bottleneck Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14 max-w-5xl mx-auto">
          {t.bottlenecks.map((b) => {
            const isSelected = selectedBottleneck === b.id;
            return (
              <motion.button
                key={b.id}
                type="button"
                onClick={() => setSelectedBottleneck(b.id)}
                className={`p-5 rounded-xl border text-left transition-all cursor-pointer relative ${
                  isSelected
                    ? 'bg-[#10162A] border-[#16C7FF] shadow-[0_0_25px_rgba(22,199,255,0.2)]'
                    : 'bg-[#10162A]/60 border-white/[0.08] hover:border-white/[0.2]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-base font-heading font-bold ${isSelected ? 'text-[#16C7FF]' : 'text-white'}`}>
                    {b.title}
                  </span>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                    isSelected ? 'bg-[#16C7FF] border-[#16C7FF] text-black' : 'border-white/20'
                  }`}>
                    {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-black" />}
                  </div>
                </div>
                <p className="text-xs text-[#8992A5] leading-relaxed">
                  {b.desc}
                </p>
              </motion.button>
            );
          })}
        </div>

        {/* Diagnostic Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto p-8 sm:p-10 rounded-2xl bg-[#10162A] border border-white/[0.08] shadow-2xl relative"
        >
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-performance-gradient text-white flex items-center justify-center mx-auto shadow-performance-glow">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white">
                Diagnóstico Solicitado!
              </h3>
              <p className="text-sm text-[#8992A5] max-w-md mx-auto leading-relaxed">
                {t.form.successMessage}
              </p>

              <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#168BFF] text-white text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
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
                    className="w-full px-4 py-3 rounded-xl bg-[#070A12] border border-white/[0.08] text-sm text-white focus:border-[#16C7FF] outline-none transition-colors"
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
                    className="w-full px-4 py-3 rounded-xl bg-[#070A12] border border-white/[0.08] text-sm text-white focus:border-[#16C7FF] outline-none transition-colors"
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
                    className="w-full px-4 py-3 rounded-xl bg-[#070A12] border border-white/[0.08] text-sm text-white focus:border-[#16C7FF] outline-none transition-colors"
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
                    className="w-full px-4 py-3 rounded-xl bg-[#070A12] border border-white/[0.08] text-sm text-white focus:border-[#16C7FF] outline-none transition-colors"
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
                  className="w-full px-4 py-3 rounded-xl bg-[#070A12] border border-white/[0.08] text-sm text-white focus:border-[#16C7FF] outline-none transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-full bg-performance-gradient hover:opacity-95 text-white font-extrabold text-sm uppercase tracking-wider shadow-performance-glow transition-all flex items-center justify-center gap-2 cursor-pointer"
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

              <div className="pt-4 text-center border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-xs text-[#8992A5] gap-2">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#16C7FF]" />
                  Seus dados estão 100% seguros sob sigilo corporativo.
                </span>
                <a
                  href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=Olá! Gostaria de falar diretamente com um especialista da Vezzitech.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#168BFF] font-bold hover:underline flex items-center gap-1"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-[#168BFF]" />
                  <span>WhatsApp Direto (+55 44 99826-6950)</span>
                </a>
              </div>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
};
