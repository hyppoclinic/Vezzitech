import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { getPosts, Post } from '../lib/blog';
import { Language, translations } from '../translations';
import { Clock, Calendar, User, Link2, Check, ArrowLeft } from 'lucide-react';
import { FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

interface BlogPostPageProps {
  slug: string;
  lang: Language;
}

export const BlogPostPage = ({ slug, lang }: BlogPostPageProps) => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [currentLang, setCurrentLang] = useState<Language>(lang);

  const t = translations[currentLang];

  useEffect(() => {
    // We only want the post matching the slug
    const unsubscribe = getPosts((allPosts) => {
      const found = allPosts.find(p => p.slug === slug);
      setPost(found || null);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [slug]);

  const handleCopyLink = (e: React.MouseEvent) => {
    e.preventDefault();
    const shareUrl = window.location.href;
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopiedId(post?.id || 'copied');
      setTimeout(() => setCopiedId(null), 3000);
    });
  };

  const openShareWindow = (platform: 'linkedin' | 'twitter' | 'whatsapp', e: React.MouseEvent) => {
    e.preventDefault();
    if (!post) return;
    
    const shareUrl = encodeURIComponent(window.location.href);
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

  const getReadingTime = (content: string) => {
    const words = content.trim().split(/\s+/).length;
    const time = Math.ceil(words / 200); 
    return `${time} min`;
  };

  const formatDate = (timestamp: any) => {
    if (!timestamp) return '';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString(currentLang === 'pt' ? 'pt-BR' : 'en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#070707] flex items-center justify-center text-white">
        <Clock className="animate-spin text-[#33BC65]" size={32} />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-[#070707] flex flex-col items-center justify-center text-white p-6">
        <h1 className="text-3xl font-bold mb-4">Post não encontrado</h1>
        <a href="/" className="text-[#33BC65] hover:underline flex items-center gap-2">
          <ArrowLeft size={16} /> Voltar para o início
        </a>
      </div>
    );
  }

  return (
    <div className="bg-[#070707] min-h-screen text-gray-200 antialiased selection:bg-[#33BC65]/30 selection:text-white pt-24">
      <Header lang={currentLang} setLang={setCurrentLang} />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 mb-24 relative z-10">
        <a href="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#33BC65] mb-8 transition-colors">
          <ArrowLeft size={16} /> Voltar
        </a>

        {post.imageUrl && (
          <div className="w-full h-[300px] sm:h-[400px] overflow-hidden rounded-3xl border border-white/5 relative mb-10">
            <img src={post.imageUrl} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-transparent"></div>
          </div>
        )}

        <div className="flex flex-wrap gap-4 items-center text-sm text-gray-400 mb-6">
          <span className="flex items-center gap-1.5">
            <User size={14} className="text-[#33BC65]" /> Time de Engenharia Vezzitech
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Calendar size={14} /> {formatDate(post.createdAt)}
          </span>
          <span>•</span>
          <span className="text-xs font-mono text-gray-400 uppercase tracking-widest flex items-center gap-1">
            <Clock size={12} className="text-[#33BC65]" /> {getReadingTime(post.content)} de leitura
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-10 leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap gap-4 items-center justify-between border-y border-white/10 py-6 mb-12">
          <span className="text-sm font-semibold text-gray-400">Compartilhar artigo:</span>
          <div className="flex items-center gap-2">
            <button 
              onClick={(e) => openShareWindow('linkedin', e)}
              className="flex items-center gap-2 bg-sky-950/20 hover:bg-sky-950/40 border border-sky-500/20 text-sky-400 text-sm py-2 px-4 rounded-xl transition-all"
            >
              <FaLinkedin size={16} /> <span className="hidden sm:inline">LinkedIn</span>
            </button>
            <button 
              onClick={(e) => openShareWindow('twitter', e)}
              className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-white text-sm py-2 px-4 rounded-xl transition-all"
            >
              <FaTwitter size={16} /> <span className="hidden sm:inline">X (Twitter)</span>
            </button>
            <button 
              onClick={(e) => openShareWindow('whatsapp', e)}
              className="flex items-center gap-2 bg-emerald-950/20 hover:bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 text-sm py-2 px-4 rounded-xl transition-all"
            >
              <FaWhatsapp size={16} /> <span className="hidden sm:inline">WhatsApp</span>
            </button>
            <button 
              onClick={(e) => handleCopyLink(e)}
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm py-2 px-4 rounded-xl transition-all"
            >
              {copiedId === post?.id ? (
                <>
                  <Check size={16} className="text-emerald-400" /> <span className="hidden sm:inline">Copiado!</span>
                </>
              ) : (
                <>
                  <Link2 size={16} /> <span className="hidden sm:inline">Copiar Link</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="prose prose-invert prose-emerald max-w-none text-gray-200 leading-relaxed text-lg space-y-8">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </main>

      <Footer lang={currentLang} />
    </div>
  );
};
