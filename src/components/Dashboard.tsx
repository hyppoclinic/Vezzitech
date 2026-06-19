import React, { useEffect, useState } from 'react';
import { AddPostForm } from './AddPostForm';
import { auth } from '../lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';

export const Dashboard = () => {
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (!user) {
        window.location.href = '/login';
      }
    });
    return () => unsubscribe();
  }, []);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-[#070707] text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <AddPostForm />
    </div>
  );
};
