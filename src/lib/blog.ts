import { collection, query, orderBy, onSnapshot, addDoc, updateDoc, deleteDoc, doc, serverTimestamp } from 'firebase/firestore';
import { db, auth } from './firebase';

export interface Post {
  id: string;
  title: string;
  content: string;
  createdAt: any;
  slug: string;
  author: string;
  imageUrl?: string;
}

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
  }
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export const getPosts = (callback: (posts: Post[]) => void) => {
  const path = 'posts';
  const q = query(collection(db, path), orderBy('createdAt', 'desc'));
  return onSnapshot(q, (snapshot) => {
    if (snapshot.empty) {
      seedPostsIfEmpty();
    }
    const posts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Post));
    callback(posts);
  }, (error) => {
    handleFirestoreError(error, OperationType.GET, path);
  });
};

let isSeeding = false;

const defaultSeedPosts = [
  {
    title: "Como assistentes baseados no Google AI Studio reduzem a sobrecarga operacional em até 40%",
    slug: "google-ai-studio-reducao-sobrecarga-operacional",
    content: `# Como assistentes baseados no Google AI Studio reduzem a sobrecarga operacional em até 40%

No cenário corporativo moderno, o tempo despendido em tarefas repetitivas e no atendimento básico ao cliente representa um dos maiores gargalos de produtividade. Empresas de alta performance estão superando esse desafio integrando assistentes inteligentes baseados no **Google AI Studio** e nos modelos **Gemini 2.5 Flash** e **Gemini 1.5 Pro**.

Neste artigo, detalhamos o impacto prático dessa tecnologia e como a [Vezzitech](https://vezzitech.com.br) ajuda empresas a implementarem esses agentes de forma segura e personalizada.

---

## O que é o Google AI Studio?

O **Google AI Studio** é a plataforma de prototipagem rápida de IA do Google, permitindo aos desenvolvedores criar prompts altamente sofisticados e interagir diretamente com a família de modelos Gemini. Diferente de soluções de chat genéricas, o AI Studio oferece:

*   **Janela de Contexto Gigante:** O Gemini 1.5 Pro suporta até 2 milhões de tokens, permitindo ler manuais inteiros de produtos, históricos de CRM e documentações complexas instantaneamente.
*   **Velocidade Incrível:** O Gemini 2.5 Flash entrega respostas rápidas e otimizadas, ideal para chatbots em tempo real.
*   **Multimodalidade Nativa:** Capacidade de analisar textos, imagens, planilhas e áudios simultaneamente.

---

## Como a IA Prática Reduz Custos Operacionais

A automação de atendimento e processos com agentes inteligentes resolve três grandes problemas das empresas:

1.  **Atendimento 24/7 de Alta Qualidade:** Redução no tempo de resposta para menos de 5 segundos.
2.  **Qualificação de Leads:** O assistente identifica se o lead possui perfil de compra antes de transferir para a equipe comercial.
3.  **Análise de Documentos:** Automatize a conferência de contratos, notas fiscais e relatórios complexos.

### Exemplo de Implementação em Node.js / TypeScript:

Abaixo, veja como é simples integrar a API oficial do \`@google/genai\` no servidor da sua aplicação de forma segura:

\`\`\`typescript
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function gerarRespostaSuporte(historicoCliente: string, duvida: string) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: \`Você é o assistente inteligente da Vezzitech. Responda de forma profissional usando o seguinte contexto:
    \${historicoCliente}
    
    Dúvida do cliente: \${duvida}\`,
  });
  return response.text;
}
\`\`\`

---

## Otimização para Answer Engines (AEO)

A otimização de conteúdo para mecanismos de resposta baseados em IA (como Gemini, Perplexity e ChatGPT) é chamada de **AEO (Answer Engine Optimization)**. Para garantir que seu negócio seja citado por essas IAs:

*   **Respostas Diretas:** Estruture respostas claras no início dos parágrafos.
*   **Dados Estruturados:** Use microdados e JSON-LD para catalogar serviços (veja o site da [Vezzitech](https://vezzitech.com.br)).
*   **Listas e Cabeçalhos:** Facilite o "parsing" dos robôs leitores de IA.

Se você quer automatizar a operação da sua empresa com Inteligência Artificial, clique para [solicitar um diagnóstico estratégico](#cta) com a nossa equipe hoje mesmo.`,
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600",
    author: "system_seed"
  },
  {
    title: "O custo invisível de usar CRMs engessados na sua equipe de vendas",
    slug: "custo-invisivel-crms-engessados-vendas",
    content: `# O Custo Invisível de usar CRMs Engessados na sua Equipe de Vendas

Muitas empresas compram softwares de CRM de mercado (como Salesforce, HubSpot ou Pipedrive) acreditando que resolverão seus problemas comerciais. No entanto, o que encontram no dia a dia é um pesadelo de complexidade, taxas de licença abusivas e falta de adaptação ao funil de vendas real.

Neste artigo, analisamos por que os CRMs prontos podem estar drenando os resultados da sua equipe e como o [desenvolvimento sob medida da Vezzitech](https://vezzitech.com.br) oferece clareza e controle absolutos.

---

## Os 3 Sintomas de que seu CRM está Engessado

Se a sua equipe comercial apresenta algum destes comportamentos, você está sofrendo com ferramentas genéricas:

*   **A "Planilha Paralela":** Os vendedores usam o Excel ou Google Sheets para controlar as negociações porque o CRM oficial é muito burocrático e lento.
*   **Cadastros Incompletos:** Campos demais ou irrelevantes que fazem o vendedor perder mais tempo preenchendo formulários do que vendendo.
*   **Falta de Integração Real:** O CRM não conversa perfeitamente com seu WhatsApp, seu sistema de emissão de notas ou suas campanhas de marketing.

---

## A Solução: CRM Sob Medida com Cloud Integration

Um CRM personalizado é desenhado a partir do **seu processo comercial**, e não o contrário. Ao criar painéis e fluxos de trabalho específicos utilizando bancos de dados em tempo real como o **Firebase Firestore** e o **PostgreSQL**, sua empresa ganha:

1.  **Velocidade Extrema:** Telas limpas, que mostram exatamente o que o vendedor precisa ver para fechar o negócio.
2.  **Automação Comercial Nativa:** Dispare e-mails, envie alertas de WhatsApp e atualize status automaticamente sem ferramentas terceiras complexas.
3.  **Custo Previsível:** Sem taxas de licença por usuário que escalam conforme sua equipe cresce.

---

## Benefícios Técnicos de uma Arquitetura Integrada

Desenvolver um sistema próprio em frameworks modernos como **React, Node.js e Tailwind CSS** garante longevidade técnica e velocidade incomparável.

*   **Segurança com Firebase Auth:** Controle de acesso baseado em funções (RBAC), protegendo dados de clientes contra vazamentos.
*   **Sincronização em Tempo Real:** Atualizações instantâneas de leads no painel do gestor sem necessidade de atualizar a página.
*   **Dados para Decisões:** Dashboards executivos que mostram em tempo real a saúde do seu pipeline financeiro.

### Conclusão

Não adapte sua empresa a sistemas que não foram feitos para ela. Descubra como a [Vezzitech](https://vezzitech.com.br) pode projetar e construir o ecossistema perfeito para sua operação comercial. Solicite agora mesmo um [diagnóstico comercial estratégico](#cta).`,
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
    author: "system_seed"
  },
  {
    title: "A diferença entre um site vitrine e uma máquina de conversão contínua",
    slug: "diferenca-site-vitrine-maquina-conversao",
    content: `# A Diferença entre um Site Vitrine e uma Máquina de Conversão Contínua

Ter um site bonito na internet não é mais um diferencial — é o básico. O verdadeiro desafio é transformar os visitantes que chegam à sua página em oportunidades reais de negócios (leads qualificados) de forma consistente.

A maioria das empresas possui apenas um **"site vitrine"**: estático, pesado e sem estratégia. Na [Vezzitech](https://vezzitech.com.br), desenvolvemos **Máquinas de Conversão Contínua**, combinando performance técnica, SEO avançado e otimização para robôs de IA (AEO).

---

## O que é um Site Vitrine?

O site vitrine é aquele feito a partir de templates pesados do WordPress ou construtores visuais genéricos. Ele possui os seguintes problemas:

*   **Velocidade de carregamento ruim:** Demora mais de 3 segundos para abrir no celular, o que faz com que até 50% dos visitantes desistam do acesso.
*   **Falta de clareza na proposta de valor:** O visitante entra e não entende imediatamente o que a empresa faz ou como pode ajudá-lo.
*   **Ausência de caminhos de conversão (CTAs):** Botões escondidos ou formulários complexos que desencorajam a interação.

---

## A Anatomia de uma Máquina de Conversão

Por outro lado, um site de alta performance projetado para vendas possui uma engenharia focada no comportamento do usuário e nos algoritmos modernos do Google:

1.  **Tecnologia de Ponta (Vite + Tailwind CSS):** Carregamento em frações de segundo e pontuação máxima no Google Core Web Vitals.
2.  **SEO e AEO Integrados:** Meta tags dinâmicas, arquitetura de links internos e marcação de microdados do Schema.org para que o Google e assistentes de IA (como Gemini e ChatGPT) citem e recomendem sua marca.
3.  **Chamadas para Ação (CTA) Persuasivas:** Formulários integrados ao CRM comercial para captação automática de dados.

---

## Como Otimizar para Motores de Resposta (AEO)

Hoje em dia, os usuários não usam apenas o Google Search; eles perguntam diretamente para assistentes como o ChatGPT, Perplexity ou Gemini: *"Qual o melhor parceiro de desenvolvimento de IA em São Paulo?"*

Para garantir que o seu site seja a resposta entregue por essas IAs:

*   **Mantenha o conteúdo ultra atualizado:** Motores de busca priorizam fatos novos e conteúdos ricos.
*   **Crie Hyperlinks Relevantes:** Construa uma rede forte de links internos e referências externas respeitadas.
*   **Use Perguntas e Respostas Claros (FAQ):** Estruture as perguntas mais comuns dos seus clientes de forma direta.

### O Próximo Passo para sua Empresa

Sua presença digital deve ser seu vendedor mais eficiente, funcionando 24 horas por dia. [Conheça as soluções de Growth e Tecnologia da Vezzitech](#solucoes) e transforme sua presença online em uma máquina de vendas. [Clique aqui para falar com nossos especialistas](#cta).`,
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
    author: "system_seed"
  }
];

export const seedPostsIfEmpty = async () => {
  if (isSeeding) return;
  isSeeding = true;
  try {
    for (const post of defaultSeedPosts) {
      await addPost(post);
    }
  } catch (error) {
    console.error("Error seeding posts:", error);
  } finally {
    isSeeding = false;
  }
};

export const addPost = async (post: Omit<Post, 'id' | 'createdAt'>) => {
  const path = 'posts';
  try {
    return await addDoc(collection(db, path), {
      ...post,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, path);
  }
};

export const updatePost = async (postId: string, data: Partial<Omit<Post, 'id' | 'createdAt'>>) => {
  const path = `posts/${postId}`;
  try {
    const postRef = doc(db, 'posts', postId);
    return await updateDoc(postRef, data);
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, path);
  }
};

export const deletePost = async (postId: string) => {
  const path = `posts/${postId}`;
  try {
    const postRef = doc(db, 'posts', postId);
    return await deleteDoc(postRef);
  } catch (error) {
    handleFirestoreError(error, OperationType.DELETE, path);
  }
};
