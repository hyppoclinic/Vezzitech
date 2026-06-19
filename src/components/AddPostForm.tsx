import React, { useState } from 'react';
import { addPost } from '../lib/blog';
import { auth } from '../lib/firebase';

export const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth.currentUser) {
      alert('You must be logged in to create posts.');
      return;
    }
    setLoading(true);
    try {
      await addPost({
        title,
        slug,
        content,
        imageUrl,
        author: auth.currentUser.uid,
      });
      setTitle('');
      setSlug('');
      setContent('');
      setImageUrl('');
      alert('Post created successfully!');
    } catch (error) {
      console.error('Error adding post:', error);
      alert('Failed to create post.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 p-6 rounded-2xl mb-8">
      <h3 className="text-xl font-bold mb-4">Add New Post</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full bg-white/5 p-2 rounded mb-4 text-white"
        required
      />
      <input
        type="text"
        placeholder="Slug (e.g., my-awesome-post)"
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
        className="w-full bg-white/5 p-2 rounded mb-4 text-white"
        required
      />
      <input
        type="text"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        className="w-full bg-white/5 p-2 rounded mb-4 text-white"
      />
      <textarea
        placeholder="Markdown Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full bg-white/5 p-2 rounded mb-4 text-white h-32"
        required
      />
      <button 
        type="submit" 
        disabled={loading}
        className="gradient-orange text-black px-6 py-2 rounded-xl font-bold uppercase tracking-widest disabled:opacity-50"
      >
        {loading ? 'Creating...' : 'Publish'}
      </button>
    </form>
  );
};
