import React from 'react';
import { PostManager } from './PostManager';

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-[#05070A] text-white">
      <nav className="border-b border-white/[0.08] p-4 flex justify-between items-center">
        <span className="font-bold text-lg">Vezzitech CMS</span>
      </nav>
      <main className="p-8">
        <PostManager />
        {children}
      </main>
    </div>
  );
};
