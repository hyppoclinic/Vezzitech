import React, { useState } from 'react';
import { Calendar, Clock, Video, User, Mail, Briefcase, ChevronRight, CheckCircle } from 'lucide-react';
import { translations, Language } from '../translations';

interface SchedulingProps {
  lang: Language;
}

export const Scheduling = ({ lang }: SchedulingProps) => {
  const t = translations[lang].schedulingSection;

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    objetivo: 'Marketing Automation',
    data: '2026-06-22',
    horario: '14:00'
  });
  
  const [success, setSuccess] = useState(false);
  const [meetLink, setMeetLink] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.email) return;

    // Simulate scheduling a Google Meet securely
    const randomId = Math.random().toString(36).substring(2, 5) + '-' + Math.random().toString(36).substring(2, 6) + '-' + Math.random().toString(36).substring(2, 5);
    setMeetLink(`https://meet.google.com/${randomId}`);
    setSuccess(true);
  };

  return (
    <section id="consultoria" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-5">
          <div className="text-[#33BC65] font-mono text-xs mb-3 font-semibold uppercase tracking-widest">// {t.tag}</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.15] mb-6 tracking-tight text-white font-heading">
            {lang === 'pt' ? (
              <>
                Comece ontem.
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#33BC65] via-emerald-200 to-cyan-300 mt-1 font-normal">
                  Fale com a Vezzitech e acelere de verdade.
                </span>
              </>
            ) : (
              <>
                Start yesterday.
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#33BC65] via-emerald-200 to-cyan-300 mt-1 font-normal">
                  Connect with Vezzitech to scale.
                </span>
              </>
            )}
          </h2>
          <p className="text-gray-400 text-base leading-relaxed mb-8">
            {t.sub}
          </p>

          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-[#33BC65] flex items-center justify-center shrink-0 border border-[#33BC65]/15">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm font-sans">{t.p1}</h4>
                <p className="text-gray-400 text-xs mt-1">{t.p1Sub}</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-[#33BC65] flex items-center justify-center shrink-0 border border-[#33BC65]/15">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm font-sans">{t.p2}</h4>
                <p className="text-gray-400 text-xs mt-1">{t.p2Sub}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-[#131313]/85 border border-white/10 p-8 rounded-3xl relative overflow-hidden shadow-2xl backdrop-blur-md">
          {success ? (
            <div className="py-12 px-4 text-center animate-fade-in flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#33BC65]/10 text-[#33BC65] flex items-center justify-center mb-6 border border-[#33BC65]/20">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-heading">{t.successTitle}</h3>
              <p className="text-gray-300 text-sm mb-8 max-w-md">
                {t.successSub.split(formData.email)[0]}
                <strong className="text-[#33BC65]">{formData.email}</strong>
                {t.successSub.split(formData.email)[1]}
              </p>

              {/* Dynamic Google Meet card mockup */}
              <div className="bg-black/60 border border-white/5 rounded-2xl p-6 w-full max-w-md mb-8 text-left shadow-lg select-text">
                <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
                  <span className="text-[10px] bg-emerald-500/10 text-[#33BC65] px-2 py-0.5 rounded font-mono uppercase tracking-wider">{lang === 'pt' ? 'Confirmado' : 'Confirmed'}</span>
                  <span className="text-xs text-gray-400 font-mono flex items-center gap-1">
                    <Calendar className="w-3" /> {formData.data} @ {formData.horario}
                  </span>
                </div>
                <h4 className="text-white font-bold text-base mb-1 font-heading">Vezzitech IA Consult & Blueprint</h4>
                <p className="text-xs text-gray-400 mb-4">{t.form.purposeOptions.find(s => s.value === formData.objetivo)?.label || formData.objetivo}</p>
                <div className="flex gap-4 items-center mb-4">
                  <div className="w-8 h-8 rounded-xl bg-[#33BC65] flex items-center justify-center font-bold text-black text-xs font-sans italic">VT</div>
                  <div>
                    <p className="text-xs text-white font-semibold italic">Vezzitech</p>
                    <p className="text-[10px] text-gray-500 font-mono">Generative AI Expert Team</p>
                  </div>
                </div>
                <a 
                  href={meetLink} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#137333] hover:bg-[#0f622a] text-white font-bold text-sm rounded-xl transition shadow-md shadow-green-950/45 text-center">
                  <Video className="w-4 h-4" /> {t.meetBtn}
                </a>
              </div>

              <button 
                onClick={() => setSuccess(false)}
                className="text-xs text-gray-400 hover:text-white transition underline underline-offset-4 cursor-pointer">
                {t.anotherBtn}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-gray-400 mb-2 flex items-center gap-1">
                    <User className="w-3 text-[#33BC65]" /> {t.form.name}
                  </label>
                  <input 
                    type="text" 
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    placeholder={lang === 'pt' ? 'Seu nome completo' : 'Your full name'} 
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#33BC65] transition" />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-gray-400 mb-2 flex items-center gap-1">
                    <Mail className="w-3 text-[#33BC65]" /> {t.form.email}
                  </label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="rodrigo@vezzitech.com.br" 
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#33BC65] transition" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-gray-400 mb-2 flex items-center gap-1">
                    <Briefcase className="w-3 text-[#33BC65]" /> {t.form.company}
                  </label>
                  <input 
                    type="text" 
                    required
                    value={formData.empresa}
                    onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                    placeholder="Ex: CTO" 
                    className="w-full bg-black/40 border border-[#2c2c2c] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#33BC65] transition" />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-gray-400 mb-2 flex items-center gap-1">
                    <Briefcase className="w-3 text-[#33BC65]" /> {t.form.purpose}
                  </label>
                  <select 
                    value={formData.objetivo}
                    onChange={(e) => setFormData({ ...formData, objetivo: e.target.value })}
                    className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#33BC65] transition bg-[#070707]">
                    {t.form.purposeOptions.map(s => <option key={s.value} value={s.value} className="bg-[#141414] text-white">{s.label}</option>)}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-gray-400 mb-2 flex items-center gap-1">
                    <Calendar className="w-3 text-[#33BC65]" /> {t.form.date}
                  </label>
                  <input 
                    type="date" 
                    required
                    value={formData.data}
                    onChange={(e) => setFormData({ ...formData, data: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#33BC65] transition [color-scheme:dark]" />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-gray-400 mb-2 flex items-center gap-1">
                    <Clock className="w-3 text-[#33BC65]" /> {t.form.time}
                  </label>
                  <input 
                    type="time" 
                    required
                    value={formData.horario}
                    onChange={(e) => setFormData({ ...formData, horario: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#33BC65] transition [color-scheme:dark]" />
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full py-4 gradient-orange text-black font-bold text-sm tracking-widest uppercase rounded-xl hover:scale-[1.01] transition shadow-lg shadow-[#33BC65]/10 flex items-center justify-center gap-2 cursor-pointer">
                {t.form.submit} <ChevronRight className="w-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
