import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { getPosts, addPost, updatePost, deletePost, Post } from '../lib/blog';
import { getLeads, addLead, updateLead, deleteLead, Lead, getProjects, addProject, updateProject, deleteProject, Project } from '../lib/crm';
import { getAnalyticsData, saveAnalyticsData, recordEventMetric, MetricItem } from '../lib/analytics';
import { auth } from '../lib/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { VezzitechLogo } from './VezzitechLogo';
import { 
  LayoutDashboard, Users, FolderKanban, FileText, BarChart3, Settings, LogOut, Globe, PlusCircle, Edit3, Trash2, Search, Target, CheckCircle2, ChevronRight, Upload, Sparkles, AlertCircle, Check
} from 'lucide-react';
import { 
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip
} from 'recharts';

export const Dashboard = () => {
  const [user, setUser] = useState(auth.currentUser);
  const [activeMenu, setActiveMenu] = useState<'overview' | 'leads' | 'projects' | 'blog' | 'analytics'>('overview');
  
  // Data States
  const [posts, setPosts] = useState<Post[]>([]);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  
  // Loading & Messages
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Forms Modals / States
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [editingLead, setEditingLead] = useState<Lead | null>(null);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  
  // Blog Editor State
  const [isBlogEditorOpen, setIsBlogEditorOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [postTitle, setPostTitle] = useState('');
  const [postSlug, setPostSlug] = useState('');
  const [postImage, setPostImage] = useState('');
  const [postContent, setPostContent] = useState('');

  // AI Blog Assistant States
  const [aiPrompt, setAiPrompt] = useState('');
  const [generatingArticle, setGeneratingArticle] = useState(false);
  const [generatingImage, setGeneratingImage] = useState(false);

  // Lead Form State
  const [leadName, setLeadName] = useState('');
  const [leadCompany, setLeadCompany] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [leadStatus, setLeadStatus] = useState<'new' | 'contacted' | 'negotiation' | 'closed' | 'lost'>('new');
  const [leadValue, setLeadValue] = useState(0);

  // Project Form State
  const [projectName, setProjectName] = useState('');
  const [projectClient, setProjectClient] = useState('');
  const [projectStatus, setProjectStatus] = useState<'planning' | 'development' | 'review' | 'completed'>('planning');
  const [projectProgress, setProjectProgress] = useState(0);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (!user) {
        window.location.href = '/login';
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      loadData();
    }
  }, [user]);

  const loadData = async () => {
    const unsubscribePosts = getPosts(setPosts);
    const fetchedLeads = await getLeads();
    const fetchedProjects = await getProjects();
    setLeads(fetchedLeads);
    setProjects(fetchedProjects);
    return () => unsubscribePosts();
  };

  const showStatus = (type: 'success' | 'error', text: string) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 5000);
  };

  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = '/login';
  };

  // --- Lead Handlers ---
  const handleSaveLead = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = {
        name: leadName,
        company: leadCompany,
        email: leadEmail,
        phone: leadPhone,
        status: leadStatus,
        value: Number(leadValue),
        source: 'Organic',
        notes: ''
      };

      if (editingLead) {
        await updateLead(editingLead.id, payload);
        showStatus('success', 'Lead atualizado!');
      } else {
        await addLead(payload);
        showStatus('success', 'Novo lead adicionado!');
      }
      setIsLeadModalOpen(false);
      const fetchedLeads = await getLeads();
      setLeads(fetchedLeads);
    } catch (err: any) {
      showStatus('error', err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEditLead = (lead: Lead) => {
    setEditingLead(lead);
    setLeadName(lead.name);
    setLeadCompany(lead.company);
    setLeadEmail(lead.email);
    setLeadPhone(lead.phone);
    setLeadStatus(lead.status);
    setLeadValue(lead.value);
    setIsLeadModalOpen(true);
  };

  const handleDeleteLead = async (id: string) => {
    if (window.confirm('Tem certeza?')) {
      await deleteLead(id);
      const fetchedLeads = await getLeads();
      setLeads(fetchedLeads);
      showStatus('success', 'Lead removido!');
    }
  };

  const openNewLeadModal = () => {
    setEditingLead(null);
    setLeadName('');
    setLeadCompany('');
    setLeadEmail('');
    setLeadPhone('');
    setLeadStatus('new');
    setLeadValue(0);
    setIsLeadModalOpen(true);
  };

  // --- Project Handlers ---
  const handleSaveProject = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = {
        name: projectName,
        client: projectClient,
        status: projectStatus,
        progress: Number(projectProgress),
        dueDate: new Date().toISOString()
      };

      if (editingProject) {
        await updateProject(editingProject.id, payload);
        showStatus('success', 'Projeto atualizado!');
      } else {
        await addProject(payload);
        showStatus('success', 'Novo projeto adicionado!');
      }
      setIsProjectModalOpen(false);
      const fetchedProjects = await getProjects();
      setProjects(fetchedProjects);
    } catch (err: any) {
      showStatus('error', err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEditProject = (project: Project) => {
    setEditingProject(project);
    setProjectName(project.name);
    setProjectClient(project.client);
    setProjectStatus(project.status);
    setProjectProgress(project.progress);
    setIsProjectModalOpen(true);
  };

  const handleDeleteProject = async (id: string) => {
    if (window.confirm('Tem certeza?')) {
      await deleteProject(id);
      const fetchedProjects = await getProjects();
      setProjects(fetchedProjects);
      showStatus('success', 'Projeto removido!');
    }
  };

  const openNewProjectModal = () => {
    setEditingProject(null);
    setProjectName('');
    setProjectClient('');
    setProjectStatus('planning');
    setProjectProgress(0);
    setIsProjectModalOpen(true);
  };

  // --- Blog Handlers ---
  const handleSavePost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth.currentUser) return;
    setLoading(true);
    try {
      const payload = {
        title: postTitle,
        slug: postSlug,
        content: postContent,
        imageUrl: postImage,
        author: auth.currentUser.uid,
      };

      if (editingPost) {
        await updatePost(editingPost.id, payload);
        showStatus('success', 'Post atualizado!');
      } else {
        await addPost(payload);
        showStatus('success', 'Post criado!');
      }
      setIsBlogEditorOpen(false);
    } catch (err: any) {
      showStatus('error', err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEditPost = (post: Post) => {
    setEditingPost(post);
    setPostTitle(post.title);
    setPostSlug(post.slug);
    setPostContent(post.content);
    setPostImage(post.imageUrl || '');
    setIsBlogEditorOpen(true);
  };

  const handleDeletePost = async (id: string) => {
    if (window.confirm('Excluir post?')) {
      await deletePost(id);
      showStatus('success', 'Post removido!');
    }
  };

  const openNewPostModal = () => {
    setEditingPost(null);
    setPostTitle('');
    setPostSlug('');
    setPostContent('');
    setPostImage('');
    setAiPrompt('');
    setIsBlogEditorOpen(true);
  };

  const handleGenerateArticleWithAI = async () => {
    if (!aiPrompt.trim()) return;
    setGeneratingArticle(true);
    showStatus('success', 'Iniciando redação do artigo com Inteligência Artificial...');
    try {
      const res = await fetch('/api/gemini/generate-article', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: aiPrompt, lang: 'pt' })
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Erro ao gerar artigo.');
      }
      const data = await res.json();
      if (data.title) setPostTitle(data.title);
      if (data.slug) setPostSlug(data.slug);
      if (data.content) setPostContent(data.content);
      showStatus('success', 'Artigo redigido e formatado com sucesso! Revise os campos abaixo.');
    } catch (err: any) {
      console.error(err);
      showStatus('error', err.message || 'Falha ao gerar o artigo com IA.');
    } finally {
      setGeneratingArticle(false);
    }
  };

  const handleGenerateImageWithAI = async () => {
    if (!postTitle.trim()) {
      showStatus('error', 'Por favor, gere ou digite um título primeiro.');
      return;
    }
    setGeneratingImage(true);
    showStatus('success', 'Gerando imagem de capa exclusiva com IA (Nano Banana)...');
    try {
      const res = await fetch('/api/gemini/generate-article-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: postTitle, lang: 'pt' })
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Erro ao gerar imagem.');
      }
      const data = await res.json();
      if (data.imageUrl) {
        setPostImage(data.imageUrl);
        if (data.isGenerated) {
          showStatus('success', 'Imagem de capa criada com sucesso pelo modelo Nano Banana!');
        } else {
          showStatus('success', 'Imagem de capa selecionada com sucesso!');
        }
      }
    } catch (err: any) {
      console.error(err);
      showStatus('error', err.message || 'Falha ao obter imagem de capa.');
    } finally {
      setGeneratingImage(false);
    }
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#030303] text-white">
        <p className="animate-pulse">Autenticando...</p>
      </div>
    );
  }

  const activeLeadsCount = leads.filter(l => l.status !== "closed" && l.status !== "lost").length;
  const pipelineValue = leads.filter(l => l.status !== "lost").reduce((acc, l) => acc + Number(l.value || 0), 0);
  const activeProjectsCount = projects.filter(p => p.status !== "completed").length;

  return (
    <div className="flex h-screen bg-[#030303] text-gray-200 font-sans overflow-hidden">
      
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 bg-white/[0.01] flex flex-col justify-between shrink-0">
        <div>
          <div className="h-20 flex items-center px-6 border-b border-white/5">
            <VezzitechLogo className="text-xl" />
          </div>
          <nav className="p-4 space-y-2">
            <button 
              onClick={() => setActiveMenu('overview')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeMenu === 'overview' ? 'bg-[#33BC65] text-black font-bold' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
            >
              <LayoutDashboard size={18} /> Visão Geral
            </button>
            <button 
              onClick={() => setActiveMenu('leads')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeMenu === 'leads' ? 'bg-[#33BC65] text-black font-bold' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
            >
              <Users size={18} /> CRM / Leads
            </button>
            <button 
              onClick={() => setActiveMenu('projects')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeMenu === 'projects' ? 'bg-[#33BC65] text-black font-bold' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
            >
              <FolderKanban size={18} /> Projetos
            </button>
            <button 
              onClick={() => setActiveMenu('blog')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeMenu === 'blog' ? 'bg-[#33BC65] text-black font-bold' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
            >
              <FileText size={18} /> Blog & AEO
            </button>
            <button 
              onClick={() => setActiveMenu('analytics')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeMenu === 'analytics' ? 'bg-[#33BC65] text-black font-bold' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
            >
              <BarChart3 size={18} /> Analytics
            </button>
          </nav>
        </div>
        
        <div className="p-4 border-t border-white/5">
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-gray-400">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs uppercase">
              {user.email?.charAt(0)}
            </div>
            <span className="truncate">{user.email}</span>
          </div>
          <button 
            onClick={handleLogout}
            className="w-full mt-2 flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-rose-400 hover:bg-rose-500/10 transition-colors"
          >
            <LogOut size={18} /> Sair do Sistema
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <header className="h-20 flex items-center justify-between px-8 border-b border-white/5 bg-white/[0.01]">
          <h1 className="text-xl font-bold tracking-tight capitalize text-white">
            {activeMenu === 'overview' ? 'Painel Executivo' : activeMenu}
          </h1>
          <div className="flex items-center gap-4">
            <a href="/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-400 transition-colors bg-white/5 px-4 py-2 rounded-lg">
              <Globe size={16} /> Ver Site
            </a>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8 scrollbar-thin">
          
          {message && (
            <div className={`p-4 rounded-xl border mb-6 flex items-center gap-3 animate-fadeIn ${
              message.type === 'success' 
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' 
                : 'bg-rose-500/10 border-rose-500/30 text-rose-300'
            }`}>
              {message.type === 'success' ? <Check size={20} /> : <AlertCircle size={20} />}
              <span className="text-sm font-medium">{message.text}</span>
            </div>
          )}

          {/* OVERVIEW */}
          {activeMenu === 'overview' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <h3 className="text-gray-400 text-sm font-medium mb-1">Leads Ativos</h3>
                  <p className="text-4xl font-extrabold text-white">{activeLeadsCount}</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <h3 className="text-gray-400 text-sm font-medium mb-1">Valor do Pipeline</h3>
                  <p className="text-4xl font-extrabold text-emerald-400">
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(pipelineValue)}
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <h3 className="text-gray-400 text-sm font-medium mb-1">Projetos em Andamento</h3>
                  <p className="text-4xl font-extrabold text-cyan-400">{activeProjectsCount}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Leads */}
                <div className="bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden">
                  <div className="p-6 border-b border-white/5 flex justify-between items-center">
                    <h3 className="font-bold text-white">Leads Recentes</h3>
                    <button onClick={() => setActiveMenu('leads')} className="text-xs text-[#33BC65] hover:underline">Ver Todos</button>
                  </div>
                  <div className="divide-y divide-white/5">
                    {leads.slice(0, 5).map(lead => (
                      <div key={lead.id} className="p-4 flex justify-between items-center">
                        <div>
                          <p className="font-semibold text-sm text-gray-200">{lead.name}</p>
                          <p className="text-xs text-gray-500">{lead.company}</p>
                        </div>
                        <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                          lead.status === 'new' ? 'bg-blue-500/20 text-blue-400' :
                          lead.status === 'contacted' ? 'bg-amber-500/20 text-amber-400' :
                          lead.status === 'negotiation' ? 'bg-purple-500/20 text-purple-400' :
                          lead.status === 'closed' ? 'bg-emerald-500/20 text-emerald-400' :
                          'bg-rose-500/20 text-rose-400'
                        }`}>
                          {lead.status.toUpperCase()}
                        </span>
                      </div>
                    ))}
                    {leads.length === 0 && <p className="p-6 text-sm text-gray-500 text-center">Nenhum lead encontrado.</p>}
                  </div>
                </div>

                {/* Active Projects */}
                <div className="bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden">
                  <div className="p-6 border-b border-white/5 flex justify-between items-center">
                    <h3 className="font-bold text-white">Projetos Ativos</h3>
                    <button onClick={() => setActiveMenu('projects')} className="text-xs text-[#33BC65] hover:underline">Ver Todos</button>
                  </div>
                  <div className="divide-y divide-white/5">
                    {projects.filter(p => p.status !== 'completed').slice(0, 5).map(project => (
                      <div key={project.id} className="p-4">
                        <div className="flex justify-between items-center mb-2">
                          <p className="font-semibold text-sm text-gray-200">{project.name}</p>
                          <span className="text-xs text-cyan-400">{project.progress}%</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-1.5">
                          <div className="bg-cyan-400 h-1.5 rounded-full" style={{ width: `${project.progress}%` }}></div>
                        </div>
                      </div>
                    ))}
                    {projects.length === 0 && <p className="p-6 text-sm text-gray-500 text-center">Nenhum projeto ativo.</p>}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* LEADS CRM */}
          {activeMenu === 'leads' && (
            <div className="animate-fadeIn">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Gestão de Leads</h2>
                <button onClick={openNewLeadModal} className="bg-[#33BC65] hover:opacity-90 text-black font-bold px-4 py-2 rounded-xl text-sm flex items-center gap-2">
                  <PlusCircle size={16} /> Novo Lead
                </button>
              </div>
              
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead className="bg-white/5 text-gray-400">
                    <tr>
                      <th className="p-4 font-medium">Nome / Empresa</th>
                      <th className="p-4 font-medium">Contato</th>
                      <th className="p-4 font-medium">Status</th>
                      <th className="p-4 font-medium">Valor Estimado</th>
                      <th className="p-4 font-medium text-right">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {leads.map(lead => (
                      <tr key={lead.id} className="hover:bg-white/[0.02]">
                        <td className="p-4">
                          <p className="font-semibold text-gray-200">{lead.name}</p>
                          <p className="text-xs text-gray-500">{lead.company}</p>
                        </td>
                        <td className="p-4">
                          <p className="text-gray-300">{lead.email}</p>
                          <p className="text-xs text-gray-500">{lead.phone}</p>
                        </td>
                        <td className="p-4">
                          <select 
                            value={lead.status}
                            onChange={(e) => {
                              updateLead(lead.id, { status: e.target.value as any });
                              setLeads(leads.map(l => l.id === lead.id ? { ...l, status: e.target.value as any } : l));
                            }}
                            className={`text-xs px-2.5 py-1 rounded-full font-medium outline-none cursor-pointer ${
                              lead.status === 'new' ? 'bg-blue-500/20 text-blue-400' :
                              lead.status === 'contacted' ? 'bg-amber-500/20 text-amber-400' :
                              lead.status === 'negotiation' ? 'bg-purple-500/20 text-purple-400' :
                              lead.status === 'closed' ? 'bg-emerald-500/20 text-emerald-400' :
                              'bg-rose-500/20 text-rose-400'
                            }`}
                          >
                            <option value="new" className="bg-[#030303]">Novo</option>
                            <option value="contacted" className="bg-[#030303]">Contatado</option>
                            <option value="negotiation" className="bg-[#030303]">Em Negociação</option>
                            <option value="closed" className="bg-[#030303]">Fechado</option>
                            <option value="lost" className="bg-[#030303]">Perdido</option>
                          </select>
                        </td>
                        <td className="p-4 font-mono text-emerald-400">
                          {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(lead.value)}
                        </td>
                        <td className="p-4 text-right">
                          <button onClick={() => handleEditLead(lead)} className="text-gray-400 hover:text-cyan-400 p-2"><Edit3 size={16} /></button>
                          <button onClick={() => handleDeleteLead(lead.id)} className="text-gray-400 hover:text-rose-400 p-2"><Trash2 size={16} /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {leads.length === 0 && <p className="p-8 text-center text-gray-500">Nenhum lead no funil.</p>}
              </div>
            </div>
          )}

          {/* PROJECTS */}
          {activeMenu === 'projects' && (
            <div className="animate-fadeIn">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Projetos em Andamento</h2>
                <button onClick={openNewProjectModal} className="bg-[#33BC65] hover:opacity-90 text-black font-bold px-4 py-2 rounded-xl text-sm flex items-center gap-2">
                  <PlusCircle size={16} /> Novo Projeto
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {projects.map(project => (
                  <div key={project.id} className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl relative">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-bold text-lg text-white">{project.name}</h3>
                        <p className="text-sm text-gray-400">{project.client}</p>
                      </div>
                      <div className="flex gap-1">
                        <button onClick={() => handleEditProject(project)} className="text-gray-500 hover:text-cyan-400 p-1"><Edit3 size={14} /></button>
                        <button onClick={() => handleDeleteProject(project.id)} className="text-gray-500 hover:text-rose-400 p-1"><Trash2 size={14} /></button>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-semibold text-gray-400">Progresso</span>
                        <span className="text-xs text-cyan-400">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-cyan-400 h-2 rounded-full" style={{ width: `${project.progress}%` }}></div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-xs">
                      <span className={`px-2 py-1 rounded-md ${
                        project.status === 'planning' ? 'bg-gray-500/20 text-gray-300' :
                        project.status === 'development' ? 'bg-blue-500/20 text-blue-400' :
                        project.status === 'review' ? 'bg-amber-500/20 text-amber-400' :
                        'bg-emerald-500/20 text-emerald-400'
                      }`}>
                        {project.status === 'planning' && 'Planejamento'}
                        {project.status === 'development' && 'Em Desenvolvimento'}
                        {project.status === 'review' && 'Revisão'}
                        {project.status === 'completed' && 'Concluído'}
                      </span>
                    </div>
                  </div>
                ))}
                {projects.length === 0 && <div className="col-span-full p-8 text-center text-gray-500">Nenhum projeto cadastrado.</div>}
              </div>
            </div>
          )}

          {/* BLOG & AEO */}
          {activeMenu === 'blog' && (
            <div className="animate-fadeIn">
              {!isBlogEditorOpen ? (
                <>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Gestor de Conteúdo (Blog)</h2>
                    <button onClick={openNewPostModal} className="bg-[#33BC65] hover:opacity-90 text-black font-bold px-4 py-2 rounded-xl text-sm flex items-center gap-2">
                      <PlusCircle size={16} /> Escrever Artigo
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {posts.map(post => (
                      <div key={post.id} className="bg-white/[0.02] border border-white/5 p-5 rounded-2xl flex gap-4">
                        {post.imageUrl && (
                          <img src={post.imageUrl} alt="" className="w-20 h-20 rounded-xl object-cover shrink-0" />
                        )}
                        <div className="flex-1">
                          <h3 className="font-bold text-white mb-1 line-clamp-2">{post.title}</h3>
                          <p className="text-xs text-gray-500 font-mono line-clamp-1 mb-2">/{post.slug}</p>
                          <div className="flex gap-2">
                            <button onClick={() => handleEditPost(post)} className="text-xs bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg flex items-center gap-1"><Edit3 size={12} /> Editar</button>
                            <button onClick={() => handleDeletePost(post.id)} className="text-xs text-rose-400 bg-rose-500/5 hover:bg-rose-500/10 px-3 py-1.5 rounded-lg flex items-center gap-1"><Trash2 size={12} /> Excluir</button>
                          </div>
                        </div>
                      </div>
                    ))}
                    {posts.length === 0 && <div className="col-span-full p-8 text-center text-gray-500">Nenhum artigo publicado.</div>}
                  </div>                </>              ) : (                <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
                  <h2 className="text-xl font-bold mb-6">{editingPost ? 'Editar Artigo' : 'Novo Artigo'}</h2>
                  
                  {/* AI Blog Assistant Panel */}
                  <div className="bg-gradient-to-br from-emerald-500/10 via-emerald-500/[0.02] to-transparent border border-emerald-500/20 p-5 rounded-2xl mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-5 h-5 text-emerald-400 animate-pulse shrink-0" />
                      <h3 className="text-sm font-bold text-white uppercase tracking-wider">Copiloto de Conteúdo IA</h3>
                    </div>
                    <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                      Digite o tema ou assunto desejado e clique em <b>Gerar Artigo</b> para redigir instantaneamente um título, slug amigável e conteúdo em Markdown otimizado para SEO e AEO. Em seguida, clique em <b>Gerar Capa com IA</b> para criar uma imagem exclusiva com Nano Banana.
                    </p>
                    
                    <div className="flex flex-col md:flex-row gap-3">
                      <input 
                        type="text" 
                        placeholder="Ex: Como integrar o WhatsApp API com o CRM para triplicar vendas"
                        value={aiPrompt}
                        onChange={(e) => setAiPrompt(e.target.value)}
                        className="flex-1 bg-white/5 border border-white/10 p-3 rounded-xl focus:border-[#33BC65] outline-none text-sm placeholder:text-gray-600 text-white"
                      />
                      <button
                        type="button"
                        disabled={generatingArticle || !aiPrompt.trim()}
                        onClick={handleGenerateArticleWithAI}
                        className="bg-[#33BC65] hover:opacity-95 disabled:opacity-50 text-black font-extrabold px-6 py-3 rounded-xl text-xs transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer"
                      >
                        {generatingArticle ? (
                          <>
                            <div className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                            <span>Escrevendo Artigo...</span>
                          </>
                        ) : (
                          <>
                            <Sparkles size={14} />
                            <span>Gerar Artigo com IA</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Image Generation Section */}
                    <div className="mt-4 pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="max-w-md">
                        <h4 className="text-xs font-bold text-gray-300">Design da Capa (Nano Banana)</h4>
                        <p className="text-[11px] text-gray-500 leading-normal">Crie uma arte digital 16:9 de alta fidelidade sincronizada com o título do artigo atual.</p>
                      </div>
                      <button
                        type="button"
                        disabled={generatingImage || !postTitle.trim()}
                        onClick={handleGenerateImageWithAI}
                        className="bg-white/5 hover:bg-white/10 border border-white/10 text-white disabled:opacity-40 font-semibold px-4 py-2.5 rounded-xl text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
                      >
                        {generatingImage ? (
                          <>
                            <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Gerando Arte...</span>
                          </>
                        ) : (
                          <>
                            <Upload size={14} className="text-emerald-400" />
                            <span>Gerar Capa com IA</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  <form onSubmit={handleSavePost} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-gray-400 mb-1 block">Título</label>
                        <input type="text" required value={postTitle} onChange={(e) => setPostTitle(e.target.value)} className="w-full bg-white/5 border border-white/10 p-3 rounded-xl focus:border-[#33BC65] outline-none text-sm" />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-gray-400 mb-1 block">Slug (URL)</label>
                        <input type="text" required value={postSlug} onChange={(e) => setPostSlug(e.target.value)} className="w-full bg-white/5 border border-white/10 p-3 rounded-xl focus:border-[#33BC65] outline-none text-sm font-mono" />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-400 mb-1 block">URL da Imagem de Capa</label>
                      <div className="flex gap-2">
                        <input type="url" value={postImage} onChange={(e) => setPostImage(e.target.value)} className="flex-1 bg-white/5 border border-white/10 p-3 rounded-xl focus:border-[#33BC65] outline-none text-sm" />
                        {postImage && (
                          <div className="w-12 h-12 rounded-lg overflow-hidden border border-white/10 shrink-0 bg-neutral-900">
                            <img src={postImage} alt="Capa" className="w-full h-full object-cover" />
                          </div>
                        )}
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-400 mb-1 block">Conteúdo (Markdown)</label>
                      <textarea required value={postContent} onChange={(e) => setPostContent(e.target.value)} className="w-full h-64 bg-white/5 border border-white/10 p-4 rounded-xl focus:border-[#33BC65] outline-none text-sm font-mono"></textarea>
                    </div>
                    <div className="flex justify-end gap-3 pt-4">
                      <button type="button" onClick={() => setIsBlogEditorOpen(false)} className="px-6 py-2 rounded-xl text-sm font-semibold bg-white/5 hover:bg-white/10">Cancelar</button>
                      <button type="submit" disabled={loading} className="px-6 py-2 rounded-xl text-sm font-bold bg-[#33BC65] text-black hover:opacity-90 disabled:opacity-50">
                        {loading ? 'Salvando...' : 'Salvar Artigo'}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          )}

          {/* ANALYTICS (Placeholder for brevity) */}
          {activeMenu === 'analytics' && (
            <div className="animate-fadeIn bg-white/[0.02] border border-white/5 p-8 rounded-2xl text-center">
              <BarChart3 size={48} className="mx-auto text-[#12DCEF] mb-4 opacity-50" />
              <h2 className="text-xl font-bold mb-2">Analytics & Performance</h2>
              <p className="text-gray-400">Módulo de monitoramento SEO e AEO em construção ou disponível via Google Search Console.</p>
            </div>
          )}

        </div>
      </main>

      {/* LEAD MODAL */}
      {isLeadModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-center items-center p-4">
          <div className="bg-[#0a0a0a] border border-white/10 w-full max-w-lg rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-6">{editingLead ? 'Editar Lead' : 'Novo Lead'}</h2>
            <form onSubmit={handleSaveLead} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-400 mb-1 block">Nome</label>
                  <input type="text" required value={leadName} onChange={(e) => setLeadName(e.target.value)} className="w-full bg-white/5 border border-white/10 p-3 rounded-xl focus:border-[#33BC65] outline-none text-sm" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-400 mb-1 block">Empresa</label>
                  <input type="text" required value={leadCompany} onChange={(e) => setLeadCompany(e.target.value)} className="w-full bg-white/5 border border-white/10 p-3 rounded-xl focus:border-[#33BC65] outline-none text-sm" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-400 mb-1 block">Email</label>
                  <input type="email" required value={leadEmail} onChange={(e) => setLeadEmail(e.target.value)} className="w-full bg-white/5 border border-white/10 p-3 rounded-xl focus:border-[#33BC65] outline-none text-sm" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-400 mb-1 block">Telefone</label>
                  <input type="text" value={leadPhone} onChange={(e) => setLeadPhone(e.target.value)} className="w-full bg-white/5 border border-white/10 p-3 rounded-xl focus:border-[#33BC65] outline-none text-sm" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-400 mb-1 block">Status</label>
                  <select value={leadStatus} onChange={(e) => setLeadStatus(e.target.value as any)} className="w-full bg-white/5 border border-white/10 p-3 rounded-xl focus:border-[#33BC65] outline-none text-sm">
                    <option value="new" className="bg-[#0a0a0a]">Novo</option>
                    <option value="contacted" className="bg-[#0a0a0a]">Contatado</option>
                    <option value="negotiation" className="bg-[#0a0a0a]">Em Negociação</option>
                    <option value="closed" className="bg-[#0a0a0a]">Fechado</option>
                    <option value="lost" className="bg-[#0a0a0a]">Perdido</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-400 mb-1 block">Valor Estimado (R$)</label>
                  <input type="number" value={leadValue} onChange={(e) => setLeadValue(Number(e.target.value))} className="w-full bg-white/5 border border-white/10 p-3 rounded-xl focus:border-[#33BC65] outline-none text-sm font-mono" />
                </div>
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <button type="button" onClick={() => setIsLeadModalOpen(false)} className="px-6 py-2 rounded-xl text-sm font-semibold bg-white/5 hover:bg-white/10">Cancelar</button>
                <button type="submit" disabled={loading} className="px-6 py-2 rounded-xl text-sm font-bold bg-[#33BC65] text-black hover:opacity-90 disabled:opacity-50">
                  {loading ? 'Salvando...' : 'Salvar Lead'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* PROJECT MODAL */}
      {isProjectModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-center items-center p-4">
          <div className="bg-[#0a0a0a] border border-white/10 w-full max-w-lg rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-6">{editingProject ? 'Editar Projeto' : 'Novo Projeto'}</h2>
            <form onSubmit={handleSaveProject} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="text-xs font-semibold text-gray-400 mb-1 block">Nome do Projeto</label>
                  <input type="text" required value={projectName} onChange={(e) => setProjectName(e.target.value)} className="w-full bg-white/5 border border-white/10 p-3 rounded-xl focus:border-[#33BC65] outline-none text-sm" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-400 mb-1 block">Cliente</label>
                  <input type="text" required value={projectClient} onChange={(e) => setProjectClient(e.target.value)} className="w-full bg-white/5 border border-white/10 p-3 rounded-xl focus:border-[#33BC65] outline-none text-sm" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-400 mb-1 block">Progresso (%)</label>
                  <input type="number" min="0" max="100" required value={projectProgress} onChange={(e) => setProjectProgress(Number(e.target.value))} className="w-full bg-white/5 border border-white/10 p-3 rounded-xl focus:border-[#33BC65] outline-none text-sm font-mono" />
                </div>
                <div className="col-span-2">
                  <label className="text-xs font-semibold text-gray-400 mb-1 block">Fase do Projeto</label>
                  <select value={projectStatus} onChange={(e) => setProjectStatus(e.target.value as any)} className="w-full bg-white/5 border border-white/10 p-3 rounded-xl focus:border-[#33BC65] outline-none text-sm">
                    <option value="planning" className="bg-[#0a0a0a]">Planejamento</option>
                    <option value="development" className="bg-[#0a0a0a]">Desenvolvimento</option>
                    <option value="review" className="bg-[#0a0a0a]">Revisão</option>
                    <option value="completed" className="bg-[#0a0a0a]">Concluído</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <button type="button" onClick={() => setIsProjectModalOpen(false)} className="px-6 py-2 rounded-xl text-sm font-semibold bg-white/5 hover:bg-white/10">Cancelar</button>
                <button type="submit" disabled={loading} className="px-6 py-2 rounded-xl text-sm font-bold bg-[#33BC65] text-black hover:opacity-90 disabled:opacity-50">
                  {loading ? 'Salvando...' : 'Salvar Projeto'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
