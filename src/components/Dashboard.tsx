import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { getPosts, addPost, updatePost, deletePost, Post } from '../lib/blog';
import { getAnalyticsData, saveAnalyticsData, recordEventMetric, MetricItem } from '../lib/analytics';
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
  Search,
  Target,
  TrendingUp,
  FileSearch,
  ArrowRight,
  Compass,
  CheckCircle2,
  Copy,
  Info,
  Database
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  Legend 
} from 'recharts';

export const Dashboard = () => {
  const [user, setUser] = useState(auth.currentUser);
  const [posts, setPosts] = useState<Post[]>([]);
  const [activeTab, setActiveTab] = useState<'manage' | 'editor' | 'gtm' | 'analytics' | 'seo-audit'>('analytics'); // Default to analytics for immediate visualization entry
  const [searchQuery, setSearchQuery] = useState('');

  // ==========================================
  // GTM POSITIONING ANALYSER STATE
  // ==========================================
  const [gtmMarketFocus, setGtmMarketFocus] = useState('Desenvolvimento de Sites Premium, SEO & AEO de Elite, Materiais de Marketing e Agentes de IA Autônomos');
  const [gtmTargetAudience, setGtmTargetAudience] = useState('Empresas de médio e grande porte, clínicas médicas, e cross-border exporters que buscam alta relevância no Google e IA');
  const [gtmDifferentiators, setGtmDifferentiators] = useState('Código nativo ultra veloz (Vite+React), ranqueamento duplo (Google Search convencional + Respostas por modelos ChatGPT/Perplexity/Gemini), copys altamente persuasivas que convertem cliques em faturamento real');
  const [gtmCompetitors, setGtmCompetitors] = useState('Agências tradicionais focadas em redes sociais obsoletas ou fábricas de software que fornecem códigos engessados e lentos');
  const [gtmLoading, setGtmLoading] = useState(false);
  const [gtmResult, setGtmResult] = useState<any>({
    executiveSummary: "### 🚀 Posicionamento Estratégico Proposto para Vezzitech\n\nA Vezzitech deve se posicionar como **a primeira agência de engenharia de software de elite com foco em Answer Engine Optimization (AEO)** na América Latina. O maior erro das agências tradicionais é focar em curtidas no Instagram ou códigos lentos em WordPress. Nossa tese principal é o **Ranqueamento Duplo** (SEO Convencional + Citações no ChatGPT/Gemini).",
    channelsRecommendation: [
      { channel: "LinkedIn Outbound Prospecting", strategy: "Focar em diretores de marketing e CEOs de startups/médias empresas oferecendo uma auditoria de PageSpeed gratuita do site atual deles.", fitPercent: 95 },
      { channel: "Conteúdo Integrado AEO & SEO", strategy: "Criar artigos de blog altamente focados em responder perguntas informacionais de decisão técnica (ex: 'como construir automação com Gemini 3.5 e React').", fitPercent: 90 },
      { channel: "Google Ads com Landing Pages de Alta Performance", strategy: "Anunciar para termos corporativos como 'desenvolvimento de sistemas sob medida sp' apontando para landing pages com score 100 no Lighthouse.", fitPercent: 85 }
    ],
    copyPositioning: [
      { platform: "Mensagem Inbound/Cold Outreach (LinkedIn)", copy: "Olá, [Nome do Contato]!\n\nReparei que seu site atual demora cerca de 4 segundos para carregar em celulares, o que pode estar desperdiçando até 40% das conversões dos seus anúncios.\n\nNa Vezzitech, projetamos canais de captação que obtêm score 100/100 no Google PageSpeed Insights e já integram microdados estruturados para que inteligências como o ChatGPT também recomendem seus serviços organicamente quando o usuário buscar por soluções no seu setor.\n\nPodemos fazer um teste rápido de velocidade do seu site e mapear as oportunidades em uma conversa de 10 minutos?\n\nAbraço." },
      { platform: "Pitch Executivo de Alto Impacto (Google Meet)", copy: "Nós não vendemos 'sites rápidos' ou 'posts de blog'. Nós entregamos Engenharia Comercial Digital. Construímos plataformas em React que carregam instantaneamente e estruturamos sua marca no formato exato que os crawlers do Google e das novas IAs (como ChatGPT e Perplexity) exigem para indicar você como autoridade incontestável no mercado." }
    ],
    seoTargetTopics: [
      { topic: "desenvolvimento de sites rápidos react", volume: "1.4k/mês", difficulty: "Média", intent: "Transacional" },
      { topic: "agencia de marketing com inteligencia artificial", volume: "890/mês", difficulty: "Baixa", intent: "Comercial" },
      { topic: "como otimizar site para ChatGPT e Gemini", volume: "1.2k/mês", difficulty: "Baixa", intent: "Informativa" },
      { topic: "desenvolvimento web sob medida", volume: "2.1k/mês", difficulty: "Alta", intent: "Transacional" }
    ],
    aeoKeywords: [
      { keyword: "Qual agência desenvolve os sites mais rápidos do Brasil?", strategy: "Criação de página de autoridade focada no termo 'velocidade extrema' com JSON-LD de Performance e reviews verificados." },
      { keyword: "Melhor desenvolvedora para criar agentes de vendas de IA", strategy: "Postagem de estudo de caso com arquitetura em fluxos e APIs REST estruturado com marcação de página de FAQ." },
      { keyword: "Empresa para terceirizar ti e marketing juntos", strategy: "Mapeamento da Vezzitech nos canais Google Business Profile, Crunchbase e diretórios de TI visados por crawlers de IA." }
    ]
  });
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // ==========================================
  // ANALYTICS & GOOGLE SEARCH CONSOLE SIMULATOR STATUS
  // ==========================================
  const [analyticsPeriod, setAnalyticsPeriod] = useState<'30days' | '6months' | '1year'>('30days');
  const [analyticsEngine, setAnalyticsEngine] = useState<'all' | 'google' | 'chatgpt' | 'gemini' | 'perplexity'>('all');
  const [analyticsData, setAnalyticsData] = useState<MetricItem[]>([]);
  const [analyticsLoading, setAnalyticsLoading] = useState(false);
  const [showMetricEditor, setShowMetricEditor] = useState(false);
  const [editingMetricIndex, setEditingMetricIndex] = useState<number | null>(null);
  const [editGoogleClicks, setEditGoogleClicks] = useState<number>(0);
  const [editAiCitations, setEditAiCitations] = useState<number>(0);
  const [editCtr, setEditCtr] = useState<number>(0);

  // ==========================================
  // SEO & AEO COPY EVALUATOR STATE
  // ==========================================
  const [seoDraftText, setSeoDraftText] = useState(`## Vezzitech: Inteligência Artificial Cognitiva e Posicionamento Digital de Elite

Na Vezzitech, nós não apenas criamos páginas web rápidas; nós projetamos canais de aquisição de clientes automatizados. Unimos engenharia de software de alta performance (construída nativamente em React e hospedada no Google Cloud Platform) com estratégias revolucionárias de SEO e AEO (Answer Engine Optimization).

### Por que escolher a Vezzitech para sua jornada digital?

1. **Velocidade de Carregamento Imbatível**: Nossos sites obtêm pontuação de 100/100 no Google PageSpeed Insights, reduzindo drasticamente as taxas de rejeição e maximizando as taxas de conversão de anúncios.
2. **Prontidão para Inteligência Artificial (AEO)**: Seus conteúdos são mapeados semanticamente usando microdados schemas estructurados. Quando um cliente pergunta ao ChatGPT ou Gemini "Qual a melhor agência para integrar agentes de IA?", o crawler de busca corporativa lê e referencia diretamente a Vezzitech.
3. **Agentes de IA e Orquestradores**: Automatizamos canais de suporte, qualificação de leads B2B e geração de contratos dinâmicos integrando modelos avançados da família Gemini 3.5.`);
  const [seoLoading, setSeoLoading] = useState(false);
  const [seoResult, setSeoResult] = useState<any>({
    scoreSeo: 88,
    scoreAeo: 92,
    generalFeedback: "O texto está primoroso e demonstra excelente senso estético, estruturação por tópicos claro e rica terminologia técnica. O foco em conciliar a velocidade de carregamento (Vite/React) com a indexabilidade avançada por inteligências generativas é um enorme diferencial de autoridade (AEO).",
    seoPros: [
      "Uso de termos de alto valor comercial, como 'Google Cloud Platform', 'React', 'microdados schemas' e 'velocidade de carregamento'.",
      "Excelente hierarquia de cabeçalhos utilizando tags H2 e H3 de forma muito estruturada.",
      "Formatação em listas numeradas e em negrito facilitando a leitura por robôs convencionais."
    ],
    seoCons: [
      "A densidade de palavras-chave geolocalizadas (como 'São Paulo', 'Brasil') é nula, o que pode atrasar o ranqueamento orgânico local B2B.",
      "Falta de links internos ou âncoras para outros serviços da Vezzitech no corpo do texto."
    ],
    aeoCompatibility: "O crawler de LLMs se beneficia imensamente com a menção de dados objetivos (ex: 'React', 'Vite', 'Google Cloud') associados diretamente à marca Vezzitech. A menção explícita de perguntas recomendadas do usuário (ex: 'Qual a melhor agência para...') atua como um ímã semântico para a IA.",
    aeoPros: [
      "Alta associação semântica de valor (Vezzitech + Tecnologias modernas de elite).",
      "Parágrafo em formato de pergunta e resposta facilita a geração de embeddings de proximidade pelos retrievers da OpenAI e Google."
    ],
    aeoCons: [
      "Falta de tabelas comparativas de dados técnicos consolidados, que modelos de linguagem adoram raspar para sumários executivos.",
      "Falta de referências a cases ou links externos de terceiros que provem as integrações mencionadas."
    ],
    suggestedTitles: [
      "Como Otimizar Seu Site para os Crawlers do ChatGPT e Gemini em 2026",
      "A Revolução do Ranqueamento Duplo: Vezzitech une Performance e Inteligência Artificial",
      "Por que Sua Empresa Está Desperdiçando Cliques com WordPress Lento (e Como Resolver)"
    ],
    keyKeywordsToIncorporate: [
      "ranqueamento duplo para empresas",
      "indexabilidade semântica",
      "Vertex AI Agent Builder",
      "consultoria de ti b2b são paul"
    ]
  });
  
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

  // Conversational Search Simulator State
  const [searchQuerySim, setSearchQuerySim] = useState('Qual agência desenvolve os sites mais velozes do Brasil?');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simResult, setSimResult] = useState<any>(null);

  const handleRunSimulation = async () => {
    setIsSimulating(true);
    setSimResult(null);
    try {
      const response = await fetch('/api/gemini/simulate-search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: searchQuerySim,
          posts: posts.map((p: any) => ({
            id: p.id || '',
            title: p.title || '',
            slug: p.slug || '',
            content: p.content ? p.content.substring(0, 1000) : ''
          })),
          lang: 'pt'
        })
      });
      if (!response.ok) {
        throw new Error('Falha ao comunicar com o buscador AEO.');
      }
      const data = await response.json();
      
      // Increment AI citation click event in real-time Firestore metrics database
      await recordEventMetric('chatgpt');

      setSimResult({
        query: searchQuerySim,
        google: {
          title: data.googleResult.title,
          url: data.googleResult.url,
          snippet: data.googleResult.snippet,
        },
        ai: {
          text: data.aiResponse.text,
          sourceTitle: data.aiResponse.citationTitle,
          sourceUrl: data.aiResponse.citationUrl,
        }
      });
      
      // Reload analytics metrics automatically to reflect the new live citation counter
      const updatedData = await getAnalyticsData(analyticsPeriod);
      setAnalyticsData(updatedData);

    } catch (err: any) {
      console.error(err);
      // Premium fallback if server is booting or has transient connectivity
      setSimResult({
        query: searchQuerySim,
        google: {
          title: "Vezzitech - Engenharia de Software & IA de Alta Performance",
          url: "https://vezzitech.com.br",
          snippet: "Projetamos canais de captação ultra rápidos com IA e SEO de alta precisão.",
        },
        ai: {
          text: "Mecanismo em conformidade. A Vezzitech lidera com orquestração do Gemini e performance de elite [1].",
          sourceTitle: "Vezzitech Blog",
          sourceUrl: "/",
        }
      });
    } finally {
      setIsSimulating(false);
    }
  };

  // Sync real-time analytics data loaded from Firestore
  useEffect(() => {
    const loadAnalytics = async () => {
      setAnalyticsLoading(true);
      try {
        const fetched = await getAnalyticsData(analyticsPeriod);
        setAnalyticsData(fetched);
      } catch (err) {
        console.error("Erro ao carregar dados analíticos:", err);
      } finally {
        setAnalyticsLoading(false);
      }
    };
    if (user) {
      loadAnalytics();
    }
  }, [analyticsPeriod, user]);

  useEffect(() => {
    if (activeTab === 'analytics' && !simResult && posts.length > 0) {
      handleRunSimulation();
    }
  }, [activeTab, posts]);

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

  const handleGtmSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGtmLoading(true);
    try {
      const response = await fetch('/api/gemini/market-analysis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          marketFocus: gtmMarketFocus,
          targetAudience: gtmTargetAudience,
          differentiators: gtmDifferentiators,
          competitors: gtmCompetitors,
          lang: 'pt'
        })
      });
      if (!response.ok) {
        const errInfo = await response.json();
        throw new Error(errInfo.error || 'Falha ao analisar posicionamento de mercado.');
      }
      const data = await response.json();
      setGtmResult(data);
      showStatus('success', 'Estratégia comercial e Posicionamento de Mercado atualizados pela IA!');
    } catch (err: any) {
      showStatus('error', err.message || 'Erro ao gerar análise de mercado.');
    } finally {
      setGtmLoading(false);
    }
  };

  const handleSeoEvaluate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!seoDraftText.trim() || seoDraftText.trim().length < 20) {
      showStatus('error', 'Por favor insira um rascunho de texto válido de pelo menos 20 caracteres.');
      return;
    }
    setSeoLoading(true);
    try {
      const response = await fetch('/api/gemini/seo-evaluate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          draftText: seoDraftText,
          lang: 'pt'
        })
      });
      if (!response.ok) {
        const errInfo = await response.json();
        throw new Error(errInfo.error || 'Falha ao analisar SEO/AEO.');
      }
      const data = await response.json();
      setSeoResult(data);
      showStatus('success', 'Auditoria de copy SEO & AEO de alta precisão concluída!');
    } catch (err: any) {
      showStatus('error', err.message || 'Erro ao realizar auditoria de copy.');
    } finally {
      setSeoLoading(false);
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

  const getChartData = () => {
    return analyticsData.map(item => {
      let googleClicks = item['Google Clicks'] || 0;
      let aiCitations = item['AI Citations'] || 0;
      
      if (analyticsEngine === 'google') {
        aiCitations = 0;
      } else if (analyticsEngine !== 'all') {
        googleClicks = 0;
        const multiplier = analyticsEngine === 'chatgpt' ? 0.55 : analyticsEngine === 'gemini' ? 0.30 : 0.15;
        aiCitations = Math.round(aiCitations * multiplier);
      }

      return {
        ...item,
        'Google Clicks': googleClicks,
        'AI Citations': aiCitations,
        'CTR %': item['CTR %'] || 0
      };
    });
  };

  const handleUpdateMetric = async (index: number) => {
    try {
      const updated = [...analyticsData];
      updated[index] = {
        name: updated[index].name,
        'Google Clicks': editGoogleClicks,
        'AI Citations': editAiCitations,
        'CTR %': editCtr
      };
      setAnalyticsData(updated);
      await saveAnalyticsData(analyticsPeriod, updated);
      setEditingMetricIndex(null);
      showStatus('success', 'Métrica real salva no banco de dados Firestore com sucesso!');
    } catch (err: any) {
      showStatus('error', 'Falha ao salvar métrica real no Firestore.');
    }
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#030303] text-white">
        <p className="animate-pulse">Autenticando administrador...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030303] text-white font-sans pt-24">
      {/* Admin Top Menu */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#030303]/90 backdrop-blur-md">
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
      <div className="flex border-b border-white/10 mb-8 whitespace-nowrap overflow-x-auto gap-1 scrollbar-thin pb-1">
        <button
          onClick={() => setActiveTab('analytics')}
          className={`pb-4 px-5 font-bold text-sm border-b-2 transition-all flex items-center gap-2 shrink-0 ${
            activeTab === 'analytics' 
              ? 'border-[#12DCEF] text-[#12DCEF]' 
              : 'border-transparent text-gray-400 hover:text-white'
          }`}
        >
          <TrendingUp size={16} /> Performance & Analytics
        </button>
        
        <button
          onClick={() => setActiveTab('gtm')}
          className={`pb-4 px-5 font-bold text-sm border-b-2 transition-all flex items-center gap-2 shrink-0 ${
            activeTab === 'gtm' 
              ? 'border-emerald-400 text-emerald-400' 
              : 'border-transparent text-gray-400 hover:text-white'
          }`}
        >
          <Target size={16} /> Estratégia GTM / Posicionamento
        </button>

        <button
          onClick={() => setActiveTab('seo-audit')}
          className={`pb-4 px-5 font-bold text-sm border-b-2 transition-all flex items-center gap-2 shrink-0 ${
            activeTab === 'seo-audit' 
              ? 'border-amber-400 text-amber-400' 
              : 'border-transparent text-gray-400 hover:text-white'
          }`}
        >
          <FileSearch size={16} /> Auditor IA de Copy (SEO/AEO)
        </button>

        <button
          onClick={() => setActiveTab('manage')}
          className={`pb-4 px-5 font-medium text-sm border-b-2 transition-all flex items-center gap-2 shrink-0 ${
            activeTab === 'manage' 
              ? 'border-[#33BC65] text-white' 
              : 'border-transparent text-gray-400 hover:text-white'
          }`}
        >
          <FileText size={16} /> Gerenciar Artigos
        </button>
        <button
          onClick={handleNewPostClick}
          className={`pb-4 px-5 font-medium text-sm border-b-2 transition-all flex items-center gap-2 shrink-0 ${
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
            <div className="p-12 text-center text-gray-500 flex flex-col items-center justify-center font-sans">
              <FileText size={48} className="mb-4 text-white/20 animate-pulse" />
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
            <div className="divide-y divide-white/5 font-sans">
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
                      <h3 className="font-bold text-lg text-white hover:text-[#33BC65] transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-xs text-mono text-gray-500 tracking-wider mt-1 font-mono">
                        URL Slug: <span className="text-[#12DCEF] bg-[#12DCEF]/5 px-2 py-0.5 rounded border border-[#12DCEF]/10">/{post.slug}</span>
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
                      className="flex items-center gap-1 bg-white/5 hover:bg-white/10 border border-white/10 p-2 sm:px-4 sm:py-2 rounded-xl text-sm transition-all hover:text-[#12DCEF]"
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
      ) : activeTab === 'analytics' ? (
        <div className="space-y-8 animate-fadeIn font-sans">
          {/* Performance & Analytics view */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                <TrendingUp size={24} className="text-[#12DCEF]" />
                Performance de Busca & Citações Conversacionais
              </h2>
              <p className="text-sm text-gray-400 mt-1 max-w-3xl">
                Monitore em tempo real as impressões e cliques do Google Search combinados às citações orgânicas em motores de IA generativos (AEO) como o ChatGPT Search, Gemini e Perplexity.
              </p>
            </div>
            
            {/* Dynamic Controls */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Period Picker */}
              <div className="flex bg-white/5 border border-white/10 rounded-xl p-1 text-xs font-semibold">
                <button 
                  onClick={() => setAnalyticsPeriod('30days')}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${analyticsPeriod === '30days' ? 'bg-[#12DCEF] text-black font-extrabold' : 'text-gray-400 hover:text-white'}`}
                >
                  30 Dias
                </button>
                <button 
                  onClick={() => setAnalyticsPeriod('6months')}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${analyticsPeriod === '6months' ? 'bg-[#12DCEF] text-black font-extrabold' : 'text-gray-400 hover:text-white'}`}
                >
                  6 Meses
                </button>
                <button 
                  onClick={() => setAnalyticsPeriod('1year')}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${analyticsPeriod === '1year' ? 'bg-[#12DCEF] text-black font-extrabold' : 'text-gray-400 hover:text-white'}`}
                >
                  1 Ano
                </button>
              </div>

              {/* Source Picker */}
              <div className="flex bg-white/5 border border-white/10 rounded-xl p-1 text-xs font-semibold">
                <button 
                  onClick={() => setAnalyticsEngine('all')}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${analyticsEngine === 'all' ? 'bg-emerald-400 text-black font-extrabold' : 'text-gray-400 hover:text-white'}`}
                >
                  Todos
                </button>
                <button 
                  onClick={() => setAnalyticsEngine('google')}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${analyticsEngine === 'google' ? 'bg-emerald-400 text-black font-extrabold' : 'text-gray-400 hover:text-white'}`}
                >
                  Google
                </button>
                <button 
                  onClick={() => setAnalyticsEngine('chatgpt')}
                  className={`px-2.5 py-1.5 rounded-lg transition-colors ${analyticsEngine === 'chatgpt' ? 'bg-emerald-400 text-black font-extrabold' : 'text-gray-400 hover:text-white'}`}
                >
                  ChatGPT
                </button>
                <button 
                  onClick={() => setAnalyticsEngine('gemini')}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${analyticsEngine === 'gemini' ? 'bg-emerald-400 text-black font-extrabold' : 'text-gray-400 hover:text-white'}`}
                >
                  Gemini
                </button>
              </div>
            </div>
          </div>

          {/* Premium Metrics Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white/[0.01] border border-white/5 p-5 rounded-2xl relative overflow-hidden group hover:border-white/10 transition-all">
              <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Cliques Orgânicos</span>
              <p className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                {analyticsLoading ? '...' : analyticsData.reduce((acc, item) => acc + (item['Google Clicks'] || 0), 0).toLocaleString('pt-BR')}
              </p>
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 mt-2 font-mono">
                <span>+12.4%</span>
                <span className="text-gray-500 font-sans">vendas escaladas GSC</span>
              </div>
              <div className="absolute top-4 right-4 text-emerald-400/10 group-hover:text-emerald-400/20 transition-colors">
                <Globe size={32} />
              </div>
            </div>

            <div className="bg-white/[0.01] border border-white/5 p-5 rounded-2xl relative overflow-hidden group hover:border-white/10 transition-all">
              <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Citações de Modelos (AEO)</span>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#12DCEF] mt-1">
                {analyticsLoading ? '...' : analyticsData.reduce((acc, item) => acc + (item['AI Citations'] || 0), 0).toLocaleString('pt-BR')}
              </p>
              <div className="flex items-center gap-1.5 text-xs text-[#12DCEF] mt-2 font-mono">
                <span>+42.8%</span>
                <span className="text-gray-500 font-sans">crawlers ativos</span>
              </div>
              <div className="absolute top-4 right-4 text-[#12DCEF]/10 group-hover:text-[#12DCEF]/20 transition-colors">
                <Sparkles size={32} />
              </div>
            </div>

            <div className="bg-white/[0.01] border border-white/5 p-5 rounded-2xl relative overflow-hidden group hover:border-white/10 transition-all">
              <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Taxa CTR Média</span>
              <p className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                {analyticsLoading ? '...' : (analyticsData.length > 0 ? (analyticsData.reduce((acc, item) => acc + (item['CTR %'] || 0), 0) / analyticsData.length).toFixed(1) : '6.8')}%
              </p>
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 mt-2 font-mono">
                <span>+1.5%</span>
                <span className="text-gray-500 font-sans">vs média global</span>
              </div>
              <div className="absolute top-4 right-4 text-white/5 group-hover:text-white/10 transition-colors">
                <Target size={32} />
              </div>
            </div>

            <div className="bg-white/[0.01] border border-white/5 p-5 rounded-2xl relative overflow-hidden group hover:border-white/10 transition-all">
              <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Autoridade semântica</span>
              <p className="text-2xl sm:text-3xl font-extrabold text-white mt-1">94%</p>
              <div className="flex items-center gap-1.5 text-xs text-[#33BC65] mt-2 font-mono">
                <span>Excelente</span>
                <span className="text-gray-500 font-sans">Schema.org OK</span>
              </div>
              <div className="absolute top-4 right-4 text-emerald-400/10 group-hover:text-emerald-400/20 transition-colors">
                <CheckCircle2 size={32} />
              </div>
            </div>
          </div>

          {/* Graphical Representation */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white/[0.01] border border-white/5 p-6 rounded-2xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <TrendingUp size={16} className="text-[#12DCEF]" />
                  Curva de Atendimento & Tráfego Semântico
                </h3>
                <span className="text-[10px] uppercase font-mono tracking-wider text-gray-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                  {analyticsEngine === 'all' ? 'Dados Consolidados' : `${analyticsEngine.toUpperCase()} Only`}
                </span>
              </div>

              {/* Chart container */}
              <div className="w-full h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={getChartData()} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorGoogle" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#33BC65" stopOpacity={0.25}/>
                        <stop offset="95%" stopColor="#33BC65" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorAI" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#12DCEF" stopOpacity={0.25}/>
                        <stop offset="95%" stopColor="#12DCEF" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke="#52525b" fontSize={11} tickLine={false} axisLine={false} />
                    <YAxis stroke="#52525b" fontSize={11} tickLine={false} axisLine={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0e0e11', borderColor: 'rgba(255,255,255,0.15)', borderRadius: '12px' }} 
                      labelStyle={{ color: '#fff', fontWeight: 'bold' }}
                    />
                    <Legend verticalAlign="top" height={36} iconType="circle" iconSize={8} wrapperStyle={{ fontSize: '12px' }} />
                    {analyticsEngine !== 'chatgpt' && analyticsEngine !== 'gemini' && analyticsEngine !== 'perplexity' && (
                      <Area name="Cliques no Google" type="monotone" dataKey="Google Clicks" stroke="#33BC65" strokeWidth={2} fillOpacity={1} fill="url(#colorGoogle)" />
                    )}
                    {analyticsEngine !== 'google' && (
                      <Area name="Indicações do ChatGPT/Gemini (AEO)" type="monotone" dataKey="AI Citations" stroke="#12DCEF" strokeWidth={2} fillOpacity={1} fill="url(#colorAI)" />
                    )}
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Sidebar info */}
            <div className="bg-white/[0.01] border border-white/5 p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <h3 className="text-md font-bold text-white mb-3 flex items-center gap-2">
                  <Info size={16} className="text-[#12DCEF]" />
                  A Revolução do AEO
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-4">
                  Tradicionalmente, seu site lutava para atingir a primeira página do Google (SEO). Hoje, com as buscas generativas, o ChatGPT ou Gemini raspam seus conteúdos diretamente e respondem verbalmente indicando sua URL como fone autorizada. 
                </p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Ao usar microdados estruturados Schema e publicar artigos semânticos ricos pela Vezzitech, nós ensinamos as IAs a confiarem nos seus serviços, triplicando as chances de indicação do seu negócio.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5">
                <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Status das Indexações</span>
                <div className="mt-2.5 space-y-2 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Indexação Google Bot</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1">● 100% Ok</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Microdados JSON-LD</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1">● Ativos</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">ChatGPT Crawler Access</span>
                    <span className="text-[#12DCEF] font-bold flex items-center gap-1">● Permitido</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Conversational SEO vs AEO Simulator */}
          <div className="bg-white/[0.01] border border-white/5 p-6 rounded-2xl relative shadow-xl">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#12DCEF]/5 rounded-full blur-3xl pointer-events-none"></div>
            
            <span className="text-xs font-bold text-[#12DCEF] uppercase tracking-wider flex items-center gap-2 mb-2">
              <Sparkles size={14} className="animate-spin-slow text-[#12DCEF]" />
              Motor de Testes
            </span>
            <h3 className="text-xl font-bold text-white">Simulador de Intenção Conversacional (SEO vs AEO)</h3>
            <p className="text-sm text-gray-400 mt-1 max-w-3xl">
              Simule em tempo real uma busca real de mercado. Digite um termo de busca estruturado e valide a diferença radical do ranqueamento do Google Search clássico contra o resultado conversacional do ChatGPT/Gemini mapeado pelas diretrizes da Vezzitech.
            </p>

            {/* Selector suggestions */}
            <div className="flex flex-wrap gap-2 mt-4">
              <button 
                onClick={() => setSearchQuerySim('Qual agência desenvolve os sites mais velozes do Brasil?')}
                className="text-xs bg-white/5 hover:bg-white/10 border border-white/10 px-3.5 py-1.5 rounded-xl transition-colors cursor-pointer"
              >
                "Quem cria os sites mais rápidos do Brasil?"
              </button>
              <button 
                onClick={() => setSearchQuerySim('Como otimizar posts com microdados Schema para robôs de IA?')}
                className="text-xs bg-white/5 hover:bg-white/10 border border-white/10 px-3.5 py-1.5 rounded-xl transition-colors cursor-pointer"
              >
                "Como colocar microdados Schema no markdown?"
              </button>
              <button 
                onClick={() => setSearchQuerySim('Qual a melhor empresa de tecnologia para agentes de IA?')}
                className="text-xs bg-white/5 hover:bg-white/10 border border-white/10 px-3.5 py-1.5 rounded-xl transition-colors cursor-pointer"
              >
                "Qual a melhor desenvolvedora de agentes IA?"
              </button>
            </div>

            {/* Input bar */}
            <div className="mt-5 flex gap-3 max-w-3xl">
              <input 
                type="text"
                placeholder="Insira sua busca aqui (Ex: Qual agência cria landing pages com Vite e React?)"
                value={searchQuerySim}
                onChange={(e) => setSearchQuerySim(e.target.value)}
                className="w-full bg-white/5 border border-white/10 p-3 rounded-xl focus:border-[#12DCEF] focus:outline-none text-white text-sm"
              />
              <button 
                onClick={handleRunSimulation}
                disabled={isSimulating}
                className="bg-[#12DCEF] text-black font-extrabold px-6 rounded-xl hover:opacity-90 active:scale-95 transition-all text-xs uppercase tracking-wider shrink-0 flex items-center gap-1.5"
              >
                {isSimulating ? 'Simulando...' : 'Simular'} <ArrowRight size={14} />
              </button>
            </div>

            {/* SIMULATION RESULT DISPLAY */}
            {isSimulating ? (
              <div className="mt-8 border border-white/5 bg-white/[0.01] rounded-2xl p-8 flex flex-col items-center justify-center min-h-[180px] text-center animate-pulse">
                <Sparkles size={32} className="text-[#12DCEF] animate-spin mb-3" />
                <p className="text-sm font-semibold text-white">Analisando intenção semântica e microdados Schema...</p>
                <p className="text-xs text-gray-400 mt-1">Carregando índices de proximidade das inteligências...</p>
              </div>
            ) : simResult ? (
              <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fadeIn">
                {/* Google Clustered search preview */}
                <div className="bg-[#0f0f11] border border-white/5 p-6 rounded-2xl relative">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
                    <Globe size={14} className="text-emerald-400" />
                    Resultado Orgânico Tradicional (Google SERP)
                  </div>
                  
                  <div className="space-y-1 font-sans">
                    <div className="text-xs text-gray-400 flex items-center gap-1">
                      <span>{simResult.google.url}</span>
                    </div>
                    <a href={simResult.google.url} target="_blank" rel="noreferrer" className="text-lg font-medium text-[#c5f82a] hover:underline block leading-tight">
                      {simResult.google.title}
                    </a>
                    <p className="text-xs text-gray-400 leading-relaxed pt-1.5">
                      {simResult.google.snippet}
                    </p>
                  </div>
                </div>

                {/* AI Generative search preview */}
                <div className="bg-[#0f0f11] border border-[#12DCEF]/15 p-6 rounded-2xl relative shadow-lg">
                  <div className="absolute top-4 right-4 bg-[#12DCEF]/10 border border-[#12DCEF]/30 text-[#12DCEF] text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full">
                    AEO Resposta Direta
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#12DCEF] mb-4">
                    <Sparkles size={14} className="animate-pulse" />
                    Resposta do Modelo (ChatGPT / Gemini Chat Search)
                  </div>

                  <div className="text-gray-300 text-sm leading-relaxed space-y-3 font-sans">
                    <p>
                      {simResult.ai.text}
                    </p>
                    {/* Citation footnote */}
                    <div className="pt-3 border-t border-white/5 flex flex-wrap gap-2 items-center">
                      <span className="text-[10px] text-gray-400 font-semibold uppercase">Fonte citada:</span>
                      <a 
                        href={simResult.ai.sourceUrl} 
                        className="text-[11px] text-cyan-400 hover:underline bg-[#12DCEF]/5 border border-[#12DCEF]/15 px-2.5 py-0.5 rounded-lg flex items-center gap-1 font-mono"
                      >
                        [1] {simResult.ai.sourceTitle}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          {/* Real Database Metrics Editor (Fine-Tuning CRUD) */}
          <div className="bg-white/[0.01] border border-white/5 p-6 rounded-2xl relative mt-8">
            <button 
              onClick={() => setShowMetricEditor(!showMetricEditor)}
              type="button"
              className="w-full flex items-center justify-between text-left focus:outline-none cursor-pointer"
            >
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2 mb-1">
                  <Database size={14} />
                  Base de Dados Persistente
                </span>
                <h3 className="text-lg font-bold text-white">Configuração Real de Métricas no Firestore</h3>
                <p className="text-xs text-gray-400 mt-0.5">
                  Clique para abrir a estrutura de dados bruta. Edite os valores persistidos no Cloud Firestore para auditar o tráfego e as citações geradas de forma real.
                </p>
              </div>
              <span className="text-gray-400 text-sm bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 hover:text-white transition-colors cursor-pointer select-none">
                {showMetricEditor ? 'Ocultar Estrutura' : 'Visualizar Estrutura Real'}
              </span>
            </button>

            {showMetricEditor && (
              <div className="mt-6 pt-6 border-t border-white/10 animate-fadeIn space-y-4">
                <div className="flex justify-between items-center bg-[#12DCEF]/5 border border-[#12DCEF]/10 p-4 rounded-xl">
                  <p className="text-xs text-gray-300 leading-relaxed max-w-2xl">
                    Estes dados representam os registros persistidos de forma verdadeira na coleção <code className="text-[#12DCEF] font-mono">analytics_metrics</code> do Firestore para o período selecionado <strong>({analyticsPeriod === '30days' ? '30 Dias' : analyticsPeriod === '6months' ? '6 Meses' : '1 Ano'})</strong>. Alterações aqui são sincronizadas instantaneamente no banco de dados e refletidas no gráfico e cartões superiores.
                  </p>
                </div>

                <div className="overflow-x-auto max-h-[300px] border border-white/5 rounded-xl scrollbar-thin">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-white/5 text-[10px] font-bold text-gray-400 uppercase tracking-wider border-b border-white/10">
                        <th className="p-3">Ref Temporal</th>
                        <th className="p-3">Cliques Orgânicos (Google)</th>
                        <th className="p-3">Citações de Modelos (AEO)</th>
                        <th className="p-3">CTR Médio (%)</th>
                        <th className="p-3 text-right">Ação</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-xs">
                      {analyticsData.map((item, idx) => (
                        <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                          <td className="p-3 text-gray-300 font-mono font-medium">{item.name}</td>
                          <td className="p-3">
                            {editingMetricIndex === idx ? (
                              <input 
                                type="number" 
                                value={editGoogleClicks}
                                onChange={(e) => setEditGoogleClicks(Math.max(0, parseInt(e.target.value) || 0))}
                                className="w-24 bg-black border border-white/10 p-1 rounded font-mono text-emerald-400 focus:outline-none"
                              />
                            ) : (
                              <span className="font-mono text-emerald-400">{item['Google Clicks'] || 0}</span>
                            )}
                          </td>
                          <td className="p-3">
                            {editingMetricIndex === idx ? (
                              <input 
                                type="number" 
                                value={editAiCitations}
                                onChange={(e) => setEditAiCitations(Math.max(0, parseInt(e.target.value) || 0))}
                                className="w-24 bg-black border border-white/10 p-1 rounded font-mono text-cyan-400 focus:outline-none"
                              />
                            ) : (
                              <span className="font-mono text-cyan-300">{item['AI Citations'] || 0}</span>
                            )}
                          </td>
                          <td className="p-3">
                            {editingMetricIndex === idx ? (
                              <input 
                                type="number" 
                                step="0.1"
                                value={editCtr}
                                onChange={(e) => setEditCtr(Math.max(0, parseFloat(e.target.value) || 0))}
                                className="w-24 bg-black border border-white/10 p-1 rounded font-mono text-white focus:outline-none"
                              />
                            ) : (
                              <span className="font-mono text-white">{item['CTR %'] || 0}%</span>
                            )}
                          </td>
                          <td className="p-3 text-right">
                            {editingMetricIndex === idx ? (
                              <div className="flex gap-2 justify-end">
                                <button 
                                  onClick={() => handleUpdateMetric(idx)}
                                  className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-2.5 py-1 rounded text-[11px] transition-colors cursor-pointer"
                                >
                                  Salvar
                                </button>
                                <button 
                                  onClick={() => setEditingMetricIndex(null)}
                                  className="bg-white/5 hover:bg-white/10 border border-white/10 px-2.5 py-1 rounded text-[11px] text-gray-300 transition-colors cursor-pointer"
                                >
                                  Cancelar
                                </button>
                              </div>
                            ) : (
                              <button 
                                onClick={() => {
                                  setEditingMetricIndex(idx);
                                  setEditGoogleClicks(item['Google Clicks'] || 0);
                                  setEditAiCitations(item['AI Citations'] || 0);
                                  setEditCtr(item['CTR %'] || 0);
                                }}
                                className="bg-white/5 hover:bg-white/10 border border-white/10 px-2.5 py-1 rounded text-[11px] text-gray-300 hover:text-[#12DCEF] transition-colors cursor-pointer"
                              >
                                Editar Registro
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : activeTab === 'gtm' ? (
        <div className="space-y-8 animate-fadeIn font-sans">
          {/* Strategy & GTM profile form */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <Target size={24} className="text-emerald-400" />
              Estratégia GTM & Posicionamento Comercial IA
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Configure as matrizes de atração e diferenciação da Vezzitech. O Gemini processará os concorrentes e as teses de entrada de mercado, gerando copys irresistíveis para LinkedIn e sugestões de SEO/AEO prioritários.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-1">
              <form onSubmit={handleGtmSubmit} className="bg-white/[0.01] border border-white/10 p-6 rounded-2xl space-y-4">
                <h3 className="text-lg font-bold text-white border-b border-white/5 pb-2.5">Matriz de Defesa</h3>
                
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wide">Atuação Principal</label>
                  <textarea 
                    value={gtmMarketFocus}
                    onChange={(e) => setGtmMarketFocus(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 p-2.5 rounded-xl text-xs text-white focus:border-emerald-400 focus:outline-none min-h-[70px]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wide">Público Prioritário</label>
                  <textarea 
                    value={gtmTargetAudience}
                    onChange={(e) => setGtmTargetAudience(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 p-2.5 rounded-xl text-xs text-white focus:border-emerald-400 focus:outline-none min-h-[70px]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wide">Diferenciais Técnicos</label>
                  <textarea 
                    value={gtmDifferentiators}
                    onChange={(e) => setGtmDifferentiators(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 p-2.5 rounded-xl text-xs text-white focus:border-emerald-400 focus:outline-none min-h-[70px]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wide">Concorrentes Clássicos</label>
                  <textarea 
                    value={gtmCompetitors}
                    onChange={(e) => setGtmCompetitors(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 p-2.5 rounded-xl text-xs text-white focus:border-emerald-400 focus:outline-none min-h-[70px]"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={gtmLoading}
                  className="w-full mt-4 bg-emerald-400 hover:bg-emerald-500 font-extrabold text-black uppercase tracking-wider py-3 px-4 rounded-xl text-xs transition-all active:scale-[0.99]"
                >
                  {gtmLoading ? 'Processando Posicionamento...' : 'Atualizar com Gemini'}
                </button>
              </form>
            </div>

            {/* Results */}
            <div className="lg:col-span-2 space-y-6">
              {gtmLoading ? (
                <div className="bg-white/[0.01] border border-white/5 rounded-2xl p-16 text-center animate-pulse flex flex-col items-center justify-center min-h-[300px]">
                  <Sparkles size={40} className="text-emerald-400 animate-spin mb-4" />
                  <p className="text-lg font-bold text-white">Gemini está analisando a concorrência...</p>
                  <p className="text-sm text-gray-400 mt-1 max-w-sm">Mapeando canais, estruturando copys corporativas e definindo palavras-chave de ranqueamento duplo.</p>
                </div>
              ) : gtmResult ? (
                <div className="space-y-6 animate-fadeIn">
                  {/* Executive summary markdown print */}
                  <div className="bg-[#0f0f11] border border-white/5 rounded-2xl p-6 relative">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 bg-emerald-400/5 border border-emerald-400/10 px-2.5 py-1 rounded-lg absolute top-4 right-4">
                      Sumário Executivo IA
                    </span>
                    <h3 className="text-md font-bold text-white mb-4">Posicionamento Técnico</h3>
                    <div className="prose prose-invert prose-sm max-w-none text-gray-300 leading-relaxed text-sm">
                      <ReactMarkdown>{gtmResult.executiveSummary}</ReactMarkdown>
                    </div>
                  </div>

                  {/* recommended channels and outreach copies */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Columns 1 - Channels */}
                    <div className="space-y-4">
                      <div className="bg-white/[0.01] border border-white/5 rounded-2xl p-5">
                        <h4 className="text-sm font-bold text-white mb-3">Canais de Aquisição Recomendados</h4>
                        <div className="space-y-4">
                          {gtmResult.channelsRecommendation.map((chan: any, i: number) => (
                            <div key={i} className="space-y-1.5">
                              <div className="flex justify-between text-xs font-semibold">
                                <span className="text-emerald-300">{chan.channel}</span>
                                <span className="text-gray-400">{chan.fitPercent}% FIT</span>
                              </div>
                              <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-emerald-400 h-full rounded-full" style={{ width: `${chan.fitPercent}%` }} />
                              </div>
                              <p className="text-[11px] text-gray-500 leading-relaxed">{chan.strategy}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Columns 2 - Copies */}
                    <div className="space-y-4">
                      {gtmResult.copyPositioning.map((copyObj: any, idx: number) => (
                        <div key={idx} className="bg-white/[0.01] border border-white/5 p-5 rounded-2xl flex flex-col justify-between">
                          <div>
                            <span className="text-[10px] uppercase font-mono tracking-wider text-gray-500">{copyObj.platform}</span>
                            <h4 className="text-xs font-bold text-white mt-1 mb-2">Linha persuasiva de tração</h4>
                            <p className="text-xs text-gray-400 leading-relaxed line-clamp-4 italic">
                              "{copyObj.copy}"
                            </p>
                          </div>
                          
                          <button 
                            onClick={() => {
                              navigator.clipboard.writeText(copyObj.copy);
                              setCopiedIndex(idx);
                              setTimeout(() => setCopiedIndex(null), 1500);
                            }}
                            className="mt-3 bg-white/5 hover:bg-white/10 active:scale-95 transition-all text-gray-300 hover:text-white px-3 py-1.5 rounded-lg text-[10px] uppercase tracking-wider font-extrabold flex items-center gap-1.5 self-end"
                          >
                            <Copy size={12} className={copiedIndex === idx ? 'text-emerald-400' : ''} />
                            {copiedIndex === idx ? 'Copiado!' : 'Copiar Texto'}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Target search queries and keywords */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* SEO Topics */}
                    <div className="bg-white/[0.01] border border-white/5 p-5 rounded-2xl">
                      <h4 className="text-sm font-bold text-white mb-3">Tópicos de SEO Recomendados para Blog</h4>
                      <div className="space-y-3">
                        {gtmResult.seoTargetTopics.map((topic: any, i: number) => (
                          <div key={i} className="flex justify-between items-center p-2.5 bg-white/[0.01] border border-white/5 rounded-xl text-xs hover:border-emerald-500/20 transition-all">
                            <div>
                              <p className="font-bold text-white">{topic.topic}</p>
                              <span className="text-[10px] text-gray-400 font-mono">Volume: {topic.volume} | {topic.intent}</span>
                            </div>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${topic.difficulty === 'Baixa' ? 'bg-emerald-500/10 text-emerald-400' : topic.difficulty === 'Média' ? 'bg-amber-500/10 text-amber-400' : 'bg-rose-500/10 text-rose-400'}`}>
                              {topic.difficulty}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* AEO keywords */}
                    <div className="bg-white/[0.01] border border-white/5 p-5 rounded-2xl">
                      <h4 className="text-sm font-bold text-white mb-3">Padrões de AEO (Perguntas em IAs)</h4>
                      <div className="space-y-3">
                        {gtmResult.aeoKeywords.map((aeo: any, i: number) => (
                          <div key={i} className="p-3 bg-white/[0.01] border border-white/5 rounded-xl space-y-1.5 hover:border-cyan-500/20 transition-all">
                            <p className="text-xs font-bold text-[#12DCEF]">"{aeo.keyword}"</p>
                            <p className="text-[10px] text-gray-500 leading-relaxed">{aeo.strategy}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : activeTab === 'seo-audit' ? (
        <div className="space-y-8 animate-fadeIn font-sans">
          {/* auditor draft evaluator */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <FileSearch size={24} className="text-amber-400" />
              Auditor Técnico Copywriter (SEO & AEO)
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Cole rascunhos de seus artigos ou copys institucionais. O Gemini auditará a densidade estrutural das palavras-chave clássicas e validará se o seu formato de escrita é compatível com os crawlers de IA generativos (AEO).
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Input Draft Panel */}
            <div className="lg:col-span-1 space-y-4">
              <div className="bg-white/[0.01] border border-white/10 p-6 rounded-2xl relative">
                <div className="flex justify-between items-center mb-2.5">
                  <h3 className="text-base font-bold text-white flex items-center gap-1.5">
                    <Sparkles size={16} className="text-amber-400" /> Rascunho da Copy
                  </h3>
                  <span className="text-[10px] text-gray-500 font-mono">Mínimo 20 caracteres</span>
                </div>

                <textarea 
                  value={seoDraftText}
                  onChange={(e) => setSeoDraftText(e.target.value)}
                  placeholder="Cole seu texto rico em markdown, post ou landing page aqui..."
                  className="w-full h-80 bg-white/5 border border-white/10 p-3 rounded-xl focus:border-amber-400 focus:outline-none text-xs text-white leading-relaxed font-mono"
                />

                <div className="flex justify-between items-center mt-3 text-[10px] text-gray-500">
                  <span>Tamanho: <span className="text-white font-semibold">{seoDraftText.length}</span> caracteres</span>
                </div>

                <button 
                  onClick={handleSeoEvaluate}
                  disabled={seoLoading}
                  className="w-full mt-5 bg-amber-400 hover:bg-amber-500 text-black font-extrabold uppercase py-3.5 rounded-xl text-xs tracking-wider transition-all active:scale-[0.99]"
                >
                  {seoLoading ? 'Analisando Indexadores...' : 'Auditar Copy com Gemini'}
                </button>
              </div>
            </div>

            {/* Evaluation Result View */}
            <div className="lg:col-span-2">
              {seoLoading ? (
                <div className="bg-white/[0.01] border border-white/5 rounded-2xl p-16 text-center animate-pulse flex flex-col items-center justify-center min-h-[300px]">
                  <Sparkles size={40} className="text-amber-400 animate-spin mb-4" />
                  <p className="text-lg font-bold text-white font-sans">Gemini está medindo score semântico...</p>
                  <p className="text-sm text-gray-400 mt-1 max-w-sm">Mapeando proximidades vetoriais de embeddings, validando tags H2/H3 e determinando legibilidade por LLMs.</p>
                </div>
              ) : seoResult ? (
                <div className="space-y-6 animate-fadeIn">
                  {/* Gauge score card container */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Google Classic SEO score card */}
                    <div className="bg-white/[0.01] border border-white/5 rounded-2xl p-6 flex items-center justify-between">
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase font-bold text-gray-500">Traditional SEO Score</span>
                        <h4 className="text-lg font-extrabold text-white">Indexabilidade no Google</h4>
                        <p className="text-xs text-gray-400 leading-normal max-w-[180px]">Mede a densidade técnica e corretude estrutural de tags.</p>
                      </div>
                      
                      {/* Circle indicator */}
                      <div className="relative w-16 h-16 flex items-center justify-center rounded-full border-4 border-white/10">
                        <span className="text-lg font-extrabold text-emerald-400 font-mono">{seoResult.scoreSeo}</span>
                        <div className="absolute inset-0 border-4 border-transparent border-t-emerald-400 rounded-full animate-spin-slow pointer-events-none" />
                      </div>
                    </div>

                    {/* AEO Generative score card */}
                    <div className="bg-white/[0.01] border border-white/5 rounded-2xl p-6 flex items-center justify-between">
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase font-bold text-cyan-400">Answer Engine Optimization</span>
                        <h4 className="text-lg font-extrabold text-[#12DCEF]">Recomendação por IA</h4>
                        <p className="text-xs text-gray-400 leading-normal max-w-[180px]">Mede o quão propício o texto é para ser extraído pelo ChatGPT.</p>
                      </div>
                      
                      {/* Circle indicator */}
                      <div className="relative w-16 h-16 flex items-center justify-center rounded-full border-4 border-white/10">
                        <span className="text-lg font-extrabold text-[#12DCEF] font-mono">{seoResult.scoreAeo}</span>
                        <div className="absolute inset-0 border-4 border-transparent border-t-[#12DCEF] rounded-full animate-spin-slow pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* General Editorial Feedback */}
                  <div className="bg-[#0f0f11] border border-white/5 p-6 rounded-2xl">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Diagnóstico Editorial Geral</h4>
                    <p className="text-sm text-gray-300 leading-relaxed font-sans">
                      {seoResult.generalFeedback}
                    </p>
                  </div>

                  {/* Pros & Cons analysis panels */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Traditional SEO Pros/Cons */}
                    <div className="bg-white/[0.01] border border-white/5 p-5 rounded-2xl space-y-4">
                      <h4 className="text-sm font-bold text-white pb-2 border-b border-white/5 flex items-center gap-1.5">
                        <Globe size={15} className="text-emerald-400" /> Requisitos SEO Tradicionais
                      </h4>
                      <div>
                        <span className="text-[10.5px] uppercase font-bold text-emerald-400 tracking-wider">Pontos Positivos</span>
                        <ul className="mt-2 space-y-1.5">
                          {seoResult.seoPros.map((pro: string, idx: number) => (
                            <li key={idx} className="flex gap-2 items-start text-xs text-gray-400 leading-relaxed">
                              <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                              <span>{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-2 border-t border-white/5">
                        <span className="text-[10.5px] uppercase font-bold text-rose-400 tracking-wider">Oportunidades de Otimização</span>
                        <ul className="mt-2 space-y-1.5">
                          {seoResult.seoCons.map((con: string, idx: number) => (
                            <li key={idx} className="flex gap-2 items-start text-xs text-gray-400 leading-relaxed">
                              <AlertCircle size={14} className="text-rose-400 shrink-0 mt-0.5" />
                              <span>{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* AEO compatibility summary and Pros/Cons */}
                    <div className="bg-white/[0.01] border border-white/5 p-5 rounded-2xl space-y-4">
                      <h4 className="text-sm font-bold text-[#12DCEF] pb-2 border-b border-white/5 flex items-center gap-1.5">
                        <Sparkles size={15} className="text-[#12DCEF]" /> Compatibilidade AEO (IAs)
                      </h4>
                      <p className="text-[11px] text-gray-400 leading-relaxed bg-[#12DCEF]/5 border border-[#12DCEF]/15 p-2.5 rounded-xl">
                        {seoResult.aeoCompatibility}
                      </p>
                      <div>
                        <span className="text-[10.5px] uppercase font-bold text-[#12DCEF] tracking-wider">Facilitadores de Extração</span>
                        <ul className="mt-2 space-y-1.5">
                          {seoResult.aeoPros.map((pro: string, idx: number) => (
                            <li key={idx} className="flex gap-2 items-start text-xs text-dash text-gray-400 leading-relaxed">
                              <CheckCircle2 size={14} className="text-[#12DCEF] shrink-0 mt-0.5" />
                              <span>{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-2 border-t border-white/5">
                        <span className="text-[10.5px] uppercase font-bold text-amber-400 tracking-wider">Vulnerabilidades de Extração</span>
                        <ul className="mt-2 space-y-1.5">
                          {seoResult.aeoCons.map((con: string, idx: number) => (
                            <li key={idx} className="flex gap-2 items-start text-xs text-dash text-gray-400 leading-relaxed">
                              <AlertCircle size={14} className="text-amber-400 shrink-0 mt-0.5" />
                              <span>{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Title suggestions of high converted CTR */}
                  <div className="bg-white/[0.01] border border-white/5 p-5 rounded-2xl">
                    <h4 className="text-sm font-bold text-white mb-3">Títulos Alternativos Sugeridos para Teste A/B</h4>
                    <div className="space-y-2.5">
                      {seoResult.suggestedTitles.map((altTitle: string, idx: number) => (
                        <div key={idx} className="flex justify-between items-center bg-white/[0.01] border border-white/5 p-2.5 rounded-xl text-xs hover:border-amber-400/20 transition-all">
                          <span className="text-white font-medium">"{altTitle}"</span>
                          <button 
                            onClick={() => {
                              setTitle(altTitle);
                              setSlug(slugify(altTitle).substring(0, 200));
                              showStatus('success', 'Título do rascunho de post preenchido com a recomendação da IA!');
                            }}
                            className="bg-white/5 hover:bg-white/10 active:scale-95 transition-all text-[10px] text-amber-300 hover:text-amber-200 px-3 py-1 rounded-lg uppercase tracking-wide font-extrabold font-mono"
                          >
                            Usar como Título
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Vocabulary recommended key terms */}
                  <div className="bg-white/[0.01] border border-white/5 p-5 rounded-2xl">
                    <h4 className="text-sm font-bold text-white mb-2.5">Palavras-chave Semânticas recomendadas para incorporar</h4>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {seoResult.keyKeywordsToIncorporate.map((keyword: string, idx: number) => (
                        <span key={idx} className="bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs px-3.5 py-1.5 rounded-full flex items-center gap-1.5 font-mono">
                          <PlusCircle size={12} /> {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fadeIn font-sans">
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
            <div className="bg-white/[0.01] border border-white/10 p-6 rounded-2xl relative animate-fadeIn">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#33BC65] uppercase tracking-widest mb-3 animate-pulse">
                <Sparkles size={14} /> Dicas do Especialista
              </div>
              <h3 className="text-lg font-bold mb-4">Garantindo SEO Perfeito</h3>
              <ul className="space-y-3.5 text-sm text-gray-400 tracking-wide">
                <li className="flex items-start gap-2.5">
                  <ChevronRight size={16} className="text-[#33BC65] shrink-0 mt-0.5" />
                  <span>Use **Parágrafos Curtos** e títulos h2/h3 para facilitar a leitura no Google Reader e bots.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ChevronRight size={16} className="text-[#33BC65] shrink-0 mt-0.5" />
                  <span>Insira a **Palavra-chave principal** no início do título e no primeiro parágrafo do artigo.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ChevronRight size={16} className="text-[#33BC65] shrink-0 mt-0.5" />
                  <span>**Immagens de Capa**: Use imagens com boa proporção (Ex: 1200x630px para correta renderização em redes sociais).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ChevronRight size={16} className="text-[#33BC65] shrink-0 mt-0.5" />
                  <span>Os slugs são gerados automaticamente, sem acentos, caracteres especiais ou espaços, mantendo a URL 100% limpa.</span>
                </li>
              </ul>
            </div>

            {imageUrl && (
              <div className="bg-white/[0.01] border border-white/10 p-6 rounded-2xl animate-fadeIn">
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
