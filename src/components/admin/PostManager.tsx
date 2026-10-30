import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { Trash2, Edit, Plus } from 'lucide-react';

export const PostManager = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const querySnapshot = await getDocs(collection(db, 'posts'));
    setPosts(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  const addPost = async () => {
    if (!title || !content) return;
    await addDoc(collection(db, 'posts'), { title, content, publishedAt: new Date() });
    setTitle('');
    setContent('');
    fetchPosts();
  };

  const deletePost = async (id: string) => {
    await deleteDoc(doc(db, 'posts', id));
    fetchPosts();
  };

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-3xl bg-[#10172A]/70 backdrop-blur-2xl border border-white/[0.08]">
        <h2 className="text-xl font-bold mb-4">Add New Post</h2>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-3 mb-2 rounded-xl bg-[#05070A] text-white border border-white/[0.08]" />
        <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} className="w-full p-3 mb-4 rounded-xl bg-[#05070A] text-white border border-white/[0.08] h-32" />
        <button onClick={addPost} className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#168BFF] text-white font-bold hover:bg-[#168BFF]/90 transition"><Plus size={18}/> Add Post</button>
      </div>
      <div className="space-y-4">
        {posts.map(post => (
          <div key={post.id} className="flex justify-between items-center p-6 rounded-3xl bg-[#10172A]/70 backdrop-blur-2xl border border-white/[0.08]">
            <span className="font-bold text-white">{post.title}</span>
            <button onClick={() => deletePost(post.id)} className="p-2 text-red-400 hover:bg-red-400/10 rounded-lg"><Trash2 size={18}/></button>
          </div>
        ))}
      </div>
    </div>
  );
};
