import { useState } from 'react';
import { motion } from 'motion/react';
import { translations, Language } from '../translations';
import { ArrowUpRight, MessageSquare, CheckCircle2, ShieldCheck, Clock, Send } from 'lucide-react';

export const ContactSection = ({ lang }: { lang: Language }) => {
  const t = translations[lang].contact;
  const f = t.form;

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const whatsappNumber = "+5544998266950";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare WhatsApp fallback message
    const waText = encodeURIComponent(
      `*Nova Solicitação de Orçamento - Vezzitech*\n\n` +
      `*Nome:* ${formData.name}\n` +
      `*Empresa:* ${formData.company || 'Não informada'}\n` +
      `*E-mail:* ${formData.email}\n` +
      `*WhatsApp:* ${formData.phone}\n` +
      `*Tipo de Projeto:* ${formData.projectType || 'Não selecionado'}\n` +
      `*Orçamento Previsto:* ${formData.budget || 'Não informado'}\n` +
      `*Prazo Desejado:* ${formData.timeline || 'Flexível'}\n\n` +
      `*Descrição:* ${formData.description}`
    );

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Also offer opening WhatsApp
      window.open(`https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${waText}`, '_blank');
    }, 600);
  };

  return (
    <section id="contato" className="py-24 md:py-32 bg-[#0A0A0A] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Context & Reassurance */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#141414] border border-white/[0.08] text-[11px] font-mono font-bold text-[#FFD000] uppercase tracking-widest mb-4"
              >
                {t.kicker}
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white tracking-tight mb-4 leading-tight"
              >
                {t.heading}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-base sm:text-lg text-[#9A9A9A] font-sans leading-relaxed mb-8"
              >
                {t.sub}
              </motion.p>

              {/* Guarantees Box */}
              <div className="space-y-4 p-6 rounded-2xl bg-[#0F0F0F] border border-white/[0.07] mb-8">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#FFD000] shrink-0 mt-0.5" />
                  <div className="text-sm font-medium text-white">
                    Resposta em menos de 15 minutos em horário comercial
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#FFD000] shrink-0 mt-0.5" />
                  <div className="text-sm font-medium text-white">
                    Acordo de confidencialidade (NDA) disponível para proteger sua ideia
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FFD000] shrink-0 mt-0.5" />
                  <div className="text-sm font-medium text-white">
                    Proposta técnica detalhada com escopo, prazos e custos fixos
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="pt-6 border-t border-white/[0.08]">
              <div className="text-xs font-mono uppercase text-[#9A9A9A] mb-2">
                {f.directContactTitle}
              </div>
              <a
                href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=Olá! Gostaria de falar diretamente com um engenheiro de software da Vezzitech.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#FFD000] hover:underline"
              >
                <MessageSquare className="w-4 h-4" />
                <span>+55 (44) 99826-6950 · WhatsApp Direto</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 sm:p-10 rounded-3xl bg-[#0F0F0F] border border-white/[0.08] shadow-2xl"
            >
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#FFD000]/10 border border-[#FFD000]/30 flex items-center justify-center text-[#FFD000] mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-3">
                    Proposta Solicitada com Sucesso!
                  </h3>
                  <p className="text-sm text-[#9A9A9A] max-w-md mx-auto mb-8">
                    {f.successMessage}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-[#141414] border border-white/[0.1] text-xs font-bold text-white hover:border-[#FFD000]"
                  >
                    Enviar nova mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Row 1: Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-medium text-zinc-300 uppercase tracking-wider mb-2">
                        {f.name} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={f.namePlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-white/[0.08] text-white text-sm focus:border-[#FFD000] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-medium text-zinc-300 uppercase tracking-wider mb-2">
                        {f.company}
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder={f.companyPlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-white/[0.08] text-white text-sm focus:border-[#FFD000] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-medium text-zinc-300 uppercase tracking-wider mb-2">
                        {f.email} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={f.emailPlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-white/[0.08] text-white text-sm focus:border-[#FFD000] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-medium text-zinc-300 uppercase tracking-wider mb-2">
                        {f.phone} *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={f.phonePlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-white/[0.08] text-white text-sm focus:border-[#FFD000] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 3: Project Type (Select) */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-zinc-300 uppercase tracking-wider mb-2">
                      {f.projectType} *
                    </label>
                    <select
                      required
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-white/[0.08] text-white text-sm focus:border-[#FFD000] focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="" disabled className="bg-[#111111] text-[#9A9A9A]">
                        {f.projectTypePlaceholder}
                      </option>
                      {f.projectTypes.map((pt, i) => (
                        <option key={i} value={pt} className="bg-[#111111] text-white">
                          {pt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Row 4: Budget & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-medium text-zinc-300 uppercase tracking-wider mb-2">
                        {f.budget}
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-white/[0.08] text-white text-sm focus:border-[#FFD000] focus:outline-none transition-colors cursor-pointer"
                      >
                        <option value="" disabled className="bg-[#111111] text-[#9A9A9A]">
                          {f.budgetPlaceholder}
                        </option>
                        {f.budgets.map((b, i) => (
                          <option key={i} value={b} className="bg-[#111111] text-white">
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-medium text-zinc-300 uppercase tracking-wider mb-2">
                        {f.timeline}
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-white/[0.08] text-white text-sm focus:border-[#FFD000] focus:outline-none transition-colors cursor-pointer"
                      >
                        <option value="" disabled className="bg-[#111111] text-[#9A9A9A]">
                          {f.timelinePlaceholder}
                        </option>
                        {f.timelines.map((tl, i) => (
                          <option key={i} value={tl} className="bg-[#111111] text-white">
                            {tl}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 5: Project Description */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-zinc-300 uppercase tracking-wider mb-2">
                      {f.description} *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder={f.descriptionPlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-white/[0.08] text-white text-sm focus:border-[#FFD000] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full bg-[#FFD000] hover:bg-[#F5C200] text-black font-heading font-black text-sm uppercase tracking-wider transition-all duration-200 shadow-yellow-btn hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Enviando proposta...' : f.submitButton}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <p className="text-center text-xs text-[#9A9A9A]">
                    {t.reassurance}
                  </p>

                </form>
              )}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
