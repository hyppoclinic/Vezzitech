export interface TranslationSchema {
  brand: {
    name: string;
    descriptor: string;
    tagline: string;
    category: string;
    pitchShort: string;
    pitchFull: string;
  };
  nav: {
    solutions: string;
    engineering: string;
    offer: string;
    cases: string;
    insights: string;
    about: string;
    contact: string;
    ctaPrimary: string;
    whatsapp: string;
  };
  offer: {
    kicker: string;
    heading: string;
    badge: string;
    priceTag: string;
    priceValue: string;
    pricePeriod: string;
    sub: string;
    featuresTitle: string;
    features: Array<{
      title: string;
      desc: string;
      icon: string;
    }>;
    ctaPrimary: string;
    ctaWhatsapp: string;
    trustBadges: string[];
  };
  hero: {
    kicker: string;
    titleLine1: string;
    titleHighlight: string;
    titleLine3: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    microtext: string;
    systemNodes: Array<{ label: string; sub: string }>;
  };
  problem: {
    kicker: string;
    heading: string;
    subheading: string;
    copy: string[];
    highlight: string;
    nodes: Array<{ id: string; title: string; desc: string; icon: string }>;
  };
  methodology: {
    kicker: string;
    heading: string;
    sub: string;
    steps: Array<{
      number: string;
      code: string;
      title: string;
      desc: string;
    }>;
    closingPhrase: string;
  };
  solutions: {
    kicker: string;
    heading: string;
    sub: string;
    units: Array<{
      id: string;
      tag: string;
      title: string;
      highlight: string;
      desc: string;
      services: string[];
      cta: string;
      icon: string;
    }>;
  };
  differentiation: {
    kicker: string;
    heading: string;
    sub: string;
    table: {
      headers: [string, string, string, string];
      rows: Array<{
        dimension: string;
        agency: string;
        softwareHouse: string;
        vezzitech: string;
      }>;
    };
    quote: string;
  };
  manifesto: {
    badge: string;
    title: string;
    sub: string;
    lines: Array<{
      id: string;
      pillar: string;
      statement: string;
      pitfall: string;
      resolution: string;
      tag: string;
    }>;
    nexus: {
      badge: string;
      title: string;
      description: string;
      equation: Array<{
        label: string;
        desc?: string;
        isOperator?: boolean;
        isHighlight?: boolean;
      }>;
      ctaText: string;
      ctaSub: string;
    };
    brandText: string;
  };
  cases: {
    kicker: string;
    heading: string;
    sub: string;
    ctaText: string;
    items: Array<{
      id: string;
      client: string;
      segment: string;
      problem: string;
      solution: string;
      tech: string[];
      metrics: string[];
      badge: string;
    }>;
  };
  mindset: {
    kicker: string;
    heading: string;
    sub: string;
    cards: Array<{
      title: string;
      desc: string;
      icon: string;
    }>;
  };
  insights: {
    kicker: string;
    heading: string;
    sub: string;
    articles: Array<{
      category: string;
      title: string;
      excerpt: string;
      readTime: string;
      date: string;
    }>;
  };
  ctaFinal: {
    kicker: string;
    heading: string;
    sub: string;
    bottlenecks: Array<{ id: string; title: string; desc: string }>;
    form: {
      title: string;
      name: string;
      namePlaceholder: string;
      company: string;
      companyPlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      website: string;
      websitePlaceholder: string;
      bottleneckLabel: string;
      submitButton: string;
      whatsappAlt: string;
      successMessage: string;
    };
  };
  pages: {
    engineering: {
      heroTitle: string;
      heroSub: string;
      sectionTitle: string;
      sectionCopy: string;
      systemElements: string[];
      cta: string;
    };
    growth: {
      heroTitle: string;
      heroHighlight: string;
      heroSub: string;
      flow: Array<{ step: string; desc: string }>;
      cta: string;
    };
    experience: {
      heroTitle: string;
      heroHighlight: string;
      heroSub: string;
      comparison: {
        traditional: string[];
        vezzitech: string[];
      };
      cta: string;
    };
    technology: {
      heroTitle: string;
      heroSub: string;
      cta: string;
    };
    intelligence: {
      heroTitle: string;
      heroSub: string;
      cta: string;
    };
    about: {
      heroTitle: string;
      copyParagraphs: string[];
      pillars: Array<{ title: string; desc: string }>;
      manifesto: string[];
    };
  };
  footer: {
    descriptor: string;
    tagline: string;
    solutionsTitle: string;
    companyTitle: string;
    contactTitle: string;
    phone: string;
    email: string;
    rights: string;
    description: string;
    securityBadge: string;
    navTitle: string;
    servicesTitle: string;
    location: string;
  };
}

export type Language = 'pt' | 'en';

export const translations: Record<Language, TranslationSchema> = {
  pt: {
    brand: {
      name: "VEZZITECH",
      descriptor: "Tecnologia & Marketing de Alta Performance",
      tagline: "Transformamos tecnologia em crescimento.",
      category: "Engenharia de Crescimento",
      pitchShort: "A Vezzitech conecta marketing, software, inteligência artificial, automação e dados para ajudar empresas a crescer.",
      pitchFull: "A Vezzitech é uma empresa de Tecnologia & Marketing de Alta Performance. Atuamos na interseção entre estratégia, aquisição, software, inteligência artificial, automação e dados para construir operações mais eficientes e escaláveis. Chamamos essa abordagem de Engenharia de Crescimento."
    },
    nav: {
      solutions: "Soluções",
      engineering: "Método",
      offer: "Plano R$ 799",
      cases: "Resultados",
      insights: "Insights",
      about: "Sobre",
      contact: "Contato",
      ctaPrimary: "Falar com especialista",
      whatsapp: "WhatsApp"
    },
    offer: {
      kicker: "PLANO DE ACELERAÇÃO DIGITAL",
      heading: "Tráfego Pago + Criação de Site + Google Meu Negócio",
      badge: "CONDIÇÃO EXCLUSIVA",
      priceTag: "INVESTIMENTO MENSAL",
      priceValue: "R$ 799,00",
      pricePeriod: "/mês",
      sub: "Um pacote completo de alto impacto, com forte percepção de valor, foco total em aquisição de clientes, presença digital de autoridade e conversão direta para o seu negócio.",
      featuresTitle: "O pacote completo inclui:",
      features: [
        {
          title: "Gestão de Tráfego Pago",
          desc: "Campanhas otimizadas no Google Ads e Meta Ads focadas na atração de clientes qualificados e geração de oportunidades diárias.",
          icon: "target"
        },
        {
          title: "Criação de Site Profissional",
          desc: "Website moderno, ultra veloz, responsivo e preparado para transformar visitantes em contatos e vendas reais.",
          icon: "layout"
        },
        {
          title: "Google Meu Negócio Otimizado",
          desc: "Estruturação, otimização e gestão estratégica do seu perfil no Google para dominar as buscas locais da sua região.",
          icon: "map-pin"
        }
      ],
      ctaPrimary: "Quero crescer por R$ 799/mês",
      ctaWhatsapp: "Falar no WhatsApp",
      trustBadges: [
        "Sem Contrato Abusivo",
        "Configuração Rápida",
        "Acompanhamento de Resultados",
        "Atendimento Especializado"
      ]
    },
    hero: {
      kicker: "TECNOLOGIA & MARKETING DE ALTA PERFORMANCE",
      titleLine1: "Transformamos tecnologia",
      titleHighlight: "em crescimento.",
      titleLine3: "Engenharia de Crescimento.",
      subtitle: "Unimos estratégia, tráfego pago, websites e presença local para gerar mais oportunidades, autoridade e vendas para empresas que querem crescer.",
      ctaPrimary: "Falar com um especialista",
      ctaSecondary: "Conhecer a oferta",
      microtext: "Tráfego Pago • Criação de Site • Google Meu Negócio",
      systemNodes: [
        { label: "ESTRATÉGIA", sub: "Plano de aquisição & posicionamento" },
        { label: "TRÁFEGO PAGO", sub: "Mídia de alta performance Google/Meta" },
        { label: "WEBSITES", sub: "Experiências digitais de alta conversão" },
        { label: "PRESENÇA LOCAL", sub: "Google Meu Negócio otimizado" },
        { label: "AUTOMAÇÃO", sub: "Workflows & atração de leads" },
        { label: "CRESCIMENTO", sub: "Vendas previsíveis e autoridade" }
      ]
    },
    problem: {
      kicker: "DIAGNÓSTICO DE MERCADO",
      heading: "Sua empresa não precisa de mais ferramentas isoladas.",
      subheading: "Precisa de uma estrutura integrada de crescimento.",
      copy: [
        "Muitas empresas possuem site, redes sociais, anúncios e ferramentas isoladas, mas não possuem uma operação integrada e comercialmente forte.",
        "Anúncios sem uma página rápida e sem gestão do perfil local geram desperdício de orçamento e leads perdidos para concorrentes.",
        "A Vezzitech entra para conectar aquisição, presença digital, tecnologia, conversão, automação, dados e crescimento em um fluxo único."
      ],
      highlight: "Conectamos todas as frentes para transformar visitantes em oportunidades e vendas.",
      nodes: [
        { id: "aquisicao", title: "Aquisição & Mídia", desc: "Tráfego pago no Google e Meta Ads para atrair clientes prontos para comprar.", icon: "target" },
        { id: "presenca", title: "Presença Digital", desc: "Websites ultra velozes e Google Meu Negócio transmitindo autoridade.", icon: "globe" },
        { id: "conversao", title: "Conversão Direta", desc: "Estruturas e landing pages otimizadas para maximizar o número de contatos.", icon: "trending-up" },
        { id: "dados", title: "Dados & Otimização", desc: "Acompanhamento contínuo para escalar os canais de maior retorno.", icon: "bar-chart" }
      ]
    },
    methodology: {
      kicker: "NOSSO MÉTODO",
      heading: "Engenharia de Crescimento em 7 etapas.",
      sub: "Trabalhamos com uma estrutura contínua e estratégica para conectar aquisição, experiência digital, tecnologia e dados.",
      steps: [
        { number: "01", code: "DIAGNOSE", title: "Diagnóstico", desc: "Mapeamos os gargalos de vendas, presença e conversão que travam o crescimento." },
        { number: "02", code: "STRATEGY", title: "Estratégia", desc: "Desenhamos o plano de mídia, oferta irresistível e posicionamento de mercado." },
        { number: "03", code: "ACQUIRE", title: "Aquisição", desc: "Ativamos campanhas de tráfego pago de alta performance no Google Ads e Meta Ads." },
        { number: "04", code: "DIGITAL_EXP", title: "Experiência Digital", desc: "Desenvolvemos o website profissional e otimizamos a ficha do Google Meu Negócio." },
        { number: "05", code: "CONVERT", title: "Conversão", desc: "Estruturamos pontos de contato direto e atendimento via WhatsApp com agilidade." },
        { number: "06", code: "DATA_OPT", title: "Dados & Otimização", desc: "Mensuramos os indicadores em tempo real para otimização constante de investimento." },
        { number: "07", code: "SCALE", title: "Escala", desc: "Aumentamos a previsibilidade de receita, autoridade e geração constante de clientes." }
      ],
      closingPhrase: "Estratégia integrando tecnologia. Tráfego gerando oportunidades. Estrutura impulsionando crescimento."
    },
    solutions: {
      kicker: "CAPACIDADES E SERVIÇOS",
      heading: "4 frentes estratégicas para acelerar sua empresa.",
      sub: "Agrupamos nossa expertise em 4 unidades estratégicas completas para cobrir toda a jornada da sua empresa.",
      units: [
        {
          id: "growth",
          tag: "GROWTH",
          title: "Transformamos investimento em aquisição.",
          highlight: "Operações de mídia e aquisição orientadas a CAC e ROI sustentáveis.",
          desc: "Estratégia completa de marketing de performance, tráfego pago, otimização de mecanismos de busca e inteligência de conversão.",
          services: ["Google Ads", "Meta Ads", "Performance Marketing", "SEO", "AEO (AI Engine)", "CRO", "Growth Strategy", "Tracking & GTM", "Analytics"],
          cta: "Acelerar aquisição →",
          icon: "trending-up"
        },
        {
          id: "experience",
          tag: "EXPERIENCE",
          title: "Experiências digitais construídas para converter.",
          highlight: "Websites ultra velozes e plataformas com design de nível mundial.",
          desc: "Criamos portais institucionais, landing pages de alta conversão e plataformas web modernas com tecnologia React/Node de resposta instantânea.",
          services: ["Websites Institucionais", "Landing Pages", "E-commerce", "UX/UI Design", "React / Next.js", "Node.js", "Web Applications", "Redesign de Portais", "Performance Web"],
          cta: "Modernizar experiência →",
          icon: "monitor"
        },
        {
          id: "technology",
          tag: "TECHNOLOGY",
          title: "Tecnologia sob medida para sua operação.",
          highlight: "Engenharia de software focada em resolver desafios complexos de negócio.",
          desc: "Quando ferramentas prontas não atendem sua demanda, desenvolvemos softwares nativos, portais de clientes, CRMs sob medida e APIs robustas.",
          services: ["Software Development", "Sistemas Internos", "CRM sob Medida", "APIs REST & Webhooks", "Integrações de Sistemas", "Portais de Cliente", "Plataformas SaaS", "Dashboards Executivos"],
          cta: "Construir tecnologia →",
          icon: "cpu"
        },
        {
          id: "intelligence",
          tag: "INTELLIGENCE",
          title: "IA, automação e dados aplicados ao negócio.",
          highlight: "Transformamos tarefas manuais em workflows automatizados e inteligentes.",
          desc: "Implementação prática de agentes autônomos de Inteligência Artificial, fluxos de automação comercial e dashboards de inteligência de negócios.",
          services: ["AI Agents", "Automações Comerciais", "Integrações de CRM & ERP", "Business Intelligence", "Dashboards em Tempo Real", "Workflows Operacionais", "Chatbots & WhatsApp AI", "Pipelines de Dados"],
          cta: "Automatizar operação →",
          icon: "bot"
        }
      ]
    },
    differentiation: {
      kicker: "DIFERENCIAÇÃO ESTRATÉGICA",
      heading: "Agência Tradicional vs. Modelo Vezzitech",
      sub: "A maioria das agências vende serviços isolados. A Vezzitech entrega uma estrutura integrada de crescimento.",
      table: {
        headers: ["Critério", "Agência Tradicional", "Software House", "Vezzitech"],
        rows: [
          {
            dimension: "Estrutura",
            agency: "Serviços isolados e sem conexão",
            softwareHouse: "Escrita pura de código técnico",
            vezzitech: "Estrutura integrada de crescimento"
          },
          {
            dimension: "Foco Principal",
            agency: "Foco em entregas de peças e posts",
            softwareHouse: "Foco em especificações do sistema",
            vezzitech: "Foco em performance e oportunidades"
          },
          {
            dimension: "Conexão de Mídia & Site",
            agency: "Site desconectado do marketing",
            softwareHouse: "Código sem visão de vendas",
            vezzitech: "Tecnologia conectada à aquisição"
          },
          {
            dimension: "Análise de Resultados",
            agency: "Relatórios genéricos de vaidade",
            softwareHouse: "Entrega do escopo de software",
            vezzitech: "Dados orientados a decisões reais"
          },
          {
            dimension: "Gestão da Operação",
            agency: "Exige múltiplos fornecedores",
            softwareHouse: "Depende de agência externa",
            vezzitech: "Operação centralizada e eficiente"
          },
          {
            dimension: "Execução",
            agency: "Execução pontual e engessada",
            softwareHouse: "Suporte técnico passivo",
            vezzitech: "Engenharia de crescimento contínua"
          }
        ]
      },
      quote: "Não entregamos apenas anúncios ou um site isolado. Construímos a infraestrutura técnica e comercial completa para acelerar sua empresa."
    },
    manifesto: {
      badge: "MANIFESTO DE CRESCIMENTO",
      title: "O Princípio da Integração",
      sub: "Engenharia de Crescimento para empresas que querem ir além de ações isoladas.",
      lines: [
        {
          id: "strategy",
          pillar: "Estratégia",
          statement: "Estratégia sem execução",
          pitfall: "é apenas apresentação.",
          resolution: "Transformamos diagnósticos e planos em código, automações e campanhas ativas em poucos dias.",
          tag: "Execução Ágil"
        },
        {
          id: "tech",
          pillar: "Tecnologia",
          statement: "Tecnologia sem estratégia",
          pitfall: "é apenas complexidade.",
          resolution: "Desenvolvemos aplicações ultrarrápidas projetadas exclusivamente para gerar receita e converter clientes.",
          tag: "Foco em Negócio"
        },
        {
          id: "marketing",
          pillar: "Marketing",
          statement: "Marketing sem dados",
          pitfall: "é apenas aposta.",
          resolution: "Conectamos canais de aquisição a métricas comerciais reais com CAC, LTV e ROAS auditáveis.",
          tag: "Dados Reais"
        }
      ],
      nexus: {
        badge: "A RESPOSTA VEZZITECH",
        title: "Nós conectamos os três pilares.",
        description: "Em vez de contratar uma agência que não entende de código ou programadores que não entendem de vendas, a Vezzitech entrega o ecossistema completo para acelerar sua empresa.",
        equation: [
          { label: "Estratégia", desc: "Visão Comercial" },
          { label: "+", isOperator: true },
          { label: "Tecnologia", desc: "Alta Performance" },
          { label: "+", isOperator: true },
          { label: "Dados & Mídia", desc: "Aquisição Real" },
          { label: "=", isOperator: true },
          { label: "Crescimento", desc: "Previsível & Escalável", isHighlight: true }
        ],
        ctaText: "Estruturar Minha Empresa com a Vezzitech",
        ctaSub: "Diagnóstico gratuito e plano de ação personalizado"
      },
      brandText: "VEZZITECH — Engenharia de Crescimento"
    },
    cases: {
      kicker: "CASES E RESULTADOS",
      heading: "Tecnologia só tem valor quando gera crescimento real.",
      sub: "Resultados reais em produção gerando receita, redução de custos e ganho de eficiência operacional.",
      ctaText: "Solicitar diagnóstico similar →",
      items: [
        {
          id: "case-1",
          client: "Nexus Logistics B2B",
          segment: "Logística & Transporte Nacional",
          problem: "Processos manuais em planilhas e gargalo na captação de novos contratos corporativos.",
          solution: "Plataforma web customizada integrada a campanhas de Google/LinkedIn Ads e automação de orçamentos.",
          tech: ["React", "Node.js", "Google Ads", "PostgreSQL", "WhatsApp AI"],
          metrics: ["+312% em contratos captados", "70% redução no tempo de cotação", "4.8x ROAS em mídia"],
          badge: "Growth + Tech"
        },
        {
          id: "case-2",
          client: "FinPay Plataforma SaaS",
          segment: "Fintech de Cobranças Recorrentes",
          problem: "Baixa taxa de conversão na landing page e abandono no onboarding de novos assinantes.",
          solution: "Redesign completo com Next.js de resposta instantânea, checkout otimizado (CRO) e régua de remarketing.",
          tech: ["Next.js", "CRO Optimization", "Meta Ads", "Analytics GTM", "Stripe API"],
          metrics: ["R$ 2.4M+ processados em 90 dias", "+145% aumento na conversão de cadastro", "Carregamento em 0.4s"],
          badge: "Experience + Growth"
        },
        {
          id: "case-3",
          client: "IndustriAL Automações",
          segment: "Equipamentos Industriais",
          problem: "Equipe comercial perdendo 20+ horas semanais qualificando leads sem perfil.",
          solution: "Agente de IA via WhatsApp para triagem automática integrado ao CRM e relatórios em tempo real.",
          tech: ["AI Agents", "Python", "API WhatsApp", "HubSpot CRM", "Power BI"],
          metrics: ["140h/mês economizadas", "Tempo de resposta reduzido para 5s", "+80% satisfação dos leads"],
          badge: "Intelligence + AI"
        }
      ]
    },
    mindset: {
      kicker: "NOSSOS PILARES",
      heading: "Princípios que orientam nossa engenharia.",
      sub: "Não desenvolvemos software por estética ou rodamos mídia por vaidade. Todo projeto segue pilares claros de retorno sobre investimento e excelência técnica.",
      cards: [
        {
          title: "Business First",
          desc: "Primeiro entendemos o modelo de negócio, margens e gargalos comerciais. Depois desenhamos a tecnologia.",
          icon: "briefcase"
        },
        {
          title: "Built to Perform",
          desc: "Velocidade de carregamento, segurança e conversão fazem parte da arquitetura desde o primeiro dia.",
          icon: "zap"
        },
        {
          title: "AI Native",
          desc: "Aplicamos inteligência artificial e agentes autônomos onde há ganho real de produtividade e margem.",
          icon: "cpu"
        },
        {
          title: "Data Driven",
          desc: "Todas as decisões, alterações de mídia e refatorações de sistema são fundamentadas em métricas reais.",
          icon: "line-chart"
        }
      ]
    },
    insights: {
      kicker: "INTELIGÊNCIA & ARTIGOS",
      heading: "Conteúdo prático para empresas que querem escalar.",
      sub: "Artigos estratégicos sobre tecnologia, aquisição de tráfego, automação com IA e arquitetura de dados.",
      articles: [
        {
          category: "Growth Engineering",
          title: "Por que separar Marketing de Tecnologia está destruindo seu ROI de Aquisição",
          excerpt: "Entenda por que empresas que integram tracking, landing pages de resposta rápida e mídia paga crescem até 3x mais rápido.",
          readTime: "5 min de leitura",
          date: "Agosto 2026"
        },
        {
          category: "Inteligência Artificial",
          title: "Agentes de IA além do Chatbot: Como automatizar triagens e operações comerciais complexas",
          excerpt: "Casos práticos de empresas que substituíram formulários lentos por agentes autônomos conectados ao CRM.",
          readTime: "7 min de leitura",
          date: "Agosto 2026"
        },
        {
          category: "High Performance Web",
          title: "A matemática da velocidade: Como 1 segundo a menos de carregamento dobra suas conversões",
          excerpt: "Uma análise técnica de arquiteturas React/Next e por que construtores lentos afastam clientes qualificados.",
          readTime: "4 min de leitura",
          date: "Julho 2026"
        }
      ]
    },
    ctaFinal: {
      kicker: "DIAGNÓSTICO ESTRATÉGICO",
      heading: "Pronto para transformar tecnologia em vendas previsíveis?",
      sub: "Fale com a equipe da Vezzitech e descubra a estratégia sob medida para acelerar a presença digital e a escala do seu negócio.",
      bottlenecks: [
        { id: "pacote-799", title: "Plano R$ 799/mês", desc: "Quero o combo Tráfego Pago + Criação de Site + Google Meu Negócio." },
        { id: "aquisicao", title: "Tráfego Pago & Mídia", desc: "Preciso gerar mais oportunidades e vendas diárias com Google e Meta Ads." },
        { id: "website", title: "Criação de Website", desc: "Preciso de um site moderno, ultra veloz e focado em alta conversão." },
        { id: "google-local", title: "Google Meu Negócio", desc: "Quero otimizar minha ficha e dominar a presença local da minha região." },
        { id: "diagnostico", title: "Diagnóstico Completo", desc: "Quero uma análise estratégica completa da estrutura da minha empresa." }
      ],
      form: {
        title: "Solicitar Diagnóstico Estratégico",
        name: "Seu nome",
        namePlaceholder: "ex: Rodrigo Canavese",
        company: "Nome da sua empresa",
        companyPlaceholder: "ex: Minha Empresa",
        email: "E-mail de contato",
        emailPlaceholder: "contato@suaempresa.com.br",
        phone: "Telefone / WhatsApp",
        phonePlaceholder: "(44) 99826-6950",
        website: "Website atual (opcional)",
        websitePlaceholder: "www.suaempresa.com.br",
        bottleneckLabel: "Interesse Selecionado",
        submitButton: "Solicitar Atendimento de Crescimento",
        whatsappAlt: "Ou converse diretamente pelo WhatsApp",
        successMessage: "Solicitação recebida com sucesso! Nossa equipe entrará em contato em breve para apresentar a melhor estratégia para sua empresa."
      }
    },
    pages: {
      engineering: {
        heroTitle: "Engenharia de Crescimento.",
        heroSub: "Uma abordagem que conecta estratégia, tecnologia, marketing, automação e dados para construir empresas mais eficientes e escaláveis.",
        sectionTitle: "Growth não é uma campanha. É um sistema.",
        sectionCopy: "Uma empresa cresce quando diferentes elementos funcionam juntos em sincronia perfeita: aquisição, conversão, atendimento, tecnologia, dados, processos e retenção. A Vezzitech analisa e constrói esse sistema como um todo.",
        systemElements: ["Aquisição de Tráfego", "Conversão Web", "Sistemas & APIs", "Automação com IA", "Dados & Analytics", "Otimização de ROI"],
        cta: "Diagnosticar minha operação →"
      },
      growth: {
        heroTitle: "Mais do que tráfego.",
        heroHighlight: "Construímos aquisição.",
        heroSub: "Criamos operações de performance orientadas a geração de demanda, conversão e crescimento sustentável.",
        flow: [
          { step: "Tráfego", desc: "Google Ads, Meta Ads e SEO técnico direcionados ao público comprador." },
          { step: "Conversão", desc: "Landing pages e web apps de resposta instantânea projetados para converter." },
          { step: "CRM & Vendas", desc: "Integração automática dos leads no pipeline comercial em tempo real." },
          { step: "Dados & Otimização", desc: "Métricas claras de CAC, LTV e ROI para escala contínua de orçamento." }
        ],
        cta: "Acelerar minha aquisição →"
      },
      experience: {
        heroTitle: "Seu site não deve apenas existir.",
        heroHighlight: "Deve trabalhar pelo seu negócio.",
        heroSub: "Criamos websites rápidos, modernos e orientados à conversão utilizando tecnologia de alta performance.",
        comparison: {
          traditional: [
            "Carregamento lento e pesado (WordPress/Templates)",
            "Difícil de evoluir e código engessado",
            "Baixa integração com sistemas de vendas",
            "Design genérico e pouca credibilidade"
          ],
          vezzitech: [
            "Alta performance com React / Next.js e resposta instantânea",
            "Arquitetura sob medida para escala ilimitada",
            "Conexão nativa com CRM, APIs e WhatsApp AI",
            "Design de classe mundial com alta taxa de conversão"
          ]
        },
        cta: "Modernizar meu site →"
      },
      technology: {
        heroTitle: "Tecnologia sob medida para sua operação.",
        heroSub: "Quando ferramentas prontas não resolvem o problema, construímos a solução de engenharia perfeita.",
        cta: "Conversar sobre meu projeto →"
      },
      intelligence: {
        heroTitle: "Inteligência Artificial aplicada ao negócio.",
        heroSub: "Menos tarefas manuais. Mais velocidade, eficiência e inteligência operacional para sua equipe.",
        cta: "Encontrar oportunidades de automação →"
      },
      about: {
        heroTitle: "Construímos tecnologia para gerar impacto.",
        copyParagraphs: [
          "A Vezzitech nasceu da ideia de que marketing, tecnologia e dados não deveriam funcionar como áreas isoladas.",
          "Empresas crescem mais quando estratégia, aquisição, software, automação e inteligência trabalham juntos sob o mesmo ecossistema.",
          "Nossa missão é eliminar gargalos operacionais e comerciais através da Engenharia de Crescimento."
        ],
        pillars: [
          { title: "Business First", desc: "Tecnologia a serviço de métricas reais de negócio." },
          { title: "Transparência Total", desc: "Código limpo, documentação clara e zero amarras." },
          { title: "Engenharia de Elite", desc: "Padrão de código e arquitetura de nível global." }
        ],
        manifesto: [
          "Não construímos tecnologia apenas para funcionar. Construímos para gerar impacto.",
          "Não fazemos marketing apenas para aparecer. Fazemos para crescer.",
          "Crescimento não acontece por acaso. Crescimento é construído."
        ]
      }
    },
    footer: {
      descriptor: "Tecnologia & Marketing de Alta Performance",
      tagline: "Transformamos tecnologia em crescimento.",
      solutionsTitle: "Ecossistema",
      companyTitle: "Empresa",
      contactTitle: "Contato Direto",
      phone: "+55 (44) 99826-6950",
      email: "contato@vezzitech.com",
      rights: "© {year} Vezzitech. Todos os direitos reservados. Engenharia de Crescimento.",
      description: "Conectamos estratégia, tráfego pago, desenvolvimento de software, automação e inteligência artificial para eliminar gargalos e acelerar o crescimento de empresas.",
      securityBadge: "Arquitetura Corporativa & LGPD Ready",
      navTitle: "Navegação",
      servicesTitle: "Soluções",
      location: "Atendimento Global • Sede em Maringá/PR - Brasil"
    }
  },
  en: {
    brand: {
      name: "VEZZITECH",
      descriptor: "High-Performance Technology & Marketing",
      tagline: "We turn technology into growth.",
      category: "Growth Engineering",
      pitchShort: "Vezzitech connects marketing, software, artificial intelligence, automation, and data to help companies scale.",
      pitchFull: "Vezzitech is a High-Performance Technology & Marketing company operating at the intersection of strategy, acquisition, software, AI, automation, and data. We call this Growth Engineering."
    },
    nav: {
      solutions: "Solutions",
      engineering: "Method",
      offer: "Plan $799",
      cases: "Results",
      insights: "Insights",
      about: "About",
      contact: "Contact",
      ctaPrimary: "Talk to a specialist",
      whatsapp: "WhatsApp"
    },
    offer: {
      kicker: "COMPLETE GROWTH PACKAGE",
      heading: "Paid Traffic + Website Creation + Google Business Profile",
      badge: "EXCLUSIVE PLAN",
      priceTag: "MONTHLY INVESTMENT",
      priceValue: "R$ 799.00",
      pricePeriod: "/month",
      sub: "A high-impact, accessible package with strong perceived value, focused on client acquisition, digital authority, and direct conversion.",
      featuresTitle: "The complete package includes:",
      features: [
        {
          title: "Paid Traffic Management",
          desc: "Optimized Google Ads and Meta Ads campaigns focused on bringing qualified leads ready to buy.",
          icon: "target"
        },
        {
          title: "Professional Website Creation",
          desc: "Modern, ultra-fast, responsive website engineered to convert visitors into real leads and sales.",
          icon: "layout"
        },
        {
          title: "Google Business Profile",
          desc: "Setup, optimization, and management of your local Google profile to dominate local search.",
          icon: "map-pin"
        }
      ],
      ctaPrimary: "I want to grow for R$ 799/mo",
      ctaWhatsapp: "Talk on WhatsApp",
      trustBadges: [
        "No Abusive Lock-in",
        "Fast Setup",
        "Results Tracking",
        "Expert Support"
      ]
    },
    hero: {
      kicker: "HIGH-PERFORMANCE TECHNOLOGY & MARKETING",
      titleLine1: "We turn technology",
      titleHighlight: "into growth.",
      titleLine3: "Growth Engineering.",
      subtitle: "We combine strategy, paid traffic, websites, and local presence to generate more leads, authority, and sales for companies ready to grow.",
      ctaPrimary: "Talk to a specialist",
      ctaSecondary: "Explore the offer",
      microtext: "Paid Traffic • Website Creation • Google Business Profile",
      systemNodes: [
        { label: "STRATEGY", sub: "Acquisition & positioning plan" },
        { label: "PAID TRAFFIC", sub: "High-performance Google & Meta Ads" },
        { label: "WEBSITES", sub: "High-conversion digital experiences" },
        { label: "LOCAL PRESENCE", sub: "Optimized Google Business Profile" },
        { label: "AUTOMATION", sub: "Lead capture workflows" },
        { label: "GROWTH", sub: "Predictable sales & market authority" }
      ]
    },
    problem: {
      kicker: "MARKET DIAGNOSIS",
      heading: "Your company doesn't need more isolated tools.",
      subheading: "It needs a unified growth engine.",
      copy: [
        "Marketing separated from technology wastes budget and burns leads.",
        "Technology without strategy creates technical debt with zero commercial return.",
        "Data without decision doesn't drive growth."
      ],
      highlight: "Vezzitech connects everything into a unified ecosystem.",
      nodes: [
        { id: "marketing", title: "Marketing", desc: "Unintegrated campaigns generate traffic without conversion.", icon: "megaphone" },
        { id: "tecnologia", title: "Technology", desc: "Siloed systems create manual bottlenecks.", icon: "code" },
        { id: "inteligencia", title: "Intelligence", desc: "Manual tasks limit team speed.", icon: "bot" },
        { id: "dados", title: "Data", desc: "Disconnected metrics hinder precise decisions.", icon: "bar-chart" }
      ]
    },
    methodology: {
      kicker: "OUR METHODOLOGY",
      heading: "Growth Engineering in 7 strategic stages.",
      sub: "Our methodology connects strategy, acquisition, technology, automation, and data to identify bottlenecks and build high-performance growth engines.",
      steps: [
        { number: "01", code: "DIAGNOSE", title: "Diagnose", desc: "Uncover commercial & operational bottlenecks." },
        { number: "02", code: "ARCHITECT", title: "Architect", desc: "Design the optimal solution combining tech & media." },
        { number: "03", code: "BUILD", title: "Build", desc: "Develop high-converting web apps & systems." },
        { number: "04", code: "ACQUIRE", title: "Acquire", desc: "Activate high-performance paid media channels." },
        { number: "05", code: "AUTOMATE", title: "Automate", desc: "Automate repetitive tasks with AI agents & APIs." },
        { number: "06", code: "OPTIMIZE", title: "Optimize", desc: "Continuously measure ROI & optimize growth." }
      ],
      closingPhrase: "Strategy before execution. Technology before scale. Data before decisions."
    },
    solutions: {
      kicker: "CAPABILITIES & SERVICES",
      heading: "4 integrated pillars to scale your business.",
      sub: "We organize our expertise into 4 strategic units to power your business journey.",
      units: [
        {
          id: "growth",
          tag: "GROWTH",
          title: "We turn investment into customer acquisition.",
          highlight: "Paid media operations driven by sustainable CAC and ROI.",
          desc: "Full performance marketing strategy, paid ads, SEO, AI search optimization, and conversion rate optimization.",
          services: ["Google Ads", "Meta Ads", "Performance Marketing", "SEO", "AEO (AI Search)", "CRO", "Growth Strategy", "Tracking & GTM", "Analytics"],
          cta: "Accelerate acquisition →",
          icon: "trending-up"
        },
        {
          id: "experience",
          tag: "EXPERIENCE",
          title: "Digital experiences built to convert.",
          highlight: "Ultra-fast websites and world-class design platforms.",
          desc: "We build corporate portals, high-converting landing pages, and web apps with instant React/Node performance.",
          services: ["Company Websites", "Landing Pages", "E-commerce", "UX/UI Design", "React / Next.js", "Node.js", "Web Applications", "Website Redesign", "Web Performance"],
          cta: "Modernize experience →",
          icon: "monitor"
        },
        {
          id: "technology",
          tag: "TECHNOLOGY",
          title: "Custom technology for your operation.",
          highlight: "Software engineering focused on solving complex business challenges.",
          desc: "When off-the-shelf software fails, we build custom web platforms, client portals, tailored CRMs, and APIs.",
          services: ["Software Development", "Internal Systems", "Custom CRM", "REST APIs & Webhooks", "System Integrations", "Client Portals", "SaaS Platforms", "Executive Dashboards"],
          cta: "Build technology →",
          icon: "cpu"
        },
        {
          id: "intelligence",
          tag: "INTELLIGENCE",
          title: "AI, automation, and data applied to business.",
          highlight: "Transform manual tasks into intelligent automated workflows.",
          desc: "Practical deployment of autonomous AI agents, sales automations, and business intelligence dashboards.",
          services: ["AI Agents", "Sales Automation", "CRM & ERP Integrations", "Business Intelligence", "Real-time Dashboards", "Operational Workflows", "WhatsApp AI Chatbots", "Data Pipelines"],
          cta: "Automate operation →",
          icon: "bot"
        }
      ]
    },
    differentiation: {
      kicker: "STRATEGIC DIFFERENTIATION",
      heading: "Traditional Agency vs. The Vezzitech Model",
      sub: "While traditional agencies handle marketing and software houses write code, Vezzitech connects both sides of growth.",
      table: {
        headers: ["Dimension", "Traditional Agency", "Software House", "Vezzitech"],
        rows: [
          {
            dimension: "Core Focus",
            agency: "Isolated ads & design",
            softwareHouse: "Pure code delivery",
            vezzitech: "Strategy + Marketing + Tech"
          },
          {
            dimension: "Deliverables",
            agency: "Ad campaigns & banners",
            softwareHouse: "Technical code files",
            vezzitech: "Acquisition Engine + Custom Tech"
          },
          {
            dimension: "Results Tracking",
            agency: "Vanity metrics reports",
            softwareHouse: "Scope feature delivery",
            vezzitech: "Business Metrics, CAC & ROI"
          },
          {
            dimension: "Automation & AI",
            agency: "Limited to off-the-shelf tools",
            softwareHouse: "Low focus on growth & sales",
            vezzitech: "AI + Operations + Growth"
          },
          {
            dimension: "Partnership Model",
            agency: "Requires external dev hires",
            softwareHouse: "Depends on external marketing",
            vezzitech: "Single Integrated Ecosystem"
          }
        ]
      },
      quote: "Growth Engineering is not a single ad campaign or code file. It is a unified system engineered to scale your company."
    },
    manifesto: {
      badge: "GROWTH MANIFESTO",
      title: "The Principle of Integration",
      sub: "Growth Engineering for companies ready to move beyond disconnected tools.",
      lines: [
        {
          id: "strategy",
          pillar: "Strategy",
          statement: "Strategy without execution",
          pitfall: "is just a slide deck.",
          resolution: "We transform strategy and diagnostics into real code, automations, and active pipelines in days.",
          tag: "Agile Execution"
        },
        {
          id: "tech",
          pillar: "Technology",
          statement: "Technology without strategy",
          pitfall: "is just complexity.",
          resolution: "We develop ultra-fast applications engineered strictly to capture demand and convert customers.",
          tag: "Business Driven"
        },
        {
          id: "marketing",
          pillar: "Marketing",
          statement: "Marketing without data",
          pitfall: "is just gambling.",
          resolution: "We link acquisition channels to verified business metrics with clear CAC, LTV, and ROAS tracking.",
          tag: "Real Data"
        }
      ],
      nexus: {
        badge: "THE VEZZITECH ADVANTAGE",
        title: "We connect all three pillars.",
        description: "Instead of hiring an agency that doesn't understand code or programmers who don't understand sales, Vezzitech provides the full ecosystem to scale your company.",
        equation: [
          { label: "Strategy", desc: "Commercial Vision" },
          { label: "+", isOperator: true },
          { label: "Technology", desc: "High Performance" },
          { label: "+", isOperator: true },
          { label: "Data & Media", desc: "True Acquisition" },
          { label: "=", isOperator: true },
          { label: "Growth", desc: "Predictable & Scalable", isHighlight: true }
        ],
        ctaText: "Engineer My Growth System with Vezzitech",
        ctaSub: "Free strategic diagnostic & customized roadmap"
      },
      brandText: "VEZZITECH — Growth Engineering"
    },
    cases: {
      kicker: "PROVEN RESULTS",
      heading: "Technology only matters when it delivers business growth.",
      sub: "Proven production outcomes driving revenue growth and operational speed.",
      ctaText: "Request similar diagnostic →",
      items: [
        {
          id: "case-1",
          client: "Nexus Logistics B2B",
          segment: "National Supply Chain & Freight",
          problem: "Manual spreadsheet bottlenecks and slow corporate contract acquisition.",
          solution: "Custom web app integrated with Google/LinkedIn Ads campaigns and quotation automation.",
          tech: ["React", "Node.js", "Google Ads", "PostgreSQL", "WhatsApp AI"],
          metrics: ["+312% qualified contracts", "70% faster quoting time", "4.8x ROAS on paid media"],
          badge: "Growth + Tech"
        },
        {
          id: "case-2",
          client: "FinPay SaaS Platform",
          segment: "Recurring Billing Fintech",
          problem: "Low landing page conversion rate and high drop-off during onboarding.",
          solution: "Complete Next.js redesign with instant loading speed, CRO optimization, and remarketing engine.",
          tech: ["Next.js", "CRO Optimization", "Meta Ads", "Analytics GTM", "Stripe API"],
          metrics: ["$2.4M+ processed in 90 days", "+145% signup conversion lift", "0.4s load time"],
          badge: "Experience + Growth"
        },
        {
          id: "case-3",
          client: "IndustriAL Automation",
          segment: "Industrial Equipment",
          problem: "Sales team losing 20+ hours weekly qualifying unqualified leads.",
          solution: "WhatsApp AI Agent for automatic lead qualification connected directly to CRM.",
          tech: ["AI Agents", "Python", "WhatsApp API", "HubSpot CRM", "Power BI"],
          metrics: ["140h/month saved", "Response time reduced to 5s", "+80% lead satisfaction"],
          badge: "Intelligence + AI"
        }
      ]
    },
    mindset: {
      kicker: "CORE PRINCIPLES",
      heading: "Principles that drive our engineering.",
      sub: "We don't write code for aesthetics or run ads for vanity. Every project follows clear business engineering principles.",
      cards: [
        {
          title: "Business First",
          desc: "First we understand your business model, margins, and sales bottlenecks. Then we engineer the tech.",
          icon: "briefcase"
        },
        {
          title: "Built to Perform",
          desc: "Speed, security, and conversion rates are architected into the product from day one.",
          icon: "zap"
        },
        {
          title: "AI Native",
          desc: "We deploy artificial intelligence and autonomous agents where real productivity and margin gains exist.",
          icon: "cpu"
        },
        {
          title: "Data Driven",
          desc: "All media adjustments, decisions, and system updates are grounded in real business data.",
          icon: "line-chart"
        }
      ]
    },
    insights: {
      kicker: "INTELLIGENCE & ARTICLES",
      heading: "Actionable intelligence for growing companies.",
      sub: "Strategic articles on growth engineering, paid media, AI automation, and data systems.",
      articles: [
        {
          category: "Growth Engineering",
          title: "Why Separating Marketing from Tech is Ruining Your CAC & ROI",
          excerpt: "Learn why companies integrating tracking, instant web apps, and performance media scale 3x faster.",
          readTime: "5 min read",
          date: "August 2026"
        },
        {
          category: "Artificial Intelligence",
          title: "AI Agents Beyond Chatbots: Automating Complex Sales & Support Operations",
          excerpt: "Practical case studies of companies replacing slow forms with autonomous CRM agents.",
          readTime: "7 min read",
          date: "August 2026"
        },
        {
          category: "High Performance Web",
          title: "The Math of Speed: How 1 Second Faster Load Time Doubles Conversions",
          excerpt: "Technical breakdown of React/Next architectures and why slow website builders drive clients away.",
          readTime: "4 min read",
          date: "July 2026"
        }
      ]
    },
    ctaFinal: {
      kicker: "STRATEGIC DIAGNOSTIC",
      heading: "What is your company's biggest growth bottleneck?",
      sub: "Select your main operational or commercial challenge today. We'll analyze your structure and engineer the ideal solution.",
      bottlenecks: [
        { id: "aquisicao", title: "Acquisition", desc: "I need to generate more qualified leads and top-of-funnel opportunities." },
        { id: "conversao", title: "Conversion", desc: "I have traffic, but my website/landing page isn't converting visitors into clients." },
        { id: "tecnologia", title: "Technology", desc: "I need custom software, an internal system, or a mobile app built." },
        { id: "processos", title: "Processes", desc: "My team is losing hours in spreadsheets and slow manual tasks." },
        { id: "automacao", title: "Automation / AI", desc: "I want to implement AI agents and automated sales workflows." },
        { id: "dados", title: "Data & Analytics", desc: "I lack clear visibility into metrics, CAC, LTV, and return on investment." }
      ],
      form: {
        title: "Request Strategic Growth Diagnostic",
        name: "Your name",
        namePlaceholder: "e.g., Rodrigo Canavese",
        company: "Company name",
        companyPlaceholder: "e.g., Vezzitech Corp",
        email: "Work email",
        emailPlaceholder: "rodrigo@yourcompany.com",
        phone: "WhatsApp / Phone",
        phonePlaceholder: "+1 (555) 019-2831",
        website: "Company website (optional)",
        websitePlaceholder: "https://yourcompany.com",
        bottleneckLabel: "Selected Bottleneck",
        submitButton: "Request Strategic Diagnostic",
        whatsappAlt: "Or if you prefer, speak directly with a specialist on WhatsApp",
        successMessage: "Diagnostic requested! Our team will reach out in under 2 hours."
      }
    },
    pages: {
      engineering: {
        heroTitle: "Growth Engineering.",
        heroSub: "An approach connecting strategy, technology, marketing, automation, and data to build faster, scalable companies.",
        sectionTitle: "Growth is not an ad campaign. It's a system.",
        sectionCopy: "A business grows when different components work in perfect harmony: acquisition, conversion, sales tech, data analytics, and operational workflows.",
        systemElements: ["Traffic Acquisition", "Web Conversion", "Systems & APIs", "AI Automation", "Data & Analytics", "ROI Optimization"],
        cta: "Diagnose my operation →"
      },
      growth: {
        heroTitle: "More than traffic.",
        heroHighlight: "We build acquisition.",
        heroSub: "We create performance operations focused on demand generation, conversion, and sustainable scale.",
        flow: [
          { step: "Traffic", desc: "Google & Meta Ads targeted at high-intent decision makers." },
          { step: "Conversion", desc: "Instant React/Next landing pages engineered to convert." },
          { step: "CRM & Sales", desc: "Automatic lead routing directly into your sales pipeline." },
          { step: "Data & Optimization", desc: "Clear CAC & ROI dashboards for continuous budget scaling." }
        ],
        cta: "Accelerate acquisition →"
      },
      experience: {
        heroTitle: "Your website shouldn't just exist.",
        heroHighlight: "It should work for your business.",
        heroSub: "We create high-speed, modern websites and applications designed to convert.",
        comparison: {
          traditional: [
            "Slow loading times (WordPress / bloated builders)",
            "Hard to scale and rigid legacy code",
            "Zero native integration with sales pipelines",
            "Generic templates damaging brand trust"
          ],
          vezzitech: [
            "Ultra-high performance React/Next.js with instant response",
            "Custom architecture built for unlimited scale",
            "Native connections with CRM, APIs, and AI Agents",
            "World-class UI/UX with proven high conversion rates"
          ]
        },
        cta: "Modernize my site →"
      },
      technology: {
        heroTitle: "Custom technology for your operation.",
        heroSub: "When off-the-shelf software falls short, we build the perfect custom solution.",
        cta: "Discuss my project →"
      },
      intelligence: {
        heroTitle: "Artificial Intelligence applied to business.",
        heroSub: "Fewer manual tasks. More speed, efficiency, and operational intelligence for your team.",
        cta: "Find automation opportunities →"
      },
      about: {
        heroTitle: "We build technology to drive impact.",
        copyParagraphs: [
          "Vezzitech was founded on the belief that marketing, technology, and data should never exist in silos.",
          "Companies grow faster when strategy, acquisition, software, automation, and AI operate in a single ecosystem.",
          "Our mission is to eliminate commercial and operational bottlenecks through Growth Engineering."
        ],
        pillars: [
          { title: "Business First", desc: "Technology serving real financial metrics." },
          { title: "Total Transparency", desc: "Clean code, clear docs, and zero lock-in." },
          { title: "World-Class Engineering", desc: "Global standards for code, speed, and security." }
        ],
        manifesto: [
          "We don't build tech just to work. We build to drive impact.",
          "We don't run marketing just to show up. We run it to grow.",
          "Growth doesn't happen by chance. Growth is engineered."
        ]
      }
    },
    footer: {
      descriptor: "High-Performance Technology & Marketing",
      tagline: "We turn technology into growth.",
      solutionsTitle: "Ecosystem",
      companyTitle: "Company",
      contactTitle: "Direct Contact",
      phone: "+55 (44) 99826-6950",
      email: "contato@vezzitech.com",
      rights: "© {year} Vezzitech. All rights reserved. Growth Engineering.",
      description: "We connect strategy, paid traffic, custom software development, automation, and AI to eliminate bottlenecks and accelerate business growth.",
      securityBadge: "Enterprise Architecture & Compliance Ready",
      navTitle: "Navigation",
      servicesTitle: "Solutions",
      location: "Global Service • HQ in Maringá/PR - Brazil"
    }
  }
};
