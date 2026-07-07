export interface TranslationSchema {
  nav: {
    services: string;
    ecosystem: string;
    plans: string;
    method: string;
    blog: string;
    cta: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
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
      services: "Nossos Pilares",
      ecosystem: "Ecossistema",
      plans: "Planos de Assinatura",
      method: "Simulação de ROI",
      blog: "Artigos & Insights",
      cta: "Falar com Especialista"
    },
    hero: {
      badge: "Assinatura de crescimento unificada (Site Premium + Conteúdo + Google Ads)",
      headline: "Seu site premium, conteúdo e Google Ads em uma assinatura de elite.",
      subheadline: "Desenvolvimento nativo de alta velocidade, produção de conteúdo estratégico e gestão inteligente de tráfego pago. Tudo unificado em uma assinatura mensal recorrente de alta performance.",
      ctaPrimary: "Ver Planos de Assinatura",
      ctaSecondary: "Simular ROI de Vendas",
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
      "ASSINATURA DE CRESCIMENTO PREVISÍVEL",
      "SITE PREMIUM COM CÓDIGO NATIVO",
      "PRODUÇÃO RECORRENTE DE CONTEÚDO",
      "OTIMIZAÇÃO DE GOOGLE ADS SEMANAL",
      "MÁXIMO POSICIONAMENTO EM SEO & AEO",
      "SEM CONTRATOS OU MULTAS RESCISÓRIAS",
      "TRÁFEGO QUALIFICADO DE ALTA INTENÇÃO",
      "SUA OPERAÇÃO TOTALMENTE DESCOMPLICADA"
    ],
    valueProp: {
      tag: "DIFERENCIAÇÃO ESTRATÉGICA",
      heading: "Por que uma assinatura de crescimento é infinitamente superior?",
      items: [
        {
          num: "01",
          title: "Fim do estresse com múltiplos fornecedores",
          desc: "Esqueça a dor de gerenciar agências lentas ou freelancers. Com a Vezzitech, você tem desenvolvimento de alto nível, redação e tráfego pago integrados de verdade."
        },
        {
          num: "02",
          title: "Site e Landing Pages inclusos",
          desc: "Não cobramos taxas de setup para criar seu site. O desenvolvimento de código premium extremamente rápido e as atualizações de layout já estão inclusos."
        },
        {
          num: "03",
          title: "Tração imediata focada em caixa",
          desc: "Entregamos velocidade. Ativamos campanhas cirúrgicas de Google Ads em até 7 dias, focadas em atrair leads qualificados prontos para comprar."
        },
        {
          num: "04",
          title: "Posicionamento orgânico de longo prazo",
          desc: "Construímos a autoridade técnica da sua marca na internet para que ela seja encontrada no Google orgânico e citada em assistentes de Inteligência Artificial."
        }
      ]
    },
    servicesSection: {
      tag: "NOSSOS PILARES",
      heading: "Três competências de elite. Uma única assinatura.",
      items: [
        {
          num: "01",
          title: "Desenvolvimento Web de Alta Conversão",
          desc: "Landing pages e websites nativos desenvolvidos com código limpo de extrema velocidade (100/100 no Google Core Web Vitals) para máxima conversão."
        },
        {
          num: "02",
          title: "Produção de Conteúdo Técnico de Elite",
          desc: "Redação de artigos para blog focados em SEO, copywriting persuasivo para suas páginas de vendas e criativos visuais para anúncios."
        },
        {
          num: "03",
          title: "SEO & AEO Preditivo de Marca",
          desc: "Posicionamento estratégico no Google e otimização avançada de conteúdo para ser citado por inteligências artificiais como ChatGPT e Gemini."
        },
        {
          num: "04",
          title: "Gestão e Refino Semanal de Anúncios",
          desc: "Criação, configuração profissional e otimização contínua de campanhas de Google Ads para extrair leads qualificados com o menor custo."
        }
      ]
    },
    verticalsSection: {
      tag: "SOLUÇÕES PERSONALIZADAS",
      heading: "Estratégia sob medida para dominar o seu setor.",
      sub: "Adaptamos nossa assinatura de crescimento com foco nas necessidades específicas de atração e conversão da sua indústria.",
      items: [
        {
          id: "varejo",
          title: "Varejo & E-commerce",
          desc: "Lojas virtuais ultra rápidas que aumentam conversões de carrinho, aliadas a tráfego contínuo focado em atrair compradores reais."
        },
        {
          id: "saude",
          title: "Saúde, Médicos & Clínicas",
          desc: "Landing pages de alta credibilidade, SEO local estratégico e campanhas de anúncios focadas na atração de pacientes particulares."
        },
        {
          id: "industria",
          title: "B2B & Indústrias",
          desc: "Portais institucionais robustos, redação de artigos técnicos de profunda relevância e anúncios direcionados a tomadores de decisão."
        },
        {
          id: "financas",
          title: "Serviços & Fintechs",
          desc: "Sites corporativos blindados de alta performance, copywriting impecável de altíssima autoridade e funis focados em confiança."
        },
        {
          id: "educacao",
          title: "Educação & Infoprodutos",
          desc: "Funis de vendas agressivos com páginas de carregamento instantâneo, redação persuasiva e criativos de tráfego dinâmico para escala rápida."
        },
        {
          id: "agro",
          title: "Agronegócio",
          desc: "Criação de identidade visual imponente, presença digital premium e portais seguros para conectar sua marca com parceiros globais."
        }
      ]
    },
    processSection: {
      tag: "CRONOGRAMA DE IMPACTO",
      heading: "Seu funil completo ativo em até 7 dias úteis.",
      items: [
        {
          num: "01",
          title: "Alinhamento Estratégico Rápido",
          desc: "Reunião de 15 minutos via Google Meet para mapear o público-alvo, suas metas de vendas e alinhar a linha editorial."
        },
        {
          num: "02",
          title: "Desenvolvimento do Site Premium",
          desc: "Codificamos sua nova landing page ou site nativo com velocidade extrema. Nada de templates pré-fabricados lentos ou bugs."
        },
        {
          num: "03",
          title: "Produção de Criativos, Copy e Ads",
          desc: "Escrevemos artigos ricos de SEO, criamos designs de anúncios de alta conversão e estruturamos suas campanhas no Google Ads."
        },
        {
          num: "04",
          title: "Lançamento e Otimização Semanal",
          desc: "Colocamos o funil para rodar. Fazemos melhorias semanais nos anúncios, refinamentos de SEO e atualizações de layout sob demanda."
        }
      ]
    },
    metricsSection: {
      tag: "PROVA DE RESULTADO",
      heading: "Métricas reais que geram faturamento, não vaidade.",
      sub: "Não acreditamos em curtidas ou teorias acadêmicas. Nosso time de especialistas trabalha com métricas que realmente impactam o caixa da sua empresa: tráfego qualificado de alta intenção, conversão eficiente de leads e velocidade extrema de site.",
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
          q: "Como funciona o modelo de assinatura de crescimento?",
          a: "Diferente de agências tradicionais que cobram taxas absurdas de setup e demoram meses para entregar, nós unificamos desenvolvimento de site premium, produção contínua de conteúdo e gestão de Google Ads em uma taxa mensal previsível. Sem multas ou amarras contratuais."
        },
        {
          q: "O site realmente está incluso na assinatura?",
          a: "Sim, 100%! Nós desenvolvemos o seu site premium ou landing page proprietária do absoluto zero com código limpo e extremamente rápido (100/100 Mobile). Toda a hospedagem na nuvem, manutenção semanal e melhorias de layout necessárias já estão incluídas na sua mensalidade."
        },
        {
          q: "Como é gerenciada a verba de Google Ads?",
          a: "A verba de anúncios é paga por você diretamente à plataforma do Google de acordo com o seu orçamento disponível. Nossa assinatura cobre todo o trabalho de pesquisa de palavras-chave, criação dos anúncios persuasivos, design de criativos e otimização semanal das campanhas para maximizar seu ROI."
        },
        {
          q: "Como posso pausar ou cancelar a assinatura?",
          a: "Totalmente livre. Nós confiamos na qualidade do nosso trabalho técnico. Se o seu momento de negócios mudar, você pode pausar ou cancelar sua assinatura mensal a qualquer momento, sem nenhum tipo de multa ou período de carência compulsória."
        }
      ]
    },
    schedulingSection: {
      tag: "CONSULTORIA DE ELITE",
      heading: "Agende um diagnóstico estratégico gratuito de 30 min.",
      sub: "Crie o plano de crescimento digital ideal para o seu negócio. Nessa reunião estratégica via Google Meet, analisaremos o desempenho técnico do seu site atual, oportunidades de palavras-chave no Google Ads e táticas de SEO/AEO de conversão.",
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
        submit: "Garantir Meu Agendamento Gratuito"
      }
    },
    pricingSection: {
      tag: "PLANOS DE CRESCIMENTO PREVISÍVEIS",
      heading: "Simplifique sua operação com um único parceiro de elite.",
      sub: "Desenvolvimento contínuo de sites, produção mensal de conteúdo técnico e gestão especializada de anúncios integrados em uma única assinatura mensal recorrente. Sem taxas surpresas de setup.",
      plans: [
        {
          id: "essential",
          name: "Essential Growth",
          price: "R$ 1.990",
          period: "/mês",
          desc: "Ideal para empresas que precisam estabelecer presença digital imponente com site ultra veloz e otimizado para o Google.",
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
          desc: "O plano mais completo para empresas que querem tracionar vendas com Google Ads e dominar o tráfego de busca.",
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
          desc: "Ideal para líderes de mercado que exigem escala agressiva de tráfego, múltiplos sites e funis complexos.",
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
      desc: "Assinatura unificada especializada em desenvolvimento de sites premium, produção recorrente de conteúdos de elite, gestão de tráfego em Google Ads e otimização avançada de SEO/AEO. Acelere suas vendas sem amarras.",
      navTitle: "Navegação",
      specTitle: "Especialidades",
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
      heading: "Pronto para tracionar suas vendas com a Assinatura de Crescimento?",
      sub: "Lançamos seu funil integrado de site premium, conteúdo técnico e campanhas de Google Ads em até 7 dias úteis. Sem taxas extras de setup.",
      cta: "Falar com Estrategista"
    }
  },
  en: {
    nav: {
      services: "Services",
      ecosystem: "Ecosystem",
      plans: "Subscription Plans",
      method: "Methodology & ROI",
      blog: "Blog",
      cta: "Talk to Expert"
    },
    hero: {
      badge: "ELITE TECH & DIGITAL MARKETING US",
      headline: "Accelerated growth powered by Artificial Intelligence.",
      subheadline: "We combine high-conversion website development, advanced search engine optimization (SEO/AEO), high-performing marketing materials, and autonomous AI agents to drive sales and modernize your IT.",
      ctaPrimary: "Start Now",
      ctaSecondary: "View Ecosystem",
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
          title: "Certified Systems & IT Engineering",
          desc: "We build ultra-fast, robust, secure websites and portals. Clean code, native technical SEO, fast load times, and reliable cloud-hosting are standard."
        },
        {
          num: "02",
          title: "Search Engine & AI Dominance (SEO/AEO)",
          desc: "We optimize your business not only for traditional Google search, but for generative answer engines (ChatGPT, Gemini, Perplexity), capturing modern high-intent search traffic."
        },
        {
          num: "03",
          title: "Impact Visuals & Copywriting",
          desc: "High-end promo assets, social posts, and ad creatives compiled at scale with breathtaking visual aesthetics and high conversion copy."
        },
        {
          num: "04",
          title: "AI Chatbots & Conversions",
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
        },
        {
          num: "04",
          title: "Google Ads Management",
          desc: "Professional setup, structuring, and weekly optimization of paid media campaigns directly aimed at capturing highly-qualified sales leads."
        }
      ]
    },
    verticalsSection: {
      tag: "FOR YOUR BUSINESS",
      heading: "Tailored Marketing & Tech for your sector.",
      sub: "We implement advanced marketing and smart IT services to streamline your operations, foster engagement, and steadily scale your market presence.",
      items: [
        {
          id: "varejo",
          title: "Retail & E-commerce",
          desc: "Lightning-fast online storefronts, advanced product page SEO, and automated marketing campaigns to capture buyer interest and scale sales."
        },
        {
          id: "saude",
          title: "Healthcare & Clinics",
          desc: "State-of-the-art medical websites, strategic local SEO, and continuous patient booking aided by conversational AI schedulers."
        },
        {
          id: "industria",
          title: "B2B & Manufacturing",
          desc: "Robust corporate portals, targeted B2B organic traffic campaigns, and high-impact digital brochures catering to key decision-makers."
        },
        {
          id: "financas",
          title: "Services & Fintechs",
          desc: "Elite corporate materials, hyper-secure web platforms, and specialized enterprise SEO mapping to build authority and trust."
        },
        {
          id: "educacao",
          title: "Education & Courses",
          desc: "High-converting sales pages, engaging marketing assets, persuasive copywriting, and AI tutors to answer pupil inquiries 24/7."
        },
        {
          id: "agro",
          title: "Agribusiness",
          desc: "Bespoke corporate identity, global outreach platforms for exporters, and digital strategies establishing industry leadership."
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
      desc: "An agency specializing in crafting high-conversion web development, advanced SEO/AEO strategies, conversion-focused marketing materials, and autonomous AI-driven customer-experience agents. Scale your leads and modernize your IT.",
      navTitle: "Navigation",
      specTitle: "Expertise",
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
