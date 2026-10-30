import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/firebase';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = '/admin/dashboard';
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#05070A] p-6">
      <div className="w-full max-w-md p-8 rounded-3xl bg-[#10172A]/70 backdrop-blur-2xl border border-white/[0.08] shadow-2xl">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">Admin Access</h1>
        {error && <p className="text-red-400 mb-4 text-center">{error}</p>}
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 rounded-xl bg-[#05070A] text-white border border-white/[0.08]"
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 rounded-xl bg-[#05070A] text-white border border-white/[0.08]"
        />
        <button 
          onClick={handleLogin}
          className="w-full p-3 rounded-xl bg-[#168BFF] text-white font-bold hover:bg-[#168BFF]/90 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
};
