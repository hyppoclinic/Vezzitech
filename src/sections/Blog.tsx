import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { getPosts, Post } from '../lib/blog';
import { Language, translations } from '../translations';
import { Share2, Clock, X, Calendar, User, Link2, Linkedin, Twitter, MessageSquare, Check } from 'lucide-react';

interface BlogProps {
  lang: Language;
}

export const Blog = ({ lang }: BlogProps) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const t = translations[lang];

  useEffect(() => {
    const unsubscribe = getPosts(setPosts);
    return () => {
      unsubscribe();
    };
  }, []);

  const handleShareNavigator = (post: Post, e: React.MouseEvent) => {
    e.stopPropagation();
    const shareUrl = `${window.location.origin}/blog/${post.slug}`;
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: `Confira este artigo no blog da Vezzitech: ${post.title}`,
        url: shareUrl,
      }).catch(console.error);
    } else {
      // Fallback: Copy link
      handleCopyLink(post, e);
    }
  };

  const handleCopyLink = (post: Post, e: React.MouseEvent) => {
    e.stopPropagation();
    const shareUrl = `${window.location.origin}/blog/${post.slug}`;
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopiedId(post.id);
      setTimeout(() => setCopiedId(null), 3000);
    });
  };

  const openShareWindow = (platform: 'linkedin' | 'twitter' | 'whatsapp', post: Post, e: React.MouseEvent) => {
    e.stopPropagation();
    const shareUrl = encodeURIComponent(`${window.location.origin}/blog/${post.slug}`);
    const text = encodeURIComponent(`Confira este artigo: "${post.title}" da @Vezzitech`);
    
    let url = '';
    if (platform === 'linkedin') {
      url = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;
    } else if (platform === 'twitter') {
      url = `https://twitter.com/intent/tweet?url=${shareUrl}&text=${text}`;
    } else if (platform === 'whatsapp') {
      url = `https://api.whatsapp.com/send?text=${text}%20${shareUrl}`;
    }

    if (url) {
      window.open(url, '_blank', 'width=600,height=400,noopener,noreferrer');
    }
  };

  // Helper to estimate reading duration
  const getReadingTime = (content: string) => {
    const words = content.trim().split(/\s+/).length;
    const time = Math.ceil(words / 200); // avg 200 wpm
    return `${time} min`;
  };

  const formatDate = (timestamp: any) => {
    if (!timestamp) return '';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString(lang === 'pt' ? 'pt-BR' : 'en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <section id="blog" className="py-24 bg-[#070707] text-white relative">
      {/* Decorative ambient lights */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#33BC65]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#12DCEF]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#33BC65] text-xs font-bold uppercase tracking-widest bg-[#33BC65]/5 px-3 py-1.5 rounded-full border border-[#33BC65]/10">
            {t.blogSection.tag}
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4 mb-4 text-white">
            {t.blogSection.heading}
          </h2>
          <p className="text-gray-400 text-lg">
            {t.blogSection.sub}
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-20 bg-white/[0.02] border border-white/10 rounded-2xl p-8">
            <Clock className="mx-auto text-gray-500 mb-4 animate-pulse" size={40} />
            <p className="text-gray-400">Nenhuma postagem encontrada. Novas análises técnicas em breve!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <a 
                key={post.id} 
                href={`/blog/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/[0.02] border border-white/5 hover:border-[#33BC65]/30 p-6 rounded-2xl flex flex-col transition-all duration-300 transform hover:-translate-y-1 cursor-pointer block"
              >
                {post.imageUrl ? (
                  <div className="overflow-hidden rounded-xl h-48 mb-6 border border-white/10 relative">
                    <img 
                      src={post.imageUrl} 
                      alt="" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-[#070707]/80 backdrop-blur-sm text-xs px-2.5 py-1 rounded-lg text-gray-300 border border-white/5 flex items-center gap-1">
                      <Clock size={12} className="text-[#33BC65]" />
                      {getReadingTime(post.content)}
                    </div>
                  </div>
                ) : (
                  <div className="bg-white/5 h-48 rounded-xl mb-6 border border-white/5 flex items-center justify-center text-gray-500 relative">
                    <FileTextIcon size={32} className="text-white/20" />
                    <div className="absolute top-3 left-3 bg-[#070707]/80 backdrop-blur-sm text-xs px-2.5 py-1 rounded-lg text-gray-300 border border-white/5 flex items-center gap-1">
                      <Clock size={12} className="text-[#33BC65]" />
                      {getReadingTime(post.content)}
                    </div>
                  </div>
                )}

                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-emerald-400 font-semibold">
                      ENGINEERING INSIGHTS
                    </span>
                    <h3 className="text-xl font-bold mt-2 mb-3 leading-snug text-white group-hover:text-[#33BC65] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                      {post.content.replace(/[#*`]/g, '').substring(0, 140)}...
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex justify-between items-center mt-auto">
                    <span className="text-xs text-[#33BC65] uppercase tracking-wider font-extrabold flex items-center gap-1 group-hover:gap-2 transition-all">
                      {t.blogSection.readMore} →
                    </span>

                    {/* Mini Quick Share Toolbar */}
                    <div className="flex items-center gap-2" onClick={(e) => e.preventDefault()}>
                      <button 
                        onClick={(e) => openShareWindow('linkedin', post, e)}
                        className="p-1.5 hover:bg-white/10 rounded-lg text-gray-500 hover:text-white transition-all"
                        title="Compartilhar no LinkedIn"
                      >
                        <Linkedin size={14} />
                      </button>
                      <button 
                        onClick={(e) => openShareWindow('twitter', post, e)}
                        className="p-1.5 hover:bg-white/10 rounded-lg text-gray-500 hover:text-white transition-all"
                        title="Compartilhar no X (Twitter)"
                      >
                        <Twitter size={14} />
                      </button>
                      <button 
                        onClick={(e) => handleCopyLink(post, e)}
                        className="p-1.5 hover:bg-white/10 rounded-lg text-gray-500 hover:text-white transition-all relative"
                        title="Copiar Link"
                      >
                        {copiedId === post.id ? <Check size={14} className="text-emerald-400" /> : <Link2 size={14} />}
                      </button>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

// Simple Fallback Vector Icon
const FileTextIcon = ({ size, className }: { size: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
    <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
    <path d="M10 9H8"/>
    <path d="M16 13H8"/>
    <path d="M16 17H8"/>
  </svg>
);

