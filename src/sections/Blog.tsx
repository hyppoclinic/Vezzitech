import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { getPosts, Post } from '../lib/blog';
import { Language } from '../translations';
import { Share2 } from 'lucide-react';

interface BlogProps {
  lang: Language;
}

export const Blog = ({ lang }: BlogProps) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const unsubscribe = getPosts(setPosts);
    return () => {
      unsubscribe();
    };
  }, []);

  const handleShare = (post: Post) => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: `Check out this post: ${post.title}`,
        url: window.location.href,
      }).catch(console.error);
    } else {
      alert('Sharing is not supported in this browser.');
    }
  };

  return (
    <section id="blog" className="py-20 bg-[#070707] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <div key={post.id} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col">
              {post.imageUrl && <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover rounded-xl mb-4" />}
              <h3 className="text-xl font-bold mb-4">{post.title}</h3>
              <div className="prose prose-invert prose-sm flex-grow">
                <ReactMarkdown>{post.content.substring(0, 150) + '...'}</ReactMarkdown>
              </div>
              <button 
                onClick={() => handleShare(post)}
                className="mt-4 flex items-center gap-2 text-sm text-[#33BC65] hover:text-[#2a9d54]"
              >
                <Share2 size={16} /> Share
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
