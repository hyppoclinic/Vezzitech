import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { getPosts, Post } from '../lib/blog';
import { AddPostForm } from '../components/AddPostForm';
import { auth } from '../lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { Language } from '../translations';

interface BlogProps {
  lang: Language;
}

export const Blog = ({ lang }: BlogProps) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    const unsubscribe = getPosts(setPosts);
    const unsubscribeAuth = onAuthStateChanged(auth, setUser);
    return () => {
      unsubscribe();
      unsubscribeAuth();
    };
  }, []);

  return (
    <section id="blog" className="py-20 bg-[#070707] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">Blog</h2>
        {user && <AddPostForm />}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <div key={post.id} className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">{post.title}</h3>
              <div className="prose prose-invert prose-sm">
                <ReactMarkdown>{post.content.substring(0, 150) + '...'}</ReactMarkdown>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
