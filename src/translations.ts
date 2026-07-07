export interface TranslationSchema {
  nav: {
    services: string;
    ecosystem: string;
    plans: string;
    method: string;
    blog: string;
    clients: string;
    cta: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    microcopy: string;
    graphTitle: string;
  };
  nodes: {
    orquestrador: { title: string; metric: string; desc: string };
    gemini: { title: string; metric: string; desc: string };
    vertex: { title: string; metric: string; desc: string };
    cloud: { title: string; metric: string; desc: string };
  };
  ticker: string[];
  valueProp: {
    tag: string;
    heading: string;
    items: Array<{ num: string; title: string; desc: string }>;
  };
  servicesSection: {
    tag: string;
    heading: string;
    items: Array<{ num: string; title: string; desc: string }>;
    aiLayer: {
      title: string;
      desc: string;
    };
  };
  verticalsSection: {
    tag: string;
    heading: string;
    sub: string;
    items: Array<{ id: string; title: string; desc: string }>;
  };
  processSection: {
    tag: string;
    heading: string;
    items: Array<{ num: string; title: string; desc: string }>;
  };
  metricsSection: {
    tag: string;
    heading: string;
    sub: string;
    badge: string;
    items: Array<{ value: string; label: string; desc: string }>;
  };
  ecosystemSection: {
    heading: string;
    items: Array<{ title: string; desc: string }>;
  };
  blogSection: {
    tag: string;
    heading: string;
    sub: string;
    readMore: string;
    newsTitle: string;
    newsSub: string;
    newsPlaceholder: string;
    newsBtn: string;
    newsSuccess: string;
    editorial: string;
    editorialSub: string;
    dialogCta: string;
  };
  faqSection: {
    heading: string;
    items: Array<{ q: string; a: string }>;
  };
  schedulingSection: {
    tag: string;
    heading: string;
    sub: string;
    p1: string;
    p1Sub: string;
    p2: string;
    p2Sub: string;
    successTitle: string;
    successSub: string;
    successDesc: string;
    meetBtn: string;
    anotherBtn: string;
    form: {
      name: string;
      email: string;
      company: string;
      purpose: string;
      purposeOptions: Array<{ value: string; label: string }>;
      date: string;
      time: string;
      submit: string;
    };
  };
  pricingSection: {
    tag: string;
    heading: string;
    sub: string;
    plans: Array<{
      id: string;
      name: string;
      price: string;
      period: string;
      desc: string;
      features: string[];
      cta: string;
      badge?: string;
    }>;
  };
  footerSection: {
    desc: string;
    navTitle: string;
    specTitle: string;
    locationTitle: string;
    location: string;
    rights: string;
    privacy: string;
    terms: string;
  };
  chatbot: {
    welcome: string;
    typing: string;
    quickReplies: string[];
    replies: {
      marketing: string;
      pricing: string;
      tech: string;
      yes: string;
      default: string;
    };
  };
  conversionBanner: {
    heading: string;
    sub: string;
    cta: string;
  };
}

export type Language = 'pt' | 'en';

export const translations: Record<Language, TranslationSchema> = {
  pt: {
    nav: {
      services: "Setores",
      ecosystem: "Processo",
      plans: "Planos",
      method: "Resultados",
      blog: "Artigos",
      clients: "Diferenciais",
      cta: "Falar com Especialista"
    },
    hero: {
      badge: "Seu funil inteiro sob medida — Do tráfego à conversão",
      headline: "Seu site converte, domina o Google e as respostas de IA.",
      subheadline: "Site premium de alta performance, SEO estratégico e tráfego pago com prazo e resultado combinados em contrato.",
      ctaPrimary: "Simular Retorno da Minha Empresa",
      ctaSecondary: "Ver Planos e Preços",
      microcopy: "+120% de tráfego orgânico médio · 3,5x mais conversão · Site carregando em menos de 1 segundo",
      graphTitle: "Interactive AI Graph"
    },
    nodes: {
      orquestrador: {
        title: "Site Premium Sob Medida",
        metric: "Incluso na Assinatura",
        desc: "Desenvolvimento de site ou landing page em código limpo com velocidade máxima (100/100 Mobile). Nada de templates pesados. Manutenção inclusa."
      },
      gemini: {
        title: "SEO & AEO Preditivo",
        metric: "Busca e Chatbots de IA",
        desc: "Indexação e otimização avançada para que sua marca domine o Google e seja citada como resposta recomendada no ChatGPT, Gemini e Perplexity."
      },
      vertex: {
        title: "Google Ads Semanal",
        metric: "Gestão e Otimização",
        desc: "Estruturação cirúrgica de campanhas com pesquisa contínua de termos quentes e controle rigoroso de CPL para garantir leads qualificados."
      },
      cloud: {
        title: "Produção de Conteúdo",
        metric: "Copy & Criativos",
        desc: "Escrita de artigos ricos, textos persuasivos para redes sociais e design profissional de criativos para maximizar conversões de anúncios."
      }
    },
    ticker: [
      "SITES DE ALTA CONVERSÃO",
      "SEO & AEO ESTRATÉGICO",
      "GESTÃO DE TRÁFEGO PAGO",
      "CONTEÚDO EM ESCALA",
      "AGENTES DE IA",
      "PERFORMANCE MÁXIMA WEB"
    ],
    valueProp: {
      tag: "DIFERENCIAÇÃO",
      heading: "Por que empresas trocam a agência atual pela Vezzitech.",
      items: [
        {
          num: "01",
          title: "Código próprio, seu para sempre",
          desc: "Sem templates, sem dependência de terceiro. Site rápido, seguro e 100% seu — inclusive o código-fonte."
        },
        {
          num: "02",
          title: "SEO tradicional + AEO",
          desc: "Você aparece no Google de hoje e na resposta de IA de amanhã. A maioria das agências brasileiras ainda nem fala sobre isso."
        },
        {
          num: "03",
          title: "Criativo que reduz custo por clique",
          desc: "Design e copy pensados para conversão, não só estética — isso baixa o CPA nas suas campanhas pagas automaticamente."
        },
        {
          num: "04",
          title: "Automação que não some depois da venda",
          desc: "Agentes de IA continuam qualificando lead e dando suporte depois que o projeto entra no ar — não é entrega e adeus."
        }
      ]
    },
    servicesSection: {
      tag: "NOSSOS PILARES",
      heading: "Três alavancas. Um só resultado: mais cliente pagando.",
      items: [
        {
          num: "01",
          title: "Site que Vende",
          desc: "Não fazemos 'sites bonitos'. Fazemos páginas que carregam rápido, guiam o visitante até a decisão de compra e não perdem venda por lentidão ou confusão. Código próprio, seu para sempre — nada de template genérico."
        },
        {
          num: "02",
          title: "SEO & AEO: apareça no Google e na resposta da IA",
          desc: "Enquanto seus concorrentes ainda brigam pela primeira página do Google, colocamos sua marca dentro da resposta que o ChatGPT, Gemini ou Perplexity dá antes mesmo do cliente abrir um site. Isso é AEO — e quem não estiver nisso agora, vai ficar invisível pra IA em pouco tempo."
        },
        {
          num: "03",
          title: "Campanhas que Não Queimam Verba",
          desc: "Gestão de tráfego pago conectada ao site e ao conteúdo — não um serviço isolado. Como a landing page já converte melhor e a copy já é persuasiva, o custo por lead cai e o orçamento rende mais, com o mesmo investimento."
        }
      ],
      aiLayer: {
        title: "Camada transversal — Agentes de IA",
        desc: "Chatbots e automações que qualificam lead 24h, atendem dúvida recorrente e passam pro seu time só quem já está pronto pra comprar. Potencializa os três pilares acima, sem substituir nenhum deles."
      }
    },
    verticalsSection: {
      tag: "PARA O SEU NEGÓCIO",
      heading: "Presença digital sob medida para o seu setor.",
      sub: "Cada nicho tem uma dor diferente. Adaptamos site, conteúdo e campanhas para o que realmente move o seu mercado.",
      items: [
        {
          id: "varejo",
          title: "Varejo & E-commerce",
          desc: "Lojas virtuais rápidas o suficiente para não perder venda por lentidão, SEO de produto que aparece antes do concorrente, e campanhas que trazem cliente pronto pra comprar — não só clique."
        },
        {
          id: "saude",
          title: "Saúde & Clínicas",
          desc: "Site que passa confiança em segundos, SEO local para aparecer quando o paciente busca 'perto de mim', e campanhas segmentadas para agenda cheia sem depender só de indicação."
        },
        {
          id: "industria",
          title: "B2B & Indústrias",
          desc: "Portal institucional que fecha negócio com quem decide, conteúdo técnico que educa o comprador antes da reunião, e tráfego qualificado que não desperdiça verba com curioso."
        },
        {
          id: "financas",
          title: "Serviços & Fintechs",
          desc: "Comunicação institucional que transmite segurança, SEO/AEO corporativo para ser citado como referência, e site blindado com performance de nível bancário."
        },
        {
          id: "educacao",
          title: "Educação & Cursos",
          desc: "Landing pages de venda com copy que converte, criativos que prendem atenção em segundos, e campanhas otimizadas para custo por matrícula — não por clique."
        },
        {
          id: "agro",
          title: "Agronegócio",
          desc: "Identidade visual forte para negociação internacional, posicionamento orgânico para exportadoras, e plataforma digital premium para fechar contrato de alto valor."
        }
      ]
    },
    processSection: {
      tag: "METODOLOGIA",
      heading: "Como estruturamos sua jornada — do diagnóstico ao resultado em caixa.",
      items: [
        {
          num: "01",
          title: "Diagnóstico Real",
          desc: "Analisamos seu site atual, identificamos onde você está perdendo venda (velocidade, SEO, funil) e mostramos isso com dado, não opinião."
        },
        {
          num: "02",
          title: "Estrutura & Copy",
          desc: "Construímos a arquitetura da página e escrevemos a copy focada em uma coisa: fazer o visitante decidir."
        },
        {
          num: "03",
          title: "Desenvolvimento & Automação",
          desc: "Colocamos no ar um site rápido, implementamos SEO técnico nativo e ativamos agentes de IA para captar lead sem parar."
        },
        {
          num: "04",
          title: "Tráfego & Otimização Contínua",
          desc: "Lançamos campanhas, monitoramos indexação (Google e IA) e otimizamos toda semana com base em dado real, não achismo."
        }
      ]
    },
    metricsSection: {
      tag: "PROVA DE PERFORMANCE",
      heading: "Resultado real, não projeção.",
      sub: "Médias calculadas com base nos últimos projetos entregues pela Vezzitech.",
      badge: "Verified Growth Metrics",
      items: [
        {
          value: "+120%",
          label: "Tráfego Orgânico Qualificado",
          desc: "Aumento médio no volume de buscas qualificadas ao indexar conteúdos ricos no Google tradicional e nos novos motores de busca de IA."
        },
        {
          value: "3.5x",
          label: "Taxa de Conversão de Leads",
          desc: "Melhoria na taxa de conversão de cliques frios para leads prontos para comercial por meio de páginas super rápidas e redação persuasiva."
        },
        {
          value: "< 1s",
          label: "Tempo de Carregamento Web",
          desc: "Código de alto nível otimizado para que seu cliente nunca sofra com lentidão, reduzindo drasticamente a taxa de rejeição no celular."
        }
      ]
    },
    ecosystemSection: {
      heading: "Tecnologia & Marketing",
      items: [
        { title: "Desenvolvimento Web", desc: "Sites institucionais, e-commerces e portais que carregam de forma instantânea em qualquer dispositivo." },
        { title: "SEO & AEO", desc: "Sua marca indexada nos resultados tradicionais de busca e nos novos canais de inteligência artificial generativa." },
        { title: "Marketing de Atração", desc: "Criação de materiais criativos, posts de engajamento e setup profissional de tráfego pago de alto ROI." },
        { title: "Agentes Inteligentes", desc: "Automação de suporte ao consumidor, qualificação e captação ativa de novos leads direto em sua TI." }
      ]
    },
    blogSection: {
      tag: "CONHECIMENTO PRÁTICO",
      heading: "Insights práticos de Marketing e Tecnologia.",
      sub: "Acompanhe guias reais, táticas e análises profundas de especialistas sobre como escalar tráfego pago, dominar o SEO técnico e converter cliques em faturamento real.",
      readMore: "Ler artigo completo",
      newsTitle: "Receba inteligência de crescimento",
      newsSub: "Assine nossa newsletter e receba guias práticos semanais sobre Google Ads de alta conversão, otimização SEO/AEO e táticas de conversão.",
      newsPlaceholder: "Seu e-mail profissional",
      newsBtn: "Inscrever-se na Lista",
      newsSuccess: "✓ Inscrição confirmada com sucesso!",
      editorial: "Time Técnico Vezzitech",
      editorialSub: "Estratégia de Marketing, Tráfego Pago e Engenharia Web",
      dialogCta: "Conversar com Estrategista"
    },
    faqSection: {
      heading: "Perguntas Frequentes",
      items: [
        {
          q: "Vocês desenvolvem sites proprietários ou usam templates prontos?",
          a: "Código nativo, limpo e otimizado para desempenho, SEO e conversão. O projeto e o código-fonte são inteiramente seus — sem dependência de plataforma de terceiro."
        },
        {
          q: "O que é AEO (Answer Engine Optimization)?",
          a: "É a otimização para mecanismos de resposta de Inteligência Artificial (ChatGPT, Gemini, Perplexity). Garantimos que sua marca seja citada quando o cliente perguntar para essas IAs — antes mesmo dele chegar ao Google."
        },
        {
          q: "Como os Agentes de IA ajudam em vendas?",
          a: "Atendem 24h, respondem dúvida recorrente, captam dado do lead, agendam reunião e enviam só quem está pronto para comprar direto ao seu time comercial."
        },
        {
          q: "Qual a importância das campanhas e materiais de marketing?",
          a: "Visual de impacto + copy focada em conversão reduzem o custo por clique nas campanhas pagas — mais contato e mais visibilidade com o mesmo orçamento."
        },
        {
          q: "E se eu já tenho um site — preciso refazer tudo do zero?",
          a: "Não necessariamente. No diagnóstico gratuito, avaliamos o que pode ser otimizado e o que realmente compensa refazer, sem empurrar projeto maior do que o necessário."
        },
        {
          q: "Quanto tempo leva para ver resultado?",
          a: "SEO e AEO são estratégias de médio prazo (normalmente resultado consistente a partir do 3º mês). Site e campanhas pagas costumam gerar impacto já nas primeiras semanas após o lançamento."
        }
      ]
    },
    schedulingSection: {
      tag: "CONSULTORIA",
      heading: "Comece com um diagnóstico real — não com uma proposta genérica.",
      sub: "Nesta reunião de 30 minutos, sem compromisso, vamos analisar a velocidade do seu site atual, mapear oportunidades de SEO/AEO e mostrar exatamente onde você está perdendo cliente hoje. Você sai com o diagnóstico completo — mesmo que decida não seguir com a gente. (Abrimos um número limitado de diagnósticos gratuitos por mês para manter a qualidade da análise. 12 vagas em julho)",
      p1: "Velocidade & Presença SEO",
      p1Sub: "Mapeamento dos gargalos técnicos de carregamento do seu site atual e das principais buscas do seu mercado.",
      p2: "Funil de Vendas & Tráfego",
      p2Sub: "Estruturação teórica de campanhas de Google Ads de alto impacto para atrair clientes ideais.",
      successTitle: "Diagnóstico Agendado com Sucesso!",
      successSub: "Enviamos todos os dados oficiais do agendamento para o seu e-mail.",
      successDesc: "Seu link exclusivo da reunião no Google Meet já está pronto:",
      meetBtn: "Acessar Reunião no Google Meet",
      anotherBtn: "Visualizar outros horários",
      form: {
        name: "Nome Completo",
        email: "E-mail Corporativo",
        company: "Nome da Empresa",
        purpose: "Seu Principal Desafio",
        purposeOptions: [
          { value: "Fazer Novo Site", label: "Desenvolver Site de Alta Performance" },
          { value: "SEO & AEO", label: "Domínio de Busca (SEO/AEO)" },
          { value: "Materiais de Marketing", label: "Conteúdos & Criativos de Vendas" },
          { value: "Agente IA / TI", label: "Implementar Google Ads + Atração" }
        ],
        date: "Selecione o Dia",
        time: "Horários Disponíveis",
        submit: "Quero Meu Diagnóstico Gratuito"
      }
    },
    pricingSection: {
      tag: "PLANOS",
      heading: "Escolha o nível de aceleração que sua empresa precisa agora.",
      sub: "Sem contrato engessado, sem letra miúda. Cada plano inclui site, SEO/AEO e gestão de tráfego na proporção certa para o estágio do seu negócio — do primeiro reposicionamento até a escala corporativa.",
      plans: [
        {
          id: "essential",
          name: "Essential Growth",
          price: "R$ 1.990",
          period: "/mês",
          desc: "Ideal para empresas que precisam estabelecer presença digital imponente com site ultra veloz e otimizado para o Google. (Ideal para quem fatura até R$30k/mês)",
          features: [
            "Website Premium Sob Medida (Código nativo < 1s)",
            "Suporte Contínuo & Atualizações Semanais de Layout",
            "Setup de Otimização SEO Básica (Google)",
            "Análise Mensal de SEO & Relatório de Ranqueamento",
            "Hospedagem Inclusa no Servidor Cloud da Vezzitech",
            "Suporte Dedicado por WhatsApp de Segunda a Sexta"
          ],
          cta: "Quero o Plano Essential",
          badge: "STARTUP"
        },
        {
          id: "professional",
          name: "Growth Engine",
          price: "R$ 3.490",
          period: "/mês",
          desc: "O plano mais completo para empresas que querem tracionar vendas com Google Ads e dominar o tráfego de busca. (Ideal para quem já roda tráfego pago e quer profissionalizar)",
          features: [
            "Tudo do Plano Essential",
            "Gestão Completa & Otimização Semanal de Google Ads",
            "Escrita Mensal de 4 Artigos Ricos (SEO/AEO/Blog)",
            "Design Profissional de Criativos de Anúncios",
            "Ajustes Semanais de Copywriting para Vendas",
            "Agente IA de Atendimento Cognitivo (Básico)",
            "Reunião Mensal de Alinhamento via Google Meet"
          ],
          cta: "Quero o Plano Growth Engine",
          badge: "MAIS RECOMENDADO"
        },
        {
          id: "enterprise",
          name: "Enterprise Scale",
          price: "R$ 5.990",
          period: "/mês",
          desc: "Ideal para líderes de mercado que exigem escala agressiva de tráfego, múltiplos sites e funis complexos. (Ideal para escala corporativa)",
          features: [
            "Tudo do Plano Growth Engine",
            "Múltiplos Websites & Landing Pages ilimitados",
            "Produção Semanal de Conteúdo e Criativos de Elite",
            "Gestão Avançada de Tráfego (Google Ads + Meta Ads)",
            "Otimização AEO Premium (Citações no ChatGPT/Gemini)",
            "Agente IA Avançado (Integrado com CRM + Google Meet)",
            "Suporte VIP WhatsApp com SLA de até 4 horas"
          ],
          cta: "Quero o Plano Enterprise Scale",
          badge: "RECOMENDADO PARA ESCALA"
        }
      ]
    },
    footerSection: {
      desc: "Site premium de alta performance, SEO estratégico e tráfego pago com prazo e resultado combinados em contrato. Tudo sob um único parceiro para o seu funil de vendas inteiro.",
      navTitle: "Navegação",
      specTitle: "Nossos Serviços",
      locationTitle: "Sede Corporativa",
      location: "Av. Paulista, 1000\nSão Paulo - SP, Brasil\nCEP: 01310-100",
      rights: "VEZZITECH EXPERTS - MARKETING & TI. TODOS OS DIREITOS RESERVADOS.",
      privacy: "Políticas de Privacidade",
      terms: "Termos Gerais de Uso"
    },
    chatbot: {
      welcome: "Olá! Sou o assistente virtual da Vezzitech. Como podemos simplificar o seu Marketing e seu site com nossos planos de assinatura hoje?",
      typing: "Escrevendo...",
      quickReplies: [
        "Quais são os Planos?",
        "Site + Conteúdo + Google Ads",
        "Como funciona a assinatura?"
      ],
      replies: {
        marketing: "Nossas assinaturas unificam o que você realmente precisa para vender: site ultra rápido, produção de artigos e gestão profissional de Google Ads. Tudo sem estresse de setup e sem contratos longos. Gostaria de agendar uma reunião rápida de 15 min pelo Meet?",
        pricing: "Temos 3 assinaturas de crescimento previsível: Essential (R$ 1.990/mês para site premium e atualizações), Growth Engine (R$ 3.490/mês incluindo artigos e Google Ads semanal) e Enterprise (R$ 5.990/mês para múltiplos sites e anúncios em múltiplos canais). Qual deles atende sua meta de vendas atual?",
        tech: "Codificamos seu site proprietário em código puro, garantindo velocidade incrível (tempo de carregamento < 1s) para reter seus visitantes, e aliamos a campanhas otimizadas de anúncios semanais. Deseja agendar um Meet rápido com nosso estrategista?",
        yes: "Excelente escolha! Escolha o melhor dia e horário na nossa seção de 'Consultoria de Elite' logo abaixo.",
        default: "Simplifique seu marketing com uma assinatura recorrente de elite pela metade do custo de contratações diretas ou agências lentas. Deseja agendar um diagnóstico de 30 minutos via Google Meet?"
      }
    },
    conversionBanner: {
      heading: "Pronto para parar de perder cliente para quem aparece primeiro?",
      sub: "Garanta uma vaga na nossa agenda de diagnóstico ao vivo e veja, com dado, o que está te custando venda hoje.",
      cta: "Quero Consultoria Gratuita"
    }
  },
  en: {
    nav: {
      services: "Sectors",
      ecosystem: "Process",
      plans: "Plans",
      method: "Results",
      blog: "Articles",
      clients: "Why Us",
      cta: "Talk to Expert"
    },
    hero: {
      badge: "Your entire funnel covered — From traffic to conversion",
      headline: "Websites that convert, ranking high on Google & AI engines.",
      subheadline: "Premium high-performance websites, strategic SEO, and paid traffic with guaranteed results in contract.",
      ctaPrimary: "Start Now",
      ctaSecondary: "View Ecosystem",
      microcopy: "+120% avg organic traffic · 3.5x higher conversion · Sub-second page loads",
      graphTitle: "Interactive AI Graph"
    },
    nodes: {
      orquestrador: {
        title: "Website Development",
        metric: "Performance: 100/100",
        desc: "Your digital presence built with the fastest and most modern web frameworks and languages on the market."
      },
      gemini: {
        title: "Predictive SEO & AEO",
        metric: "Answer Engines",
        desc: "Cutting-edge optimization to rank high on traditional search engines and be cited as answers by chatbots like ChatGPT."
      },
      vertex: {
        title: "AI Agents",
        metric: "Client Support 24/7",
        desc: "Advanced prompt engineering and intelligent workflows designed to capture, convert, and qualify leads automatically."
      },
      cloud: {
        title: "Marketing Materials",
        metric: "Creative Scale",
        desc: "Automated high-quality visual assets, highly persuasive ad copies, and promotional graphics optimized with data."
      }
    },
    ticker: [
      "WEBSITE DEVELOPMENT",
      "PREDICTIVE SEO & AEO",
      "AUTONOMOUS AI AGENTS",
      "SCALE MARKETING MATERIALS",
      "TAILORED IT SOLUTIONS",
      "MAXIMUM WEB PERFORMANCE",
      "GROWTH MARKETING",
      "EXTREME CONVERSION"
    ],
    valueProp: {
      tag: "DIFFERENTIATION",
      heading: "Elevate your brand with unmatched tech and organic visibility.",
      items: [
        {
          num: "01",
          title: "Certified systems & IT engineering",
          desc: "We build ultra-fast, robust, secure websites and portals. Clean code, native technical SEO, fast load times, and reliable cloud-hosting are standard."
        },
        {
          num: "02",
          title: "Search engine & AI dominance (SEO/AEO)",
          desc: "We optimize your business not only for traditional Google search, but for generative answer engines (ChatGPT, Gemini, Perplexity), capturing modern high-intent search traffic."
        },
        {
          num: "03",
          title: "Impact visuals & copywriting",
          desc: "High-end promo assets, social posts, and ad creatives compiled at scale with breathtaking visual aesthetics and high conversion copy."
        },
        {
          num: "04",
          title: "AI chatbots & conversions",
          desc: "We integrate custom virtual assistants on your channels for immediate leads qualification, customer onboarding, and seamless CRM synchronization."
        }
      ]
    },
    servicesSection: {
      tag: "OUR PILLARS",
      heading: "Three elite execution pillars. One simple subscription.",
      items: [
        {
          num: "01",
          title: "Website Development",
          desc: "Ultra-fast, custom-developed websites and landing pages built for maximum mobile & desktop sales conversion and included in your recurring plan."
        },
        {
          num: "02",
          title: "Content Production",
          desc: "SEO-optimized blog articles, rich visual assets, professional copywriting, and conversion-focused social media & ad creatives."
        },
        {
          num: "03",
          title: "SEO & AEO Strategy",
          desc: "High-authority organic positioning on Google search, combined with advanced citation optimization to be the top answer in AI models like ChatGPT."
        }
      ],
      aiLayer: {
        title: "Transversal Layer — AI Agents",
        desc: "Chatbots and automations that qualify leads 24/7, answer common questions, and pass only ready-to-buy customers to your team. Enhances the three pillars above without replacing any of them."
      }
    },
    verticalsSection: {
      tag: "FOR YOUR BUSINESS",
      heading: "Tailored Marketing & Tech for your sector.",
      sub: "We customize our unified subscription of Premium Website, Content Production, and Google Ads to match the exact client acquisition needs of your business niche.",
      items: [
        {
          id: "varejo",
          title: "Retail & E-commerce",
          desc: "Ultra-fast custom storefronts built for conversion, paired with persuasive content generation and continuous Google Ads to drive high-intent buyers."
        },
        {
          id: "saude",
          title: "Healthcare & Clinics",
          desc: "High-credibility landing pages with appointment forms, authority-driven copywriting, and precise search campaigns to bring in private patients."
        },
        {
          id: "industria",
          title: "B2B & Manufacturing",
          desc: "Elite corporate portals, recurring high-authority technical blog articles for SEO/AEO, and highly optimized search traffic targeting key industry decision-makers."
        },
        {
          id: "financas",
          title: "Services & Fintechs",
          desc: "Ultra-secure corporate websites, premium copywriting to build institutional trust, and continuous lead generation campaigns on Google Ads."
        },
        {
          id: "educacao",
          title: "Education & Courses",
          desc: "High-performance instant sales funnels, conversion copywriting for sales pages, and professional paid traffic management to scale student enrollment."
        },
        {
          id: "agro",
          title: "Agribusiness",
          desc: "Prestigious global brand presence, secure corporate portals, and strategic Google search marketing to connect your business with key global partners."
        }
      ]
    },
    processSection: {
      tag: "METHODOLOGY",
      heading: "How we accelerate your business.",
      items: [
        {
          num: "01",
          title: "Mapping & Search Audit",
          desc: "We analyze your digital presence, perform web performance audits, and map out your SEO/AEO search potential."
        },
        {
          num: "02",
          title: "Design & Copywriting",
          desc: "We draft premium visual layouts, craft high-conversion copy, and organize scalable marketing material pipelines."
        },
        {
          num: "03",
          title: "Development & AI setup",
          desc: "We code clean, super-fast pages, deploy self-contained conversational AI agents, and wire your leads captures."
        },
        {
          num: "04",
          title: "Traffic & Optimization",
          desc: "We deploy optimization cycles, ensure proper search indexing, and run continuous conversions and speed testing."
        }
      ]
    },
    metricsSection: {
      tag: "PROVEN VALUE",
      heading: "Real corporate innovation metrics.",
      sub: "We don't deliver generic advice. We deploy production-ready code, agents, and systems that impact your bottom line directly.",
      badge: "Verified Tech Builders",
      items: [
        {
          value: "+120%",
          label: "Organic Traffic",
          desc: "Average improvement in high-intent visitors through modern search and answer engine optimization (SEO/AEO)."
        },
        {
          value: "3.5x",
          label: "Conversion Rate",
          desc: "Acceleration in converting cold visitors into warm prospective clients through ultra-fast loaders and persuasive layouts."
        },
        {
          value: "< 1s",
          label: "Loading Speed",
          desc: "Elite hosting setups and perfect core web vitals designed to maximize customer retention and rank higher."
        }
      ]
    },
    ecosystemSection: {
      heading: "Tech & Marketing Ecosystem",
      items: [
        { title: "Web Performance", desc: "Corporate sites, custom landing pages, and online storefronts built for instant loading speed." },
        { title: "SEO & AEO", desc: "Placing your business as a top search result on Google and as a trusted citation in AI answers." },
        { title: "Growth Marketing", desc: "Aesthetic graphic design, copywriting, high-converting ads, and complete social assets production." },
        { title: "AI Automation", desc: "Virtual assistants and intelligent workflows synced to your operations and leads management." }
      ]
    },
    blogSection: {
      tag: "RELEVANT KNOWLEDGE",
      heading: "Insights on Marketing & IT",
      sub: "Read through technical breakdowns of how to optimize conversions, rank higher, and build engaging AI workflows.",
      readMore: "Read article",
      newsTitle: "Stay ahead of the competition",
      newsSub: "Subscribe to our weekly newsletter for premium tips on SEO, web speed, visual copywriting, and AI automation.",
      newsPlaceholder: "Your professional email",
      newsBtn: "Subscribe",
      newsSuccess: "✓ Thank you for subscribing!",
      editorial: "Vezzitech Editorial Team",
      editorialSub: "Estratégia de Marketing, Tráfego e Engenharia Web",
      dialogCta: "Talk to Specialist"
    },
    faqSection: {
      heading: "Frequently Asked Questions",
      items: [
        {
          q: "Do you develop custom websites or use ready templates?",
          a: "We write clean, lightweight custom code optimized strictly for performance, SEO/AEO compatibility, and modern UI/UX design. You have complete code ownership."
        },
        {
          q: "What is AEO (Answer Engine Optimization)?",
          a: "It is SEO tailored for AI query services (like ChatGPT, Gemini, Perplexity). We ensure search query bots find, process, and cite your brand as their answer."
        },
        {
          q: "How do conversational AI agents help in sales?",
          a: "They respond to customer inquiries 24/7 on your web pages, answer recurring questions instantly, collect lead information, and schedule Meet calls for your sales reps."
        },
        {
          q: "How important are visual marketing materials for campaigns?",
          a: "High-quality visual graphics paired with professional copywriting significantly increase user engagement, driving down ad click costs and optimizing budgets."
        }
      ]
    },
    schedulingSection: {
      tag: "ELITE ADVISORY",
      heading: "Book a free session to scale your Marketing & IT.",
      sub: "Plan your next steps. In this 30-minute Google Meet consultation, we'll review your page speed, map out organic search potentials, and outline customer-service AI integrations.",
      p1: "Performance & Copywriting",
      p1Sub: "An in-depth review of your web design speed, user journey, and conversion copy.",
      p2: "Search & Automation Roadmap",
      p2Sub: "Strategic exploration of AEO/SEO opportunities and virtual agent integrations.",
      successTitle: "Session Booked Successfully!",
      successSub: "We have sent calendar invites and session details to your inbox.",
      successDesc: "Your official Google Meet session URL is ready:",
      meetBtn: "Join Google Meet Strategy Call",
      anotherBtn: "Schedule another slot",
      form: {
        name: "Full Name",
        email: "Professional Email Address",
        company: "Company Name",
        purpose: "Primary Digital Need",
        purposeOptions: [
          { value: "Fazer Novo Site", label: "Develop High-Conversion Web" },
          { value: "SEO & AEO", label: "SEO & AEO Brand Mapping" },
          { value: "Materiais de Marketing", label: "Create Marketing Materials" },
          { value: "Agente IA / TI", label: "Deploy Smart AI Agents / IT" }
        ],
        date: "Select Date",
        time: "Available Time Slot",
        submit: "Secure Free Google Meet Booking"
      }
    },
    pricingSection: {
      tag: "RECURRING GROWTH PLANS",
      heading: "Simplify your operations. Choose your impact plan.",
      sub: "Ongoing website development, elite content production, and monthly SEO + Google Ads traffic management in a single recurring monthly subscription. Predictable scale without agency red tape.",
      plans: [
        {
          id: "essential",
          name: "Essential Growth",
          price: "R$ 1.990",
          period: "/mo",
          desc: "Perfect for companies looking to build a strong digital presence and drive search traffic with an ultra-fast website.",
          features: [
            "Premium Website Development (Lightning speed)",
            "Ongoing Support & Weekly Layout Iterations",
            "Core Search Engine Optimization (SEO) Setup",
            "Monthly SEO Reports & Keyword Performance Audit",
            "High-end Cloud Hosting & SSL Security Inclusions",
            "Mon-Fri Dedicated WhatsApp Support"
          ],
          cta: "Subscribe to Essential Plan",
          badge: "STARTUP"
        },
        {
          id: "professional",
          name: "Growth Engine",
          price: "R$ 3.490",
          period: "/mo",
          desc: "Our most popular plan for brands aiming to scale traffic, capture consistent leads, and gain search engine authority.",
          features: [
            "All Essential Plan features",
            "Monthly Content Production (4 SEO/AEO optimized articles)",
            "Full Google Ads Management & Weekly Optimization",
            "Advanced Technical SEO (Sales-focused keywords)",
            "Full Creative Copywriting & Promotional Design Assets",
            "Implementation of a Conversational AI Sales Agent (Basic)",
            "Monthly Strategic Meeting on Google Meet"
          ],
          cta: "Subscribe to Growth Engine",
          badge: "MOST POPULAR"
        },
        {
          id: "enterprise",
          name: "Enterprise Scale",
          price: "R$ 5.990",
          period: "/mo",
          desc: "Designed for industry leaders requiring aggressive market acquisition, endless creative assets, and customized AI flows.",
          features: [
            "All Growth Engine features",
            "Unlimited Sites, Landing Pages & Layout iterations",
            "Weekly Content Production (Premium Blog Articles, Ad Copies & Scripts)",
            "Advanced Multi-channel Ads (Google Ads + Meta Ads integrated)",
            "AEO Premium Optimization (Featured citations in ChatGPT, Perplexity)",
            "Advanced Custom Cognitive AI Assistant (Synced with CRM & Calendar)",
            "Priority Support with 4-hour SLA"
          ],
          cta: "Subscribe to Enterprise Scale",
          badge: "RECOMMENDED FOR SCALE"
        }
      ]
    },
    footerSection: {
      desc: "Premium high-performance websites, strategic SEO, and paid traffic with guaranteed results in contract. Your entire marketing and sales funnel under a single strategic partner.",
      navTitle: "Navigation",
      specTitle: "Our Services",
      locationTitle: "HQ Office",
      location: "Av. Paulista, 1000\nSao Paulo - SP, Brazil\nCEP: 01310-100",
      rights: "VEZZITECH EXPERTS - MARKETING & IT. ALL RIGHTS RESERVED.",
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    },
    chatbot: {
      welcome: "Hi there! I am Vezzitech's virtual assistant. How can we elevate your Marketing & IT today?",
      typing: "Typing...",
      quickReplies: [
        "Need a new website",
        "How does SEO/AEO work?",
        "AI Agents & Support"
      ],
      replies: {
        marketing: "Fantastic! We design custom high-performance websites and write optimized scripts to rank on search engines and win answers in ChatGPT/Gemini. Would you like to consult with our team?",
        pricing: "Our strategy pricing is custom-tailored to deliver immediate ROI and visibility. Let's arrange a free 30-minute Meet call to discuss detailed models!",
        tech: "We develop ultra-fast modern code, deploy context-aware chatbot models, and provide full visual materials to back up your ads. Let's schedule a call to design your roadmap?",
        yes: "Perfect! Simply scroll down to the 'Elite Advisory' section on our page and select your preferred date.",
        default: "Great! Our mission is to scale user visits and conversions using smart tech and marketing. Let's schedule a free 30-minute strategy call on Meet?"
      }
    },
    conversionBanner: {
      heading: "Ready to revolutionize your Marketing & IT?",
      sub: "Check our available schedules on Google Meet and take the first step towards establishing absolute organic dominance.",
      cta: "Claim Free Consultation"
    }
  }
};
