import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);
    try {
      if (isRegister) {
        await createUserWithEmailAndPassword(auth, email, password);
        setSuccess('Conta criada com sucesso! Redirecionando...');
        setTimeout(() => {
          window.location.href = '/dashboard';
        }, 1500);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        window.location.href = '/dashboard'; 
      }
    } catch (err: any) {
      if (err.code === 'auth/invalid-credential') {
        setError('E-mail ou senha incorretos. Certifique-se de que o usuário existe.');
      } else if (err.code === 'auth/email-already-in-use') {
        setError('Este e-mail já está em uso.');
      } else if (err.code === 'auth/weak-password') {
        setError('A senha deve ter pelo menos 6 caracteres.');
      } else {
        setError(err.message || 'Erro ao processar requisição.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#030303] text-white px-4">
      <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 p-8 rounded-2xl w-full max-w-md shadow-2xl relative">
        {/* Decorative ambient light */}
        <div className="absolute -top-12 -left-12 w-24 h-24 bg-[#33BC65]/20 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-[#12DCEF]/20 rounded-full blur-2xl"></div>

        <h2 className="text-2xl font-bold mb-2 tracking-tight text-center bg-[linear-gradient(135deg,#33BC65_0%,#12DCEF_100%)] bg-clip-text text-transparent">
          Vezzitech Admin
        </h2>
        <p className="text-sm text-gray-400 text-center mb-6">
          {isRegister ? 'Criar nova conta de administrador' : 'Painel de Administração do Blog'}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
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

          {success && (
            <div className="text-emerald-400 text-sm bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-xl leading-relaxed">
              {success}
            </div>
          )}

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-[linear-gradient(135deg,#33BC65_0%,#12DCEF_100%)] hover:opacity-90 active:scale-[0.98] text-black font-bold py-3 px-4 rounded-xl transition-all shadow-lg shadow-[#33BC65]/10 flex justify-center items-center gap-2"
          >
            {loading ? 'Carregando...' : (isRegister ? 'Criar Conta' : 'Entrar no Painel')}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button 
            onClick={() => {
              setIsRegister(!isRegister);
              setError('');
              setSuccess('');
            }}
            className="text-xs text-[#33BC65] hover:underline"
          >
            {isRegister ? 'Já possui uma conta? Faça login' : 'Não tem conta? Registre-se aqui'}
          </button>
        </div>
      </div>
    </div>
  );
};
