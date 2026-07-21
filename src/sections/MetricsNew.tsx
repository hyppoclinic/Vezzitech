import { motion } from 'motion/react';
import { translations, Language } from '../translations';
import React from 'react';

const getAnimatedIcon = (index: number) => {
  const icons = [
    (
      <div className="relative mb-6 flex items-center justify-center w-16 h-16">
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-0 bg-emerald-500 rounded-full blur-xl" />
        <motion.svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="relative z-10 text-emerald-400" strokeLinecap="round" strokeLinejoin="round">
          <motion.circle cx="12" cy="12" r="10" animate={{ scale: [1, 1.05, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} style={{ transformOrigin: 'center' }} />
          <motion.circle cx="12" cy="12" r="6" animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 3, delay: 0.2, repeat: Infinity, ease: "easeInOut" }} style={{ transformOrigin: 'center' }} />
          <motion.circle cx="12" cy="12" r="2" animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }} transition={{ duration: 3, delay: 0.4, repeat: Infinity, ease: "easeInOut" }} style={{ transformOrigin: 'center' }} />
        </motion.svg>
      </div>
    ),
    (
      <div className="relative mb-6 flex items-center justify-center w-16 h-16">
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 3, delay: 0.5, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-0 bg-emerald-500 rounded-full blur-xl" />
        <motion.svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="relative z-10 text-emerald-400" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" className="opacity-50" />
          <motion.g animate={{ rotate: [0, 360] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: 'center' }}>
            <rect width="24" height="24" fill="transparent" stroke="none" />
            <path d="M12 6V12L16 14" />
          </motion.g>
        </motion.svg>
      </div>
    ),
    (
      <div className="relative mb-6 flex items-center justify-center w-16 h-16">
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 3, delay: 1, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-0 bg-emerald-500 rounded-full blur-xl" />
        <motion.svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="relative z-10 text-emerald-400" strokeLinecap="round" strokeLinejoin="round">
          <motion.g animate={{ y: [0, -3, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}>
            <ellipse cx="12" cy="5" rx="9" ry="3" />
          </motion.g>
          <motion.g animate={{ y: [0, -1.5, 0] }} transition={{ duration: 2.5, delay: 0.2, repeat: Infinity, ease: "easeInOut" }}>
            <path d="M3 12C3 13.6569 7.02944 15 12 15C16.9706 15 21 13.6569 21 12" className="opacity-70" />
          </motion.g>
          <path d="M3 5V19C3 20.6569 7.02944 22 12 22C16.9706 22 21 20.6569 21 19V5" className="opacity-40" />
        </motion.svg>
      </div>
    ),
    (
      <div className="relative mb-6 flex items-center justify-center w-16 h-16">
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 3, delay: 1.5, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-0 bg-emerald-500 rounded-full blur-xl" />
        <motion.svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="relative z-10 text-emerald-400" strokeLinecap="round" strokeLinejoin="round">
          <motion.path d="M3 17L9 11L13 15L21 7" animate={{ y: [0, -3, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} />
          <motion.path d="M16 7H21V12" animate={{ y: [0, -3, 0], x: [0, 3, 0] }} transition={{ duration: 2.5, delay: 0.1, repeat: Infinity, ease: "easeInOut" }} />
        </motion.svg>
      </div>
    )
  ];
  
  return icons[index % icons.length];
};

export const MetricsNew = ({ lang }: { lang: Language }) => {
  const t = translations[lang].metrics;

  return (
    <section className="py-24 bg-[#030303] relative overflow-hidden border-t border-white/[0.05]">
      <div className="absolute inset-0 bg-noise opacity-[0.015] pointer-events-none mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-sm font-medium uppercase tracking-widest text-center text-emerald-500 mb-16">
          {t.heading}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex flex-col items-center text-center relative overflow-hidden group hover:bg-white/[0.04] transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/0 to-emerald-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              {getAnimatedIcon(index)}

              <div className="text-5xl font-heading font-semibold text-white tracking-tighter mb-2 text-gradient pr-1">
                {item.value}
              </div>
              <div className="text-gray-400 font-medium text-sm">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
