import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { translations, Language } from '../translations';
import { Clock, ArrowUpRight, Calendar, X, Copy, Check, ArrowLeft } from 'lucide-react';
import { getPosts, Post } from '../lib/blog';
import ReactMarkdown from 'react-markdown';

export const InsightsNew = ({ lang }: { lang: Language }) => {
  const t = translations[lang].insights;
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(true);

  // Subscribe to Firestore blog posts
  useEffect(() => {
    const unsubscribe = getPosts((fetchedPosts) => {
      setPosts(fetchedPosts);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Deep-linking: Load post from URL query parameter on mount or posts loaded
  useEffect(() => {
    if (posts.length > 0) {
      const params = new URLSearchParams(window.location.search);
      const slug = params.get('insight') || params.get('article');
      if (slug) {
        const matched = posts.find((p) => p.slug === slug);
        if (matched) {
          setSelectedPost(matched);
        }
      }
    }
  }, [posts]);

  // Handle document metadata for SEO / AEO when an article is opened
  useEffect(() => {
    if (selectedPost) {
      // 1. Dynamic Title
      const originalTitle = document.title;
      document.title = `${selectedPost.title} | Vezzitech Blog`;

      // 2. Dynamic Meta Description
      const metaDesc = document.querySelector('meta[name="description"]');
      const originalDesc = metaDesc ? metaDesc.getAttribute('content') : '';
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          `${selectedPost.title}. Saiba mais neste artigo técnico detalhado da Vezzitech sobre tecnologia, growth e Inteligência Artificial.`
        );
      }

      // 3. Dynamic JSON-LD structured data for Answer Engines (AEO)
      const existingScript = document.getElementById('dynamic-article-jsonld');
      if (existingScript) existingScript.remove();

      const script = document.createElement('script');
      script.id = 'dynamic-article-jsonld';
      script.type = 'application/ld+json';
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": selectedPost.title,
        "image": selectedPost.imageUrl || "https://vezzitech.com.br/og-image.png",
        "author": {
          "@type": "Organization",
          "name": "Vezzitech",
          "url": "https://vezzitech.com.br"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Vezzitech",
          "logo": {
            "@type": "ImageObject",
            "url": "https://vezzitech.com.br/logo.png"
          }
        },
        "datePublished": selectedPost.createdAt?.toDate
          ? selectedPost.createdAt.toDate().toISOString()
          : new Date().toISOString(),
        "description": `${selectedPost.title}. Descubra as melhores práticas de desenvolvimento, IA e SEO com a Vezzitech.`,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://vezzitech.com.br/?insight=${selectedPost.slug}`
        }
      });
      document.head.appendChild(script);

      // Revert changes on unmount or post closed
      return () => {
        document.title = originalTitle;
        if (metaDesc && originalDesc) {
          metaDesc.setAttribute('content', originalDesc);
        }
        const scriptToRemove = document.getElementById('dynamic-article-jsonld');
        if (scriptToRemove) scriptToRemove.remove();
      };
    }
  }, [selectedPost]);

  const handleOpenPost = (post: Post) => {
    setSelectedPost(post);
    // Update URL query param without triggering reload
    const newUrl = `${window.location.pathname}?insight=${post.slug}`;
    window.history.pushState(null, '', newUrl);
  };

  const handleClosePost = () => {
    setSelectedPost(null);
    // Revert URL to clean landing page URL
    window.history.pushState(null, '', window.location.pathname);
  };

  const handleCopyLink = () => {
    if (!selectedPost) return;
    const url = `${window.location.origin}${window.location.pathname}?insight=${selectedPost.slug}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Intercept anchor clicks to close the article and smoothly scroll to landing page sections
  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest('a');
    if (anchor) {
      const href = anchor.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        handleClosePost();
        setTimeout(() => {
          const el = document.getElementById(href.slice(1));
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 300);
      }
    }
  };

  // Infers the category for posts that don't have one explicitly
  const getCategoryForPost = (post: Post) => {
    const slug = post.slug.toLowerCase();
    if (slug.includes('ai-studio') || slug.includes('inteligencia') || slug.includes('ia')) {
      return lang === 'pt' ? 'Inteligência Artificial' : 'Artificial Intelligence';
    }
    if (slug.includes('crm') || slug.includes('desenvolvimento') || slug.includes('sistema')) {
      return lang === 'pt' ? 'Desenvolvimento' : 'Development';
    }
    if (slug.includes('conversao') || slug.includes('seo') || slug.includes('growth') || slug.includes('marketing')) {
      return lang === 'pt' ? 'Growth Marketing' : 'Growth Marketing';
    }
    return lang === 'pt' ? 'Tecnologia' : 'Technology';
  };

  const getReadingTime = (content: string) => {
    const words = content.split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min`;
  };

  const getFormattedDate = (post: Post) => {
    if (post.createdAt?.toDate) {
      return post.createdAt.toDate().toLocaleDateString(lang === 'pt' ? 'pt-BR' : 'en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });
    }
    return new Date().toLocaleDateString(lang === 'pt' ? 'pt-BR' : 'en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <section className="py-32 bg-[#030303] border-t border-white/[0.05] relative" id="blog">
      <div className="absolute inset-0 bg-noise opacity-[0.015] pointer-events-none mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">INSIGHTS & ARTIGOS</span>
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-white tracking-tight">
              {t.heading}
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-sm leading-relaxed">
            {lang === 'pt' 
              ? 'Conhecimento técnico aprofundado para acelerar o faturamento e a automação do seu negócio.'
              : 'In-depth technical knowledge to accelerate your business revenue and automation.'}
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="flex flex-col animate-pulse">
                <div className="aspect-[16/10] bg-white/5 rounded-xl mb-6 border border-white/5"></div>
                <div className="h-4 bg-white/5 rounded w-1/3 mb-4"></div>
                <div className="h-6 bg-white/5 rounded w-3/4 mb-2"></div>
                <div className="h-6 bg-white/5 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                onClick={() => handleOpenPost(post)}
                className="group cursor-pointer flex flex-col bg-white/[0.01] hover:bg-white/[0.02] border border-white/[0.03] p-5 rounded-2xl transition-all duration-300 hover:border-white/[0.08]"
                id={`post-card-${post.id}`}
              >
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-6 border border-white/[0.08] bg-neutral-900">
                  {post.imageUrl ? (
                    <img 
                      src={post.imageUrl} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-emerald-900/40 to-neutral-900 flex items-center justify-center p-6 text-center text-xs font-mono text-emerald-400">
                      {post.title}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-60"></div>
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-4 text-xs font-medium">
                  <span className="text-emerald-400 uppercase tracking-wider">
                    {getCategoryForPost(post)}
                  </span>
                  <span className="text-gray-500 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> {getReadingTime(post.content)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h3>
                <p className="text-xs text-gray-500 mt-4 font-mono">
                  {getFormattedDate(post)}
                </p>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Full Immersion Reader Overlay */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#030303] overflow-y-auto"
            id="article-reader-overlay"
          >
            {/* Sticky Header */}
            <div className="sticky top-0 bg-[#030303]/90 backdrop-blur-md border-b border-white/5 py-4 px-6 z-50 flex items-center justify-between">
              <button 
                onClick={handleClosePost}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors cursor-pointer group"
                id="btn-reader-back"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                <span>{lang === 'pt' ? 'Voltar' : 'Back'}</span>
              </button>
              
              <div className="flex items-center gap-4">
                <button
                  onClick={handleCopyLink}
                  className="flex items-center gap-2 text-xs text-gray-400 hover:text-white bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                  id="btn-reader-copy"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? (lang === 'pt' ? 'Copiado!' : 'Copied!') : (lang === 'pt' ? 'Compartilhar' : 'Share')}</span>
                </button>
                
                <button 
                  onClick={handleClosePost}
                  className="text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 p-1.5 rounded-lg transition-colors cursor-pointer"
                  id="btn-reader-close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Main Article Container */}
            <div className="max-w-3xl mx-auto px-6 py-16" onClick={handleContentClick} id="article-content-wrapper">
              <div className="mb-12">
                <span className="text-emerald-400 uppercase tracking-widest text-xs font-bold block mb-4">
                  {getCategoryForPost(selectedPost)}
                </span>
                <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-white leading-tight mb-6">
                  {selectedPost.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 border-y border-white/10 py-5">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-emerald-500" />
                    {getFormattedDate(selectedPost)}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-emerald-500" />
                    {getReadingTime(selectedPost.content)} {lang === 'pt' ? 'de leitura' : 'read'}
                  </span>
                  <span className="text-gray-600">|</span>
                  <span className="flex items-center gap-1.5 font-medium text-gray-400">
                    Por Vezzitech Systems
                  </span>
                </div>
              </div>

              {selectedPost.imageUrl && (
                <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[21/9] mb-12 bg-neutral-900">
                  <img 
                    src={selectedPost.imageUrl} 
                    alt={selectedPost.title} 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}

              {/* Styled Prose Content */}
              <div className="prose prose-invert prose-emerald max-w-none text-gray-300 leading-relaxed font-sans prose-headings:font-heading prose-headings:font-semibold prose-a:text-emerald-400 prose-a:underline hover:prose-a:text-emerald-300 prose-strong:text-white prose-code:text-emerald-300 prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-ul:list-disc prose-ol:list-decimal">
                {selectedPost.content.trim().startsWith('<') || selectedPost.content.includes('</') ? (
                  <div dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
                ) : (
                  <ReactMarkdown>{selectedPost.content}</ReactMarkdown>
                )}
              </div>

              {/* Inline Lead Gen Bento Widget */}
              <div className="mt-20 p-8 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent border border-emerald-500/20" id="article-lead-card">
                <h4 className="font-heading font-semibold text-2xl text-white mb-2">
                  {lang === 'pt' ? 'Pronto para transformar sua empresa?' : 'Ready to transform your company?'}
                </h4>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {lang === 'pt' 
                    ? 'Fale com os especialistas da Vezzitech e receba um diagnóstico tecnológico e estratégico sob medida para as necessidades e metas do seu negócio.'
                    : 'Talk to Vezzitech experts and receive a custom technological and strategic diagnosis tailored for your business needs and goals.'}
                </p>
                <button 
                  onClick={() => {
                    handleClosePost();
                    setTimeout(() => {
                      const el = document.getElementById('cta');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 350);
                  }} 
                  className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold px-6 py-3 rounded-xl transition-all cursor-pointer shadow-lg shadow-emerald-500/20"
                  id="btn-reader-cta"
                >
                  {lang === 'pt' ? 'Solicitar Diagnóstico Estratégico' : 'Request Strategic Diagnosis'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
