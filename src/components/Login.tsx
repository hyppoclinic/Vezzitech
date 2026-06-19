import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Optional: Redirect or just signal login
      window.location.href = '/'; 
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#070707] text-white">
      <form onSubmit={handleLogin} className="bg-white/5 border border-white/10 p-8 rounded-2xl w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 italic">Admin Login</h2>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-white/5 p-2 rounded mb-4" required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-white/5 p-2 rounded mb-4" required />
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button type="submit" className="w-full bg-[#33BC65] text-black font-bold py-2 rounded-xl">Login</button>
      </form>
    </div>
  );
};
