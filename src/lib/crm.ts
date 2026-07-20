import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { db } from './firebase';

export interface Lead {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  status: 'new' | 'contacted' | 'negotiation' | 'closed' | 'lost';
  value: number;
  source: string;
  notes: string;
  createdAt: any;
}

export interface Project {
  id: string;
  name: string;
  client: string;
  status: 'planning' | 'development' | 'review' | 'completed';
  dueDate: any;
  progress: number;
}

// Leads
export const getLeads = async (): Promise<Lead[]> => {
  const q = query(collection(db, 'leads'), orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Lead));
};

export const addLead = async (lead: Omit<Lead, 'id' | 'createdAt'>) => {
  return await addDoc(collection(db, 'leads'), {
    ...lead,
    createdAt: serverTimestamp()
  });
};

export const updateLead = async (id: string, lead: Partial<Omit<Lead, 'id' | 'createdAt'>>) => {
  const ref = doc(db, 'leads', id);
  return await updateDoc(ref, lead);
};

export const deleteLead = async (id: string) => {
  const ref = doc(db, 'leads', id);
  return await deleteDoc(ref);
};

// Projects
export const getProjects = async (): Promise<Project[]> => {
  const q = query(collection(db, 'projects'), orderBy('dueDate', 'asc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Project));
};

export const addProject = async (project: Omit<Project, 'id'>) => {
  return await addDoc(collection(db, 'projects'), project);
};

export const updateProject = async (id: string, project: Partial<Omit<Project, 'id'>>) => {
  const ref = doc(db, 'projects', id);
  return await updateDoc(ref, project);
};

export const deleteProject = async (id: string) => {
  const ref = doc(db, 'projects', id);
  return await deleteDoc(ref);
};
