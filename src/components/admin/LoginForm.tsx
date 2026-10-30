import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import { VezzitechLogo } from '../VezzitechLogo';
import { ShieldCheck, Lock, Mail, ArrowRight, AlertCircle } from 'lucide-react';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    setError('');
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
    } catch (err: any) {
      if (err.code === 'auth/invalid-credential' || err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
        setError('Credenciais inválidas. Verifique o e-mail e a senha digitados.');
      } else if (err.code === 'auth/too-many-requests') {
        setError('Muitas tentativas com falha. Aguarde alguns instantes antes de tentar novamente.');
      } else {
        setError(err.message || 'Falha na autenticação.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#05070A] p-6 relative overflow-hidden font-sans">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#168BFF]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7047FF]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative w-full max-w-md rounded-3xl bg-gradient-to-b from-[#10172A]/85 via-[#0B101E]/90 to-[#060810]/95 backdrop-blur-2xl border border-white/[0.08] p-8 sm:p-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_24px_48px_rgba(0,0,0,0.6)]">
        {/* Specular top highlight line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

        <div className="flex flex-col items-center text-center mb-8">
          <VezzitechLogo className="mb-4 h-8" />
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#69B4FF] mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Acesso Restrito</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight">
            Painel Administrativo
          </h1>
          <p className="text-xs sm:text-sm text-[#8992A5] mt-1.5 leading-relaxed">
            Faça login com sua conta autorizada para gerenciar postagens e conteúdos.
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs sm:text-sm flex items-start gap-2.5 leading-relaxed">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[#8992A5] mb-2">
              E-mail Corporativo
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8992A5]">
                <Mail className="w-4 h-4" />
              </div>
              <input
                type="email"
                required
                autoComplete="email"
                placeholder="suporte@vezzitech.com.br"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#05070A]/80 text-white placeholder-zinc-600 border border-white/[0.08] focus:border-[#168BFF] focus:outline-none focus:ring-1 focus:ring-[#168BFF] transition text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[#8992A5] mb-2">
              Senha de Acesso
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8992A5]">
                <Lock className="w-4 h-4" />
              </div>
              <input
                type="password"
                required
                autoComplete="current-password"
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#05070A]/80 text-white placeholder-zinc-600 border border-white/[0.08] focus:border-[#168BFF] focus:outline-none focus:ring-1 focus:ring-[#168BFF] transition text-sm"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 h-12 rounded-xl bg-performance-gradient hover:opacity-95 disabled:opacity-50 text-white font-extrabold text-sm tracking-wide shadow-performance-glow hover:scale-[1.01] active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Autenticando...</span>
              </>
            ) : (
              <>
                <span>Entrar no CMS</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-white/[0.06] text-center">
          <a
            href="/"
            className="text-xs text-[#8992A5] hover:text-white transition-colors"
          >
            ← Voltar para a página inicial
          </a>
        </div>
      </div>
    </div>
  );
};
