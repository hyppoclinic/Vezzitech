import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import { LoginForm } from './LoginForm';

export const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#05070A] text-white">
        <div className="w-10 h-10 border-2 border-[#168BFF] border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-xs font-mono font-bold tracking-[0.2em] text-[#69B4FF] uppercase">
          Verificando credenciais...
        </p>
      </div>
    );
  }

  if (!currentUser) {
    return <LoginForm />;
  }

  return <>{children}</>;
};
