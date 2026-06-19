import { collection, query, orderBy, onSnapshot, addDoc, updateDoc, deleteDoc, doc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';

export interface Post {
  id: string;
  title: string;
  content: string;
  createdAt: any;
  slug: string;
  author: string;
  imageUrl?: string;
}

export const getPosts = (callback: (posts: Post[]) => void) => {
  const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
  return onSnapshot(q, (snapshot) => {
    const posts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Post));
    callback(posts);
  });
};

export const addPost = async (post: Omit<Post, 'id' | 'createdAt'>) => {
  return await addDoc(collection(db, 'posts'), { ...post, createdAt: serverTimestamp() });
};
