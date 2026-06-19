import React, { useState } from 'react';
import { Calendar, Tag, Clock, ArrowRight, X } from 'lucide-react';
import { translations, Language } from '../translations';

export interface BlogPost {
  id: string;
  category: string;
  title: string;
  summary: string;
  readTime: string;
  date: string;
  content: string;
}

interface BlogProps {
  lang: Language;
}

export const Blog = ({ lang }: BlogProps) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [subscribed, setSubscribed] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const t = translations[lang];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  const localizedPosts: BlogPost[] = lang === 'pt' ? [
    {
      id: '1',
      category: 'Gemini',
      title: 'Como o Gemini 1.5 Pro revolucionou nossa automação',
      summary: 'Exploramos como a janela de contexto massiva do Gemini muda o jogo para análise de documentos empresariais complexos.',
      readTime: '6 min read',
      date: '15 JUN 2026',
      content: `A janela de contexto estendida do Gemini Pro não é apenas maior; ela é conceitualmente diferente. Ao suportar mais de 2 milhões de tokens de contexto ativo, empresas conseguem alimentar relatórios inteiros, documentações jurídicas extensas e códigos-fonte completos de um só golpe.
 
A Vezzitech desenvolveu uma arquitetura que reduz a latência e o custo de tokens em 40% usando estratégias de Chunking Semântico e cache inteligente no Google Vertex AI. 
 
### Principais Benefícios Operacionais:
- **Redução do Tempo de Triagem**: Processamento de contratos antes manuais agora realizados em menos de 10 segundos.
- **Precisão Cirúrgica**: Zero alucinações graças ao RAG (Retrieval-Augmented Generation) acoplado diretamente a bases confiáveis no GCP.
- **Redução de Custo**: Nosso analisador inteligente remove dados redundantes antes do envio para a API, cortando custos operacionais pela metade.`
    },
    {
      id: '2',
      category: 'Marketing',
      title: 'Automação Preditiva no Google Cloud',
      summary: 'Entenda como utilizar ferramentas preditivas para antecipar comportamentos de vendas e campanhas.',
      readTime: '4 min read',
      date: '10 JUN 2026',
      content: `Parar de apenas reagir ao mercado e começar a antecipar é a nossa proposta ao implantar BigQuery ML e Vertex AI incorporados ao Google Ads. 
 
Mapeando os pontos de contato dos visitantes do seu site, geramos scores de propensão de conversão dinâmicos para cada lead de marketing.
 
### Principais Descobertas:
- **Público Semelhante Refinado**: Otimização de até 35% na alocação de verba de anúncios apontando apenas para perfis de alta propensão de conversão.
- **Integração Real-Time**: APIs que atualizam listas frias automaticamente no CRM visando contatos mais assertivos.`
    },
    {
      id: '3',
      category: 'Vendas',
      title: 'IA e o fim das chamadas frias (cold-calls)',
      summary: 'Como estamos usando Vertex AI para qualificar e enriquecer leads de forma totalmente automatizada.',
      readTime: '5 min read',
      date: '02 JUN 2026',
      content: `O time de vendas não deve gastar tempo adivinhando se o lead está pronto. Através de agentes autônomos acoplados ao pipeline de e-mails recebidos, criamos resumos críticos sobre a estrutura organizacional e dores do potencial cliente antes de qualquer contato humano.
 
### Como a arquitetura funciona:
1. **Coleta Multimodal**: O bot lê dados anexos, site da empresa-alvo e histórico do CRM.
2. **Avaliação Fina**: O Vertex AI maps a sinergia com o produto.
3. **Draft Automático**: Cria um pitch altamente direcionado para o executivo de vendas humano revisar e enviar.`
    }
  ] : [
    {
      id: '1',
      category: 'Gemini',
      title: 'How Gemini 1.5 Pro Revolutionized Our Enterprise Automation',
      summary: 'We explore how Gemini\'s massive context window shifts the game for analyzing highly complex corporate datasets.',
      readTime: '6 min read',
      date: '15 JUN 2026',
      content: `Gemini Pro\'s extended context window is not just bigger; it is conceptually completely different. Supporting over 2 million active context tokens, corporations can feed entire financial reports, lengthy legal files, and complete source repositories all at once.
 
Vezzitech built a custom chunking architecture that trims down API latency and processing tokens costs by 40% using Semantic Chunking and custom caching filters on Google Vertex AI.
 
### Core Operational Advantages:
- **Slashed Screening Time**: Document validation workflows that took hours are now executed in under 10 seconds.
- **Surgical Accuracy**: Zero hallucinations backed by robust RAG (Retrieval-Augmented Generation) operating inside your GCP tenant database.
- **Cost Reduction**: Our smart pre-parser strips redundant token streams before sending parameters to model endpoint, halving compute bills.`
    },
    {
      id: '2',
      category: 'Marketing',
      title: 'Predictive Targeting Engine on Google Cloud',
      summary: 'Learn how to leverage Machine Learning models to anticipate user conversion probability.',
      readTime: '4 min read',
      date: '10 JUN 2026',
      content: `Stop reacting to retrospect trends and start predicting user actions by integrating BigQuery ML and Vertex AI predictions directly within Google Ads campaigns.
 
By tracking online touchpoints on your website, we calculate customer conversion propensities dynamically for each incoming lead.
 
### Key Breakthroughs:
- **Refined Custom Lookalikes**: Up to 35% improvement in pay-per-click efficiency by routing budget strictly to higher intent clusters.
- **Real-Time Integration**: Custom event triggers that sync qualified prospects to your sales CRM automatically.`
    },
    {
      id: '3',
      category: 'Sales',
      title: 'Autonomous AI Agent: The End of Cold Calls',
      summary: 'How we leverage Vertex AI workflows to auto-enrich and qualify incoming prospects instantly.',
      readTime: '5 min read',
      date: '02 JUN 2026',
      content: `Your sales team shouldn't spend valuable hours guessing if a lead is ready. By linking automated parsing agents to your standard corporate inbound mail streams, we build actionable context briefs before a salesperson ever picks up the phone.
 
### Integrated pipeline breakdown:
1. **Multimodal Capture**: The agent reads attachments, crawl company domains, and extracts past CRM conversations.
2. **Quality Evaluation**: Vertex AI scores alignment based on historic client behavior.
3. **Drafting Emails**: Automates writing hyper-crafted outreach drafts for human operators to review and send.`
    }
  ];

  return (
    <section id="blog" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5 relative">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="text-[#33BC65] font-mono text-xs mb-3 font-semibold uppercase tracking-widest">// {t.blogSection.tag}</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.12] tracking-tight text-white font-heading">
                {lang === 'pt' ? (
                  <>
                    Conteúdos refinados,
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-100 to-emerald-200 mt-1 font-normal">
                      insights reais de quem opera no mercado.
                    </span>
                  </>
                ) : (
                  <>
                    Refined corporate content,
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-100 to-emerald-200 mt-1 font-normal">
                      real performance insights from operations.
                    </span>
                  </>
                )}
          </h2>
        </div>
        <p className="text-gray-400 text-sm md:text-base max-w-sm">
          {t.blogSection.sub}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {localizedPosts.map((post) => (
          <div 
            key={post.id} 
            className="bg-glass border-glass p-8 rounded-3xl hover:bg-white/5 transition duration-300 flex flex-col justify-between group h-96 hover:border-[#33BC65]/30">
            <div>
              <div className="flex items-center gap-3 text-[#33BC65] font-mono text-xs mb-4">
                <span className="bg-emerald-500/10 text-[#33BC65] px-2.5 py-0.5 rounded font-bold uppercase">{post.category}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#33BC65] transition duration-300 line-clamp-2 font-heading">
                {post.title}
              </h3>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed line-clamp-3">
                {post.summary}
              </p>
            </div>
            
            <button 
              onClick={() => setSelectedPost(post)}
              className="mt-6 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:text-[#33BC65] transition cursor-pointer self-start">
              {t.blogSection.readMore} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        ))}
      </div>

      {/* Newsletter signup widget */}
      <div className="bg-glass border-glass p-8 md:p-12 rounded-3xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#33BC65]/10 rounded-full blur-2xl pointer-events-none"></div>
        <div className="relative z-10 max-w-lg">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 font-heading">{t.blogSection.newsTitle}</h3>
          <p className="text-gray-400 text-xs md:text-sm">{t.blogSection.newsSub}</p>
        </div>

        <form onSubmit={handleSubscribe} className="w-full md:w-auto relative z-10 flex flex-col sm:flex-row gap-3">
          {subscribed ? (
            <span className="text-green-400 font-bold text-sm bg-emerald-500/10 border border-emerald-500/20 px-6 py-3 rounded-xl">
              {t.blogSection.newsSuccess}
            </span>
          ) : (
            <>
              <input 
                type="email" 
                required
                placeholder={t.blogSection.newsPlaceholder} 
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-xs md:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#33BC65] transition min-w-[240px]" />
              <button 
                type="submit" 
                className="gradient-orange text-black font-semibold text-xs uppercase tracking-widest px-6 py-3 rounded-xl hover:scale-[1.02] active:scale-95 transition cursor-pointer">
                {t.blogSection.newsBtn}
              </button>
            </>
          )}
        </form>
      </div>

      {/* Article dialog overlay */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in select-text">
          <div className="bg-[#111111] border border-white/10 rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-8 relative custom-scrollbar shadow-2xl">
            <button 
              onClick={() => setSelectedPost(null)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition bg-white/5 p-2 rounded-full cursor-pointer border border-white/5">
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-4 text-[#33BC65] font-mono text-xs mb-6 mt-4">
              <span className="bg-emerald-500/15 text-[#33BC65] px-3 py-1 rounded-full font-bold uppercase flex items-center gap-1.5 font-mono">
                <Tag className="w-3" /> {selectedPost.category}
              </span>
              <span className="flex items-center gap-1.5"><Calendar className="w-3" /> {selectedPost.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3" /> {selectedPost.readTime}</span>
            </div>

            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight tracking-tight font-heading">
              {selectedPost.title}
            </h2>

            <div className="text-gray-300 text-sm md:text-base leading-relaxed space-y-6 whitespace-pre-wrap font-sans">
              {selectedPost.content}
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#33BC65] flex items-center justify-center font-bold text-black font-heading">VT</div>
                <div>
                  <p className="text-xs text-white font-bold">{t.blogSection.editorial}</p>
                  <p className="text-[10px] text-gray-500">{t.blogSection.editorialSub}</p>
                </div>
              </div>
              <button 
                onClick={() => { setSelectedPost(null); const el = document.getElementById('consultoria'); el?.scrollIntoView({ behavior: 'smooth' }); }}
                className="gradient-orange text-black font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl hover:scale-105 transition cursor-pointer">
                {t.blogSection.dialogCta}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
