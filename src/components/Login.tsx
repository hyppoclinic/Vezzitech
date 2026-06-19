import React, { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../lib/firebase';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = '/dashboard'; 
    } catch (err: any) {
      if (err.code === 'auth/operation-not-allowed') {
        setError('O login por E-mail/Senha não está ativado no console do Firebase. Por favor, use o botão "Entrar com Google" abaixo ou ative esse provedor no console.');
      } else {
        setError(err.message || 'Erro ao realizar login.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    setLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      window.location.href = '/dashboard';
    } catch (err: any) {
      setError(err.message || 'Erro ao fazer login com o Google.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#070707] text-white px-4">
      <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 p-8 rounded-2xl w-full max-w-md shadow-2xl relative">
        {/* Decorative ambient light */}
        <div className="absolute -top-12 -left-12 w-24 h-24 bg-[#33BC65]/20 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-[#12DCEF]/20 rounded-full blur-2xl"></div>

        <h2 className="text-2xl font-bold mb-2 tracking-tight text-center bg-[linear-gradient(135deg,#33BC65_0%,#12DCEF_100%)] bg-clip-text text-transparent">
          Vezzitech Admin
        </h2>
        <p className="text-sm text-gray-400 text-center mb-6">Painel de Administração do Blog</p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1 uppercase tracking-wider">E-mail</label>
            <input 
              type="email" 
              placeholder="admin@vezzitech.com" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="w-full bg-white/5 border border-white/10 p-3 rounded-xl focus:border-[#33BC65] focus:outline-none transition-colors text-white" 
              required 
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1 uppercase tracking-wider">Senha</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="w-full bg-white/5 border border-white/10 p-3 rounded-xl focus:border-[#33BC65] focus:outline-none transition-colors text-white" 
              required 
            />
          </div>

          {error && (
            <div className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 p-3 rounded-xl leading-relaxed">
              {error}
            </div>
          )}

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-[linear-gradient(135deg,#33BC65_0%,#12DCEF_100%)] hover:opacity-90 active:scale-[0.98] text-black font-bold py-3 px-4 rounded-xl transition-all shadow-lg shadow-[#33BC65]/10 flex justify-center items-center gap-2"
          >
            {loading ? 'Carregando...' : 'Entrar com E-mail'}
          </button>
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-white/10"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-[#070707] px-2 text-gray-400">Ou use o método recomendado</span>
          </div>
        </div>

        <button 
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium py-3 px-4 rounded-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
          Entrar com Google
        </button>

        <p className="text-center text-xs text-gray-500 mt-6 leading-relaxed">
          O login com Google é ativado automaticamente pelas credenciais de desenvolvimento da plataforma.
        </p>
      </div>
    </div>
  );
};
