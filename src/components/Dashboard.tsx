import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { getPosts, addPost, updatePost, deletePost, Post } from '../lib/blog';
import { auth } from '../lib/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { VezzitechLogo } from './VezzitechLogo';
import { 
  PlusCircle, 
  FileText, 
  Trash2, 
  Edit3, 
  LogOut, 
  Home, 
  Sparkles, 
  Check, 
  AlertCircle, 
  Eye, 
  ChevronRight,
  Globe,
  Settings,
  Upload,
  Search
} from 'lucide-react';

export const Dashboard = () => {
  const [user, setUser] = useState(auth.currentUser);
  const [posts, setPosts] = useState<Post[]>([]);
  const [activeTab, setActiveTab] = useState<'manage' | 'editor'>('manage');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filtered posts based on search query
  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.slug.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Form State
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [content, setContent] = useState('');
  const [editorTab, setEditorTab] = useState<'write' | 'preview'>('write');
  const [imageSource, setImageSource] = useState<'upload' | 'url'>('upload');
  const [dragActive, setDragActive] = useState(false);
  
  // Status State
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

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
      const unsubscribePosts = getPosts(setPosts);
      return () => unsubscribePosts();
    }
  }, [user]);

  // Utility to auto-slugify
  const slugify = (text: string) => {
    return text
      .toString()
      .toLowerCase()
      .normalize('NFD') // splits accents into base letters
      .replace(/[\u0300-\u036f]/g, '') // removes accent marks
      .replace(/\s+/g, '-') // replaces spaces with hyphens
      .replace(/[^\w\-]+/g, '') // removes all non-word chars
      .replace(/\--+/g, '-') // replaces multiple hyphens
      .replace(/^-+/, '') // trims leading
      .replace(/-+$/, ''); // trims trailing
  };

  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!editingPost) {
      setSlug(slugify(val).substring(0, 200));
    }
  };

  const handleEditClick = (post: Post) => {
    setEditingPost(post);
    setTitle(post.title);
    setSlug(post.slug);
    setImageUrl(post.imageUrl || '');
    setContent(post.content);
    if (post.imageUrl && post.imageUrl.startsWith('data:')) {
      setImageSource('upload');
    } else {
      setImageSource('url');
    }
    setActiveTab('editor');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDeleteClick = async (postId: string) => {
    if (!window.confirm('Tem certeza que deseja excluir esta publicação definitivamente?')) {
      return;
    }
    
    try {
      await deletePost(postId);
      showStatus('success', 'Publicação removida com sucesso!');
    } catch (err: any) {
      showStatus('error', `Erro ao excluir: ${err.message || err}`);
    }
  };

  const showStatus = (type: 'success' | 'error', text: string) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 5000);
  };

  const handleNewPostClick = () => {
    setEditingPost(null);
    setTitle('');
    setSlug('');
    setImageUrl('');
    setContent('');
    setImageSource('upload');
    setActiveTab('editor');
  };

  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = '/login';
  };

  // Drag and Drop & Computer Upload handlers
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      processFile(file);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      processFile(file);
    }
  };

  const processFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      showStatus('error', 'Por favor, selecione apenas arquivos de imagem.');
      return;
    }
    // Max 3MB
    if (file.size > 3 * 1024 * 1024) {
      showStatus('error', 'A imagem é muito grande. Escolha uma imagem de até 3MB.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setImageUrl(event.target.result as string);
        showStatus('success', 'Imagem carregada com sucesso do computador!');
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth.currentUser) return;

    if (!title.trim() || !slug.trim() || !content.trim()) {
      showStatus('error', 'Por favor preencha os campos obrigatórios (Título, Slug e Conteúdo).');
      return;
    }

    setLoading(true);
    try {
      const payload = {
        title: title.trim(),
        slug: slugify(slug.trim()).substring(0, 200),
        content,
        imageUrl: imageUrl.trim() || '', // Safe empty string to reset the field, avoids undefined Firestore issue
        author: auth.currentUser.uid,
      };

      if (editingPost) {
        await updatePost(editingPost.id, payload);
        showStatus('success', 'Publicação atualizada com sucesso!');
      } else {
        await addPost(payload);
        showStatus('success', 'Nova publicação criada com sucesso!');
      }

      // Reset Form and return to manage
      setEditingPost(null);
      setTitle('');
      setSlug('');
      setImageUrl('');
      setContent('');
      setActiveTab('manage');
    } catch (err: any) {
      showStatus('error', `Erro ao salvar postagem: ${err.message || err}`);
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#070707] text-white">
        <p className="animate-pulse">Autenticando administrador...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070707] text-white font-sans pt-24">
      {/* Admin Top Menu */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#070707]/90 backdrop-blur-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between w-full">
          <div className="flex items-center gap-6">
            <VezzitechLogo className="text-[24px]" />
            <div className="hidden md:flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Painel Executivo
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:block text-xs text-gray-400 mr-2">
              <span className="text-white font-mono">{user.email}</span>
            </div>
            <a 
              href="/"
              className="flex items-center gap-2 text-gray-400 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <Globe size={16} /> <span className="hidden sm:inline">Ver Site</span>
            </a>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 text-rose-400 hover:text-rose-300 text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <LogOut size={16} /> <span className="hidden sm:inline">Sair</span>
            </button>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 pb-12">
        <div className="md:hidden flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20 w-fit mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Painel Executivo
        </div>

        {/* Stats Widget + Search */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
        <div className="sm:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Total de Artigos</p>
              <p className="text-3xl font-bold mt-1 text-white">{posts.length}</p>
            </div>
            <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400">
              <FileText size={24} />
            </div>
          </div>
          <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Status de SEO</p>
              <p className="text-md font-bold mt-1 text-emerald-400 flex items-center gap-1">
                <PlusCircle size={14} /> Ativo & Saudável
              </p>
            </div>
            <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400">
              <Globe size={24} />
            </div>
          </div>
          <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Banco de Dados</p>
              <p className="text-md font-bold mt-1 text-white font-mono text-xs">Cloud Firestore</p>
            </div>
            <div className="p-3 bg-amber-500/10 rounded-xl text-amber-400">
              <Settings size={24} />
            </div>
          </div>
        </div>
        
        {/* Search Input */}
        <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl flex flex-col justify-center">
          <label className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-2">Buscar Artigos</label>
          <div className="relative">
            <Search className="absolute left-3 top-3 text-gray-500" size={18} />
            <input 
              type="text" 
              placeholder="Título ou slug..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 py-2.5 pl-10 pr-4 rounded-xl text-sm text-white focus:border-[#33BC65] focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Toast Alert Status */}
      {message && (
        <div className={`p-4 rounded-xl border mb-6 flex items-center gap-3 animate-fadeIn ${
          message.type === 'success' 
            ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' 
            : 'bg-rose-500/10 border-rose-500/30 text-rose-300'
        }`}>
          {message.type === 'success' ? <Check size={20} /> : <AlertCircle size={20} />}
          <span className="text-sm font-medium leading-relaxed">{message.text}</span>
        </div>
      )}

      {/* Tabs Menu */}
      <div className="flex border-b border-white/10 mb-8 whitespace-nowrap overflow-x-auto">
        <button
          onClick={() => setActiveTab('manage')}
          className={`pb-4 px-6 font-semibold text-sm border-b-2 transition-all flex items-center gap-2 ${
            activeTab === 'manage' 
              ? 'border-[#33BC65] text-white' 
              : 'border-transparent text-gray-400 hover:text-white'
          }`}
        >
          <FileText size={16} /> Gerenciar Artigos
        </button>
        <button
          onClick={handleNewPostClick}
          className={`pb-4 px-6 font-semibold text-sm border-b-2 transition-all flex items-center gap-2 ${
            activeTab === 'editor' && !editingPost
              ? 'border-[#33BC65] text-white' 
              : activeTab === 'editor' && editingPost
              ? 'border-cyan-400 text-white'
              : 'border-transparent text-gray-400 hover:text-white'
          }`}
        >
          <PlusCircle size={16} /> 
          {editingPost ? `Editando: ${editingPost.title.substring(0, 15)}...` : 'Novo Artigo'}
        </button>
      </div>

      {/* Content views */}
      {activeTab === 'manage' ? (
        <div className="bg-white/[0.01] border border-white/5 rounded-2xl overflow-hidden shadow-xl animate-fadeIn">
          {filteredPosts.length === 0 ? (
            <div className="p-12 text-center text-gray-500 flex flex-col items-center justify-center">
              <FileText size={48} className="mb-4 text-white/20" />
              <p className="text-lg font-medium text-white">Nenhum artigo encontrado</p>
              <p className="text-sm text-gray-400 mt-1">Tente ajustar sua busca ou crie um novo artigo.</p>
              <button 
                onClick={handleNewPostClick}
                className="mt-6 bg-[#33BC65] text-black hover:opacity-90 font-bold px-6 py-2.5 rounded-xl text-sm transition-all flex items-center gap-2"
              >
                <PlusCircle size={16} /> Escrever Novo Post
              </button>
            </div>
          ) : (
            <div className="divide-y divide-white/5">
              {filteredPosts.map((post) => (
                <div key={post.id} className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:bg-white/[0.02] transition-colors">
                  <div className="flex gap-4 items-start max-w-2xl">
                    {post.imageUrl ? (
                      <img 
                        src={post.imageUrl} 
                        alt="" 
                        className="w-16 h-16 rounded-xl object-cover border border-white/10 shrink-0"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-500 shrink-0">
                        <FileText size={20} />
                      </div>
                    )}
                    <div>
                      <h3 className="font-bold text-lg text-white group-hover:text-[#33BC65] transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-xs text-mono text-gray-500 tracking-wider mt-1 font-mono">
                        URL Slug: <span className="text-cyan-400 bg-cyan-500/5 px-2 py-0.5 rounded border border-cyan-500/10">/{post.slug}</span>
                      </p>
                      <div className="flex flex-wrap gap-2 mt-2 items-center text-xs text-gray-400">
                        <span>Por Admin</span>
                        <span>•</span>
                        <span>{post.createdAt?.toDate ? new Date(post.createdAt.toDate()).toLocaleDateString('pt-BR') : 'Postado Recém'}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto shrink-0 justify-end">
                    <button
                      onClick={() => handleEditClick(post)}
                      className="flex items-center gap-1 bg-white/5 hover:bg-white/10 border border-white/10 p-2 sm:px-4 sm:py-2 rounded-xl text-sm transition-all hover:text-cyan-400"
                      title="Editar Artigo"
                    >
                      <Edit3 size={15} /> <span className="hidden sm:inline">Editar</span>
                    </button>
                    <button
                      onClick={() => handleDeleteClick(post.id)}
                      className="flex items-center gap-1 bg-rose-500/5 hover:bg-rose-500/20 border border-rose-500/10 hover:border-rose-500/30 p-2 sm:px-4 sm:py-2 rounded-xl text-sm transition-all text-rose-400"
                      title="Apagar Artigo"
                    >
                      <Trash2 size={15} /> <span className="hidden sm:inline">Excluir</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fadeIn">
          {/* Main Form Fields */}
          <div className="lg:col-span-2 space-y-6">
            <form onSubmit={handleSubmit} className="bg-white/[0.01] border border-white/10 p-6 sm:p-8 rounded-2xl relative shadow-2xl">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Sparkles size={18} className="text-[#33BC65]" />
                {editingPost ? 'Editar Publicação' : 'Nova Publicação Inteligente'}
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wide">Título da Postagem <span className="text-rose-400">*</span></label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Por que sua empresa deve investir no Vertex AI"
                    value={title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 p-3 rounded-xl focus:border-[#33BC65] focus:outline-none transition-colors text-white"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1.5 ">
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wide">Slug Amigável (SEO URL) <span className="text-rose-400">*</span></label>
                    <span className="text-[10px] text-gray-500 font-mono">Será higienizado automaticamente</span>
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Ex: vertex-ai-ia-generativa"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 p-3 rounded-xl focus:border-[#33BC65] focus:outline-none transition-colors text-white font-mono text-sm text-cyan-400"
                  />
                </div>

                {/* Image Upload/Link section */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wide">Imagem de Capa (Opcional)</label>
                    
                    {/* Source Tab Pickers */}
                    <div className="flex border border-white/10 rounded-lg overflow-hidden bg-white/5 text-xs">
                      <button
                        type="button"
                        onClick={() => {
                          setImageSource('upload');
                          setImageUrl('');
                        }}
                        className={`px-3 py-1.5 font-medium transition-colors ${imageSource === 'upload' ? 'bg-[#33BC65] text-black font-bold' : 'text-gray-400 hover:text-white'}`}
                      >
                        Do computador
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setImageSource('url');
                          setImageUrl('');
                        }}
                        className={`px-3 py-1.5 font-medium transition-colors ${imageSource === 'url' ? 'bg-[#33BC65] text-black font-bold' : 'text-gray-400 hover:text-white'}`}
                      >
                        Link da Internet
                      </button>
                    </div>
                  </div>

                  {imageSource === 'upload' ? (
                    <div 
                      onDragEnter={handleDrag}
                      onDragOver={handleDrag}
                      onDragLeave={handleDrag}
                      onDrop={handleDrop}
                      className={`relative border-2 border-dashed rounded-2xl p-6 transition-all flex flex-col items-center justify-center min-h-[160px] text-center ${
                        dragActive 
                          ? 'border-[#12DCEF] bg-[#12DCEF]/5' 
                          : imageUrl && imageUrl.startsWith('data:')
                          ? 'border-[#33BC65]/40 bg-[#33BC65]/5'
                          : 'border-white/15 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/30'
                      }`}
                    >
                      <input 
                        type="file" 
                        id="computer-file-upload"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                      />

                      {imageUrl && imageUrl.startsWith('data:') ? (
                        <div className="space-y-3 w-full max-w-sm flex flex-col items-center">
                          <img 
                            src={imageUrl} 
                            alt="Preview" 
                            className="w-32 h-20 rounded-xl object-cover border border-white/10 shadow"
                          />
                          <div className="text-center">
                            <p className="text-xs text-emerald-300 font-medium">Imagem carregada com sucesso!</p>
                            <button
                              type="button"
                              onClick={() => setImageUrl('')}
                              className="mt-2 text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1 mx-auto"
                            >
                              <Trash2 size={12} /> Remover Imagem
                            </button>
                          </div>
                        </div>
                      ) : (
                        <label 
                          htmlFor="computer-file-upload" 
                          className="cursor-pointer flex flex-col items-center justify-center space-y-2 group w-full h-full py-4 text-gray-400 hover:text-white active:scale-[0.99] transition-all"
                        >
                          <div className="p-3 bg-white/5 rounded-full border border-white/5 group-hover:border-white/10 group-hover:bg-white/10 transition-all text-[#33BC65]">
                            <Upload size={24} />
                          </div>
                          <div className="text-sm font-medium">
                            <span className="text-[#33BC65] font-semibold">Arraste e solte</span> ou <span className="text-[#12DCEF] font-semibold">clique para carregar</span>
                          </div>
                          <p className="text-[11px] text-gray-500 font-medium">Aceita imagens PNG, JPEG ou WEBP de até 3MB</p>
                        </label>
                      )}
                    </div>
                  ) : (
                    <div>
                      <input
                        type="url"
                        placeholder="Cole a URL de uma imagem de alta resolução (Ex: https://images.unsplash.com/...)"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 p-3 rounded-xl focus:border-[#33BC65] focus:outline-none transition-colors text-white text-sm font-mono"
                      />
                      <p className="text-[10px] text-gray-500 mt-1">Insira um link HTTP/HTTPS direto até o arquivo de imagem.</p>
                    </div>
                  )}
                </div>

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wide">Conteúdo do Post (Markdown) <span className="text-rose-400">*</span></label>
                    
                    <div className="flex border border-white/15 rounded-lg overflow-hidden bg-white/5 text-xs">
                      <button
                        type="button"
                        onClick={() => setEditorTab('write')}
                        className={`px-3 py-1.5 font-medium transition-colors ${editorTab === 'write' ? 'bg-[#33BC65] text-black font-bold' : 'text-gray-400 hover:text-white'}`}
                      >
                        Escrever
                      </button>
                      <button
                        type="button"
                        onClick={() => setEditorTab('preview')}
                        className={`px-3 py-1.5 font-medium transition-colors ${editorTab === 'preview' ? 'bg-[#33BC65] text-black font-bold' : 'text-gray-400 hover:text-white'}`}
                      >
                        Visualizar
                      </button>
                    </div>
                  </div>

                  {editorTab === 'write' ? (
                    <textarea
                      required
                      placeholder="Use estrutura em Markdown para formatar títulos, listas, textos em negrito e links corporativos de forma profissional..."
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      className="w-full h-80 bg-white/5 border border-white/10 p-4 rounded-xl focus:border-[#33BC65] focus:outline-none transition-colors text-white font-mono text-sm leading-relaxed"
                    />
                  ) : (
                    <div className="w-full h-80 overflow-y-auto bg-white/[0.02] border border-white/10 p-4 rounded-xl prose prose-invert prose-sm max-w-none text-gray-300 scrollbar-thin">
                      {content.trim() ? (
                        <ReactMarkdown>{content}</ReactMarkdown>
                      ) : (
                        <p className="text-gray-500 italic text-center py-12">Escreva algo no editor para visualizar a prévia aqui.</p>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-8 pt-4 border-t border-white/5">
                <button
                  type="button"
                  onClick={() => setActiveTab('manage')}
                  className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[linear-gradient(135deg,#33BC65_0%,#12DCEF_100%)] hover:opacity-95 active:scale-[0.98] text-black font-extrabold px-8 py-3 rounded-xl text-sm transition-all tracking-wider disabled:opacity-50"
                >
                  {loading ? 'Salvando...' : editingPost ? 'SALVAR ALTERAÇÕES' : 'PUBLICAR ARTIGO'}
                </button>
              </div>
            </form>
          </div>

          {/* Right Panel - SEO Optimization Helpers */}
          <div className="space-y-6">
            <div className="bg-white/[0.01] border border-white/10 p-6 rounded-2xl relative">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-3">
                <Sparkles size={14} /> Dicas do Especialista
              </div>
              <h3 className="text-lg font-bold mb-4">Garantindo SEO Perfeito</h3>
              <ul className="space-y-3.5 text-sm text-gray-400 tracking-wide">
                <li className="flex items-start gap-2.5">
                  <ChevronRight size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>Use **Parágrafos Curtos** e títulos h2/h3 para facilitar a leitura no Google Reader e bots.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ChevronRight size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>Insira a **Palavra-chave principal** no início do título e no primeiro parágrafo do artigo.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ChevronRight size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>**Immagens de Capa**: Use imagens com boa proporção (Ex: 1200x630px para correta renderização em redes sociais).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ChevronRight size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>Os slugs são gerados automaticamente, sem acentos, caracteres especiais ou espaços, mantendo a URL 100% limpa.</span>
                </li>
              </ul>
            </div>

            {imageUrl && (
              <div className="bg-white/[0.01] border border-white/10 p-6 rounded-2xl">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-3">Prévia da imagem de capa</h4>
                <img 
                  src={imageUrl} 
                  alt="Previsualização" 
                  className="w-full aspect-video rounded-xl object-cover border border-white/10 shadow-lg"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            )}
          </div>
        </div>
      )}
      </main>
    </div>
  );
};
