import React, { useRef, useState, useEffect } from 'react';
import { ShoppingCart, HeartPulse, Factory, Landmark, GraduationCap, Sprout, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { translations, Language } from '../translations';

interface VerticalsProps {
  lang: Language;
}

const icons: Record<string, React.ReactNode> = {
  varejo: <ShoppingCart className="w-5 h-5 text-[#33BC65]" />,
  saude: <HeartPulse className="w-5 h-5 text-[#33BC65]" />,
  industria: <Factory className="w-5 h-5 text-[#33BC65]" />,
  financas: <Landmark className="w-5 h-5 text-[#33BC65]" />,
  educacao: <GraduationCap className="w-5 h-5 text-[#33BC65]" />,
  agro: <Sprout className="w-5 h-5 text-[#33BC65]" />,
};

export const Verticals = ({ lang }: VerticalsProps) => {
  const t = translations[lang];
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  const checkScroll = () => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;
      const children = container.querySelectorAll('.carousel-item');
      
      let closestIndex = 0;
      let closestDistance = Infinity;
      
      children.forEach((child, i) => {
        const rect = child.getBoundingClientRect();
        const childCenter = rect.left + rect.width / 2;
        const distance = Math.abs(containerCenter - childCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = i;
        }
      });
      
      setActiveIndex(closestIndex);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
      checkScroll();
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const maxIndex = t.verticalsSection.items.length - 1;

    let targetIndex = activeIndex;
    if (direction === 'left' && activeIndex > 0) {
      targetIndex = activeIndex - 1;
    } else if (direction === 'right' && activeIndex < maxIndex) {
      targetIndex = activeIndex + 1;
    }
    scrollToIndex(targetIndex);
  };

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const children = carouselRef.current.querySelectorAll('.carousel-item');
      const target = children[index] as HTMLElement;
      if (target) {
        const container = carouselRef.current;
        const containerRect = container.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();
        
        // Center the active item perfectly
        const scrollOffset = container.scrollLeft + (targetRect.left - containerRect.left) - (containerRect.width / 2 - targetRect.width / 2);
        
        container.scrollTo({
          left: scrollOffset,
          behavior: 'smooth'
        });
        setActiveIndex(index);
      }
    }
  };

  return (
    <section id="verticais" aria-label="Setores de Atuação" className="py-24 border-t border-white/5 relative z-10 bg-[#0A0D10] overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Simple & Impactful Header styling matched with other sections */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl text-left">
            <div className="text-[#33BC65] font-mono text-xs mb-3 font-semibold tracking-widest uppercase">
              {t.verticalsSection.tag}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.15] tracking-tight text-white font-heading">
              {lang === 'pt' ? (
                <>
                  Presença e tráfego
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#33BC65] via-emerald-200 to-cyan-300 mt-1 font-normal">
                    sob medida para o seu setor.
                  </span>
                </>
              ) : (
                <>
                  Presence and traffic
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#33BC65] via-emerald-200 to-cyan-300 mt-1 font-normal">
                    tailored for your industry.
                  </span>
                </>
              )}
            </h2>
            <p className="text-gray-400 text-base md:text-lg font-light font-sans leading-relaxed mt-6 max-w-2xl">
              {t.verticalsSection.sub}
            </p>
          </div>
          
          <div className="flex items-center gap-3 shrink-0">
            <button 
              onClick={() => scroll('left')}
              disabled={activeIndex === 0}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-zinc-950/50 text-white hover:bg-white/10 hover:border-white/20 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll('right')}
              disabled={activeIndex === t.verticalsSection.items.length - 1}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-zinc-950/50 text-white hover:bg-white/10 hover:border-white/20 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="w-full relative">
          <div 
            ref={carouselRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-12 pt-4 scroll-smooth -mx-6 px-6 lg:mx-0 lg:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {t.verticalsSection.items.map((item, index) => {
              const isHighlighted = index === activeIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => scrollToIndex(index)}
                  className={`carousel-item w-[80vw] sm:w-[50vw] lg:w-[calc(33.333%-16px)] snap-center shrink-0 rounded-[2.5rem] p-8 md:p-10 transition-all duration-500 ease-out flex flex-col justify-between group relative overflow-hidden cursor-pointer ${
                    isHighlighted 
                      ? 'bg-zinc-900/90 border border-[#33BC65]/40 shadow-[0_0_50px_rgba(51,188,101,0.08)] opacity-100 scale-100' 
                      : 'bg-zinc-950/20 border border-white/5 opacity-40 scale-95 hover:opacity-75'
                  }`}
                >
                  {/* Active Corner Light Accent */}
                  {isHighlighted && (
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#33BC65]/10 to-transparent rounded-bl-full pointer-events-none" />
                  )}

                  <div>
                    {/* Header of the Card */}
                    <div className="flex items-center justify-between mb-10">
                      <div className={`p-4 rounded-2xl border transition-colors duration-500 ${
                        isHighlighted 
                          ? 'bg-[#33BC65]/10 border-[#33BC65]/20' 
                          : 'bg-white/5 border-white/5'
                      }`}>
                        {icons[item.id]}
                      </div>
                      <span className="text-xs font-mono text-gray-600 font-bold tracking-widest">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Vertical Title */}
                    <h3 className={`text-2xl font-bold tracking-tight mb-4 transition-colors duration-500 ${
                      isHighlighted ? 'text-white' : 'text-gray-300'
                    }`}>
                      {item.title}
                    </h3>

                    {/* Vertical Description */}
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed font-sans mb-8">
                      {item.desc}
                    </p>
                  </div>

                  {/* Core Offerings Badge */}
                  <div className="border-t border-white/5 pt-6 mt-auto flex items-center justify-between text-xs font-mono text-gray-400">
                    <span>{lang === 'pt' ? 'Site + Conteúdo + Google Ads' : 'Site + Content + Google Ads'}</span>
                    <ArrowUpRight className={`w-4 h-4 transition-all duration-300 ${
                      isHighlighted ? 'text-[#33BC65] translate-x-0.5 -translate-y-0.5' : 'text-gray-600'
                    }`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center items-center gap-2.5 mt-4">
          {t.verticalsSection.items.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? 'w-8 bg-[#33BC65]' : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Ir para slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
};

